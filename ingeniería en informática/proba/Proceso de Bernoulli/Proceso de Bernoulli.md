---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Proceso-de-Bernoulli
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Proceso-de-Bernoulli
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
etapa: ampliar
referencias: []
aliases: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Dado varias [[Variable aleatoria|variables aleatorias]] $X_i$ donde $X_i \sim Ber(p)$ una [[Distribución de Bernoulli|distribución de Bernoulli]], donde tiene 
* Una distribución dicotómica, puede salir $1$ o no
* $\mathbb{P}(X_i = 1) = p$ para toda $i$ ($p$ es constante)
* Los experimentos son [[Variables aleatorias independientes|independientes]]
Esto se llama proceso de Bernoulli, y $X_i = 1$ se lo llama éxito y $p$ la probabilidad del éxito


## Cantidad $n$ de ensayos de Bernoulli
---
Dado la variable $Y$ como la cantidad de éxitos en $n$ ensayos de Bernoulli, su [[Rango de una variable aleatoria|rango]] es $R_Y = \Set{0,~ 1,~ 2,~ \cdots,~ n}$ y vemos que $Y$ tiene una [[Distribución Binomial|distribución Binomial]], $Y \sim B(n,~ p)$. Pero notemos que $$Y = \sum_{i = 1}^{n}X_i$$

## Cantidad de ensayos hasta el primer éxito
---
Dado la variable $N$ como la cantidad de ensayos de Bernoulli hasta el primer éxito, su [[Rango de una variable aleatoria|rango]] es $R_N = \mathbb{N}$ y vemos que $N$ tiene una [[Distribución Geométrica|distribución Geométrica]], $N \sim G(p)$


## Cantidad de ensayos de Bernoulli con $k$ éxitos
---
Dado la variable $W$ como la cantidad de ensayos de Bernoulli hasta lograr $k$ éxitos, su [[Rango de una variable aleatoria|rango]] es $R_W = \Set{k,~ k+1,~ \cdots~}$ y vemos que $W$ tiene una [[Distribución de Pascal|distribución de Pascal]], $W \sim Pas(k,~ p)$. Pero notemos que $$ W = \sum_{i = 0}^{k} N_i $$ donde $N_i \sim G(p)$ e [[Variables aleatorias independientes|independientes]] entre si