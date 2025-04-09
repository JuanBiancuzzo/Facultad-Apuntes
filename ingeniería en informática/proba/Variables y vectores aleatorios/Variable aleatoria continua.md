---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
etapa: ampliar
aliases:
  - Vector aleatorio continuo#Para vector aleatorio
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Una [[Variable aleatoria|variable aleatoria]] es continua si se cumplen las siguientes condiciones

1. Su [[Conjunto|conjunto]] de valores posibles se compone de todos los números que hay en un solo intervalo, o en una unión excluyente de intervalos

2. Ningún valor posible de la variable aleatoria tiene [[Probabilidad|probabilidad]] positiva, es decir $\mathbb{P}(X = c) = 0, \forall c \in \mathbb{R}$

### Punto de vista de los átomos
---
La variable aleatoria $X$ será continua si $F_X(x)$ es continua (el conjunto de [[Átomo|átomos]] es vacío)


### Otras formas de definirla
---
* Sea $X$ una variable aleatoria continua, entonces existe una [[Función de densidad de probabilidad|función de densidad]]
* La [[Función de distribución|función de distribución]] es continua.

## Para vector aleatorio
---
Un [[Vector aleatorio|vector aleatorio]] $X = [X_1,~ \cdots,~ X_n]^T$ se dice continuo si admite una [[Función de densidad de probabilidad|función de densidad]], $f_X(x) : \mathbb{R}^n \to \mathbb{R}$ que satisface lo siguiente
* $f_X(x) \ge 0$, $\forall x \in \mathbb{R}^n$
* $\displaystyle \int_{\mathbb{R}^n} f_X(x) ~ dx = 1$
