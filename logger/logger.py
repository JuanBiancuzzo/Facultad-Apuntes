import datetime as dt
import json
import inspect

from queue import Queue, ShutDown
from threading import Thread
from enum import StrEnum
from dataclasses import dataclass

_path_inicial = ""
_cola_mensajes = None

class LoggerNivel(StrEnum):
    DEBUG = "Debug"
    INFO = "Info"
    WARN = "Warn"
    ERROR = "Error"
    FATAL = "Fatal"

@dataclass
class Mensaje:
    mensaje: str
    tiempo: dt.datetime
    nivel: LoggerNivel
    traza: str

    def __init__(self, nivel: LoggerNivel, mensaje: str):
        global _path_inicial

        # 2 porque este es 0 y 1 seria la funcion de log_mensaje
        pila = inspect.stack()[2] 
        archivo_relativo = pila.filename.replace(_path_inicial, ".")
        funcion = pila.function
        linea = pila.lineno

        self.nivel = nivel
        self.mensaje = mensaje
        self.tiempo = dt.datetime.now()
        self.traza = f"Archivo: {archivo_relativo}, en la funcion: {funcion}, en la linea: {linea}"

    def json(self) -> str:
        return json.dumps({
            "mensaje": self.mensaje,
            "tiempo": self.tiempo.timestamp(),
            "nivel": self.nivel,
            "traza": self.traza,
        }, indent = 4)

    def terminal(self) -> str:
        match self.nivel:
            case _: nivel = f"{self.nivel}"

        return f"[{nivel}] {self.mensaje} \n\t - {self.traza}"

def inicializar(nombre_archivo: str):
    global _cola_mensajes, _path_inicial

    pila = inspect.stack()[1] # 1 seria el lugar donde empezo
    _path_inicial = "/".join(pila.filename.split("/")[:-1])

    _cola_mensajes = Queue()
    def procesar(cola_mensajes: Queue):
        try:
            with open(nombre_archivo, "w") as archivo:
                archivo.write("[\n\t")
                archivo.write("\n\t".join(Mensaje(LoggerNivel.DEBUG, "Inicio").json().split("\n")))

                while True:
                    try: 
                        mensaje = cola_mensajes.get()
                        archivo.write(",\n\t" + "\n\t".join(mensaje.json().split("\n")))
                        print(mensaje.terminal())
                        cola_mensajes.task_done()

                    except ShutDown:
                        break

                archivo.write("\n]\n")

        except Exception as e:
            cola_mensajes.shutdown(immediate = True)
            print(f"Ocurrio un error {e}({type(e)}) al intentar escribir en el archivo")

    Thread(target = procesar, daemon = False, args = (_cola_mensajes, )).start()

def terminar():
    global _cola_mensajes
    if _cola_mensajes is None:
        return

    _cola_mensajes.shutdown(immediate = False)
    _cola_mensajes.join()

def loggear(nivel: LoggerNivel, mensaje: str) -> None:
    global _cola_mensajes
    if _cola_mensajes is None:
        return

    _cola_mensajes.put(Mensaje(nivel, mensaje))
