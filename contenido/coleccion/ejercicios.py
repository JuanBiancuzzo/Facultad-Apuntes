import sqlite3 as sql

from typing import Dict, List
from dataclasses import dataclass

from archivos.archivo import Archivo, Texto
from archivos.texto import Seccion, split_secciones
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.bloque_texto import BloqueTexto
from contenido.general.etapa import Etapa
from .tablas import TablaEjercicio as Tabla

SECCION_ENUNCIADO = "Enunciado"
SECCION_RESOLUCION = "Resolución"
SECCION_RESULTADO = "Resultado"

@dataclass
class Ejercicio(Dato):
    numero: int
    etapa: Etapa 
    enunciado: Clave
    resolucion: Clave
    resultado: Clave | None

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        etapa = Etapa.de_texto(archivo.extra["etapa"])
        if etapa is None:
            mensaje = f"La etapa de la materia {archivo.extra["nombreMateria"]} no es valida {archivo.extra["etapa"]}"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        try: 
            numero = int(archivo.extra["numero"])

        except Exception as err:
            loggear(LoggerNivel.FATAL, f"Ejercicio en el archivo {archivo.metadata.path()} no tiene un numero valido")
            raise err

        secciones = [SECCION_ENUNCIADO, SECCION_RESOLUCION, SECCION_RESULTADO]
        resultado_split = split_secciones(archivo.contenido, [
            Seccion(1, nombre) for nombre in secciones
        ])

        enunciado, resolucion, resultado = tuple(( 
            Texto(seccion) if seccion is not None else None
            for seccion in map(lambda s: resultado_split[s], secciones)
        ))
        if enunciado is None or resolucion is None:
            mensaje = f"El ejercicio {numero} no tiene enunciado o resolucion"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        enunciado = BloqueTexto(
            Texto(f"%% Ejercicio {numero} - Enunciado %%") if enunciado.vacio() else enunciado
        )
        resolucion = BloqueTexto(
            Texto(f"%% Ejercicio {numero} - Resolucion %%") if resolucion.vacio()  else resolucion
        )

        if resultado is not None:
            resultado = None if resultado.vacio() else  BloqueTexto(resultado)

        datos: List[Dato] = [enunciado, resolucion]
        if resultado: datos.append(resultado)

        datos.append(Ejercicio(
            numero,
            etapa,
            enunciado.obtener_clave(),
            resolucion.obtener_clave(),
            resultado.obtener_clave() if resultado else None,
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
                self.etapa.value,
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
