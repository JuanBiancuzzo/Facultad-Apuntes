---
dia: 2023-03-29
tags:
  - ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
  - ingeniería-en-informática/taller/Concurrencia
  - ingeniería-electrónica/taller/Concurrencia
  - ingeniería-en-informática/concurrentes/Introducción
referencias:
  - "787"
etapa: empezado
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