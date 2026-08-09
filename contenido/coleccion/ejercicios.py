import sqlite3 as sql
from dataclasses import dataclass
from collections.abc import Iterable

from contenido.archivo import Archivo, Seccion, Texto
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar, ErrorParseo
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.embedding import Embedding
from contenido.general.etapa import Etapa
from contenido.links import coleccion as link
from dependencias import Clave, Dato, Nodo

from .tablas import TablaEjercicio as Tabla

SECCION_ENUNCIADO = "Enunciado"
SECCION_RESOLUCION = "Resolución"
SECCION_RESULTADO = "Resultado"


@dataclass
class Ejercicio(Dato):
    numero: int
    nombre: str | None
    etapa: Etapa
    enunciado: Clave
    resolucion: Clave
    resultado: Clave | None

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            mensaje = f"La etapa de la materia {archivo.extra['nombreMateria']} no es valida {archivo.extra['etapa']}"
            raise ErrorParseo(mensaje)

        try:
            numero = int(archivo.extra["numero"])

        except Exception as err:
            mensaje = f"Ejercicio en el archivo {archivo.metadata.path()} no tiene un numero valido"
            raise ErrorParseo(mensaje, err)

        secciones = [SECCION_ENUNCIADO, SECCION_RESOLUCION, SECCION_RESULTADO]
        resultado_split = archivo.contenido.split_secciones(
            [Seccion(1, nombre) for nombre in secciones]
        )

        enunciado, resolucion, resultado = tuple(
            seccion if seccion is not None else None
            for seccion in (resultado_split[s] for s in secciones)
        )
        if enunciado is None or resolucion is None:
            mensaje = f"El ejercicio {numero} no tiene enunciado o resolucion"
            raise ErrorParseo(mensaje)

        enunciado_vacio = enunciado.vacio()
        enunciado = BloqueTexto(
            Texto.parsear(f"%% Ejercicio {numero} - Enunciado %%")
            if enunciado_vacio
            else enunciado
        )
        resolucion_vacio = resolucion.vacio()
        resolucion = BloqueTexto(
            Texto.parsear(f"%% Ejercicio {numero} - Resolucion %%")
            if resolucion_vacio
            else resolucion
        )

        if resultado is not None:
            resultado = None if resultado.vacio() else BloqueTexto(resultado)

        datos: list[Dato] = [enunciado, resolucion]
        if resultado:
            datos.append(resultado)

        ejercicio = Ejercicio(
            numero,
            archivo.extra.get("nombre"),
            etapa,
            enunciado.obtener_clave(),
            resolucion.obtener_clave(),
            resultado.obtener_clave() if resultado else None,
        )
        datos.append(ejercicio)

        # Embedding a para todo texto relacionado
        clave_ejercicio = ejercicio.obtener_clave()

        if ejercicio.nombre:
            link_nombre = link.Ejercicio.gen_nombre(clave_ejercicio)
            datos.append(link_nombre)
            datos.extend(Embedding.parsear((link_nombre, ejercicio.nombre)))

        validos = [not enunciado_vacio, not resolucion_vacio, resultado is not None]
        bloques = [enunciado, resolucion, resultado]
        generadores = [
            link.Ejercicio.gen_enunciado,
            link.Ejercicio.gen_resolucion,
            link.Ejercicio.gen_resultado,
        ]

        for valido, bloque, generador in zip(validos, bloques, generadores):
            if not valido:
                continue

            pares: Iterable[tuple[link.Link, str]] = (
                (generador(clave_ejercicio, id), texto)
                for id, texto in bloque.texto.chunks()
            )
            datos.extend((link for link, _ in pares))
            datos.extend(Embedding.parsear(*pares))

        return datos

    def dependo(self) -> list[Clave]:
        dependencias = [self.enunciado, self.resolucion]
        if self.resultado is not None:
            dependencias.append(self.resultado)
        return dependencias

    def obtener_clave(self) -> Clave:
        return Ejercicio._obtener_clave(self.numero)

    @classmethod
    def _obtener_clave(cls, numero: int) -> Clave:
        return Clave.de_texto(TipoNodo.EJERCICIO, f"{numero}:-:{numero}")

    def obtener_link(self) -> link.Link:
        return Ejercicio._obtener_link(self.obtener_clave())

    @classmethod
    def _obtener_link(cls, clave: Clave) -> link.Link:
        return link.Ejercicio.gen(clave)

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_ejercicio = Tabla.insertar(
                cursor,
                self.nombre,
                self.etapa.value,
                dependencias[self.enunciado],
                dependencias[self.resolucion],
                dependencias[self.resultado] if self.resultado is not None else None,
            )

        except Exception as err:
            raise ErrorInsertar(f"Al insertar ejercicio con numero: {self.numero}", err)

        if id_ejercicio is None:
            raise ErrorIdNoGenerado("El ejercicio insertado no tiene id")

        return Nodo(id_ejercicio, self.obtener_clave())
