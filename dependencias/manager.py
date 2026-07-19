import sqlite3 as sql
from typing import Dict, Iterable, List, Tuple

from logger import loggear, LoggerNivel

from .clave import Clave
from .nodo import Nodo
from .datos import Dato

TABLA_IDENTIFICADORES = "Identificadores"
TABLA_CADENA_DEPENDENCIAS = "CadenaDependencias"

class ManagerDependencias:
    dependencias: sql.Connection
    datos: Dict[Clave, Dato]

    def __init__(self) -> None:
        self.dependencias = sql.connect(":memory:")
        self.datos = {}

        self.dependencias.executescript(f"""
            CREATE TABLE IF NOT EXISTS {TABLA_IDENTIFICADORES} (
                hash INTEGER NOT NULL,
                tipo INTEGER NOT NULL,
                id INTEGER NOT NULL
            );

            CREATE TABLE IF NOT EXISTS {TABLA_CADENA_DEPENDENCIAS} (
                tipo INTEGER NOT NULL,
                hash INTEGER NOT NULL,
                tipo_dependencia INTEGER NOT NULL,
                hash_dependencia INTEGER NOT NULL,
                done INTEGER NOT NULL CHECK (done IN (0, 1))
            );

            CREATE INDEX index_identificadores 
                ON {TABLA_IDENTIFICADORES} (hash, tipo);

            CREATE INDEX index_cadena 
                ON {TABLA_CADENA_DEPENDENCIAS} (hash, tipo);
        """)

    def insertar_nodos(self, cursor_datos: sql.Cursor, datos: Iterable[Dato]):
        cursor = self.dependencias.cursor()
        for dato in datos:
            clave = dato.obtener_clave()
            if self.preexiste(cursor, clave):
                continue

            clave_dependencias = dato.dependo()
            if not self.cumple_dependencias(cursor, clave_dependencias):
                self.guardar_nodo(cursor, clave, dato, clave_dependencias)
                continue

            dependencias = self.obtener_depencencia(cursor, clave_dependencias)
            resultado = dato.insertar_datos(cursor_datos, dependencias)
            pendientes = self.actualizar_nodos(cursor, resultado)

            while len(pendientes) > 0:
                dato = pendientes.pop(0)
                clave_dependencias = dato.dependo()

                dependencias = self.obtener_depencencia(cursor, clave_dependencias)
                resultado = dato.insertar_datos(cursor_datos, dependencias)
                pendientes.extend(self.actualizar_nodos(cursor, resultado))

        self.dependencias.commit()
        cursor.close()

    def preexiste(self, cursor: sql.Cursor, clave: Clave) -> bool:
        try:
            cursor.execute(f"""
                SELECT id FROM {TABLA_IDENTIFICADORES}
                WHERE tipo = ? AND hash = ?
            """, (clave.tipo, clave.hash))
        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al buscar preexistente con la clave: {clave}")
            raise e

        return cursor.fetchone() is not None 

    def cumple_dependencias(self, cursor: sql.Cursor, claves: List[Clave]) -> bool:
        return all(( self.preexiste(cursor, clave) for clave in claves ))

    def guardar_nodo(self, cursor: sql.Cursor, clave: Clave, dato: Dato, clave_dependencias: List[Clave]) -> None:
        if clave in self.datos:
            loggear(LoggerNivel.ERROR, f"Ya existe la clave: {clave} en los datos del manager")

        self.datos[clave] = dato

        clave_filtrada = list(filter(lambda clave_dependencia: not self.preexiste(cursor, clave_dependencia), clave_dependencias))
        if len(clave_filtrada) == 0:
            mensaje = f"Al guardar {clave} -> {dato}\n\tSe vio que todos existen pero para llegar aca deberia haber alguno que no"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        # Iniciamos la tabla cadena de dependencias, y filtramos los que ya existen
        cursor.executemany(f"""
            INSERT INTO {TABLA_CADENA_DEPENDENCIAS}
            (tipo, hash, tipo_dependencia, hash_dependencia, done)
            VALUES ({", ".join(["?"] * 4)}, 0)
        """, (
            (clave.tipo, clave.hash, clave_dependencia.tipo, clave_dependencia.hash)
            for clave_dependencia in clave_filtrada
        ))

    def obtener_depencencia(self, cursor: sql.Cursor, claves: List[Clave]) -> Dict[Clave, int]:
        dependencias = {}

        for clave in claves:
            cursor.execute(f"""
                SELECT id FROM {TABLA_IDENTIFICADORES}
                WHERE tipo = ? AND hash = ?
            """, (clave.tipo, clave.hash))
            resultado = cursor.fetchone()

            if resultado is None:
                raise Exception(f"Imposible obtener dependencia para clave de tipo: {clave.tipo} y hash:{clave.hash}")
            dependencias[clave] = resultado[0]

        if len(claves) != len(dependencias.keys()):
            raise Exception(f"Se esperaba obtener {len(claves)} claves, pero se obtuvo menos")

        return dependencias

    def actualizar_nodos(self, cursor: sql.Cursor, nodo_insertado: Nodo | None) -> List[Dato]:
        if nodo_insertado is None or self.preexiste(cursor, nodo_insertado.clave):
            return []

        # Actualizamos lista de dependencias
        cursor.execute(f"""
            INSERT INTO {TABLA_IDENTIFICADORES}
            (tipo, hash, id) VALUES ({", ".join(["?"] * 3)})
        """, (nodo_insertado.clave.tipo, nodo_insertado.clave.hash, nodo_insertado.id))

        # Actualizamos la cadena de dependencias con lo nuevo agregado
        cursor.execute(f"""
            UPDATE {TABLA_CADENA_DEPENDENCIAS}
            SET done = 1
            WHERE tipo_dependencia = ? AND hash_dependencia = ? AND done = 0;
        """, ( nodo_insertado.clave.tipo, nodo_insertado.clave.hash ))

        # Obtenemos todas las claves que esten listas para insertarse
        cursor.execute(f"""
            SELECT tipo, hash
            FROM {TABLA_CADENA_DEPENDENCIAS}
            GROUP BY tipo, hash
            HAVING MIN(done) = 1;
        """)

        nodos_disponibles = []
        for clave in map(Clave.de_tupla, cursor.fetchall()):
            try:
                nodos_disponibles.append(( clave, self.datos.pop(clave) ))

            except Exception as e:
                loggear(LoggerNivel.FATAL, f"Al intentar insertar {clave} se vio que no existia")
                raise e

        # Eliminamos los datos completados
        cursor.executemany(f"""
            DELETE FROM {TABLA_CADENA_DEPENDENCIAS}
            WHERE tipo = ? AND hash = ?
        """, [
            (clave.tipo, clave.hash)
            for clave in map(lambda par: par[0], nodos_disponibles)
        ])

        return list(map(lambda par: par[1], nodos_disponibles))

    def close(self):
        if len(self.datos) > 0:
            cursor = self.dependencias.cursor()
            def imprimir_item_pendiente(clave: Clave, dato: Dato) -> str:
                cursor.execute(f"""
                    SELECT tipo_dependencia, hash_dependencia, done 
                    FROM {TABLA_CADENA_DEPENDENCIAS}
                    WHERE tipo = ? AND hash = ?
                """, (clave.tipo, clave.hash))
                def imprimir(item: Tuple[Clave, bool]):
                    se_cumple = "Ne cumple" if item[1] else "No se cumple"
                    return f"{se_cumple}: necesitaba {item[0]}"

                tabla_cadena = map(lambda item: (Clave(item[0], item[1]), item[2] == 1), cursor.fetchall())
                return f"Al {dato} le faltaban: {list(map(imprimir, tabla_cadena))}"

            items_pendientes = map(lambda item: imprimir_item_pendiente(*item), self.datos.items())
            loggear(LoggerNivel.WARN, f"Cerrando el manager, datos pendientes: \n\t{"\n\t".join(items_pendientes)}")
            cursor.close()

        else:
            loggear(LoggerNivel.DEBUG, "Cerrando el manager sin datos pendientes")

        self.dependencias.commit()
        self.dependencias.close()




