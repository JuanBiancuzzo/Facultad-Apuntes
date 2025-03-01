---
dia: 2023-01-22
tags:
  - nota/facultad
  - ingeniería-en-informática/analisis-2/Propiedades-de-funciones
  - ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-electrónica/analisis-2/Propiedades-de-funciones
---
# Definición
---
El [[Límite|límite]] existe y es $L$ si los limites

$$ \lim{x \to x_0} f(x, \phi(x)), ~~ \lim{x \to x_0} f(x, \psi(x)) $$

existen (donde $y = \phi(x), y = \psi(x)$ son curvas que pasan por $(x_0, y_0)$), deben valer $L$

## Ejemplo
---
Supongamos que tenemos el siguiente [[Límite|límite]]

$$ \lim_{(x, y) \to (0, 0)} \frac{x \cdot y}{x^2+y^2} $$

Como vemos en el punto $(0, 0)$ no esta definida, entonces si hacemos [[Limites iterados|limites iterados]], seria

$$ \lim_{x \to 0}\Big( \lim_{y \to 0} \frac{x \cdot y}{x^2+y^2} \Big) = \lim_{x \to 0} \frac{x \cdot (0)}{x^2 + 0^2} = 0$$

Pero también podemos plantear como $y = x$, entonces 

$$ \lim_{(x, y) \to (0, 0)} f(x, y) = \lim{x \to 0} f(x, x) = \lim_{x \to 0} \frac{x \cdot x}{x^2+x^2} = \frac{1}{2} $$

Entonces podemos concluir que no existe el limite $\lim_{(x, y) \to (0, 0)} \frac{x \cdot y}{x^2+y^2}$

Tambien podriamos plantear el caso mas generico $y = kx$, y tambien $y = kx^2$

## Consecuencias
---
 * Que existe el limite con aproximaciones por curvas, no significa que exista el limite, es decir, es condicion necesaria pero no suficiente
 * Si existe resultados diferentes para curvas diferentes, entonces no existe el limite