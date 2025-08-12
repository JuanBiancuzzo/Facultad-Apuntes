---
dia: 2023-03-29
tags:
  - carrera/ingeniería-electrónica/taller/Concurrencia
  - carrera/ingeniería-en-informática/concurrentes/Introducción
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - carrera/ingeniería-en-informática/taller/Concurrencia
  - nota/facultad
referencias:
  - "787"
etapa: empezado
vinculoFacultad:
  - tema: Introducción
    capitulo: 1
    materia: Programación Concurrente
    carrera: Ingeniería en informática
  - tema: Introduccion
    capitulo: "0"
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
  - tema: Concurrencia
    capitulo: 5
    materia: Sistemas operativos
    carrera: Ingeniería en informática
  - tema: Concurrencia
    capitulo: 4
    materia: Taller de programación 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un programa concurrente, las diferentes partes de un programa se ejecutan independientemente. No necesariamente al mismo tiempo

Este programa consiste de un conjunto finito de procesos secuenciales. Y estos [[Proceso|procesos]] están compuestos por un conjunto finito de instrucciones atómicas

El proceso concurrente, es intercalar estas instrucciones atómicas del conjunto de procesos secuenciales

Este también es un desafío para un [[Sistema operativo|sistema operativo]], al tener que manejar los procesos de manera de [[Mínimo|minimizar]] el tiempo sin hacer nada
## Modelos
---
* [[Fork-join|Paralelismo fork-join]]
* [[Programación asincrónica|Programación asincrónica]]

## Desafíos
---
Se necesita sincronizar y comunicar entre procesos diferentes.

### Sincronizar
Coordinación temporal entre distintos procesos.

### Comunicar
Datos que necesitan compartir los procesos para cumplir la función del programa.


## Problemas
---
### Condiciones de carrera
![[Race condition#Definición]]

### Atomicity violation
El deseo de la serialización entre múltiples accesos a memoria es violado.

### Order violation
El orden deseado entre accesos a memoria se ha cambiado.

### Deadlocks
![[Deadlock#Definición]]



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```