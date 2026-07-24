from sqlite3 import Connection as Conn, Cursor
from tablas import Tabla, registrar_tabla

from contenido.tablas import TablasExtra as Tablas, TablasReferencias, TablasFacultad, TablasColeccion

@registrar_tabla
class TablaBibliografia(Tabla):
    nombre = Tablas.BIBLIOGRAFIA
    necesito_tablas = [ 
        TablasReferencias.REFERENCIAS,  

        TablasFacultad.MATERIAS,
        TablasFacultad.TEMA,

        # TablasColeccion.CURSO,
    ]

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

@registrar_tabla
class TablaGuias(Tabla):
    nombre = Tablas.GUIAS
    necesito_tablas = [ 
        TablasColeccion.GUIAS,  

        TablasFacultad.MATERIAS,
        TablasColeccion.CAPITULO,  
        # TablasColeccion.CURSO,
    ]

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
        cls._insertar(cursor, {
            "tipo": tipo,
            "id_dato": id_dato,
            "id_guia": id_guia,
        })

@registrar_tabla
class TablaEvaluaciones(Tabla):
    nombre = Tablas.EVALUACIONES
    necesito_tablas = [ 
        TablasColeccion.EVALUACION,  

        TablasFacultad.MATERIAS,
        # TablasColeccion.CURSO,
    ]

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
        cls._insertar(cursor, {
            "tipo": tipo,
            "id_dato": id_dato,
            "id_guia": id_guia,
        })
