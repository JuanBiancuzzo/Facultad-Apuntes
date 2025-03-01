---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Esperanza-condicional
  - nota/facultad
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-electrónica/proba/Esperanza-condicional
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
---
# Definición
---
Definimos a la [[Variable aleatoria|variable aleatoria]] esperanza condicional de $Y$ dado $X$, denotada por $E[Y|X]$, como la [[Función de regresión|función de regresión]] evaluado en $X$ de forma que $$ \varphi(X) = E[Y|X] $$
Dada una variable aleatoria $X$, si se quiere calcular la [[Esperanza|esperanza]] pero cuando $X$ es una [[Truncamiento|variable truncada]], en el [[Conjunto|conjunto]] $B$ de la siguiente forma $$ E[X | X \in B] = \frac{E[X \cdot \mathbb{1} \{ X \in B \}]}{\mathbb{P}(X \in B)} $$

Por lo tanto, podemos definir el conjunto $A$ siendo el conjunto de [[Átomo de una distribución|átomos]], la [[Función de distribución|función de distribución]] $F_X(x)$, y la [[Función de variable aleatoria|función de variable aleatoria]] $h(x)$ $$ E[X | X \in B] = \frac{1}{\mathbb{P}(X \in B)} \Bigg(\sum_{x \in A, x \in B}  h(x) \cdot \mathbb{P}(X = x) + \int_{x \in \mathbb{R} - A, x \in B} h(x) \cdot F_{X}'(x) \cdot dx \Bigg)$$
## Propiedades
---
* La esperanza de la "esperanza condicional de $Y$ dado $X$" es la esperanza de $Y$ $$ E[E[Y|X]] = E[Y] $$
* Sean $X$ e $Y$ variables aleatorias, $s$ y $r$ funciones medibles tales que las variables aleatorias $r(X) \cdot s(Y)$, $r(X)$ y $s(Y)$ tienen esperanza finita. Entonces $$ E[r(X) \cdot s(Y)|X] = r(X) \cdot E[s(Y)|X] $$
* Sean $Y_1$ e $Y_2$ variables aleatorias con esperanza finita. Entonces $$ E[a \cdot Y_1 + b Y_2 | X] = a \cdot E[Y_1| X] + b \cdot E[Y_2| X] $$
* $X$ e $Y$ son [[Variables aleatorias independientes|variables independientes]] si $E[Y|X] = E[Y]$
* $E[r(X)|X] = r(X)$

# Observación
---
* La esperanza condicional siempre existe, y además es única con [[Probabilidad|probabilidad]] $1$.
* Es la [[Función|función]] que mejor predice a $Y$.
* Si $E[Y|X]$ es una función de $X$ y esta es lineal, esta coincide con la [[Recta de regresión|recta de regresión]]

