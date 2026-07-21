from sqlite3 import Connection as Conn, Cursor
from contenido.tablas import Tabla, TablasGenerales as Tablas

class TablaAutore(Tabla):
    nombre = Tablas.AUTORES

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

class TablaBloqueTexto(Tabla):
    nombre = Tablas.BLOQUE_TEXTO

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

class TablaEditorial(Tabla):
    nombre = Tablas.EDITORIAL

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

class TablaImagen(Tabla):
    nombre = Tablas.IMAGENES

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
