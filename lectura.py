import os
import threading
from collections.abc import Callable, Iterator
from dataclasses import dataclass
from typing import Any

from workers import worker_con_salida

from .iterable_queue import IterQueue

type FnProcesar = Callable[[str], Any | None]


@dataclass
class Procesar:
    def __init__(
        self,
        path_directorio: str,
        procesar: FnProcesar,
        omitir_directorios: list[str] | None = None,
        omitir_archivos: list[str] | None = None,
        cant_threads: int = 2,
    ):
        if omitir_directorios is None:
            omitir_directorios = []
        if omitir_archivos is None:
            omitir_archivos = []

        self.path_directorio = path_directorio
        self.procesado = procesar

        full_path = lambda path: os.path.join(path_directorio, path)
        existe_path = lambda path: os.path.exists(path)

        self.omitir_directorios = list(
            filter(existe_path, map(full_path, omitir_directorios))
        )
        self.omitir_archivos = list(
            filter(existe_path, map(full_path, omitir_archivos))
        )


def procesar_archivos(datos: Procesar) -> Iterator[Any]:
    queue_salida = IterQueue()

    datos_directorio = _leer_directorios(
        datos.path_directorio,
        datos.omitir_directorios,
        datos.omitir_archivos,
    )

    threading.Thread(
        target=worker_con_salida,
        args=(datos_directorio, datos.procesar, queue_salida, datos.cant_threads),
        daemon=True,
    ).start()

    return queue_salida


def _leer_directorios(
    path_directorio: str, omitir_directorios: list[str], omitir_archivos: list[str]
) -> Iterator[str]:
    for root, _, archivos in os.walk(path_directorio):
        if any(
            os.path.samefile(os.path.commonpath([root, omiteado]), omiteado)
            for omiteado in omitir_directorios
        ):
            continue

        for archivo in archivos:
            path_archivo = os.path.join(root, archivo)
            if any(
                os.path.samefile(path_archivo, omiteado) for omiteado in omitir_archivos
            ):
                continue

            yield path_archivo
