from sqlite3 import Connection as Conn, Cursor
from tablas import Tabla, registrar_tabla
from typing import Dict, Any

from contenido.tablas import TablasFacultad as Tablas, TablasColeccion, TablasGenerales, TablasGenerales

@registrar_tabla
class TablaCarrera(Tabla):
    nombre = Tablas.CARRERAS
    necesito_tablas = []

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                estado TEXT NOT NULL,
                tiene_codigo INTEGER NOT NULL CHECK (tiene_codigo IN (0, 1)),
                etapa TEXT NOT NULL
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, nombre: str, estado: str, tiene_codigo: bool, etapa: str) -> int | None: 
        return cls._insertar(cursor, {
            "nombre": nombre,
            "estado": estado,
            "tiene_codigo": 1 if tiene_codigo else 0,
            "etapa": etapa,
        })

@registrar_tabla
class TablaPlanDeEstudio(Tabla):
    nombre = Tablas.PLANES_DE_ESTUDIO
    necesito_tablas = [ Tablas.CARRERAS ]

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                plan TEXT NOT NULL,
                id_carrera INTEGER NOT NULL REFERENCES {Tablas.CARRERAS}(id)
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, plan: str, id_carrera: int) -> int | None:
        return cls._insertar(cursor, {
            "plan": plan,
            "id_carrera": id_carrera,
        })

@registrar_tabla
class TablaCuatrimestre(Tabla):
    nombre = Tablas.CUATRI
    necesito_tablas = []

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                anio INTEGER NOT NULL,
                parte INTEGER NOT NULL
            );
        """)

    @classmethod
    def insertar(cls, cursor: Cursor, anio: int, parte: int) -> int | None:
        return cls._insertar(cursor, {
            "anio": anio,
            "parte": parte,
        })

@registrar_tabla
class TablaMateria(Tabla):
    nombre = Tablas.MATERIAS
    necesito_tablas = [ 
        TablasGenerales.BLOQUE_TEXTO,
        Tablas.PLANES_DE_ESTUDIO,
        Tablas.CARRERAS,
        Tablas.CUATRI,
    ]
        
    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                estado TEXT NOT NULL,
                etapa TEXT NOT NULL,
                codigo TEXT,

                id_resumen INTEGER REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_plan INTEGER NOT NULL REFERENCES {Tablas.PLANES_DE_ESTUDIO}(id),
                id_carrera INTEGER NOT NULL REFERENCES {Tablas.CARRERAS}(id),
                id_cuatrimestre INTEGER NOT NULL REFERENCES {Tablas.CUATRI}(id)
            );
        """)

    @classmethod
    def insertar(
        cls, cursor: Cursor, nombre: str, estado: str, etapa: str, codigo: str | None,
        id_resumen: int | None, id_plan: int, id_carrera: int, id_cuatri: int,
    ) -> int | None:
        valores: Dict[str, Any] = {
            "nombre": nombre,
            "estado": estado,
            "etapa": etapa,
            "id_plan": id_plan,
            "id_carrera": id_carrera,
            "id_cuatrimestre":  id_cuatri,
        }
        if codigo: valores["codigo"] = codigo
        if id_resumen: valores["id_resumen"] = id_resumen
        return cls._insertar(cursor, valores)

@registrar_tabla
class TablaGuiasDeMateria(Tabla):
    nombre = Tablas.GUIAS_MATERIA
    necesito_tablas = [ Tablas.MATERIAS, TablasColeccion.GUIAS ]

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id_materia INTEGER NOT NULL REFERENCES {Tablas.MATERIAS}(id),
                id_guia INTEGER NOT NULL REFERENCES {TablasColeccion.GUIAS}(id)
            );
        """)
    
    @classmethod
    def insertar(cls, cursor: Cursor, id_materia: int, id_guia: int) -> None:
        cls._insertar(cursor, {
            "id_materia": id_materia,
            "id_guia": id_guia,
        })

@registrar_tabla
class TablaEvaluacionesDeMateria(Tabla):
    nombre = Tablas.EVALUACIONES_MATERIA
    necesito_tablas = [ Tablas.MATERIAS, TablasColeccion.EVALUACION ]

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id_materia INTEGER NOT NULL REFERENCES {Tablas.MATERIAS}(id),
                id_evaluacion INTEGER NOT NULL REFERENCES {TablasColeccion.EVALUACION}(id)
            );
        """)
    
    @classmethod
    def insertar(cls, cursor: Cursor, id_materia: int, id_evaluacion: int) -> None:
        cls._insertar(cursor, {
            "id_materia": id_materia,
            "id_evaluacion": id_evaluacion,
        })

@registrar_tabla
class TablaTema(Tabla):
    nombre = Tablas.TEMA
    necesito_tablas = [ TablasGenerales.BLOQUE_TEXTO, Tablas.MATERIAS ]

    def crear(self, conn: Conn) -> None:
        conn.execute(f"""
            CREATE TABLE IF NOT EXISTS {self.nombre} (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                etapa TEXT NOT NULL,
                capitulo INTEGER NOT NULL,
                parte INTEGER,

                id_resumen INTEGER REFERENCES {TablasGenerales.BLOQUE_TEXTO}(id),
                id_materia INTEGER NOT NULL REFERENCES {Tablas.MATERIAS}(id)
            );
        """)

    @classmethod
    def insertar(
        cls, cursor: Cursor, nombre: str, etapa: str, capitulo: int, parte: int | None,
        id_resumen: int | None, id_materia: int,
    ) -> int | None:
        valores: Dict[str, Any] = {
            "nombre": nombre, 
            "etapa": etapa,
            "capitulo": capitulo,
            "id_materia": id_materia,
        }
        if parte: valores["parte"] = parte
        if id_resumen: valores["id_resumen"] = id_resumen
        return cls._insertar(cursor, valores)
