from tree_sitter import Language, Parser, Tree
import tree_sitter_markdown
from typing import ClassVar, Dict, List, Tuple
from dataclasses import dataclass

from .arbol import Arbol
from .nodos import Nodo

INICIO_SECCION = "_inicio_"
FINAL_SECCION = "_final_"

@dataclass
class Seccion:
    nivel: int
    header: str

@dataclass
class Texto:
    markdown_parser: ClassVar[Parser] = Parser(Language(tree_sitter_markdown.language()))

    nodo: Nodo | None

    @classmethod
    def parsear(cls, texto: str) -> Texto:
        arbol: Tree = Texto.markdown_parser.parse(bytes(texto, "utf-8"))
        return Texto(Arbol.parsear(arbol.walk()))

    def vacio(self) -> bool:
        return True if self.nodo is None else self.nodo.vacio()

    def hash(self) -> int:
        if self.nodo is None:
            return 0
        return self.nodo.id()

    def bjson(self) -> bytes:
        if self.nodo is None:
            return Arbol.serializar_nulo()
        return Arbol.serializar(self.nodo)

    def string(self) -> str:
        return "" if self.nodo is None else self.nodo.string()

    def chunks(self) -> List[Tuple[int, str]]:
        """ 
            Ver de utilizar la estructura del texto para hacer los chunks, y 
             ver de separar por tokens en el caso de un texto sea muy largo
        """
        return []

    def split_secciones(self, secciones: List[Seccion]) -> Dict[str, Texto | None]:
        resultado = {}
        for seccion in secciones:
            resultado[seccion.header] = None
        return resultado
