import os
import sqlite3 as sql
import logger 

from dependencias import ManagerDependencias
from archivos import Archivo

from argumentos import Argumentos 
from lectura import procesar_archivos, Procesar
from tablas import crear_tablas

from contenido import registrar 

def parsear_archivos(nombre: str) -> Archivo | None:
    archivo, err = Archivo.parsear(nombre, args.input_path)
    if err is not None:
        print(err)
        return None
    return archivo

def cargar_datos(args: Argumentos, conn: sql.Connection):
    # Intentamos crear tablas en orden de dependencias
    crear_tablas(conn)

    archivos = procesar_archivos(Procesar(
        args.input_path, 
        parsear_archivos,
        args.directorios_omitir, 
        args.archivos_omitir,
    ))

    manager = ManagerDependencias()
    try:
        for archivo in archivos:
            cursor = conn.cursor()
            manager.insertar_nodos(cursor, registrar(archivo))
            conn.commit()
            cursor.close()

    except Exception as e:
        manager.close()
        raise e

    manager.close()

def main(args: Argumentos) -> None:
    if os.path.exists(args.output_path):
        os.remove(args.output_path)

    conn = sql.connect(args.output_path)
    error = None

    try: 
        if args.logs_path: 
            logger.inicializar(args.logs_path)
        cargar_datos(args, conn)

    except Exception as e:
        error = e

    conn.commit()
    conn.execute("VACUUM")
    conn.close()

    logger.terminar()

    if error is not None:
        raise error

if __name__ == "__main__":
    args, err = Argumentos.parsear()
    if err is None:
        main(args)

    else:
        print(err)
