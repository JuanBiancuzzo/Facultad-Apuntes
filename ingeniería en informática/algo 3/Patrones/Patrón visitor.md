---
dia: 2026-07-01
etapa: empezado
referencias:
  - "1165"
aliases: []
tags:
  - carrera/ingeniería-en-informática/algo-3/Patrones
  - carrera/ingeniería-en-informática/ingenieria-software-1/Diseño-de-software
  - nota/facultad
vinculoFacultad:
  - tema: Patrones
    capitulo: 1
    materia: Algoritmos y programación 3
    carrera: Ingeniería en informática
  - tema: Diseño de software
    capitulo: 8
    materia: Análisis de la información
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este patrón se utiliza cuando se tiene el siguiente problema, cuando se tiene muchos tipos diferentes de objetos, y se quiere hacer una acción sobre ellos, pero necesariamente una acción particular para cada uno

El patrón lo resuelve creando una [[ingeniería en informática/taller/Sintaxis/Interfaz|interfaz]] que define esas acciones particulares para cada uno de los objetos, y un visitor concreto de esta interfaz, implementaría como realizar esta acción particular

Esto se ve más claro cuando se busca guardar un conjunto de objetos en un tipo de formato de [[ingeniería en informática/sisop/File system/Archivo|archivo]], donde se implementaría un `VisitorPdf` el cual podría tomar cualquier objeto y exportarlo en [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de densidad de probabilidad|PDF]]. Ahora con la interfaz, se podría crear otros visitor's para exportar de distintas formas

![[ingeniería en informática/algo 3/Patrones/img/Patrón visitor.png|500]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```