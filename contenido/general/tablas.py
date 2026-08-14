from dataclasses import field
from sqlite3 import Connection as Conn
from sqlite3 import Cursor
from typing import Any

from contenido.tablas import (
    TablasColeccion,
    TablasFacultad,
    TablasReferencias,
)
from contenido.tablas import (
    TablasGenerales as Tablas,
)
from tablas import Tabla, registrar_tabla


@registrar_tabla
class TablaAutore(Tabla):
    nombre = Tablas.AUTORES
    necesito_tablas = field(default_factory=[])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                apellido TEXT NOT NULL
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, nombre: str, apellido: str) -> int | None:
        return cls._insertar(
            cursor,
            {
                "nombre": nombre,
                "apellido": apellido,
            },
        )


@registrar_tabla
class TablaEmbedding(Tabla):
    nombre = Tablas.EMBEDDING
    necesito_tablas = field(default_factory=[Tablas.LINK])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                embedding BLOB NOT NULL,
                id_link INTEGER NOT NULL REFERENCES {Tablas.LINK}(id)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, embedding: bytes, id_link: int) -> None:
        cls._insertar(
            cursor,
            {
                "embedding": embedding,
                "id_link": id_link,
            },
        )


@registrar_tabla
class TablaBloqueTexto(Tabla):
    nombre = Tablas.BLOQUE_TEXTO
    necesito_tablas = field(default_factory=[])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                texto BLOB NOT NULL
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, bjson: bytes) -> int | None:
        return cls._insertar(
            cursor,
            {
                "texto": bjson,
            },
        )


@registrar_tabla
class TablaEditorial(Tabla):
    nombre = Tablas.EDITORIAL
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
class TablaImagen(Tabla):
    nombre = Tablas.IMAGENES
    necesito_tablas = field(default_factory=[])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tipo TEXT NOT NULL,
                imagen BLOB NOT NULL
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, tipo: str, imagen: bytes) -> int | None:
        return cls._insertar(
            cursor,
            {
                "tipo": tipo,
                "imagen": imagen,
            },
        )


@registrar_tabla
class TablaLink(Tabla):
    nombre = Tablas.LINK
    necesito_tablas = field(
        default_factory=[
            TablasColeccion.COLECCION,
            TablasColeccion.AJEDREZ,
            TablasColeccion.DICCIONARIO,
            TablasColeccion.EJERCICIOS,
            TablasColeccion.LIBRO,
            TablasColeccion.CAPITULO,
            TablasColeccion.PAPER,
            # TablasColeccion.CURSO,
            TablasFacultad.CARRERAS,
            TablasFacultad.MATERIAS,
            TablasFacultad.TEMA,
        ]
    )

    # Ver si se puede hacer info BLOB sea un BLOB y un TEXT, asi tal vez usar la
    #   buscar texto en ese texto
    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tabla TEXT NOT NULL,
                id_dato INTEGER NOT NULL,
                dato_entero INTEGER NOT NULL CHECK (dato_entero IN (0, 1)),
                dirty INTEGER NOT NULL CHECK (dirty IN (0, 1)),
                info BLOB,

                CHECK (
                    (dato_entero = 1 AND LENGTH(info) = 0) OR
                    (dato_entero = 0 AND LENGTH(info) > 0)
                )
            );
        """)

    @classmethod
    def insertar(
        cls, cursor: Cursor, tabla: str, id_dato: int, info: bytes | None
    ) -> int | None:
        valores: dict[str, Any] = {
            "tabla": tabla,
            "id_dato": id_dato,
            "dato_entero": 1,
            "dirty": 0,
        }

        if info is not None:
            valores["info"] = info
            valores["dato_entero"] = 0

        return cls._insertar(cursor, valores)


@registrar_tabla
class TablaRelaciones(Tabla):
    nombre = Tablas.RELACIONES
    necesito_tablas = field(default_factory=[Tablas.LINK])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id_dato INTEGER NOT NULL REFERENCES {Tablas.LINK}(id),
                id_ralacionado INTEGER NOT NULL REFERENCES {Tablas.LINK}(id)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, id_dato: int, id_relacionado: int) -> None:
        cls._insertar(
            cursor,
            {
                "id_dato": id_dato,
                "id_relacionado": id_relacionado,
            },
        )


@registrar_tabla
class TablaBibliografia(Tabla):
    nombre = Tablas.BIBLIOGRAFIA
    necesito_tablas = field(
        default_factory=[
            TablasReferencias.REFERENCIAS,
            TablasFacultad.MATERIAS,
            TablasFacultad.TEMA,
            # TablasColeccion.CURSO,
        ]
    )

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                tipo TEXT NOT NULL,
                id_dato INTEGER NOT NULL,
                id_referencia INTEGER NOT NULL REFERENCES {TablasReferencias.REFERENCIAS}(num_referencia)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, tipo: str, id_dato: int, id_referencia) -> None:
        cls._insertar(
            cursor,
            {
                "tipo": tipo,
                "id_dato": id_dato,
                "id_referencia": id_referencia,
            },
        )


@registrar_tabla
class TablaGuias(Tabla):
    nombre = Tablas.GUIAS
    necesito_tablas = field(
        default_factory=[
            TablasColeccion.GUIAS,
            TablasFacultad.MATERIAS,
            TablasColeccion.CAPITULO,
            # TablasColeccion.CURSO,
        ]
    )

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                tipo TEXT NOT NULL,
                id_dato INTEGER NOT NULL,
                id_guia INTEGER NOT NULL REFERENCES {TablasColeccion.GUIAS}(id)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, tipo: str, id_dato: int, id_guia: int) -> None:
        cls._insertar(
            cursor,
            {
                "tipo": tipo,
                "id_dato": id_dato,
                "id_guia": id_guia,
            },
        )


@registrar_tabla
class TablaEvaluaciones(Tabla):
    nombre = Tablas.EVALUACIONES
    necesito_tablas = field(
        default_factory=[
            TablasColeccion.EVALUACION,
            TablasFacultad.MATERIAS,
            # TablasColeccion.CURSO,
        ]
    )

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                tipo TEXT NOT NULL,
                id_dato INTEGER NOT NULL,
                id_guia INTEGER NOT NULL REFERENCES {TablasColeccion.GUIAS}(id)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, tipo: str, id_dato: int, id_guia: int) -> None:
        cls._insertar(
            cursor,
            {
                "tipo": tipo,
                "id_dato": id_dato,
                "id_guia": id_guia,
            },
        )
