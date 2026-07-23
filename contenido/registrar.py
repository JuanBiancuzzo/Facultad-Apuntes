from typing import List

from dependencias import Dato
from archivos import Archivo, Extension

from contenido import referencias, general, facultad, coleccion

def _registrar_markdown(tag: str, archivo: Archivo) -> List[Dato]:
    datos = []
    tag = tag.lower()

    if tag.startswith("colección/"):
        match tag.replace("colección/", ""):
            case "representante":
                datos.extend(coleccion.Coleccion.parsear(archivo))

            case "ejercicios/ejercicio":
                datos.extend(coleccion.Ejercicio.parsear(archivo))

            case "ejercicios/guia":
                datos.extend(coleccion.Guia.parsear(archivo))

            case "ejercicios/evaluacion":
                datos.extend(coleccion.Evaluacion.parsear(archivo))

            case "apertura/ajedrez":
                datos.append(coleccion.Ajedrez.parsear(archivo))

            case "biblioteca/libro":
                datos.extend(coleccion.Libro.parsear(archivo))
                datos.extend(coleccion.Capitulo.parsear(archivo))

            case "biblioteca/paper":
                datos.extend(coleccion.Paper.parsear(archivo))

            case "diccionario/palabra":
                datos.extend(coleccion.Diccionario.parsear(archivo))

    elif tag.startswith("referencia/"):
        extra = referencias.Referencia.parsear(archivo)
        if extra: datos.extend(extra)

        match tag.replace("referencia/", ""):
            case "libro":
                extra = referencias.Libro.parsear(archivo)
                extra_capitulo = referencias.Capitulo.parsear(archivo)
                if extra and extra_capitulo: 
                    extra.extend(extra_capitulo)

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

            case "curso":
                extra = referencias.CursoOnline.parsear(archivo)

            case _: extra = []

        if extra: datos.extend(extra)

    elif tag.startswith("facultad/"):
        match tag.replace("facultad/", ""):
            case "carrera":
                extra = facultad.Carrera.parsear(archivo)
                if extra: datos.extend(extra)

            case "materia":
                extra = facultad.Materia.parsear(archivo)
                if extra: datos.extend(extra)

            case "resumen":
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
