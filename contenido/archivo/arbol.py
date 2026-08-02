from tree_sitter import Language, Parser, Tree, TreeCursor
import tree_sitter_markdown
from typing import ClassVar, Dict, Tuple

from logger import loggear, LoggerNivel

from .nodos import *
from contenido.serializacion import Ser

NOMBRE_PROTOCOLO = "MCQv01"

_contador = {}

class Arbol:
    markdown_inline_parser: ClassVar[Parser] = Parser(Language(tree_sitter_markdown.inline_language()))

    @classmethod
    def parsear(cls, walker: TreeCursor) -> Nodo | None: 
        global _contador
        nodo = cls._recurcion(walker)
        if nodo is not None:
            nodo = nodo.reducir(exaustivo = False)

        loggear(LoggerNivel.DEBUG, "\n\t".join(
            ( f"{tipo}: {cantidad}" for tipo, cantidad in _contador.items() )
        ))
        return nodo

    @classmethod
    def serializar_nulo(cls) -> bytes: 
        return Ser.pack(
            Ser.comb(Ser.Bytes, Ser.Uint64, Ser.Uint64),
            NOMBRE_PROTOCOLO.encode('ascii'), 0, 0, 
        )

    @classmethod
    def serializar(cls, nodo: Nodo) -> bytes: 
        reducido = nodo.reducir(exaustivo = True)
        if reducido is None:
            Arbol.serializar_nulo()

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

    @classmethod
    def _recurcion(cls, walker: TreeCursor) -> Nodo | None: 
        nodo_actual = walker.__getattribute__("node")
        if nodo_actual is None:
            return None

        match nodo_actual.type:
            case "document":
                pass

            case "inline":
                global _contador
                arbol: Tree = Arbol.markdown_inline_parser.parse(nodo_actual.text)
                contar(arbol.walk(), _contador)

        return None

def contar(walker: TreeCursor, contador: Dict[str, int]):
    nodo_actual = walker.__getattribute__("node")
    if nodo_actual is None:
        loggear(LoggerNivel.WARN, f"El walker no tiene nodo")
        return

    tipo: str = nodo_actual.type
    contador[tipo] = contador.get(tipo, 0) + 1

    if not walker.goto_first_child():
        # Deberia no tener mas hijos
        return

    contar(walker, contador)
    while walker.goto_next_sibling():
        contar(walker, contador)

    # nos aseguramos de dejar el nodo como se recibio
    walker.goto_parent()

""" Resultados:
  -> document con: 5592
  -> section con: 13373
  -> paragraph con: 20658
  -> inline con: 32343
  -> fenced_code_block con: 4880
  -> fenced_code_block_delimiter con: 9756
  -> info_string con: 4849
  -> language con: 4849
  -> block_continuation con: 46063
  -> code_fence_content con: 4879
  -> . con: 32268
  -> ( con: 42075
  -> " con: 12028
  -> _ con: 27518
  -> / con: 27748
  -> ) con: 42180
  -> ; con: 14847
  -> atx_heading con: 11685
  -> atx_h1_marker con: 8361
  -> ? con: 2017
  -> thematic_break con: 11418
  -> , con: 46768
  -> [ con: 40951
  -> | con: 20778
  -> ] con: 40901
  -> atx_h2_marker con: 2414
  -> ' con: 1260
  -> { con: 43993
  -> : con: 7860
  -> } con: 43990
  -> ! con: 1762
  -> $ con: 49075
  -> list con: 3109
  -> list_item con: 8558
  -> list_marker_star con: 7074
  -> - con: 31593
  -> = con: 20362
  -> % con: 2354
  -> # con: 2285
  -> < con: 1907
  -> > con: 2438
  -> list_marker_dot con: 1075
  -> atx_h3_marker con: 822
  -> \ con: 75630
  -> + con: 12183
  -> * con: 3921
  -> ^ con: 6300
  -> ~ con: 8426
  -> atx_h4_marker con: 81
  -> block_quote con: 213
  -> block_quote_marker con: 213
  -> ` con: 2442
  -> list_marker_parenthesis con: 201
  -> & con: 3987
  -> pipe_table con: 130
  -> pipe_table_header con: 130
  -> pipe_table_cell con: 3394
  -> pipe_table_delimiter_row con: 130
  -> pipe_table_delimiter_cell con: 479
  -> pipe_table_row con: 834
  -> pipe_table_align_left con: 51
  -> pipe_table_align_right con: 44
  -> indented_code_block con: 28
  -> @ con: 37
  -> list_marker_minus con: 204
  -> backslash_escape con: 1
  -> list_marker_plus con: 4
  -> atx_h5_marker con: 5
  -> atx_h6_marker con: 2
  -> task_list_marker_unchecked con: 39
  -> task_list_marker_checked con: 4
  -> html_block con: 1
"""

