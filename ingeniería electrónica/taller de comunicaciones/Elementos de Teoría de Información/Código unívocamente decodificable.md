---
dia: 2025-09-05
etapa: empezado
referencias: []
aliases:
  - Código UD
  - Eficiencia de un código unívocamente decodificable#^eficiencia
  - Eficiencia de un código UD#^eficiencia
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Dada un [[Código de fuente|código de fuente]], el cual mapea una secuencia de la [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Fuente discreta sin memoria|fuente]] a una secuencia codificada, si este mapeo es una [[ingeniería electrónica/analisis 3/Funciones elementales/Función biyectiva|función biyectiva]] entonces el código es unívocamente decodificable

También se puede pensar que para cualquier secuencia de la fuente, corresponde una única secuencia codificada generada por el código de fuente


> [!teorema]+ Teorema 8.1.2  
> Un [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código prefijo|código prefijo]] es siempre [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Código unívocamente decodificable|unívocamente decodificable]] 
> 
> ```tikz
> \usepackage{amssymb}
> \usetikzlibrary{math}
> \usetikzlibrary{calc}
> 
> \begin{document} 
> 	\begin{tikzpicture}[ultra thick]     	
>     	\begin{scope}
>         	\clip (0, 0) ellipse (5 and 2.5) 
>                 	(1.5, 0) arc (360:0:1.5) 
>                 	(1.75, .75) rectangle (4, 1.5); 
>             	
>             \foreach \x in {-6, -5.5, ..., 5} {
>                 \draw (\x, -2.5) -- ({\x + 1}, 2.5);
>             }    
>     	\end{scope}
>     	\draw (0, 0) ellipse (5 and 2.5) 
>             (1.5, 0) arc (360:0:1.5);
>     	
>     	\path (1.75, .75) -- (4, 1.5)
>         	node[midway, font=\bfseries] {Códigos UD};
>         \path (0, 0) node[align=center, font=\bfseries] {Códigos\\prefijo};
>     	
> 	\end{tikzpicture}
> \end{document}
> ```
^teo-8-1-2

Se puede definir la eficiencia de un código UD, a partir de [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Longitud promedio de un alfabeto|longitud promedio]] y la [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Longitud promedio de un alfabeto#^longitud-minima|longitud mínima]] de la siguiente forma $$ \eta = \frac{L_\text{min}}{\bar{L}} = \frac{H(\mathcal{S})}{\log_2{r} ~ \bar{L}} $$ la última igualdad dada por el [[ingeniería electrónica/taller de comunicaciones/Elementos de Teoría de Información/Teorema de codificación de fuente|teorema de codificación de fuente]] ^eficiencia