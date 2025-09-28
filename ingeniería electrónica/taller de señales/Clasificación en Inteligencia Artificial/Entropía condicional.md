---
dia: 2025-09-26
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Clasificación-en-Inteligencia-Artificial
  - nota/facultad
vinculoFacultad:
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Se define la entropía condicional como $$ H(Y \mid X) = \mathbb{E}\left[ -\log P_{Y \mid X = X}(Y) \right] $$ donde la [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|esperanza]] presente en la entropía condicional es medida con respecto a la [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de distribución#Para vector aleatorio|distribución conjunta]] de $(X,~ Y)$. En este sentido $H(Y \mid X) = \mathbb{E}\left[ H(P_{Y \mid X = X}) \right]$, donde la [[ingeniería en informática/orga/Compresión/Entropía de Shannon|entropía]] $H(P_{Y \mid X = X})$ es [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] de $x$

Esta puede ser usada para calcular la [[Entropía conjunta|entropía conjunta]] dada de la siguiente forma $$ H(X,~ Y) = H(Y \mid X) + H(X) $$

