import os
from docopt import docopt # Libreria docopt-ng
from dataclasses import dataclass
from typing import List, Tuple
from enum import StrEnum

class ErrorArgumentos(StrEnum):
    BATCH_INVALIDO = "El batch tiene que ser un numero"
    BATCH_NO_POSITIVO = "El numero de batch es negativo o cero"
    EXCLUIDO_INVALIDO = "El path a excluir no es archivo ni directorio"

@dataclass
class Argumentos:
    input_path: str
    output_path: str
    directorios_omitir: List[str]
    archivos_omitir: List[str]
    tamanio_batch: int

    def __init__(self, input_path: str, output_path: str, archivos_omitir: List[str] = [], directorios_omitir: List[str] = [], batch = 1) -> None:
        self.input_path = input_path
        self.output_path = output_path
        self.archivos_omitir = archivos_omitir
        self.directorios_omitir = directorios_omitir
        self.tamanio_batch = batch

    @classmethod
    def parsear(cls) -> Tuple[Argumentos, ErrorArgumentos | None]:
        dicc_args = docopt("""
Usage:
  importer.py -i=<input-directorio> -o=<output-bdd> [-b=<batch>] [-e=<excluir>]...
  importer.py --help
  importer.py --version

Options:
    --help       Mostrar los argumentos posibles.
    --version    Version.

    -i=<input-directorio>, --input-directorio=<input-directorio> Directories to skip.
    -o=<output-bdd>, --output-bdd=<output-bdd>                   Directories to skip.
    -b=<batch>, --batch=<batch>                                  Directories to skip [default: 20].
    -e=<excluir>, --excluir=<excluir>                            Directories to skip.
"""
, version = "0.1.0")

        argumentos = Argumentos(
            _limpear_path(dicc_args["--input-directorio"]),
            _limpear_path(dicc_args["--output-bdd"]),
        )

        for path_excluido in map(_limpear_path, dicc_args["--excluir"]):
            path_completo = os.path.join(argumentos.input_path, path_excluido)
            if os.path.isfile(path_completo):
                argumentos.archivos_omitir.append(path_excluido)

            elif os.path.isdir(path_completo):
                argumentos.directorios_omitir.append(path_excluido)

            elif os.path.exists(path_completo):
                return argumentos, ErrorArgumentos.EXCLUIDO_INVALIDO

        try: 
            argumentos.tamanio_batch = int(dicc_args["--batch"])
            if argumentos.tamanio_batch <= 0:
                return argumentos, ErrorArgumentos.BATCH_NO_POSITIVO
        except:
            return argumentos, ErrorArgumentos.BATCH_INVALIDO
        
        return argumentos, None

def _limpear_path(path: str) -> str:
    return os.path.join(*path.replace("\\", "/").split("/"))
