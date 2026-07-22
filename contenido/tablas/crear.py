from sqlite3 import Connection as Conn
from typing import List

from contenido.general import tablas as general
from contenido.coleccion import tablas as coleccion
from contenido.facultad import tablas as facultad
from contenido.referencias import tablas as referencias
from contenido.bibliografia import tablas as bibliografia

from .tabla import Tabla

def crear_tablas(conn: Conn):
    orden: List[List[Tabla]] = [
        [ 
            general.TablaAutore(),
            general.TablaEditorial(),
            general.TablaImagen(),
            general.TablaBloqueTexto(),

            coleccion.TablaAjedrez(),
            coleccion.TablaEjercicio(),

            facultad.TablaCarrera(),
            facultad.TablaCuatrimestre(),

            referencias.TablaReferencia(),
        ],
        [
            coleccion.TablaGuia(),
            coleccion.TablaEvaluacion(),

            facultad.TablaPlanDeEstudio(),

            referencias.TablaWebsite(),
            referencias.TablaWikipedia(),
            referencias.TablaYoutube(),
            referencias.TablaLibro(),
            referencias.TablaPaper(),
            referencias.TablaCursoOnline(),
            referencias.TablaDiccionario(),
        ],
        [
            coleccion.TablaEjerciciosGuia(),
            coleccion.TablaEjerciciosEvaluacion(),
            coleccion.TablaLibro(),
            coleccion.TablaPaper(),
            coleccion.TablaDiccionario(),

            facultad.TablaMateria(),
            
            referencias.TablaCapitulo(),
            referencias.TablaTema(),
        ],
        [
            coleccion.TablaCapitulo(),

            facultad.TablaGuiasDeMateria(),
            facultad.TablaEvaluacionesDeMateria(),
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
