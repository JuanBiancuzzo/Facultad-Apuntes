---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
---
# Definición
---
Sea $X = (X_1, \cdot, X_n)$ un [[Vector aleatorio|vector aleatorio]] de [[Dimensión|dimensión]] $n$, definimos una [[Función de distribución|función de distribución]] de $X$ como $$ F_X(x) = \mathbb{P}(X_1 \leq x_1, \cdots, X_n \leq x_n) $$

### Propiedades, para cuando $\mathbb{X} = (X, Y)$
---
1) $\lim_{X, Y \to \infty}F_\mathbb{X}(x, y) = 1$, $\lim_{X,Y \to -\infty}F_\mathbb{X}(x, y) = 0$
2) $F_\mathbb{X}(x, y)$ es monotona no decreciente en cada variable
3) $F_\mathbb{X}(x, y)$ es continua a derecha en cada variable


## Calculo de probabilidad en un intervalo
---
 Dado una vector aleatorio $\mathbb{X}$, se puede calcular la [[Probabilidad|probabilidad]] de que $\mathbb{X}$ este en un intervalo $(a_1, b_1) \times (a_2, b_2)$  $$\mathbb{P}((X, Y) \in (a_1, b_1) \times (a_2, b_2)) = F_\mathbb{X}(b_1, b_2) - F_\mathbb{X}(a_1, b_2) - F_\mathbb{X}(b_1, a_2) + F_\mathbb{X}(a_1, a_2)$$