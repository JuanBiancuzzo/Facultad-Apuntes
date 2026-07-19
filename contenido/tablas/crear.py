from sqlite3 import Connection as Conn
from typing import List

from contenido.general import tablas as general
from contenido.coleccion import tablas as coleccion
from contenido.facultad import tablas as facultad
from contenido.referencias import tablas as referencias
from contenido.bibliografia import tablas as bibliografia

from .registros import Tabla

def crear_tablas(conn: Conn):
    orden: List[List[Tabla]] = [
        [ 
            general.TablaAutore(),
            general.TablaEditorial(),
            general.TablaBloqueTexto(),

            coleccion.TablaAjedrez(),
            coleccion.TablaEjercicio(),

            facultad.TablaCarrera(),
            facultad.TablaCuatrimestre(),

            referencias.TablaReferencia(),
        ],
        [
            coleccion.TablaGuia(),

            facultad.TablaPlanDeEstudio(),

            referencias.TablaWebsite(),
            referencias.TablaWikipedia(),
            referencias.TablaYoutube(),
            referencias.TablaLibro(),
            referencias.TablaDiccionario(),
        ],
        [
            coleccion.TablaEjerciciosGuia(),
            coleccion.TablaLibro(),
            coleccion.TablaDiccionario(),

            facultad.TablaMateria(),
            
            referencias.TablaCapitulo(),
        ],
        [
            coleccion.TablaCapitulo(),

            facultad.TablaGuiasDeMateria(),
            facultad.TablaTema(),
        ],
        [
            referencias.TablaReferenciaAutore(),

            bibliografia.TablaBibliografia(),
        ]
    ]

    for grupo in orden:
        for tabla in grupo:
            tabla.crear(conn)
        conn.commit()
