---
dia: 2023-11-15
tags:
  - carrera/ingeniería-en-informática/sisop/La-abstracción-de-proceso
  - nota/facultad
referencias:
  - "787"
etapa: ampliar
vinculoFacultad:
  - tema: La abstracción de proceso
    capitulo: 2
    materia: Sistemas operativos
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La virtualización de [[Microprocesadores|procesamiento]] es la forma de virtualización más primitiva, consiste en dar la ilusión de la existencia de un único [[Microprocesadores|procesador]] para cualquier [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] que requiera de su uso
De esta forma, se provee

### Simplicidad en la programación
---
* Cada [[Proceso]] cree que tiene toda la [[Microprocesadores|Procesador]]
* Cada proceso cree que todos los dispositivos le pertenecen
* Distintos dispositivos parecen tener el mismo nivel de interaces
* Las interfaces con los dispositivos son más potentes que el [[Hardware|bere metal]]

### Aislamiento frente a Fallas
---
* Los [[Proceso|procesos]] no pueden directamente afectar a otros procesos
* Los errores no colapsan toda la máquina

El [[Sistema operativo|S.O.]] crea esta ilusión mediante la [[Virtualización del procesador|virtualización de la CPU]]  a través del [[Kernel]].

## Interfaz de procesos
---
![[Proceso#API's]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```