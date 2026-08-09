import sqlite3 as sql

from contenido.archivo import Archivo
from contenido.dependencias import TipoNodo
from contenido.errores import ErrorIdNoGenerado, ErrorInsertar, ErrorParseo
from dependencias import Clave, Dato, Nodo

from .ejercicios import Ejercicio
from .tablas import TablaEjerciciosGuia
from .tablas import TablaGuia as Tabla


class Guia(Dato):
    numero: int
    nombre: str
    clave_ejercicios: list[Clave]

    @classmethod
    def parsear(cls, archivo: Archivo) -> list[Dato]:
        try:
            guia = Guia(
                numero=int(archivo.extra["numero"]),
                nombre=archivo.extra["nombre"],
                clave_ejercicios=[
                    Ejercicio._obtener_clave(int(ejercicio))
                    for ejercicio in archivo.extra["ejercicios"]
                ],
            )

        except Exception as err:
            raise ErrorParseo(
                f"Al intentar crear libro {archivo.extra.get('numero', 'invalido')}, no tiene etapa",
                err,
            )

        return [guia]

    def dependo(self) -> list[Clave]:
        return self.clave_ejercicios

    def obtener_clave(self) -> Clave:
        return Guia._obtener_clave(self.numero)

    @classmethod
    def _obtener_clave(cls, numero_guia) -> Clave:
        return Clave.de_texto(TipoNodo.GUIA, f"{numero_guia}<|>{numero_guia}")

    def insertar_datos(
        self, cursor: sql.Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        try:
            id_guia = Tabla.insertar(cursor, self.nombre)

        except Exception as err:
            raise ErrorInsertar(f"Al insertar guia {self.numero} de ejercicios", err)

        if id_guia is None:
            raise ErrorIdNoGenerado("La guia insertada no tiene id")

        try:
            for clave_ejercicio in self.clave_ejercicios:
                id_ejercicio = dependencias[clave_ejercicio]
                TablaEjerciciosGuia.insertar(cursor, id_guia, id_ejercicio)

        except Exception as err:
            mensaje = f"Al insertar guia {self.numero} con relacion con ejercicio"
            raise ErrorInsertar(mensaje, err)

        return Nodo(id_guia, self.obtener_clave())
