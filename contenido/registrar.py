from typing import List

from dependencias import Dato
from archivos import Archivo, Extension

from contenido import referencias, general, facultad, coleccion

def _registrar_markdown(tag: str, archivo: Archivo) -> List[Dato]:
    datos = []
    tag = tag.lower()

    if tag.startswith("colección/"):
        match tag.replace("colección/", ""):
            case "ejercicios/ejercicio":
                extra = coleccion.Ejercicio.parsear(archivo)
                if extra: datos.extend(extra)

            case "ejercicios/guia":
                extra = coleccion.Guia.parsear(archivo)
                if extra: datos.extend(extra)

            case "ejercicios/evaluacion":
                extra = coleccion.Evaluacion.parsear(archivo)
                if extra: datos.extend(extra)

            case "apertura/ajedrez":
                datos.append(coleccion.Ajedrez.parsear(archivo))

            case "biblioteca/libro":
                extra = coleccion.Libro.parsear(archivo)
                if extra: datos.extend(extra)

                extra = coleccion.Capitulo.parsear(archivo)
                if extra: datos.extend(extra)

            case "diccionario/palabra":
                extra = coleccion.Diccionario.parsear(archivo)
                if extra: datos.extend(extra)

    elif tag.startswith("referencia/"):
        extra = referencias.Referencia.parsear(archivo)
        if extra: datos.extend(extra)

        match tag.replace("referencia/", ""):
            case "libro":
                extra = referencias.Libro.parsear(archivo)

            case "paper":
                extra = referencias.Paper.parsear(archivo)

            case "wikipedia":
                extra = referencias.Wikipedia.parsear(archivo)

            case "youtube":
                extra = referencias.Youtube.parsear(archivo)

            case "web":
                extra = referencias.Web.parsear(archivo)

            case "diccionarioonline":
                extra = referencias.Diccionario.parsear(archivo)

            case _: extra = []

        if extra: datos.extend(extra)

    elif tag.startswith("facultad/"):
        match tag.replace("facultad/", ""):
            case "carrera":
                extra = facultad.Carrera.parsear(archivo)
                if extra: datos.extend(extra)

            case "facultad/materia":
                extra = facultad.Materia.parsear(archivo)
                if extra: datos.extend(extra)

            case "facultad/resumen":
                extra = facultad.Tema.parsear(archivo)
                if extra: datos.extend(extra)

    return datos 

def registrar(archivo: Archivo) -> List[Dato]:
    datos = []
    extension = archivo.metadata.extension

    if extension == Extension.MARKDOWN:
        for tag in archivo.extra.get("tags", []):
            datos.extend(_registrar_markdown(tag, archivo))

    elif general.TipoImagen.es_imagen(extension):
        datos.extend(general.Imagen.parsear(archivo))

    return datos

