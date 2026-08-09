import threading
from collections.abc import Callable, Iterable
from queue import Queue, ShutDown
from typing import Any

from iterable_queue import IterQueue
from logger.logger import LoggerNivel, loggear

type FnProcesarSalida = Callable[[Any], Any]
type FnProcesarSinSalida = Callable[[Any], None]


class ErrWorker(Exception):
    def __init__(self, mensaje: str) -> None:
        loggear(LoggerNivel.FATAL, mensaje)
        super().__init__(mensaje)


def _thread_procesar_sin_salida(
    queue_entrada: IterQueue, procesar: FnProcesarSinSalida
):
    for elementos in queue_entrada:
        for elemento in elementos:
            procesar(elemento)


def _thread_procesar_salida(
    queue_entrada: IterQueue, procesar: FnProcesarSalida, queue_salida: Queue
):
    for elementos in queue_entrada:
        for elemento in elementos:
            queue_salida.put(procesar(elemento))


def worker_con_salida(
    entrada: Iterable[Any],
    procesar: FnProcesarSalida,
    salida: Queue,
    cant_threads: int = 1,
    batch: int = 1,
    bloquear: bool = True,
) -> None:
    _worker(
        entrada,
        (procesar, salida),
        cant_threads,
        batch,
        bloquear,
    )


def worker_sin_salida(
    entrada: Iterable[Any],
    procesar: FnProcesarSinSalida,
    cant_threads: int = 1,
    batch: int = 1,
    bloquear: bool = True,
) -> None:
    _worker(
        entrada,
        procesar,
        cant_threads,
        batch,
        bloquear,
    )


def _worker(
    entrada: Iterable[Any],
    procesar: tuple[FnProcesarSalida, Queue] | FnProcesarSinSalida,
    cant_threads: int,
    batch: int,
    bloquear: bool,
) -> None:
    if batch < 1:
        raise ErrWorker(
            f"El tamaño del batch ({batch}) es invalido, deberia ser mayor o igual a 1"
        )

    if cant_threads < 1:
        mensaje = f"El numero de thread ({cant_threads}) es invalido, deberia ser mayor o igual a 1"
        raise ErrWorker(mensaje)

    queues: list[IterQueue] = []
    threads: list[threading.Thread] = []
    for _ in range(cant_threads):
        queue_entrada = IterQueue()

        if type(procesar) is tuple[FnProcesarSalida, Queue]:
            args = (queue_entrada, *procesar)
            thread = threading.Thread(
                target=_thread_procesar_salida, args=args, daemon=True
            )

        elif type(procesar) is FnProcesarSinSalida:
            args = (queue_entrada, procesar)
            thread = threading.Thread(
                target=_thread_procesar_sin_salida, args=args, daemon=True
            )

        else:
            loggear(
                LoggerNivel.ERROR,
                "Se logró crear un worker pero sin un tipo de procesamiento definido",
            )
            continue

        queues.append(queue_entrada)
        threads.append(thread)

        thread.start()

    elementos = []
    queue_actual = 0
    for elemento in entrada:
        elementos.append(elemento)

        if len(elementos) >= batch:
            queues[queue_actual].put(elementos)
            queue_actual = (queue_actual + 1) % threads

    if len(elementos) > 0:
        queues[queue_actual].put(elementos)

    for queue, thread in zip(queues, threads):
        queue.shutdown(immediate=False)
        if bloquear:
            thread.join()
