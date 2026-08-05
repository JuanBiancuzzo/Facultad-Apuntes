from logger import LoggerNivel, loggear


class ErrorInsertar(Exception):
    def __init__(self, mensaje: str, err: Exception) -> None:
        mensaje = f"{mensaje}, con error: {err}"
        loggear(LoggerNivel.FATAL, mensaje)
        super().__init__(mensaje)


class ErrorIdNoGenerado(Exception):
    def __init__(self, mensaje: str) -> None:
        loggear(LoggerNivel.FATAL, mensaje)
        super().__init__(mensaje)
