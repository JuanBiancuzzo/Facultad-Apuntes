import sqlite3 as sql

from typing import Dict, List, Tuple
from dataclasses import dataclass

from archivos.archivo import Archivo
from dependencias import Nodo, Dato, Clave
from logger import loggear, LoggerNivel

from contenido.dependencias import TipoNodo
from contenido.general.autore import Autore

from .autore_referencia import AutoreReferencia
from .libro import ReferenciaLibro
from .referencia import Referencia
from .tablas import TablaCapitulo as Tabla

@dataclass
class ReferenciaCapitulo(Dato):
    numero: int
    titulo: str | None
    paginas: Tuple[int, int] | None

    clave_ref_libro: Clave
    clave_referencia: Clave

    @classmethod
    def parsear(cls, archivo: Archivo) -> List[Dato]:
        datos = []
        clave_ref_libro = ReferenciaLibro._obtener_clave(int(archivo.extra["numReferencia"]))

        capitulos = archivo.extra.get("capitulos", []) 
        if capitulos is None: capitulos = []
        for extra_capitulo in capitulos:
            try:
                paginas = extra_capitulo.get("paginas", None) 
                if paginas is not None:
                    inicio = paginas.get("inicio", None)
                    final = paginas.get("final", None)
                    if inicio is not None and final is not None:
                        paginas = (int(inicio), int(final))

                capitulo = ReferenciaCapitulo(
                    int(extra_capitulo["numeroCapitulo"]),
                    extra_capitulo.get("nombreCapitulo", None),
                    paginas,
                    clave_ref_libro,
                    Referencia._obtener_clave(extra_capitulo["numReferencia"])
                )
                datos.append(capitulo)
            except Exception as e:
                loggear(LoggerNivel.FATAL, f"Al crear capitulo con {extra_capitulo}")
                raise e

            clave_ref_capitulo = capitulo.obtener_clave()
            for editore in extra_capitulo.get("editores", []):
                editore = Autore(editore["nombre"], editore["apellido"]) 
                datos.append(editore)

                editore_referencia = AutoreReferencia.capitulo(clave_ref_capitulo, editore.obtener_clave())
                datos.append(editore_referencia)

        return datos

    def dependo(self) -> List[Clave]: 
        return [ self.clave_ref_libro, self.clave_referencia ] 

    def obtener_clave(self) -> Clave: 
        return ReferenciaCapitulo._obtener_clave(self.clave_referencia) 

    @classmethod
    def _obtener_clave(cls, referencia: int | Clave) -> Clave: 
        hash = Referencia._obtener_clave(referencia).hash
        return Clave(TipoNodo.REFERENCIA_CAPITULO_LIBRO, hash)

    def insertar_datos(self, cursor: sql.Cursor, dependencias: Dict[Clave, int]) -> Nodo:
        try: 
            id_capitulo = Tabla.insertar(
                cursor,
                self.numero,
                self.titulo,
                None if self.paginas is None else self.paginas[0],
                None if self.paginas is None else self.paginas[1],
                dependencias[self.clave_ref_libro],
                dependencias[self.clave_referencia],
            )

        except Exception as e:
            loggear(LoggerNivel.FATAL, f"Al insertar ref de capitulo de un libro, con clave de libro: {self.clave_ref_libro}")
            raise e 

        if id_capitulo is None:
            mensaje = f"El ref capitulo insertado no tiene id"
            loggear(LoggerNivel.FATAL, mensaje)
            raise Exception(mensaje)

        return Nodo(id_capitulo, self.obtener_clave())
