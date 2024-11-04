---
dia: 2024-09-23
etapa: empezado
referencias:
  - "274"
  - "275"
tags:
  - matemática
  - nota/investigacion
aliases:
  - Signed Distance Function
  - Signed Distance Field
  - SDF
orden: 302
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En matemáticas la [[Función|función]] [[Distancia|distancia]] con signo mide cuán cerca se encuentra un punto $x$ de un [[Conjunto|conjunto]] $S$ otorgándole un signo según el punto se encuentre de "un lado o de otro" del conjunto $S$ $$ f(x) = \begin{cases} 
    d(x,~S) & \text{si} ~ x \in A \\ 
    0 & \text{si} ~ x \in S \\ 
    -d(x,~S) & \text{si} ~ x \in B \\ 
\end{cases} $$ donde $d(x,~S) = \inf_{y \in S} ~ d(x,~y)$ es la distancia ordinaria de un punto a un conjunto $A$ y $B$ son conjuntos disjuntos que se definen según las características de $S$

Ver [Inigo Quilez 2D distance functions](https://iquilezles.org/articles/distfunctions2d/)

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```