---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
aliases:
  - Media
  - Valor esperado
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es el promedio ponderado que puede tomar una [[Variable aleatoria|variable aleatoria]] $X$. Análogo al centro de masa de un objeto

Sea $X$ una variable aleatoria con [[Función de distribución|función de distribución]] $F_X(x) = \mathbb{P}(X \leq x)$, si $h(X)$ es una [[Función de variable aleatoria|función de variable aleatoria]] cualquiera de $X$, si definimos $A$ como el [[Conjunto|conjunto]] de [[Átomo de una distribución|átomos]], entonces $$ E[h(X)] = \sum_{x \in A} h(x) \cdot \mathbb{P}(X = x) + \int_{x \in \mathbb{R} - A} h(x) \cdot F_{X}'(x) \cdot dx $$
### Notación
Se puede expresar $\mu(X) = E[X]$

## Para vector aleatorio
---
Sea $X \in \mathbb{R}^n$ un [[Vector aleatorio|vector aleatorio]] $n$-dimensional. La medio o esperanza de $X$ es un vector de las esperanzas de sus componentes $$ E[X] = \mu_X = \begin{bmatrix} E[X_1] \\ E[X_2] \\ \vdots \\ E[X_n] \end{bmatrix} $$

## Casos específicos
---
Dado una función de variable aleatoria $h(X)$ cualquiera

### Para variable discreta
---
Sea $X$ una [[Variable aleatoria discreta|variable aleatoria discreta]] con [[Función de masa de probabilidad|función de probabilidad]] $p_X(x)$, el valor esperado (o media) de $X$ es $$ E[h(X)] = \sum_{x \in R_X} h(x) \cdot p_X(x) $$ donde $R_X$ es el [[Rango de una variable aleatoria|rango]]

### Para variable continua
---
Sea $X$ una [[Variable aleatoria continua|variable aleatoria continua]] con [[Función de densidad de probabilidad|función de densidad]] $f_X(x)$, el valor esperado de $X$ es $$ E[h(X)] = \int_{x \in \mathbb{R}} h(x) \cdot f_X(x) \cdot dx $$
## Esperanza total
---
Dado los conjuntos $A_1, A_2, \cdots, A_n$ tal que $\displaystyle\bigcup_{i = 1}^{n} A_i = \mathbb{R}$ y  $\displaystyle\bigcap_{i = 1}^{n} A_i = \emptyset$, es decir la [[Partición|partición]] del espacio $\mathbb{R}$, entonces se puede calcular la esperanza usando la [[Esperanza condicional|esperanza condicional]] $$ E[X] = \sum_{i = 1}^{n} E[X | X \in A_i] \mathbb{P}(X \in A_i) $$ 


## Propiedad
---
* Sea $X$ una [[Variable aleatoria|variable aleatoria]], con $E[X] = \mu$ si $h(X) = a \cdot X + b$ entonces $E[h(X)] = a \cdot \mu + b$ 
* Se puede calcular la esperanza como $$ E[X] = \int_0^\infty (1 - F_X(x)) \cdot dx - \int_{-\infty}^0 F_X(x) \cdot dx $$

## Observación
---
* $E(X)$ no ne necesariamente tiene que pertenecer al [[Soporte|soporte]] $R_X$ 