---
dia: 2023-01-22
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-2/Propiedades-de-funciones
  - carrera/ingeniería-electrónica/analisis-2/Propiedades-de-funciones
---
# Definición
---
En este caso, vamos a aplicar el [[Análisis de extremos locales para campos escalares|análisis de extremos locales]], cuando sus variables deben cumplir ciertas condiciones, denominadas **condiciones de vinculo** entre las mismas

La forma mas directa de resolver estas situaciones, consiste en imponer la condición o condiciones de vinculo mediante la [[Composición de relaciones#Funciones|composición de funciones]]

Vamos a tener una expresión a maximar, que llamaremos $f(x, y)$  y una condición de vinculo que llamaremos $\vec{g}$ y sera una [[Función implícita|función implícita]], esta va a tener un [[Dominio de una función|dominio]] reducido

De $\vec{g}$ despejaremos una variable. Entonces ahora podremos plantear $h(x)$ tal que

$$ h(x) = f(\vec{g}(x)) $$

La cual aplicaremos el análisis de [[Extremo|extremos]] locales

## Ejemplo
---
Halle el paralelepípedo rectangular de volumen máximo, tal que el area de [[Superficie|superficie]] frontera resulte igual a $54 cm^2$

Con longitudes de lagos $x$, $y$, $z$, debemos maximizar $f(x, y, z) = xyz$ respetando que el area total $2xy + 2xz + 2yz = 54$

Entonces de la condicion de vinculo, vamos a despejar una variable

$$ z = \frac{27 - xy}{x + y}, \text{ con } x, y \in \mathbb{R}^+ \land xy < 27 $$

Entonces queda $h(x, y) = f(\vec{g}(x, y)) = xy\frac{27 - xy}{x + y}$ con $x, y \in \mathbb{R}^+ \land xy < 27$, buscamos el valor máximo de $h(x, y)$ con el [[Análisis de extremos absolutos|análisis de extremos absolutos]], y llegamos que el hay un máximo en $(3, 3)$ que es $\vec{g}(3, 3) = 3$ entonces el volumen máximo es $27 cm^3$