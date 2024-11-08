---
dia: 2023-04-08
tags:
  - ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - nota/facultad
  - ingeniería-en-informática/discreta/Álgebra-proposicional
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - ingeniería-en-informática/discreta/Álgebra-de-Boole
  - ingeniería-en-informática/estructura/Álgebra-de-Boole
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - ingeniería-electrónica/algebra-2/Espacios-Vectoriales
---
# Definición
---
Sea $A$ un [[Conjunto|conjunto]] dado en el que se han definido dos operaciones binarias $(\circ, \star)$. Entonces:

* La operación $\circ$ es distributiva por la izquierda con respecto de la operación $\star$ si se cumple que dados tres elementos $a, b, c \in A$, entonces $$ a \circ (b \star c) = (a \circ b) \star (a \circ c) $$
* La operación $\circ$ es distributiva por la derecha con respecto de la operación $\star$ si se cumple que dados tres elementos $a, b, c \in A$, entonces $$ (b \star c) \circ a = (b \circ a) \star (c \circ a) $$
* La operación $\circ$ es distributiva respecto de la operación $\star$ si es distributiva por la derecha y distributiva por la izquierda.

## Álgebra proposicional
---
Para el [[Álgebra de proposiciones|álgebra de proposiciones]] se entiende como 

$$ p ~ (q + r) = pq + pr, ~~~~ p + qr = (p + q)(p + r) $$ ^5d5bd9

## Álgebra de conjuntos
---
Para el [[Álgebra de conjuntos|álgebra de conjuntos]] se entiende como 

$$ P \cap (Q \cup R) = (P \cap Q) \cup (P \cap R), ~~~~ P \cup (Q \cap R) = (P \cup Q) \cap (P \cup R) $$ ^2904a4

## Álgebra de Boole
---
Para el [[Álgebra de Boole|álgebra de Boole]] $(B,~+,~\cdot,~',~0_B,~1_B)$ se tiene 

$$ \forall x, y, z \in B: ~~~~~ x (y + z) = xy + xz, ~~~ x + yz = (x + y)(x + z) $$ ^174ba9

## Números naturales
---
Sea $m,~ n,~ k \in \mathbb{N}$ se tiene

$$ m \cdot (n + k) = m \cdot n + m \cdot k $$ ^173bc3

## Espacios vectoriales
---
Para un [[Espacio vectorial|espacio vectorial]] $V$, un [[Cuerpo|cuerpo]] $\mathbb{K}$ y la operación [[Ley de composición externa|producto por escalar]] $\cdot$ respecto a los escalar, se tiene

$$ (\alpha + \beta) \cdot u = \alpha \cdot u + \beta \cdot u, ~~~ \forall u \in\mathbb{V}, ~~ \alpha, \beta \in\mathbb{K} $$ ^787267

Para un [[Espacio vectorial|espacio vectorial]] $V$, un [[Cuerpo|cuerpo]] $\mathbb{K}$ y la operación producto por escalar $\cdot$ respecto de la suma de vectores, se tiene

$$ \alpha \cdot (u + v) = \alpha \cdot u + \alpha \cdot v, ~~~ \forall u, v   \in\mathbb{V}, ~~ \alpha \in\mathbb{K} $$ ^cb49a0