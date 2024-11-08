---
dia: 2022-09-29
tags:
  - analisis-3/Transformaciones-conformes
  - nota/facultad
aliases:
  - Función C-lineal
  - Función R-lineal
---
# Definición
---
Una [[Función|función]] $f : \mathbb{C} \to \mathbb{C}$ es $\mathbb{C}$-lineal, con $(\mathbb{C}, +, \mathbb{C}, \cdot)$, sii
$$\begin{align}
	\forall z, w \in \mathbb{C} &: f(z + w) = f(z) + f(w) \\
	\forall z, \lambda \in \mathbb{C} &: f(\lambda \cdot z) = \lambda \cdot f(z)
\end{align}$$
Donde la única [[Transformación conforme|transformación conforme]] que es $\mathbb{C}$-lineal es la que  $$ f(z) = f(z \cdot 1) = z \cdot f(1) = w_0 \cdot z $$ por lo que son [[Transformación de rotación|transformación de rotación]] y [[Transformación de homotecia|transformación de homotecia]]

Viéndolo de esta forma, entonces $$f(z) = (h_{|w_0|} \circ R_{Arg(w_0)})(z)$$

### Observación
---
Toda función $f : \mathbb{C} \to \mathbb{C}$ es $\mathbb{C}$-lineal, entonces es una función R-lineal

## Función R-lineal
---
Una función $f : \mathbb{C} \to \mathbb{C}$ es $\mathbb{C}$-lineal, con $(\mathbb{C}, +, \mathbb{C}, \cdot)$, sii
$$\begin{align}
	\forall z, w \in \mathbb{C} &: f(z + w) = f(z) + f(w) \\
	\forall z \in \mathbb{C}, \lambda \in \mathbb{R} &: f(\lambda \cdot z) = \lambda \cdot f(z)
\end{align}$$


