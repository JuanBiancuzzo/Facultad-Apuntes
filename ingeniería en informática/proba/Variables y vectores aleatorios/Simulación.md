---
dia: 2023-01-23
tags:
  - ingeniería-en-informática/proba/Variables-y-vectores-aleatorios
  - nota/facultad
  - ingeniería-electrónica/proba/Variables-y-vectores-aleatorios
---
# Definición
---
Dada una [[Variable aleatoria|variable aleatoria]] $X$, con una cierta [[Función de distribución|función de distribución]] $F_X$, la simulación es usando una variable aleatoria $U$, crear una [[Función de variable aleatoria|función de variable aleatoria]] $g(U)$ tal que $X$ y $g(U)$ sean [[Eventos equivalentes|eventos equivalentes]]

En términos generales, pedimos 
$$ F_X(x) = F_{U}(g(u)) $$

Usando la [[Inversa generalizada]] podemos despejar $x$, dejando
$$ x = F_X^{-1} \circ F_U(g(u)) $$
Y si planteamos que $U \sim U(0, 1)$ una [[Distribución uniforme|distribución uniforme]], tenemos 
$$ x = F_X^{-1}(g(u)) $$

Y conseguimos:

## Teorema
---
Si $F$ es una [[Función|función]] que cumple
* Ser no decreciente
* $\lim_{x \to -\infty} F(x) = 0$ y $\lim_{x \to \infty} F(x) = 1$ 
* Continua por derecha

Entonces si defino $X = F^{-1}(U)$ con $U \sim U(0, 1)$ se tiene que $X$ es una variable aleatoria cuya función de distribución es la función $F$ dada