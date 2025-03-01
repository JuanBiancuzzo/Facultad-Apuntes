---
dia: 2023-01-22
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
---
# Definición
---
El concepto de limite [[Función|función]] es el mismo que para funciones de una variable, por lo menos en esencia. Pero volveremos a plantear el concepto de cercanía, para que se adapte a funciones de varias variables

Sea $f : U \subseteq \mathbb{R}^n \to \mathbb{R}$, con $U$ siendo un [[Conjunto abierto|conjunto abierto]], y $x_0$ un punto de $U$o bien un [[Punto frontera|punto frontera]] de $U$

$$ \lim_{x \to x_0} f(x) = L $$

si dado cualquier $\epsilon > 0$ existe un $\delta  > 0$ tal que 

$$ x \in B(x_0, \delta) \cap U(x \ne x_0) \iff f(x) \in B(L, \epsilon) $$

![[Límites de una función de varias variables.webp]]


## Formas de resolver limites
---
 * [[Limites iterados|Limites iterados]]
 * [[Aproximaciones por curvas|Aproximar por curvas]]

## Operaciones
---
Tomando que $f, g : U \subseteq \mathbb{R}^n \to \mathbb{R}$ dos funciones definidas en el abierto $U$ de $\mathbb{R}^n$ y sea $x_0$ un punto de $U$ o un [[Punto frontera]] de $U$. Suponiendo que 

$$ \lim_{x \to x_0} f(x) = L, ~~ \lim_{x \to x_0} g(x) = M $$

Es decir que la suma de los limites es la suma de los limites individuales
* [[Suma de limites|Suma de limites]]
* [[Producto de limites|Producto de limites]]
* [[Cociente de limites|Cociente de limites]]