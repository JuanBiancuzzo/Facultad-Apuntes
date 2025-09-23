---
dia: 2025-09-22
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
Los [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código de fuente|código de fuente]] donde cumplen que la [[ingeniería en informática/discreta/Autómatas/Palabra#^longitud|longitud de sus palabras]] están determinadas por las [[investigación/matemática/Probabilidad/Probabilidad|probabilidades]] de la fuente, de la siguiente forma $$ l_k = -\lceil \log_r(p_k) \rceil ~~~ \forall k $$ donde $l_k$ es el largo del $k$-esimo [[ingeniería en informática/estructura/Sistemas numéricos/Símbolo|símbolo]] y $p_k$ es la probabilidad que la fuente genere ese $k$-esimo símbolo

Donde a diferencia de los [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código absolutamente óptimo|códigos absolutamente óptimos]], los quasi-absolutamente óptimos siempre son posibles de construir un [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código prefijo|código prefijo]] con [[ingeniería en informática/discreta/Autómatas/Palabra|palabras]] de código con longitud $l_0,~ l_1, ~ \cdots, l_{K - 1}$
