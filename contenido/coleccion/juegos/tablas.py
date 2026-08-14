import datetime as dt
from dataclasses import field
from sqlite3 import Connection as Conn
from sqlite3 import Cursor

from contenido.tablas import TablasColeccion as Tablas
from contenido.tablas import timestamp
from tablas import Tabla, registrar_tabla


@registrar_tabla
class Jugador(Tabla):
    nombre = Tablas.JUGADOR
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
        return cls._insertar(cursor, {"nombre": nombre})


@registrar_tabla
class PartidaAjedrez(Tabla):
    nombre = Tablas.PARTIDA_AJEDREZ
    necesito_tablas = field(default_factory=[])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                inicio TEXT NOT NULL,
                juega_blancas INTEGER NOT NULL CHECK (juega_blancas IN (0, 1))
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, inicio: str, juega_blancas: bool) -> int | None:
        return cls._insertar(
            cursor,
            {
                "inicio": inicio,
                "juega_blancas": 1 if juega_blancas else 0,
            },
        )


@registrar_tabla
class EstadisticaAjedrez(Tabla):
    nombre = Tablas.ESTADISTICA_PARTIDA_AJEDREZ
    necesito_tablas = field(default_factory=[Tablas.JUGADOR, Tablas.PARTIDA_AJEDREZ])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                gana_blancas INTEGER NOT NULL CHECK (gana_blancas IN (0, 1)),
                fecha INTEGER NOT NULL,
                id_jugador_blancas INTEGER NOT NULL REFERENCES {Tablas.JUGADOR}(id),
                elo_blancas INTEGER NOT NULL,
                id_jugador_negras INTEGER NOT NULL REFERENCES {Tablas.JUGADOR}(id),
                elo_negras INTEGER NOT NULL,

                id_partida INTEGER NOT NULL REFERENCES {Tablas.PARTIDA_AJEDREZ}(id)
            );
        """)

    @classmethod
    def insertar(
        cls,
        cursor: Cursor,
        gana_blancas: bool,
        fecha: dt.date,
        id_blancas: int,
        elo_blancas: int,
        id_negras: int,
        elo_negras: int,
        id_partida: int,
    ) -> int | None:
        return cls._insertar(
            cursor,
            {
                "gana_blancas": 1 if gana_blancas else 0,
                "fecha": timestamp(fecha),
                "id_jugador_blancas": id_blancas,
                "elo_blancas": elo_blancas,
                "id_jugador_negras": id_negras,
                "elo_negras": elo_negras,
                "id_partida": id_partida,
            },
        )


@registrar_tabla
class TeoriaAjedrez(Tabla):
    nombre = Tablas.TEORIA_AJEDREZ
    necesito_tablas = field(default_factory=[Tablas.PARTIDA_AJEDREZ])

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                tipo TEXT NOT NULL,

                id_partida INTEGER NOT NULL REFERENCES {Tablas.PARTIDA_AJEDREZ}(id)
            );
        """)

    @classmethod
    def insertar(
        cls, cursor: Cursor, nombre: str, tipo: str, id_partida: int
    ) -> int | None:
        return cls._insertar(
            cursor,
            {
                "nombre": nombre,
                "tipo": tipo,
                "id_partida": id_partida,
            },
        )
