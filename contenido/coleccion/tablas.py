from sqlite3 import Connection as Conn, Cursor
from contenido.tablas.registros import Tabla, TablasColeccion as Tablas, TablasGenerales, TablasReferencias
from typing import Dict, List, Any

class TablaAjedrez(Tabla):
    nombre = Tablas.AJEDREZ

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                tipo TEXT NOT NULL,
                inicio TEXT NOT NULL,
                movimientos TEXT NOT NULL
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, nombre: str, tipo: str, inicio: str, movimientos: List[str]) -> None: 
        movimientos_conjunto = ";".join(movimientos)
        cls._insertar(cursor, {
            "nombre": nombre,
            "tipo": tipo,
            "inicio": inicio,
            "movimientos": movimientos_conjunto
        })

class TablaEjercicio(Tabla):
    nombre = Tablas.EJERCICIOS

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                id_enunciado INTEGER NOT NULL REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_resolucion INTEGER NOT NULL REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_resultado INTEGER REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, id_enunciado: int, id_resolucion: int, id_resultado: int | None) -> int | None: 
        return cls._insertar(cursor, {
            "id_enunciado": id_enunciado,
            "id_resolucion": id_resolucion,
            "id_resultado": id_resultado,
        })

class TablaGuia(Tabla):
    nombre = Tablas.GUIAS

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, nombre: str) -> int | None: 
        return cls._insertar(cursor, {
            "nombre": nombre,
        })

class TablaEjerciciosGuia(Tabla):
    nombre = Tablas.GUIA_EJERCICIOS

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id_guia INTEGER REFERENCES {Tablas.GUIAS}(id),
                id_ejercicio INTEGER REFERENCES {Tablas.EJERCICIOS}(id)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, id_guia: int, id_ejercicio: int) -> None: 
        cls._insertar(cursor, {
            "id_guia": id_guia,
            "id_ejercicio": id_ejercicio,
        })

class TablaLibro(Tabla):
    nombre = Tablas.LIBRO

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                etapa TEXT NOT NULL,
                
                id_resumen INTEGER REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_libro_referencia INTEGER NOT NULL REFERENCES {TablasReferencias.LIBRO}(num_referencia)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, etapa: str, id_resumen: int | None, id_ref_libro) -> int | None: 
        valores: Dict[str, Any] = {
            "etapa": etapa,
            "id_libro_referencia": id_ref_libro,
        }
        if id_resumen: valores["id_resumen"] = id_resumen
        return cls._insertar(cursor, valores)

class TablaCapitulo(Tabla):
    nombre = Tablas.CAPITULO

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                etapa TEXT NOT NULL,
                
                id_resumen INTEGER REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_libro INTEGER NOT NULL REFERENCES {Tablas.LIBRO}(id),
                id_capitulo_referencia INTEGER NOT NULL REFERENCES {TablasReferencias.LIBRO}(num_referencia)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, etapa: str, id_resumen: int | None, id_libro: int, id_ref_capitulo: int) -> int | None: 
        valores: Dict[str, Any] = {
            "etapa": etapa,
            "id_libro": id_libro,
            "id_capitulo_referencia": id_ref_capitulo,
        }
        if id_resumen: valores["id_resumen"] = id_resumen
        return cls._insertar(cursor, valores)

class TablaDiccionario(Tabla):
    nombre = Tablas.DICCIONARIO

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                
                id_definicion INTEGER REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_diccionario_referencia INTEGER NOT NULL REFERENCES {TablasReferencias.DICCIONARIO}(num_referencia)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, id_definicion: int, id_ref_diccionario: int) -> int | None: 
        return cls._insertar(cursor, {
            "id_definicion": id_definicion,
            "id_diccionario_referencia": id_ref_diccionario,
        })
