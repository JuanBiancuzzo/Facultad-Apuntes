from sqlite3 import Connection as Conn, Cursor
from typing import Dict, Any
from tablas import Tabla, registrar_tabla

from contenido.tablas import TablasGenerales as Tablas, TablasColeccion, TablasFacultad

@registrar_tabla
class TablaAutore(Tabla):
    nombre = Tablas.AUTORES
    necesito_tablas = []

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
        return cls._insertar(cursor, {
            "nombre": nombre,
            "apellido": apellido,
        })

@registrar_tabla
class TablaEmbedding(Tabla):
    nombre = Tablas.EMBEDDING
    necesito_tablas = [ Tablas.LINK ]

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                embedding BLOB NOT NULL,
                id_link INTEGER NOT NULL REFERENCES {Tablas.LINK}(id)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, embedding: bytes, id_link: int) -> None: 
        cls._insertar(cursor, {
            "embedding": embedding,
            "id_link": id_link,
        }) 

@registrar_tabla
class TablaBloqueTexto(Tabla):
    nombre = Tablas.BLOQUE_TEXTO
    necesito_tablas = []

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                texto BLOB NOT NULL
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, bjson: bytes) -> int | None: 
        return cls._insertar(cursor, {
            "texto": bjson,
        }) 

@registrar_tabla
class TablaEditorial(Tabla):
    nombre = Tablas.EDITORIAL
    necesito_tablas = []

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

@registrar_tabla
class TablaImagen(Tabla):
    nombre = Tablas.IMAGENES
    necesito_tablas = []

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
        return cls._insertar(cursor, {
            "tipo": tipo,
            "imagen": imagen,
        })

@registrar_tabla
class TablaLink(Tabla):
    nombre = Tablas.LINK
    necesito_tablas = [
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

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tabla TEXT NOT NULL,
                id_dato INTEGER NOT NULL,
                info BLOB
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, tabla: str, id_dato: int, info: bytes | None) -> int | None: 
        valores: Dict[str, Any] = {
            "tabla": tabla,
            "id_dato": id_dato,
        }
        if info: valores["info"] = info
        return cls._insertar(cursor, valores) 
