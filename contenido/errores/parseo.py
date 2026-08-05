from logger import LoggerNivel, loggear


class ErrorParseo(Exception):
    def __init__(self, mensaje: str, err: Exception | None) -> None:
        if err is not None:
            mensaje = f"{mensaje}, con error: {err}"

        loggear(LoggerNivel.FATAL, mensaje)
        super().__init__(mensaje)
