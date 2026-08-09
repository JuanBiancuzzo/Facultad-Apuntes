from sqlite3 import Cursor

from abc import ABC, abstractmethod

from .clave import Clave
from .nodo import Nodo


class Dato(ABC):
    @abstractmethod
    def obtener_clave(self) -> Clave:
        """Devuelve su propia clave, en el caso que tenga"""

    @abstractmethod
    def dependo(self) -> list[Clave]:
        """Devuelve una lista de clave a las cuales depende"""
        return []

    @abstractmethod
    def insertar_datos(
        self, cursor: Cursor, dependencias: dict[Clave, int]
    ) -> Nodo | None:
        """
        Inserta en la base de datos, su valor pero sin referencias.
        Devuelve su clave y su id, representado en ese nodo
        """
