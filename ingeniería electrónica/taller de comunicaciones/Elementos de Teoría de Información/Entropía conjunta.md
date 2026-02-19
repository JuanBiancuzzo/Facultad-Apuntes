---
dia: 2026-02-19
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Se define la entropía conjunta en función de las [[ingeniería en informática/orga/Compresión/Entropía|entropías]] particulares, y la [[Información mutua|información mutua]] de la siguiente manera $$ \begin{align} 
    H(X,~ Y) &= H(X) + H(Y) - I(X \mid Y) \\ 
     &= -\sum_{x \in \mathbb{X}} \sum_{y \in \mathbb{Y}} p(x,~ y) \log_2\left( p(x,~ y) \right)
\end{align} $$

