---
dia: 2025-04-15
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dada una [[Sucesión de variables aleatorias|sucessión]] $\set{X_n}_{n \in \mathbb{N}_0}$ decimos que $X_n$ tiende a $X$ con [[Probabilidad|probabilidad]] $1$ o en forma casi segura (almost sure, a.s.) si $$ \mathbb{P}\left( \Set{ \omega \in \Omega : \lim_{n \to \infty} X_n(\omega) = X(\omega) } \right) = 1 $$ esto se denota como $X_n \xrightarrow{a.s.} X$ 

Esto se puede entender como el [[Conjunto|conjunto]] de puntos en los cuales la sucesión tiene una [[Convergencia puntual|convergencia puntual]] a $X(\omega)$, y ver cual es la probabilidad como forma de ver que tanto abarca este conjunto. En el caso donde la probabilidad es $1$ no implica que converge puntualmente para todo $\omega \in \Omega$, sino que en los puntos que no están incluidos en ese conjunto tienen probabilidad $0$

## Relación con otros tipos de convergencia
---
Esta es una de las convergencias más fuertes, ya que esta implica la [[Convergencia en probabilidad|convergencia en probabilidad]], y sabemos que esta implica la [[Convergencia en distribución|convergencia en distribución]] $$ X_n \xrightarrow{a.s.} X \implies X_n \xrightarrow{p} X \implies X_n \xrightarrow{d} X $$
Notemos que no tiene ninguna implicación con la [[Consistencia en media cuadrática#^def-5-2-9|convergencia en media cuadrática]] 