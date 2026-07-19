import os
import json
from docopt import docopt # Libreria docopt-ng
from dataclasses import dataclass
from typing import Dict, List, Tuple, Any
from enum import StrEnum

DEFAULT_BATCH = 20

class ErrorArgumentos(StrEnum):
    BATCH_INVALIDO = "El batch tiene que ser un numero"
    BATCH_NO_POSITIVO = "El numero de batch es negativo o cero"
    EXCLUIDO_INVALIDO = "El path a excluir no es archivo ni directorio"
    PATH_CONFIGURACION_INVALIDO = "El path de configuracion no existe"
    FORMATO_CONFIGURACION_INVALIDO = "El formato de la configuracion en .json deberia tener un valor de batch (opcional) y una lista de archivo/directorio a excluir debajo del nombre 'excluir'"

@dataclass
class Argumentos:
    input_path: str
    output_path: str
    logs_path: str | None
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
        dicc_args = docopt(f"""
Usage:
  importer.py -i=<input-directorio> -o=<output-bdd>
  importer.py cli -i=<input-directorio> -o=<output-bdd> [-l=<logs>] [-b=<batch>] [-e=<excluir>]...
  importer.py file -i=<input-directorio> -o=<output-bdd> [-f=<archivo-config>]
  importer.py --help
  importer.py --version

Options:
    --help       Mostrar los argumentos posibles.
    --version    Version.

    -i=<input-directorio>, --input-directorio=<input-directorio> Path al directorio con los datos.
    -o=<output-bdd>, --output-bdd=<output-bdd>                   Path al archivo de SQLite que se quiere generar.
    -l=<logs>, --logs=<logs>                                     Path al archivo de logs que se quiere generar.
    -b=<batch>, --batch=<batch>                                  Se bloques de archivos a procesar, esta el tamaño del bloque [default: {DEFAULT_BATCH}].
    -e=<excluir>, --excluir=<excluir>                            Directorios y archivos a excluir de los datos a procesar.
    -f=<archivo-config>, --archivo-config=<archivo-config>       Archivo con la configuracion en .json equivalente a los otros parametros.
"""
, version = "0.1.0")

        argumentos = Argumentos(
            _limpear_path(dicc_args["--input-directorio"]),
            _limpear_path(dicc_args["--output-bdd"]),
        )

        if dicc_args["cli"]:
            return cls._parsear_cli(argumentos, dicc_args)

        elif dicc_args["file"]:
            return cls._parsear_file(argumentos, dicc_args)

        return argumentos, None

    @classmethod
    def _parsear_cli(cls, argumentos: Argumentos, dicc_args: Dict[str, Any]) -> Tuple[Argumentos, ErrorArgumentos | None]:
        for path_excluido in map(_limpear_path, dicc_args["--excluir"]):
            path_completo = os.path.join(argumentos.input_path, path_excluido)
            if os.path.isfile(path_completo):
                argumentos.archivos_omitir.append(path_excluido)

            elif os.path.isdir(path_completo):
                argumentos.directorios_omitir.append(path_excluido)

            elif os.path.exists(path_completo):
                return argumentos, ErrorArgumentos.EXCLUIDO_INVALIDO
        
        if dicc_args["--logs"]:
            path = _limpear_path(dicc_args["--logs"])
            directorio = "/".join(path.split("/")[:-1]).strip()
            if directorio != "": os.makedirs(directorio, exist_ok = True)
            argumentos.logs_path = path

        else:
            argumentos.logs_path = None
        
        try: 
            argumentos.tamanio_batch = int(dicc_args["--batch"])
            if argumentos.tamanio_batch <= 0:
                return argumentos, ErrorArgumentos.BATCH_NO_POSITIVO
        except:
            return argumentos, ErrorArgumentos.BATCH_INVALIDO
        
        return argumentos, None

    @classmethod
    def _parsear_file(cls, argumentos: Argumentos, dicc_args: Dict[str, Any]) -> Tuple[Argumentos, ErrorArgumentos | None]:
        path_configuracion = dicc_args["--archivo-config"]
        if path_configuracion is None:
            return argumentos, None

        try:
            with open(path_configuracion, "r") as archivo_configuracion:
                datos = json.load(archivo_configuracion)

        except:
            return argumentos, ErrorArgumentos.PATH_CONFIGURACION_INVALIDO

        dicc_args["--logs"] = datos.get("logs")
        dicc_args["--batch"] = datos.get("batch", DEFAULT_BATCH)
        dicc_args["--excluir"] = datos.get("excluir", [])

        return cls._parsear_cli(argumentos, dicc_args)

def _limpear_path(path: str) -> str:
    return os.path.join(*path.replace("\\", "/").split("/"))
