---
dia: 2024-09-19
tags:
  - ingeniería-electrónica/electro/Ondas-electromagnéticas-en-el-vacío
  - nota/facultad
referencias:
  - "256"
aliases:
  - Ecuación vectorial de D' Alembert
  - Ecuación escalar de D' Alembert
  - Onda progresiva#^onda-progresiva
  - Onda regresiva#^onda-regresiva
---
# Definición
---
La ecuación de onda es una importante [[Ecuación diferencial en derivadas parciales|ecuación diferencial en derivadas parciales]] lineal de segundo orden que describe la propagación de una variedad de ondas, como las ondas sonoras, las ondas de luz y las ondas en el agua. Es importante en varios campos como la acústica, el [[Campo electromagnético|electromagnetismo]], la [[Física cuántica|mecánica cuántica]] y la dinámica de fluidos. Históricamente, el problema de una cuerda vibrante como las que están en los instrumentos musicales fue estudiado por Jean le Rond d'Alembert (1746) por primera vez, Leonhard Euler (1748), Daniel Bernoulli (1753) y Joseph-Louis Lagrange (1759). Se hallaron soluciones en diversas formas que ocasionaron discusiones por más de veinticinco años. Las disputas aún se resolvieron en el siglo XIX $$ \frac{\partial^2}{\partial t^2}u = c^2 ~ \nabla^2 u = c^2 ~ \Delta u $$ donde $\Delta \equiv \nabla^2$ es el [[Laplaciano|laplaciano]] y donde $c$ es una constante que representa la velocidad de propagación de la onda<sup><a href="#ref-256" style="color: inherit; text-decoration: none;">[256]</a></sup> 

Se conoce como ecuaciones escalar de D' Alembert y ecuaciones vectoriales de D' Alembert, a estas donde se agrega la información sobre la [[Función|función]] que esta siendo aplicada esta ecuación

El doble signo de la función determina el sentido de la propagación
* $f(z - ct)$ propagación según $+z$ ^onda-progresiva
* $f(z + ct)$ propagación según $-z$ ^onda-regresiva

## En forma fasorial
---
La función la podemos expresar $$ u(\vec{r},~t) = \tilde{u}(\vec{r}) ~ e^{i \omega t} $$
Esto permite reescribir la ecuación de la siguiente forma

$$ \nabla^2 \tilde{u} + k^2 \tilde{u} = \Delta \tilde{u} + k^2 \tilde{u} = 0, ~~~~~~ \text{con} ~ k = \frac{\omega}{c} $$ ^ecuacion-fasorial

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```