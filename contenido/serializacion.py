import struct
from enum import StrEnum
from typing import Any

BIG_ENDIAN = ">"
LITTLE_ENDIAN = "<"

ENDINES = BIG_ENDIAN


class Ser(StrEnum):
    Uint8 = f"{ENDINES}B"
    Uint16 = f"{ENDINES}H"
    Uint32 = f"{ENDINES}I"
    Uint64 = f"{ENDINES}Q"

    Int8 = f"{ENDINES}b"
    Int16 = f"{ENDINES}h"
    Int32 = f"{ENDINES}i"
    Int64 = f"{ENDINES}q"

    Bytes = "s"

    @classmethod
    def comb(cls, *ser: Ser) -> str:
        solo_bytes = all(s == Ser.Bytes for s in ser)
        elementos = "".join(s if s == Ser.Bytes else s[1] for s in ser)

        return elementos if solo_bytes else f"{ENDINES}{elementos}"

    @classmethod
    def pack(cls, ser: Ser | str, *datos: Any) -> bytes:
        return struct.pack(ser, *datos)
