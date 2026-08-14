import datetime as dt
from dataclasses import field
from sqlite3 import Connection as Conn
from sqlite3 import Cursor
from typing import Any

from contenido.tablas import TablasColeccion as Tablas
from contenido.tablas import TablasGenerales, TablasReferencias, timestamp
from tablas import Tabla, registrar_tabla


class TablaColeccion(Tabla):
    nombre = Tablas.COLECCION
    necesito_tablas = field(default_factory=[TablasGenerales.BLOQUE_TEXTO])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tipo TEXT NOT NULL,
                estado TEXT NOT NULL,

                id_descripcion INTEGER NOT NULL REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id)
            );
        """)

    @classmethod
    def insertar(
        cls, cursor: Cursor, tipo: str, estado: str, id_descripcion: int
    ) -> int | None:
        return cls._insertar(
            cursor,
            {
                "tipo": tipo,
                "estado": estado,
                "id_descripcion": id_descripcion,
            },
        )


@registrar_tabla
class TablaEjercicio(Tabla):
    nombre = Tablas.EJERCICIOS
    necesito_tablas = field(default_factory=[TablasGenerales.BLOQUE_TEXTO])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT,
                etapa TEXT NOT NULL,

                id_enunciado INTEGER NOT NULL REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_resolucion INTEGER NOT NULL REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_resultado INTEGER REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id)
            );
        """)

    @classmethod
    def insertar(
        cls,
        cursor: Cursor,
        nombre: str | None,
        etapa: str,
        id_enunciado: int,
        id_resolucion: int,
        id_resultado: int | None,
    ) -> int | None:
        valores: dict[str, Any] = {
            "etapa": etapa,
            "id_enunciado": id_enunciado,
            "id_resolucion": id_resolucion,
            "id_resultado": id_resultado,
        }
        if nombre:
            valores["nombre"] = nombre

        return cls._insertar(cursor, valores)


@registrar_tabla
class TablaGuia(Tabla):
    nombre = Tablas.GUIAS
    necesito_tablas = field(default_factory=[])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, nombre: str) -> int | None:
        return cls._insertar(
            cursor,
            {
                "nombre": nombre,
            },
        )


@registrar_tabla
class TablaEjerciciosGuia(Tabla):
    nombre = Tablas.GUIA_EJERCICIOS
    necesito_tablas = field(default_factory=[Tablas.GUIAS, Tablas.EJERCICIOS])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id_guia INTEGER REFERENCES {Tablas.GUIAS}(id),
                id_ejercicio INTEGER REFERENCES {Tablas.EJERCICIOS}(id)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, id_guia: int, id_ejercicio: int) -> None:
        cls._insertar(
            cursor,
            {
                "id_guia": id_guia,
                "id_ejercicio": id_ejercicio,
            },
        )


@registrar_tabla
class TablaEvaluacion(Tabla):
    nombre = Tablas.EVALUACION
    necesito_tablas = field(default_factory=[])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                fecha INTEGER NOT NULL
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, fecha: dt.date) -> int | None:
        return cls._insertar(
            cursor,
            {
                "fecha": timestamp(fecha),
            },
        )


@registrar_tabla
class TablaEjerciciosEvaluacion(Tabla):
    nombre = Tablas.EVALUACION_EJERCICIOS
    necesito_tablas = field(default_factory=[Tablas.EVALUACION, Tablas.EJERCICIOS])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id_evaluacion INTEGER REFERENCES {Tablas.EVALUACION}(id),
                id_ejercicio INTEGER REFERENCES {Tablas.EJERCICIOS}(id)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, id_evaluacion: int, id_ejercicio: int) -> None:
        cls._insertar(
            cursor,
            {
                "id_evaluacion": id_evaluacion,
                "id_ejercicio": id_ejercicio,
            },
        )


@registrar_tabla
class TablaLibro(Tabla):
    nombre = Tablas.LIBRO
    necesito_tablas = field(
        default_factory=[
            TablasGenerales.IMAGENES,
            TablasGenerales.BLOQUE_TEXTO,
            TablasReferencias.LIBRO,
        ]
    )

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                etapa TEXT NOT NULL,
                
                id_cover INTEGER REFERENCES {TablasGenerales.IMAGENES}(id),
                id_resumen INTEGER REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_libro_referencia INTEGER NOT NULL REFERENCES {TablasReferencias.LIBRO}(num_referencia)
            );
        """)

    @classmethod
    def insertar(
        cls,
        cursor: Cursor,
        etapa: str,
        id_resumen: int | None,
        id_cover: int | None,
        id_ref_libro: int,
    ) -> int | None:
        valores: dict[str, Any] = {
            "etapa": etapa,
            "id_libro_referencia": id_ref_libro,
        }
        if id_resumen:
            valores["id_resumen"] = id_resumen
        if id_cover:
            valores["id_cover"] = id_cover
        return cls._insertar(cursor, valores)


@registrar_tabla
class TablaCapitulo(Tabla):
    nombre = Tablas.CAPITULO
    necesito_tablas = field(
        default_factory=[
            Tablas.LIBRO,
            TablasGenerales.BLOQUE_TEXTO,
            TablasReferencias.CAPITULOS,
        ]
    )

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                etapa TEXT NOT NULL,
                
                id_resumen INTEGER REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_libro INTEGER NOT NULL REFERENCES {Tablas.LIBRO}(id),
                id_capitulo_referencia INTEGER NOT NULL REFERENCES {TablasReferencias.CAPITULOS}(num_referencia)
            );
        """)

    @classmethod
    def insertar(
        cls,
        cursor: Cursor,
        etapa: str,
        id_resumen: int | None,
        id_libro: int,
        id_ref_capitulo: int,
    ) -> int | None:
        valores: dict[str, Any] = {
            "etapa": etapa,
            "id_libro": id_libro,
            "id_capitulo_referencia": id_ref_capitulo,
        }
        if id_resumen:
            valores["id_resumen"] = id_resumen
        return cls._insertar(cursor, valores)


@registrar_tabla
class TablaPaper(Tabla):
    nombre = Tablas.PAPER
    necesito_tablas = field(
        default_factory=[
            TablasGenerales.BLOQUE_TEXTO,
            TablasReferencias.PAPER,
        ]
    )

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                etapa TEXT NOT NULL,
                
                id_resumen INTEGER REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_paper_referencia INTEGER NOT NULL REFERENCES {TablasReferencias.PAPER}(num_referencia)
            );
        """)

    @classmethod
    def insertar(
        cls, cursor: Cursor, etapa: str, id_resumen: int | None, id_ref_paper: int
    ) -> int | None:
        valores: dict[str, Any] = {
            "etapa": etapa,
            "id_paper_referencia": id_ref_paper,
        }
        if id_resumen:
            valores["id_resumen"] = id_resumen
        return cls._insertar(cursor, valores)


@registrar_tabla
class TablaDiccionario(Tabla):
    nombre = Tablas.DICCIONARIO
    necesito_tablas = field(
        default_factory=[
            TablasGenerales.BLOQUE_TEXTO,
            TablasReferencias.DICCIONARIO,
        ]
    )

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                
                id_definicion INTEGER REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_diccionario_referencia INTEGER NOT NULL REFERENCES {TablasReferencias.DICCIONARIO}(num_referencia)
            );
        """)

    @classmethod
    def insertar(
        cls, cursor: Cursor, id_definicion: int, id_ref_diccionario: int
    ) -> int | None:
        return cls._insertar(
            cursor,
            {
                "id_definicion": id_definicion,
                "id_diccionario_referencia": id_ref_diccionario,
            },
        )
