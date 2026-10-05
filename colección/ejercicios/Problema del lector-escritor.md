---
dia: 2026-10-04
tags:
  - carrera/ingeniería-en-informática/concurrentes/Sincronización
  - colección/ejercicios/ejercicio
  - nota/colección
  - nota/facultad
numero: 718
etapa: empezado
nombre: Problema del lector-escritor
referencias:
  - "1265"
aliases: []
vinculoFacultad:
  - tema: Sincronización
    capitulo: 4
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
# Enunciado
---
Supongamos que tenemos un estado que se comparte entre varios [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|procesos]], una [[ingeniería en informática/concurrentes/Sincronización/Sección critica|sección critica]]. Algunos procesos necesitan actualizar dicho estado, mientras que otros solo necesitan leerlo

Mientras que un proceso está leyendo el estado, otros pueden leerlo, pero ninguno modificarlo. Por otro lado, mientras que un proceso está modificado el estado, ningún otro puede leerlo ni modificarlo

# Resolución
---


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```