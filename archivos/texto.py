import re 
from hashlib import shake_256
from typing import Dict, List, Any
from dataclasses import dataclass

@dataclass
class Texto:
    texto: str = ""

    @classmethod
    def parsear(cls, texto: str) -> Texto | None:
        return Texto(texto)

    def vacio(self) -> bool:
        return self.texto.strip() == ""

    def hash(self) -> int:
        return int(shake_256(self.texto.encode("utf-8")).hexdigest(7), 16)

    def bjson(self) -> bytes:
        return bytes(self.texto, "utf-8")

@dataclass
class Seccion:
    nivel: int
    header: str
    separador: bool = True

INICIO_SECCION = "_inicio_"
FINAL_SECCION = "_final_"

def match_seccion(seccion: Seccion):
    nivel = "".join(("#" for _ in range(seccion.nivel)))
    return f"{nivel} {seccion.header}" + "[ ]*[\n]*-{3,}[ ]*[\n]*"

def encontrar_primer(valores: List[Any | None]) -> Any | None:
    for valor in valores:
        if valor is not None:
            return valor
    return None

def split_secciones(texto: Texto, secciones: List[Seccion]) -> Dict[str, str | None]:
    partes = []
    parseo: Dict[str, str | None] = { INICIO_SECCION: None }

    indice_inicio = 0
    for seccion in secciones:
        patron = match_seccion(seccion)
        parseo[seccion.header] = None

        resultado = re.search(patron, texto.texto[indice_inicio:], re.DOTALL)
        if resultado is not None:
            indice_inicio = resultado.span()[1]
            resultado = indice_inicio

        partes.append(resultado)

    inicio = encontrar_primer(partes)
    if inicio is None:
        parseo[INICIO_SECCION] = texto.texto
        return parseo

    parseo[INICIO_SECCION] = texto.texto[:inicio].strip()
    for seccion, (i, indice_inicio) in zip(secciones, enumerate(partes)):
        if indice_inicio is None:
            continue
        
        siguiente = encontrar_primer(partes[i+1:])
        if siguiente is None:
            parseo[seccion.header] = texto.texto[inicio:].strip()
            break

        parseo[seccion.header] = texto.texto[inicio:siguiente].strip()
        inicio = siguiente

    return parseo
