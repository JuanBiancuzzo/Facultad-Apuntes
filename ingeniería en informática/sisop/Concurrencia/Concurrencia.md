---
dia: 2023-03-29
tags:
  - ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
  - ingeniería-en-informática/taller/Concurrencia
  - ingeniería-electrónica/taller/Concurrencia
  - ingeniería-en-informática/concurrentes/Introducción
  - resumen/Concurrencia
---
# Definición
---
Un programa concurrente, las diferentes partes de un programa se ejecutan independientemente. No necesariamente al mismo tiempo

Este programa consiste de un conjunto finito de procesos secuenciales. Y estos [[Proceso|procesos]] están compuestos por un conjunto finito de instrucciones atómicas

El proceso concurrente, es intercalar estas instrucciones atómicas del conjunto de procesos secuenciales

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
