---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/proba/Esperanza-condicional
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-en-informática/proba/Esperanza-condicional
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
aliases:
  - Ley de la esperanza total#^ley-esperanza-total
  - Ley de suavizado de la esperanza#^ley-esperanza-total
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Definimos a la [[Variable aleatoria|variable aleatoria]] esperanza condicional de $Y$ dado $X$, denotada por $E[Y|X]$, como la [[Función de regresión|función de regresión]] evaluado en $X$ de forma que $$ \varphi(X) = E[Y|X] $$
Dada una variable aleatoria $X$, si se quiere calcular la [[Esperanza|esperanza]] pero cuando $X$ es una [[Truncamiento|variable truncada]], en el [[Conjunto|conjunto]] $B$ de la siguiente forma $$ E[X | X \in B] = \frac{E[X \cdot \mathbb{1} \{ X \in B \}]}{\mathbb{P}(X \in B)} $$

Por lo tanto, podemos definir el conjunto $A$ siendo el conjunto de [[Átomo|átomos]], la [[Función de distribución|función de distribución]] $F_X(x)$, y la [[Función de variable aleatoria|función de variable aleatoria]] $h(x)$ $$ E[X | X \in B] = \frac{1}{\mathbb{P}(X \in B)} \Bigg(\sum_{x \in A, x \in B}  h(x) \cdot \mathbb{P}(X = x) + \int_{x \in \mathbb{R} - A, x \in B} h(x) \cdot F_{X}'(x) \cdot dx \Bigg)$$
## Para vector aleatorio
---
Sea un [[Evento|evento]] $A$. Luego, definimos el operador $E[~\cdot \mid A]$ como $$ E[X \mid A] = \int_{\mathbb{R}^n} x ~ f_{X \mid A}(x \mid A) ~ dx $$
Usando la [[Variable continua condicional|función de densidad condicional]] $f_{X \mid A}(x \mid A)$

## Propiedades
---
* Esperanza condicional de una constante $$ E[~a \mid X = x] = a $$
* Linealidad de $Y$ y $Z$ con esperanza finita. Entonces $$ E[~aY + bZ \mid X = x] = a ~ E[Y \mid X = x] + b ~ E[Z \mid X = x] $$
* Sean $X$ e $Y$ variables aleatorias, $s$ y $r$ funciones medibles tales que las variables aleatorias $r(X) \cdot s(Y)$, $r(X)$ y $s(Y)$ tienen esperanza finita. Entonces $$ E[r(X) \cdot s(Y)|X] = r(X) \cdot E[s(Y)|X] $$
* La esperanza de la "esperanza condicional de $Y$ dado $X$" es la esperanza de $Y$ $$ E[E[Y|X]] = E[Y] $$ ^ley-esperanza-total
  > [!demostracion]- Demostración
  > Dado $X_1 \in \mathbb{R}^n$ y $X_2 \in \mathbb{R}^m$, considerando el evento $A = \set{X_1 = x_1}$ tenemos $$ E[X_2 \mid A] = \int x_2 ~ f_{X_2 \mid X_1}(x_2 \mid X_1 = x_1) ~ dx_2 = g(x_1) $$
  > 
  > $g(x_1)$ es una [[Función|función]] de $x_1$. Si consideramos todas sus posibles realizaciones, $g(X_1)$ es una vector aleatorio de $m$ componentes como $X_2$
  > 
  > Al ser un vector aleatorio, podemos calcular su esperanza $$ \begin{align} 
  >     E[g(X_1)] &= E\left[ E[X_2 \mid X_1] \right] = \int_\mathbb{R} g(x_1) ~ f_{X_1}(x_1) ~ dx_1 \\
  >     &= \int_\mathbb{R} \int_\mathbb{R} x_2 ~ \underbrace{f_{X_2 \mid X_1}(x_2 \mid X_1 = x_1) ~ f_{X_1}(x_1)}_{f_{X_1,~ X_2}(x_1,~ x_2)} ~ dx_1 ~ dx_2 \\
  >     &= \int_\mathbb{R} x_2 ~ \underbrace{\int_\mathbb{R} f_{X_1,~ X_2}(x_1,~ x_2)~ dx_1}_{f_{X_2}(x_2)} ~ dx_2 \\
  >     &= \int_\mathbb{R} x_2 ~ f_{X_2}(x_2) ~ dx_2 = E[X_2]
  > \end{align} $$
  
* $X$ e $Y$ son [[Variables aleatorias independientes|variables independientes]] si $E[Y|X] = E[Y]$
* $E[r(X)|X] = r(X)$


# Observación
---
* La esperanza condicional siempre existe, y además es única con [[Probabilidad|probabilidad]] $1$.
* Es la [[Función|función]] que mejor predice a $Y$.
* Si $E[Y|X]$ es una función de $X$ y esta es lineal, esta coincide con la [[Recta de regresión|recta de regresión]]

