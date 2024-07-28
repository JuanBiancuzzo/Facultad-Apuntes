---
dia: 2023-01-22
tags:
  - analisis-2/Capitulo-5
  - nota
---
### Definición
---
En este caso, vamos a aplicar el [[Analisis de extremos locales para campos escalares]], cuando sus variables deben cumplir ciertas condiciones, denominadas **condiciones de vinculo** entre las mismas

La forma mas directa de resolver estas situaciones, consiste en imponer la condicion o condiciones de vinculo mediante la [[Composición de funciones]]

Vamos a tener una expresion a maximar, que llamaremos $f(x, y)$  y una condicion de vinculo que llamaremos $\vec{g}$ y sera una [[Funciones implicitas]], esta va a tener un dominio reducido

De $\vec{g}$ despejaremos una variable. Entonces ahora podremos plantear $h(x)$ tal que

$$ h(x) = f(\vec{g}(x)) $$

La cual aplicaremos el analisis de extremos locales

## Ejemplo

Halle el paralelepipedo rectangular de volumen maximo, tal que el area de superficie frontera resulte igual a $54 cm^2$

Con longitudes de lagos $x$, $y$, $z$, debemos maximizar $f(x, y, z) = xyz$ respetando que el area total $2xy + 2xz + 2yz = 54$

Entonces de la condicion de vinculo, vamos a despejar una variable

$$ z = \frac{27 - xy}{x + y}, \text{ con } x, y \in \mathbb{R}^+ \land xy < 27 $$

Entonces queda $h(x, y) = f(\vec{g}(x, y)) = xy\frac{27 - xy}{x + y}$ con $x, y \in \mathbb{R}^+ \land xy < 27$, buscamos el valor maximo de $h(x, y)$ con el [[Analisis de extremos absolutos]], y llegamos que el hay un maximo en $(3, 3)$ que es $\vec{g}(3, 3) = 3$ entonces el volumen maximo es $27 cm^3$