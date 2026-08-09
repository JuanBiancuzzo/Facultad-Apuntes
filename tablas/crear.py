from sqlite3 import Connection as Conn

from logger import LoggerNivel, loggear

from .tabla import Tabla, tablas_registradas
from .tabla import Tablas as NombreTablas


def cumple_dependencias(
    necesito: list[NombreTablas], creadas: list[NombreTablas]
) -> bool:
    if len(necesito) == 0:
        return True
    return all(nombre in creadas for nombre in necesito)


def crear_tablas(conn: Conn) -> list[Tabla]:
    creadas: list[NombreTablas] = []
    orden_tablas: list[Tabla] = []

    tablas_pendientes: dict[NombreTablas, Tabla] = {}
    dependencias: dict[NombreTablas, list[NombreTablas]] = {}

    for tabla in tablas_registradas():
        if not cumple_dependencias(tabla.necesito_tablas, creadas):
            # No tiene las dependencias necesarias
            tablas_pendientes[tabla.nombre] = tabla

            for tabla_dependo in tabla.necesito_tablas:
                if tabla_dependo in creadas:
                    continue

                actual = dependencias.get(tabla_dependo, [])
                actual.append(tabla.nombre)
                dependencias[tabla_dependo] = actual

            continue

        # Cumple las dependencias dependencias
        tabla.crear(conn)
        loggear(LoggerNivel.INFO, f"Creando tabla: {tabla.nombre}")

        creadas.append(tabla.nombre)
        orden_tablas.append(tabla)

        pendientes = dependencias.pop(tabla.nombre, [])
        while len(pendientes) > 0:
            pendiente = tablas_pendientes.get(pendientes.pop(0))
            if pendiente is None or not cumple_dependencias(
                pendiente.necesito_tablas, creadas
            ):
                continue

            pendiente.crear(conn)
            loggear(LoggerNivel.INFO, f"Creando tabla: {pendiente.nombre}")
            creadas.append(pendiente.nombre)
            orden_tablas.append(pendiente)
            pendientes.extend(dependencias.pop(pendiente.nombre, []))

        conn.commit()

    return orden_tablas
