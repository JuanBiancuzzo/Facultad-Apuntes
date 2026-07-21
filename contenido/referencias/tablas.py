from sqlite3 import Connection as Conn, Cursor
from typing import Dict, Any
from contenido.tablas import Tabla, timestamp, TablasReferencias as Tablas, TablasGenerales
import datetime as dt

class TablaReferencia(Tabla):
    nombre = Tablas.REFERENCIAS

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                num_referencia INTEGER PRIMARY KEY AUTOINCREMENT,
                tipo TEXT NOT NULL,
                fecha_registrada INTEGER NOT NULL
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, tipo: str, fecha_registrado: dt.datetime) -> int | None: 
        return cls._insertar(cursor, {
            "tipo": tipo,
            "fecha_registrada": timestamp(fecha_registrado),
        })

class TablaWebsite(Tabla):
    nombre = Tablas.WEB

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre_articulo TEXT NOT NULL,
                nombre_pagina TEXT NOT NULL,
                fecha INTEGER DEFAULT NULL,
                url TEXT NOT NULL,

                num_referencia INTEGER NOT NULL REFERENCES {Tablas.REFERENCIAS}(num_referencia)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, nombre_articulo: str, nombre_pagina: str, fecha: dt.date | None, url: str, num_referencia: int) -> int | None:
        datos = {
            "nombre_articulo": nombre_articulo,
            "nombre_pagina": nombre_pagina,
            "url": url,
            "num_referencia": num_referencia
        }
        if fecha: datos["fecha"] = timestamp(fecha)
        return cls._insertar(cursor, datos)

class TablaWikipedia(Tabla):
    nombre = Tablas.WIKIPEDIA

    def crear(self, conn: Conn):
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                nombre_articulo TEXT NOT NULL,
                fecha INTEGER NOT NULL,
                url TEXT NOT NULL,

                num_referencia INTEGER NOT NULL REFERENCES {Tablas.REFERENCIAS}(num_referencia)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, nombre: str, fecha: dt.date, url: str, num_referencia: int) -> None:
        cls._insertar(cursor, {
            "nombre_articulo": nombre, 
            "fecha": timestamp(fecha), 
            "url": url, 
            "num_referencia": num_referencia,
        })

class TablaYoutube(Tabla):
    nombre = Tablas.YOUTUBE

    def crear(self, conn: Conn):
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                nombre_video TEXT NOT NULL,
                nombre_canal TEXT NOT NULL,
                fecha_video INTEGER NOT NULL,
                url TEXT NOT NULL,

                num_referencia INTEGER NOT NULL REFERENCES {Tablas.REFERENCIAS}(num_referencia)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, nombre_video: str, nombre_canal: str, fecha: dt.date, url: str, num_referencia: int) -> None:
        cls._insertar(cursor, {
            "nombre_video": nombre_video, 
            "nombre_canal": nombre_canal,
            "fecha_video": timestamp(fecha),
            "url": url,
            "num_referencia": num_referencia,
        })

class TablaLibro(Tabla):
    nombre = Tablas.LIBRO

    def crear(self, conn: Conn):
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT NOT NULL,
                subtitulo TEXT,
                anio INTEGER NOT NULL,

                edicion TEXT,
                volumen INTEGER,
                doi TEXT,
                
                id_editorial INTEGER REFERENCES {TablasGenerales.EDITORIAL}(id),
                num_referencia INTEGER NOT NULL REFERENCES {Tablas.REFERENCIAS}(num_referencia)
            );
        """)

    @classmethod
    def insertar(
        cls, cursor: Cursor, titulo: str, subtitulo: str | None, anio: int, edicion: str | None,
        volumen: int | None, doi: str | None, id_editorial: int, num_referencia: int,
    ) -> int | None:
        valores: Dict[str, Any] = {
            "titulo": titulo,
            "anio": anio,
            "id_editorial": id_editorial,
            "num_referencia": num_referencia,
        }
        if subtitulo: valores["subtitulo"] = subtitulo
        if edicion: valores["edicion"] = edicion
        if volumen: valores["volumen"] = volumen 
        if doi: valores["doi"] = doi
        return cls._insertar(cursor, valores)

class TablaCapitulo(Tabla):
    nombre = Tablas.CAPITULOS

    def crear(self, conn: Conn):
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                numero INTEGER NOT NULL,
                titulo TEXT,
                pagina_inicio INTEGER,
                pagina_final INTEGER,
                
                id_libro INTEGER NOT NULL REFERENCES {Tablas.LIBRO}(id),
                num_referencia INTEGER NOT NULL REFERENCES {Tablas.REFERENCIAS}(num_referencia),

                CHECK (
                    (pagina_inicio IS NOT NULL AND pagina_final IS NOT NULL) OR 
                    (pagina_inicio IS NULL AND pagina_final IS NULL) 
                )
            );
        """)

    @classmethod
    def insertar(
        cls, cursor: Cursor, numero: int, titulo: str | None, pagina_inicio: int | None,
        pagina_final: int | None, id_libro: int, num_referencia: int,
    ) -> int | None:
        valores: Dict[str, Any] = {
            "numero": numero,
            "id_libro": id_libro,
            "num_referencia": num_referencia,
        }
        if titulo: valores["titulo"] = titulo
        if pagina_inicio: valores["pagina_inicio"] = pagina_inicio
        if pagina_final: valores["pagina_final"] = pagina_final
        return cls._insertar(cursor, valores)

class TablaPaper(Tabla):
    nombre = Tablas.PAPER

    def crear(self, conn: Conn):
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT NOT NULL,
                anio INTEGER NOT NULL,
                doi TEXT,
                url TEXT,
                
                num_referencia INTEGER NOT NULL REFERENCES {Tablas.REFERENCIAS}(num_referencia),

                CHECK (
                    (doi IS NOT NULL OR url IS NOT NULL) 
                )
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, titulo: str, anio: int, doi: str | None, url: str | None, num_referencia: int) -> int | None:
        valores: Dict[str, Any] = {
            "titulo": titulo,
            "anio": anio,
            "num_referencia": num_referencia,
        }
        if doi: valores["doi"] = doi
        if url: valores["url"] = url
            
        return cls._insertar(cursor, valores)

class TablaDiccionario(Tabla):
    nombre = Tablas.DICCIONARIO

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                palabra TEXT NOT NULL,
                fecha INTEGER NOT NULL,
                diccionario TEXT NOT NULL,
                url TEXT NOT NULL,

                id_editorial INTEGER NOT NULL REFERENCES {TablasGenerales.EDITORIAL}(id),
                num_referencia INTEGER NOT NULL REFERENCES {Tablas.REFERENCIAS}(num_referencia)
            );
        """)

    @classmethod
    def insertar(
        cls, cursor: Cursor, palabra: str, fecha: dt.date, diccionario: str, 
        url: str, id_editorial: int, num_referencia: int,
    ) -> int | None:
        return cls._insertar(cursor, {
            "palabra": palabra,
            "fecha": timestamp(fecha),
            "diccionario": diccionario,
            "url": url,
            "id_editorial": id_editorial,
            "num_referencia": num_referencia,
        })

class TablaReferenciaAutore(Tabla):
    nombre = Tablas.AUTORES_REFERENCIAS

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                tipo TEXT NOT NULL,
                id_referencia INTEGER NOT NULL,
                id_autore INTEGER NOT NULL REFERENCES {TablasGenerales.AUTORES}(id)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, tipo: str, id_referencia: int, id_autore: int) -> None:
        cls._insertar(cursor, {
            "tipo": tipo,
            "id_referencia": id_referencia,
            "id_autore": id_autore,
        })

