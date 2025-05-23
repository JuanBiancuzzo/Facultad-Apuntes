---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
---
# Definición
---
Se dice que una familia de distribuciones (continuas o discretas) en $\mathbb{R}^q$ con distribución $F_\theta(x)$, $\theta \in \Theta \subset \mathbb{R}^k$ es una familia exponencial a $k$ parámetros, si su [[Función de densidad de probabilidad]] (o de [[Función de masa de probabilidad|probabilidad]]) se puede escribir como $$ f_\theta(x) = A(\theta) \cdot e^{\displaystyle\sum_{i = 1}^k c_i(\theta) \cdot r_i(x)} \cdot h(x) $$ donde $$ \begin{align}
	c_i(\theta) &: \Theta \to \mathbb{R} \\
	A(\theta) &: \Theta \to \mathbb{R}^+ \\
	r_i(x) &: \mathbb{R}^q \to \mathbb{R} \\
	h(x) &: \mathbb{R}^q \to \mathbb{R}^+ 
\end{align} $$

# Teorema
---
![[Teorema de la familia exponencia#Definición]]

# Propiedad
---
![[Test de una familia exponencial#Definición]]