import signal
import sys

from fastembed import TextEmbedding

MODELO = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"

def main():
    modelo = TextEmbedding(MODELO)
    signal.signal(signal.SIGINT, lambda signum, frame: sys.stdin.close())

    try:
        for linea in sys.stdin:
            embbeding = next(modelo.embed(linea.strip()))
            sys.stdout.buffer.write(embbeding.tobytes())
            print("", end = "", flush = True)

    except Exception as err:
        print(f"Error: {err}", file = sys.stderr)

if __name__ == "__main__":
    main()
