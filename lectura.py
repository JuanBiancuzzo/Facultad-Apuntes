import os
import threading
import queue

from dataclasses import dataclass
from typing import Callable, Iterator, List

from archivos import Archivo

type FnProcesar = Callable[[str], Archivo | None]

@dataclass
class Procesar:
    def __init__(self, path_directorio: str, procesar: FnProcesar, omitir_directorios: List[str] = [], omitir_archivos: List[str] = []):
        self.path_directorio = path_directorio
        self.procesado = procesar

        full_path = lambda path: os.path.join(path_directorio, path)
        existe_path = lambda path: os.path.exists(path)

        self.omitir_directorios = list(filter(existe_path, map(full_path, omitir_directorios)))
        self.omitir_archivos = list(filter(existe_path, map(full_path, omitir_archivos)))

def procesar_archivos(datos: Procesar) -> Iterator[Archivo]:
    queue_archivos = queue.Queue()
    def procesar():
        for path_archivo in _leer_directorios(datos.path_directorio, datos.omitir_directorios, datos.omitir_archivos):
            try:
                archivo = datos.procesado(path_archivo)
                if archivo is not None:
                    queue_archivos.put(archivo)

            except Exception as error:
                print(f"En el archivo {path_archivo}, ocurrio el error: {error}")

        queue_archivos.shutdown(immediate = False)

    threading.Thread(target = procesar, daemon = True).start()

    while True:
        try:
            archivo = queue_archivos.get()
            queue_archivos.task_done()
            yield archivo

        except queue.ShutDown:
            break


def _leer_directorios(path_directorio: str, omitir_directorios: List[str], omitir_archivos: List[str]) -> Iterator[str]:
    for root, _, archivos in os.walk(path_directorio):
        if any(os.path.samefile(os.path.commonpath([root, omiteado]), omiteado) for omiteado in omitir_directorios):
            continue

        for archivo in archivos:
            path_archivo = os.path.join(root, archivo)
            if any(os.path.samefile(path_archivo, omiteado) for omiteado in omitir_archivos):
                continue

            yield path_archivo
