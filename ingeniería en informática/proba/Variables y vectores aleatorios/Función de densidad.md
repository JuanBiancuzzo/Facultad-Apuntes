---
dia: 2023-01-23
tags:
  - ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
  - ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
---
# Definición
---
Una [[Función|función]] $f_X : \mathbb{R} \to \mathbb{R}$, para $X$ siendo una [[Variable aleatoria continua|variable aleatoria continua]], que satisface las siguientes condiciones
1. $f_X(x) \geq 0, \forall x \in \mathbb{R}$
2. $\int_{-\infty}^{\infty} f_X(x) dx = 1$


## Calculo de probabilidad en un intervalo
---
Dado una variable aleatoria continua $X$ se calcula la [[Probabilidad|probabilidad]] en un intervalo $(a, b)$ como 
$$ \mathbb{P}(a < X < b) = \int_a^b f_X(x) dx $$
Para cualquier $a$ y $b$ tales que $-\infty < a < b < \infty$ tenemos 


# Teorema
---
Sea $F_X(x)$ la [[Función de distribución|función de distribución]] de una variable aleatoria continua, luego 
$$ f_X(x) = \frac{d}{dx} F_X(x) $$
