import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos.archivo import Archivo, Texto
from archivos.texto import Seccion, split_secciones
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.bloque_texto import BloqueTexto
from .tablas import TablaEjercicio as Tabla

SECCION_ENUNCIADO = "Enunciado"
SECCION_RESOLUCION = "Resolución"
SECCION_RESULTADO = "Resultado"

@dataclass
class Ejercicio(Dato):
    numero: int
    enunciado: Clave
    resolucion: Clave
    resultado: Clave | None

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato] | None:
        try: 
            numero = int(archivo.extra["numero"])

        except:
            return None

        secciones = [SECCION_ENUNCIADO, SECCION_RESOLUCION, SECCION_RESULTADO]
        resultado_split = split_secciones(archivo.contenido, [
            Seccion(1, nombre) for nombre in secciones
        ])

        enunciado, resolucion, resultado = tuple(( 
            BloqueTexto(Texto(seccion)) if seccion is not None else None
            for seccion in map(lambda s: resultado_split[s], secciones)
        ))
        if enunciado is None or resolucion is None:
            return None

        datos: List[Dato] = [enunciado, resolucion]
        if resultado is not None:
            datos.append(resultado)
        datos.append(Ejercicio(
            numero,
            enunciado.obtener_clave(),
            resolucion.obtener_clave(),
            resultado.obtener_clave() if resultado is not None else None,
        ))
        return datos


    def dependo(self) -> List[Clave]: 
        dependencias = [ self.enunciado, self.resolucion ]
        if self.resultado is not None:
            dependencias.append(self.resultado)
        return dependencias

    def obtener_clave(self) -> Clave: 
        return Ejercicio._obtener_clave(self.numero)

    @classmethod
    def _obtener_clave(cls, numero: int) -> Clave:
        return Clave.de_texto(TipoNodo.EJERCICIO, f"{numero}:-:{numero}")

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo | None:
        try: 
            id_ejercicio = Tabla.insertar(
                cursor, 
                dependencias[self.enunciado],
                dependencias[self.resolucion],
                dependencias[self.resultado] if self.resultado is not None else None,
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar ejercicio con numero: {self.numero}")
            raise e

        if id_ejercicio is None:
            mensaje = f"El ejercicio insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje) 

        return Nodo(id_ejercicio, self.obtener_clave())
