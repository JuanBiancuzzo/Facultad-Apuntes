---
dia: 2025-03-04
etapa: ampliar
referencias:
  - "868"
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - Ley de Gustafson-Barsis
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
La ley de Gustafson (o también como ley de Gustafson-Barsis) es una ley en [[Ciencia de la computación|ciencia de la computación]] que establece que cualquier problema suficientemente grande puede ser eficientemente [[Sistema paralelo|paralelizado]]

Esta ley se define de la siguiente forma $$ S(P) = P - \alpha (P - 1) $$ donde $S$ es el speedup, $P$ es el número de [[Microprocesadores|procesadores]], y $\alpha$ es la porción no paralelizable del [[Proceso|proceso]]. Como se puede notar, la ley está expresada en términos de $P$

![[Ley de Gustafson.png]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```