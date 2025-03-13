---
dia: 2025-03-13
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es [[Modelo|modelo]] en [[Espacio de estados|espacio de estados]] está dado por la [[Ecuación diferencial ordinaria|ecuación diferencial]] de primer orden, de $n$ dimensiones $$ \frac{dx}{dt} = f(x,~ u,~ t) $$ junto con la ecuación de salida $$ y = h(x,~ u,~ t) $$ donde 
* $x(t) \in \mathbb{R}^n$, es el [[Variable de estado|vector de estados]]
* $u(t) \in \mathbb{R}^p$, es el vector de entradas
* $y(t) \in \mathbb{R}^q$, es el vector de salidas

Notemos que no necesariamente tiene que depender del tiempo, es decir que en ese caso el sistema es [[Sistema invariante en el tiempo|invariante en el tiempo]]

## Caso lineal
---
En el caso donde $f$ sea una [[Función lineal|función lineal]], podemos expresar estas ecuaciones de la siguiente forma $$ \begin{align} 
    \dot{x}(t) &= A(t) ~ x(t) + B(t) ~ u(t) \\
    y(t) &= C(t) ~ x(t) + D(t) ~ u(t) \\
\end{align} $$
![[Modelo en espacio de estados en bloques.png]]

