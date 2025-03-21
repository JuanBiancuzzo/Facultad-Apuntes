---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Variables-aleatorias-condicionadas
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Variables-aleatorias-condicionadas
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
aliases:
  - PMF condicional
  - Función de masa de probabilidad condicional
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $X$ e $Y$ [[Variable aleatoria discreta|variable aleatoria discreta]] haciendo un [[Vector aleatorio|vector aleatorio]], con [[Función de masa de probabilidad|función de probabilidad conjunta]] $p_{X,Y}(x, y)$ y [[Función de masa de probabilidad marginal|función de probabilidad marginal]] $p_X(x)$, entonces para cualquier valor de $X$ con el cual $p_X(x) > 0$, la [[Función de masa de probabilidad|función de probabilidad]] de la variable condicional de $Y$ dado que $X = x$ es  $$ \begin{align} p_{Y|X = x}(y) = \mathbb{P}(Y = y | X = x) &= \frac{\mathbb{P}(X = x, Y = y)}{\mathbb{P}(X = x)}  \\
p_{Y|X = x}(y) &= \frac{p_{X,Y}(x, y)}{p_X(x)}
\end{align}$$
Se define como $p_{Y|X = x}(y) = 0$ cuando $p_X(x) = 0$.

## Propiedades
---
Con esto, podemos calcular la [[Función de masa de probabilidad|función de probabilidad conjunta]] de la siguiente forma $$\begin{align}
p_{X,Y}(x, y) &= p_{Y|X = x}(y) \cdot p_X(x) \\
p_{X,Y}(x, y) &= p_{X|Y = y}(x) \cdot p_Y(y)
\end{align}$$

Sean $X$ e $Y$ [[Variable aleatoria discreta|variable aleatoria discreta]] tales que $p_{Y|X = x}(y) = p_Y(y)$ para todo $x \in \mathbb{R}$ entonces $X$ e $Y$ son [[Variables aleatorias independientes|variables aleatorias independientes]]

## Regla de la cadena
---
Podemos encontrar las [[Función de masa de probabilidad marginal|PMF marginal]] a partir de la [[Función de masa de probabilidad#Para vector aleatoria|PMF conjunta]], veamos un ejemplo $$ \begin{array}{rll}
    p_{X_1,~ X_2,~ X_3}(x_1,~ x_2,~ x_3) =& \\
    =& p_{X_1}(x_1) ~ p_{X_2,~ X_3}(x_2,~ x_3 \mid X_1 = x_1) \\
    &= p_{X_1}(x_1) ~ p_{X_2}(x_2) ~ p_{X_3}(x_3 \mid X_1 = x_1,~ X_2 = x_2) \\
    
    =& p_{X_2}(x_2) ~ p_{X_1,~ X_3}(x_1,~ x_3 \mid X_2 = x_2) \\
    &= p_{X_2}(x_2) ~ p_{X_3}(x_3) ~ p_{X_1}(x_1 \mid X_2 = x_2,~ X_3 = x_3) \\
    
    =& p_{X_3}(x_3) ~ p_{X_1,~ X_2}(x_1,~ x_2 \mid X_3 = x_3) \\
    &= p_{X_3}(x_3) ~ p_{X_1}(x_1) ~ p_{X_2}(x_2 \mid X_3 = x_3,~ X_1 = x_1) 
\end{array} $$