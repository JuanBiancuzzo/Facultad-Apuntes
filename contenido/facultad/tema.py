import sqlite3 as sql
from typing import dict, iterable, list, tuple

from contenido.archivo import Archivo, Seccion
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar, ErrorParseo
from contenido.general.bibliografia import Bibliografia
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.embedding import Embedding
from contenido.general.etapa import Etapa
from contenido.links import facultad as link
from contenido.referencias.referencia import Referencia
from dependencias import Clave, Dato, Nodo

from .carrera import Carrera
from .materia import Materia
from .tablas import TablaTema as Tabla


class Tema(Dato):
    nombre_tema: str
    clave_materia: Clave
    etapa: Etapa
    capitulo: int
    parte: int | None
    clave_mdc: Clave | None  # mdc = mapa de contenido

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        etapa = Etapa.de_texto(archivo.extra.get("etapa", ""))
        if etapa is None:
            etapa = Etapa.SIN_EMPEZAR

        try:
            info_tema = archivo.extra["infoTemaMateria"]
            nombre_materia = info_tema["materia"]
            nombre_carrera = info_tema["carrera"]

            clave_materia = Materia._obtener_clave(
                nombre_materia,
                Carrera._obtener_clave(nombre_carrera),
            )

        except Exception as err:
            raise ErrorParseo(f"Tema mal echo: {archivo.metadata.nombre}", err)

        resultado = archivo.contenido.split_secciones(
            [Seccion(1, nombre) for nombre in ["Índice", "Resumen", "Bibliografía"]]
        )
        bloque_mapa_contenido = None
        if resultado["Resumen"]:
            texto = resultado["Resumen"]
            bloque_mapa_contenido = None if texto.vacio() else BloqueTexto(texto)

        datos: list[Dato] = []

        clave_mdc = None
        if bloque_mapa_contenido is not None:
            datos.append(bloque_mapa_contenido)
            clave_mdc = bloque_mapa_contenido.obtener_clave()

        try:
            parte = int(archivo.extra["parte"])
        except:
            parte = None

        try:
            tema = Tema(
                archivo.extra["nombreResumen"],
                clave_materia,
                etapa,
                int(archivo.extra["capitulo"]),
                parte,
                clave_mdc,
            )
            datos.append(tema)

        except Exception as err:
            raise ErrorParseo(
                f"Error al parsear Tema de carrera: {archivo.extra['nombreResumen']}",
                err,
            )

        clave_tema = tema.obtener_clave()
        datos.append(Tema._obtener_link(clave_tema))

        for num_referencia in (
            int(num) for num in archivo.extra.get("referencias", [])
        ):
            clave_referencia = Referencia._obtener_clave(num_referencia)
            datos.append(Bibliografia.tema_facultad(clave_tema, clave_referencia))

        nombre = f"{tema.nombre_tema} N°{tema.capitulo} de la materia {nombre_materia} de la carrera {nombre_carrera}"
        clave_nommbre = link.Tema.gen_nombre(clave_materia)
        datos.extend(Embedding.parsear((clave_nommbre, nombre)))

        if bloque_mapa_contenido is not None:
            pares: iterable[tuple[link.Link, str]] = (
                (link.Tema.gen_resumen(clave_materia, id), texto)
                for id, texto in bloque_mapa_contenido.texto.chunks()
            )
            datos.extend((link for link, _ in pares))
            datos.extend(Embedding.parsear(*pares))

        return datos

    def dependo(self) -> list[Clave]:
        dependencias = [self.clave_materia]
        if self.clave_mdc is not None:
            dependencias.append(self.clave_mdc)
        return dependencias

    def obtener_clave(self) -> Clave:
        return Tema._obtener_clave(self.nombre_tema, self.clave_materia, self.parte)

    @classmethod
    def _obtener_clave(
        cls, nommbre_tema: str, clave_materia: Clave, parte: int | None
    ) -> Clave:
        return Clave.de_texto(
            TipoNodo.MATERIA,
            f"{nommbre_tema}<|-{clave_materia}-|>{nommbre_tema}:{parte}",
        )

    def obtener_link(self) -> link.Link:
        return Tema._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link:
        return link.Tema.gen(clave)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_mdc = (
                dependencias[self.clave_mdc] if self.clave_mdc is not None else None
            )
            id_tema = Tabla.insertar(
                cursor,
                self.nombre_tema,
                self.etapa.value,
                self.capitulo,
                self.parte,
                id_mdc,
                dependencias[self.clave_materia],
            )

        except Exception as err:
            raise ErrorInsertar(
                f"Al insertar un tema de una materia, con nombre: {self.nombre_tema}",
                err,
            )

        if id_tema is None:
            raise ErrorIdNoGenerado("El tema de una materia insertado no tiene id")

        return Nodo(id_tema, self.obtener_clave())
