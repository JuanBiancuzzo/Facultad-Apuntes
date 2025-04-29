---
dia: 2025-04-27
etapa: ampliar
referencias: []
aliases:
  - Espacio L<sup>2<\sup> de variables aleatorias
  - Espacio L2 de variables aleatorias
tags:
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Vamos a definir el [[Espacio de probabilidad|espacio de probabilidad]] $L^2(\Omega,~ \mathcal{A},~ \mathbb{P})$ donde se define como $$ L^2 = \Set{ X : X ~\text{es una VA y}~ E\left[ X^2 \right] < \infty } $$ donde lo podemos pensar como el [[Conjunto|conjunto]] de variables aleatorias con [[Varianza|Energía de una variable aleatoria#^energia]]. Esto implica que la [[Esperanza|esperanza]] de $X$ es finita y por lo tanto también su [[Varianza|varianza]]

Este espacio, es tanto un [[Espacio vectorial|espacio vectorial]], como un [[Espacio de Hilbert|espacio de Hilbert]]

