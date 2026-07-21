from sqlite3 import Connection as Conn, Cursor
from contenido.tablas import Tabla, TablasExtra as Tablas, TablasReferencias

class TablaBibliografia(Tabla):
    nombre = Tablas.BIBLIOGRAFIA

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
        cls._insertar(cursor, {
            "tipo": tipo,
            "id_dato": id_dato,
            "id_referencia": id_referencia,
        })
