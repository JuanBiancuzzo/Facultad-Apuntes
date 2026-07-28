import re 
from tree_sitter import Language, Parser #, Tree
import tree_sitter_markdown
from hashlib import shake_256
from typing import Dict, List, ClassVar, Any
from dataclasses import dataclass

TAMANIO_CHUNK = 1000

INICIO_SECCION = "_inicio_"
FINAL_SECCION = "_final_"

@dataclass
class Seccion:
    nivel: int
    header: str
    separador: bool = True

@dataclass
class Texto:
    markdown_parser: ClassVar[Parser] = Parser(Language(tree_sitter_markdown.language()))

    texto: str

    @classmethod
    def parsear(cls, texto: str) -> Texto | None:
        # arbol: Tree = Texto.markdown_parser.parse(bytes(texto, "utf-8"))
        return Texto(texto)

    def vacio(self) -> bool:
        return self.texto.strip() == ""

    def hash(self) -> int:
        return int(shake_256(self.string().encode("utf-8")).hexdigest(7), 16)

    def bjson(self) -> bytes:
        return bytes(self.texto, "utf-8")

    def string(self) -> str:
        return self.texto

    def chunks(self) -> List[str]:
        split = [
            self.texto[i : i + TAMANIO_CHUNK] 
            for i in range(0, len(self.texto), TAMANIO_CHUNK)
        ]

        if len(split) > 1 and len(split[-1]) < TAMANIO_CHUNK // 2:
            split[-2] = f"{split[-2]}{split[-1]}"
            split = split[:-1]

        return split

    def split_secciones(self, secciones: List[Seccion]) -> Dict[str, str | None]:
        partes = []
        parseo: Dict[str, str | None] = { INICIO_SECCION: None }

        indice_inicio = 0
        for seccion in secciones:
            patron = match_seccion(seccion)
            parseo[seccion.header] = None

            resultado = re.search(patron, self.texto[indice_inicio:], re.DOTALL)
            if resultado is not None: resultado = resultado.span()
            partes.append(resultado)

        inicio = encontrar_primer(partes)
        if inicio is None:
            parseo[INICIO_SECCION] = self.texto
            return parseo

        parseo[INICIO_SECCION] = self.texto[:inicio[1]].strip()
        for seccion, (i, indice_inicio) in zip(secciones, enumerate(partes)):
            if indice_inicio is None:
                continue
            
            siguiente = encontrar_primer(partes[i+1:])
            if siguiente is None:
                parseo[seccion.header] = self.texto[inicio[1]:].strip()
                break

            parseo[seccion.header] = self.texto[inicio[1]:siguiente[0]].strip()
            inicio = siguiente

        return parseo

def match_seccion(seccion: Seccion):
    nivel = "".join(("#" for _ in range(seccion.nivel)))
    return f"{nivel} {seccion.header}" + "[ ]*[\n]*-{3,}[ ]*[\n]*" if seccion.separador else ""

def encontrar_primer(valores: List[Any | None]) -> Any | None:
    for valor in valores:
        if valor is not None:
            return valor
    return None

