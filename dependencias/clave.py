from dataclasses import dataclass
from hashlib import shake_256


@dataclass
class Clave:
    tipo: int
    hash: int

    @classmethod
    def de_texto(cls, tipo: int, texto: str) -> Clave:
        return Clave(tipo, Clave.hashear(texto))

    @classmethod
    def de_tupla(cls, par: tuple[int, int]) -> Clave:
        return Clave(par[0], par[1])

    @classmethod
    def hashear(cls, texto: str) -> int:
        return int(shake_256(texto.encode("utf-8")).hexdigest(7), 16)

    def __str__(self) -> str:
        return f"Clave(tipo: {self.tipo}, hash: {self.hash})"

    def __hash__(self) -> int:
        return Clave.hashear(f"{self.tipo}->{self.hash}")
