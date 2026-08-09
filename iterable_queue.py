import queue


class IterQueue(queue.Queue):
    def __init__(self):
        self.super().__init__()

    def __iter__(self):
        while True:
            try:
                valor = self.get()
                self.task_done()
                yield valor

            except queue.ShutDown:
                break
