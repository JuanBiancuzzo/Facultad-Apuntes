---
dia: 2023-01-23
tags:
  - ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
  - ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
---
# Definición
---
Sean $X$, $Y$ dos [[Variable aleatoria continua|variable aleatoria continua]], una [[Función de densidad|función de densidad]] de [[Probabilidad|probabilidad]] $f_{X, Y}(x, y)$ de estas dos variables es una [[Función|función]] que satisface
1. $f_{X, Y}(x, y) \geq 0$
2. $\iint_{(x, y) \in \mathbb{R}^2} f_{X, Y}(x, y) dx dy = 1$

## Calculo de probabilidad en un intervalo
---
Dado $X$, $Y$ dos variable aleatoria continua, se calcula la probabilidad en un intervalo $A$ como
$$ \mathbb{P}((X, Y) \in A) = \iint_A f_{X, Y}(x, y) dx dy $$

# Teorema
---
Sea $F_{X,Y}(x, y)$ la [[Función de distribución para vector aleatorio|función de distribución]] de un [[Vector aleatorio|vector aleatorio]] de variables complejas, luego $$ f_{X,Y}(x,y) = \frac{\partial^2 F_{X,Y}(x,y)}{\partial x \cdot \partial y} $$
