---
dia: 2023-01-22
materia: analisis 2
capitulo: 2
---
Supongamos que tenemos el siguiente limite

$$ \lim_{(x, y) \to (0, 0)} \frac{x \cdot y}{x^2+y^2} $$

Como vemos en el punto $(0, 0)$ no esta definida, entonces si hacemos [[Limites iterados]], seria

$$ \lim_{x \to 0}\Big( \lim_{y \to 0} \frac{x \cdot y}{x^2+y^2} \Big) = \lim_{x \to 0} \frac{x \cdot (0)}{x^2 + 0^2} = 0$$

Pero tambien podemos plantear como $y = x$, entonces 

$$ \lim_{(x, y) \to (0, 0)} f(x, y) = \lim{x \to 0} f(x, x) = \lim_{x \to 0} \frac{x \cdot x}{x^2+x^2} = \frac{1}{2} $$

Entonces podemos concluir que no existe el limite $\lim_{(x, y) \to (0, 0)} \frac{x \cdot y}{x^2+y^2}$

Tambien podriamos plantear el caso mas generico $y = kx$, y tambien $y = kx^2$

## Definicion
El limite existe y es $L$ si los limites

$$ \lim{x \to x_0} f(x, \phi(x)), \text{ } \lim{x \to x_0} f(x, \psi(x)) $$

existen (donde $y = \phi(x), y = \psi(x)$ son curvas que pasan por $(x_0, y_0)$), deben valer $L$


## Consecuencias
 * Que existe el limite con aproximaciones por curvas, no significa que exista el limite, es decir, es condicion necesaria pero no suficiente
 * Si existe resultados diferentes para curvas diferentes, entonces no existe el limite