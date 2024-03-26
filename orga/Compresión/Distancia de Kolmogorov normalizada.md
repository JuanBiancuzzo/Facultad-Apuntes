---
dia: 2023-04-03
materia: orga
capitulo: 4
---
### Definición
---
Se define como la [[Distancia de Kolmogorov]] pero dividida por el peor caso, que es cuando ambas cadenas son [[Cadena aleatorio|aleatorias]]. Por lo tanto se calcula $$ NKD(x, y) = \frac{K(xy) - \min\Set{K(x), K(y)}}{\max\Set{K(x), K(y)}} $$
Por lo tanto nos da $0$ en el caso que sean de igual [[Complejidad de Kolmogorov|complejidad]] y su concatenación también, y $1$ cuando sean completamente [[Cadena aleatorio|aleatorios]] y su concatencación también.