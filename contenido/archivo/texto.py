from tree_sitter import Language, Parser, Tree
import tree_sitter_markdown
from typing import ClassVar, Dict, List, Tuple
from dataclasses import dataclass

from .arbol import Arbol
from .nodos import Nodo
from contenido.serializacion import Ser

NOMBRE_PROTOCOLO = "MCQv01"

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
        reducido = None if self.nodo is None else self.nodo.reducir_exaustivo()
        if reducido is None:
            return Ser.pack(
                Ser.comb(Ser.Bytes, Ser.Uint64, Ser.Uint64),
                NOMBRE_PROTOCOLO.encode('ascii'), 0, 0, 
            )

        texto_acumulado = ""
        largo_actual = 0

        def guardar(texto: str) -> Tuple[int, int]:
            nonlocal texto_acumulado, largo_actual

            texto = texto.strip()
            largo_texto = len(texto) 

            resultado = ( largo_actual, largo_actual + largo_texto )
            texto_acumulado = f"{texto_acumulado}{texto}"

            largo_actual += largo_texto
            return resultado


        resultado_bytes = reducido.serializar(guardar)
        resultado_texto = bytes(texto_acumulado, "utf-8")

        return Ser.pack(
            Ser.comb(Ser.Bytes, Ser.Uint64, Ser.Uint64, Ser.Bytes, Ser.Bytes),
            NOMBRE_PROTOCOLO.encode('ascii'), len(resultado_bytes), len(resultado_texto), 
            resultado_bytes, resultado_texto,
        )

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
