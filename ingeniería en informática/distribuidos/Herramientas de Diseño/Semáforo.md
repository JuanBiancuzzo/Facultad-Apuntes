---
dia: 2025-03-03
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un semáforo es un [[Mecanismo de sincronización|mecanismo de sincronización]] el cual utiliza una variable [[Números enteros|entera]] para acceder a recursos compartido. Esta misma queda definida por los valores que puede adoptar, por ejemplo $S = \set{0,~ 1,~ 2}$

Tiene dos operaciones validas que son
* `signal(P)`: Incrementa el valor de $S$
* `wait(V)`: Decrementa el valor de $S$

Un [[Mutex|mutex]] usa un $S = \set{0,~ 1}$, el cual se usa para acceder a [[Sección critica|secciones críticas]]

En el caso de que se llame a `signal` pero $S$ este en su valor máximo, el [[Proceso|proceso]] que lo llamo se queda [[Estados de un proceso#Blocked|bloqueado]] hasta que algún otro proceso use `wait` liberando ese recurso

