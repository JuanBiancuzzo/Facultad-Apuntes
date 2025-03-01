---
dia: 2023-01-22
tags:
  - ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - nota/facultad
  - carrera/ingeniería-electrónica/algebra-2/Espacios-Vectoriales
---
# Definición
---
Las ecuaciones que resolveremos son las ecuaciones diferenciales lineales homogeneas de orden 2, que tiene la forma 
$$y'' + a_1 \cdot y' +a_0 \cdot y = 0$$
con $a_0, a_1 \in \mathbb{R}$

Cuando tenemos una ecuacion de este tipo, vamos a proponer que la solucion a esta ecuacion es de tipo $y = e^{rx}$. Despues la reemplazaremos en la ecuacion diferencial donde podremos despejar los valores de $r$. La cantidad de soluciones van a ser 2 (porque es una ecuacion de segundo orden)

## Ejemplo
$$y'' - 6 \cdot y' + 8 \cdot y = 0$$
Proponemos que la solucion va a ser de tipo $y = e^{rx}$ y para reemplazarla encontraremos sus derivadas, que son $y' = r\cdot e ^{rx}$ y $y'' = r^2 \cdot e^{rx}$, por lo que nos queda
$$r^2 \cdot e^{rx} - 6 \cdot r\cdot e ^{rx} + 8 \cdot e^{rx} = 0$$
$$(r^2 - 6 \cdot r + 8) \cdot e^{rx} = 0$$
$$r^2 - 6 \cdot r + 8 = 0$$
$$r = 2 \lor r = 4$$
Entonces nos quedaron dos soluciones entonces el conjunto de funciones que resuelven esta ecuacion es el [[Subespacio]] $S=\{e^{2x}, e^{4x}\}$

