from dataclasses import dataclass

from .clave import Clave

@dataclass
class Nodo:
    id: int
    clave: Clave

