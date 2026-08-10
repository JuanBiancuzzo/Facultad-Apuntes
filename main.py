import os
import sqlite3 as sql
from functools import partial

import logger
from archivos import ArchivoGeneral
from argumentos import Argumentos
from contenido import postprocesar, preprocesar, registrar
from dependencias import ManagerDependencias
from lectura import Procesar, procesar_archivos
from tablas import crear_tablas
from workers import worker_sin_salida


def cargar_datos(args: Argumentos, conn: sql.Connection):
    # Intentamos crear tablas en orden de dependencias
    tablas_creadas = crear_tablas(conn)

    archivos = procesar_archivos(
        Procesar(
            args.input_path,
            lambda nombre: preprocesar(ArchivoGeneral.parsear(nombre, args.input_path)),
            args.directorios_omitir,
            args.archivos_omitir,
            args.tamanio_batch,
        )
    )

    manager = ManagerDependencias()
    try:
        for archivo in archivos:
            cursor = conn.cursor()
            manager.insertar_nodos(cursor, registrar(archivo))
            conn.commit()
            cursor.close()

    finally:
        manager.close()

    for tabla in tablas_creadas[::-1]:
        resultado = postprocesar(tabla)
        if resultado is None:
            continue

        cursor = conn.cursor()

        filas, procesar = resultado
        worker_sin_salida(
            filas,
            partial(procesar, cursor),
            cant_threads=args.tamanio_batch,
            bloquear=True,
        )

        cursor.close()
        conn.commit()


def guardar_schema(conn: sql.Connection, path_schema: str):
    cursor = conn.cursor()

    cursor.execute("SELECT sql FROM sqlite_master WHERE sql IS NOT NULL")
    resultado = cursor.fetchall()

    with open(path_schema, "w", encoding="utf-8") as archivo:
        archivo.writelines(f"{tabla[0]};\n\n" for tabla in resultado)

    cursor.close()


def main(args: Argumentos) -> None:
    path_bdd = f"{args.output_path}{args.base_de_datos}"
    path_schema = f"{args.output_path}{args.schema}"

    if os.path.exists(path_bdd):
        os.remove(path_bdd)

    conn = sql.connect(path_bdd)

    try:
        if args.logs_path:
            logger.inicializar(args.logs_path)
        cargar_datos(args, conn)

    finally:
        conn.commit()
        conn.execute("VACUUM")

        guardar_schema(conn, path_schema)

        conn.close()
        logger.terminar()


if __name__ == "__main__":
    args, err = Argumentos.parsear()
    if err is None:
        main(args)

    else:
        print(err)
