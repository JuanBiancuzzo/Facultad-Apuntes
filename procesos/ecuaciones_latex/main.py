import signal
import base64
import sys
import io
import os
import matplotlib.pyplot as plt

EXTENSION = "png"

def crear_ecuacion(latex_string: str) -> bytes | None:
    try:
        fig, ax = plt.subplots()
        ax.text(
            0.5, 0.5, f"${latex_string}$", 
            size = 80, ha = "center",
            va = "center", color = "black",
        )
        ax.axis('off')
        fig.patch.set_alpha(0.0)
        ax.patch.set_alpha(0.0)

        buf = io.BytesIO()
        
        fig.savefig(
            buf, format = EXTENSION, dpi = 300, bbox_inches = "tight", 
            pad_inches = 0.2, transparent = True,
        )
        bytes_imagen = buf.getvalue()

        buf.close()
        plt.close(fig)

        return base64.b64encode(bytes_imagen)

    except Exception as e:
        print(f"Al crear la imagen ocurrio el error: {e}", file = sys.stderr)
        return None

def main():
    signal.signal(signal.SIGINT, lambda signum, frame: sys.stdin.close())

    try:
        for linea_latex in sys.stdin:
            bytes_imagen = crear_ecuacion(linea_latex)
            if bytes_imagen is None:
                print("Sale mal")

            else:
                sys.stdout.buffer.write(bytes_imagen)
                print("", end = "", flush = True)

    except Exception as err:
        print(f"Error: {err}", file = sys.stderr)

if __name__ == "__main__":
    main()
