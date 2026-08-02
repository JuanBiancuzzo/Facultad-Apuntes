from typing import cast
from dataclasses import dataclass
from enum import IntFlag

from logger import loggear, LoggerNivel
from contenido.serializacion import Ser
from .nodo import Nodo, TipoNodo, FnGuardarTexto, SER_ID, _hashear

class TipoPlano(IntFlag):
    _NADA          = 0b000000
    FLAG_BOLD      = 0b000001
    FLAG_ITALICS   = 0b000010
    FLAG_TACHADO   = 0b000100
    FLAG_RESALTADO = 0b001000
    FLAG_INFRA     = 0b010000
    FLAG_SUPRA     = 0b100000

    _MASCARA_POSICION = 0b110000

    def transformar_a_string(self) -> TipoString:
        return cast(TipoString, self << 2) | TipoString.PLANO

class TipoString(IntFlag):
    PLANO      = 0b00
    CODIGO     = 0b01
    COMENTARIO = 0b10
    ECUACION   = 0b11

    _MASCARA_TIPO = 0b11

    FLAG_PLANO_BOLD      = TipoPlano.FLAG_BOLD      << 2
    FLAG_PLANO_ITALICS   = TipoPlano.FLAG_ITALICS   << 2
    FLAG_PLANO_TACHADO   = TipoPlano.FLAG_TACHADO   << 2
    FLAG_PLANO_RESALTADO = TipoPlano.FLAG_RESALTADO << 2
    FLAG_PLANO_INFRA     = TipoPlano.FLAG_INFRA     << 2
    FLAG_PLANO_SUPRA     = TipoPlano.FLAG_SUPRA     << 2

@dataclass
class String(Nodo):
    """
    Consideraciones:
     * Cuando se serialicen todos los strings, realmente tener una
        cadena de caracteres utf8's de todos los strings concatenados
        y en cada estructura, se utilizan un indice de inicio y final
        sobre esta estructura
    """
    texto: str
    modificador: TipoString

    def __init__(self, texto: str, modificador: TipoString) -> None:
        self.texto = texto
        self.modificador = modificador

    def id(self) -> int:
        match self.modificador & TipoString._MASCARA_TIPO:
            case TipoString.PLANO:
                parcial = _hashear("a" + self.texto)
                return self._combinar(TipoNodo.TEXTO_PLANO, parcial)

            case TipoString.CODIGO:
                parcial = _hashear("b" + self.texto)
                return self._combinar(TipoNodo.CODIGO_INLINE, parcial)

            case TipoString.COMENTARIO:
                parcial = _hashear("c" + self.texto)
                return self._combinar(TipoNodo.COMENTARIO_INLINE, parcial)

            case TipoString.ECUACION:
                parcial = _hashear("d" + self.texto)
                return self._combinar(TipoNodo.ECUACION_INLINE, parcial)
        
        mensaje = f"De alguna forma se llego a un modificador invalido"
        loggear(LoggerNivel.FATAL, mensaje)
        raise Exception(mensaje)

    def string(self) -> str:
        return self.texto

    def reducir(self, exaustivo: bool) -> Nodo | None:
        return self if not self.vacio() else None

    def serializar(self, guadar_texto: FnGuardarTexto) -> bytes:
        inicio, final = guadar_texto(self.texto)
        match self.modificador & TipoString._MASCARA_TIPO:
            case TipoString.PLANO:
                return Ser.pack(
                    Ser.comb(SER_ID, Ser.Uint8, Ser.Uint8, Ser.Uint32, Ser.Uint32),
                    self.id(), TipoNodo.TEXTO_PLANO, self.modificador >> 2, inicio, final,
                )

            case TipoString.CODIGO:
                return Ser.pack(
                    Ser.comb(SER_ID, Ser.Uint8, Ser.Uint32, Ser.Uint32),
                    self.id(), TipoNodo.CODIGO_INLINE, inicio, final,
                )

            case TipoString.COMENTARIO:
                return Ser.pack(
                    Ser.comb(SER_ID, Ser.Uint8, Ser.Uint32, Ser.Uint32),
                    self.id(), TipoNodo.COMENTARIO_INLINE, inicio, final,
                )

            case TipoString.ECUACION:
                return Ser.pack(
                    Ser.comb(SER_ID, Ser.Uint8, Ser.Uint32, Ser.Uint32),
                    self.id(), TipoNodo.ECUACION_INLINE, inicio, final,
                )
        
        mensaje = f"De alguna forma se llego a un modificador invalido"
        loggear(LoggerNivel.FATAL, mensaje)
        raise Exception(mensaje)

    def vacio(self) -> bool:
        return self.texto.strip() == 0

@dataclass
class TextoPlano(String):
    def __init__(self, texto: str = "", modificador: TipoPlano = TipoPlano._NADA) -> None:
        if modificador & TipoPlano._MASCARA_POSICION == TipoPlano.FLAG_SUPRA | TipoPlano.FLAG_INFRA:
            mensaje = f"El texto plano no puede ser super e infra al mismo tiempo"
            loggear(LoggerNivel.ERROR, mensaje)
            raise Exception(mensaje)
        super().__init__(texto, modificador.transformar_a_string())

@dataclass
class CodigoInline(String):
    def __init__(self, texto: str = "") -> None:
        super().__init__(texto, TipoString.CODIGO)

@dataclass
class ComentarioInline(String):
    def __init__(self, texto: str = "") -> None:
        super().__init__(texto, TipoString.COMENTARIO)

@dataclass
class EcuacionInline(String):
    def __init__(self, texto: str = "") -> None:
        super().__init__(texto, TipoString.ECUACION)

