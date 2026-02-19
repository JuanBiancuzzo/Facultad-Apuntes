---
dia: 2025-09-22
etapa: empezado
referencias: []
aliases: 
  - Código absolutamente óptimo#Código absolutamente óptimo
  - Código adaptado a la fuente#Código absolutamente óptimo
  - Código quasi-absolutamente óptimo#Código quasi-absolutamente óptimo
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
Es el [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código unívocamente decodificable|código]] que tiene la menor [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Longitud promedio de un alfabeto|longitud promedio]] $\bar{L}$ para una dada [[ingeniería en informática/orga/Visualizaciones/Distribución discreta|distribución de probabilidad]] $\set{p_0,~ p_1,~ \cdots,~ p_{K - 1}}$

Se puede definir un código óptimo como un código absolutamente óptimo, en el caso de ser posible, o sino un código quasi-absolutamente óptimo

## Código absolutamente óptimo
---
Los [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código de fuente|código de fuente]] donde cumplen que la [[ingeniería en informática/discreta/Autómatas/Palabra#^longitud|longitud de sus palabras]] están determinadas por las [[investigación/matemática/Probabilidad/Probabilidad|probabilidades]] de la fuente, de la siguiente forma $$ l_k = -\log_r(p_k) ~~~ \forall k $$ donde $l_k$ es el largo del $k$-esimo [[ingeniería en informática/estructura/Sistemas numéricos/Símbolo|símbolo]] y $p_k$ es la probabilidad que la fuente genere ese $k$-esimo símbolo

Esto produce que la [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Longitud promedio de un alfabeto|longitud promedio]] de $\bar{L} = \frac{H(\mathcal{S})}{\log_2(r)}$ el cual por el [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Teorema de codificación de fuente|1er Teorema de Shannon]] es la mínima longitud promedio

> [!observacion]+ Observación 8.1.5  
> Para una dada [[ingeniería en informática/orga/Visualizaciones/Distribución discreta|distribución de probabilidad]] $\set{p_0,~ p_1,~ \cdots,~ p_{K - 1}}$ puede no existir un código absolutamente óptimo pues para una base $m$ cualquiera, se puede ver como la [[ingeniería en informática/discreta/Autómatas/Palabra#^longitud|longitud]] $$ l_k = - \frac{\log_m(p_k)}{\log_m(r)} \notin \mathbb{N} $$ haciendo que para la base $m$ no se pueda tener una [[ingeniería en informática/discreta/Autómatas/Palabra|palabra]] con una longitud para obtener la [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Longitud promedio de un alfabeto|longitud promedio]] mínima
^obs-8-1-5

De esta observación aparecen los códigos quasi-absolutamente óptimos

## Código quasi-absolutamente óptimo
---
Los [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código de fuente|código de fuente]] donde cumplen que la [[ingeniería en informática/discreta/Autómatas/Palabra#^longitud|longitud de sus palabras]] están determinadas por las [[investigación/matemática/Probabilidad/Probabilidad|probabilidades]] de la fuente, de la siguiente forma $$ l_k = -\lceil \log_r(p_k) \rceil ~~~ \forall k $$ donde $l_k$ es el largo del $k$-esimo [[ingeniería en informática/estructura/Sistemas numéricos/Símbolo|símbolo]] y $p_k$ es la probabilidad que la fuente genere ese $k$-esimo símbolo

Donde a diferencia de los códigos absolutamente óptimos, los quasi-absolutamente óptimos siempre son posibles de construir un [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código prefijo|código prefijo]] con [[ingeniería en informática/discreta/Autómatas/Palabra|palabras]] de código con longitud $l_0,~ l_1, ~ \cdots, l_{K - 1}$