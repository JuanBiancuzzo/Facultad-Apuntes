---
dia: 2022-11-25
etapa: ampliar
referencias: []
aliases:
  - Polo
  - Singularidad externa#^externa
  - Singularidad de tipo 1#^externa
  - Singularidad interna#^interna
  - Singularidad de tipo 2#^interna
tags:
  - carrera/ingeniería-electrónica/analisis-3/Series-de-Laurent
  - carrera/ingeniería-en-informática/analisis-3/Series-de-Laurent
  - nota/facultad
vinculoFacultad:
  - tema: Series de Laurent
    capitulo: 8
    materia: Análisis matemático 3
    carrera: Ingeniería electrónica
  - tema: Cinemática y estática
    capitulo: 3
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Una singularidad de una función $f : D \to \mathbb{C}$ [[Holomorfa|holomorfa]] en un [[Conjunto abierto|abierto]] $D \subset \mathbb{C}$ es un punto $z_0 \in \mathbb{C} - D$

## Robótica
---
Se puede entiende las singularidades de un [[investigación/robótica/robótica industrial/Robótica industrial|robot]], como las variables [[ingeniería electrónica/robótica industrial/Cinemática y estática/Articulación|articulares]] $q$ donde para la misma [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|terna]] del [[End-effector|end-effector]], existen un [[ingeniería en informática/algebra 2/Espacios Vectoriales/Conjunto|conjunto]] no finito de combinaciones de variables articulares

También se puede entender, que el [[ingeniería en informática/analisis 2/Funciones de varias variables/Jacobiana|Jacobiano]] $J$ de velocidades [[ingeniería en informática/analisis 2/Nomenclatura/Sistema cartesiano|cartesianas]] cuando tiene un [[ingeniería en informática/algebra 2/Transformaciones lineales/Núcleo de una transformación lineal|núcleo]] con [[ingeniería en informática/algebra 2/Espacios Vectoriales/Dimensión|dimensión]] mayor a $0$, que representa que existe una [[Velocidad|velocidad]] y/o [[Velocidad angular|velocidad angular]] de la terna del end-effector, a pesar de desarrollar velocidades en los ejes, permanece inmóvil

Esta segunda, nos permite representar 
* Las velocidades no alcanzables como el núcleo de $J$, $\text{Nu}(J)$
* Los pares, [[Translación|posición]] y [[ingeniería en informática/algebra 2/Transformaciones lineales/Rotación|orientación]] no alcanzables como el núcleo de $J^T$, $\text{Nu}\left( J^T \right)$

Se puede clasificar las singularidades según como se puede salir de la misma, donde se tiene $q_{sing} \in \text{Nu}(J)$, y se entiende que el movimiento articular en una dirección que no pertenezca al núcleo de $J$ hace que se salga de la singularidad, entonces se clasifica como
* Externa, o tipo $1$ ^externa
	* El movimiento en el núcleo de $J$ modifica la situación, dejando $q \ne q_{sing}$, por lo que cualquier movimiento te saca de la singularidad
* Interna, o tipo $2$ ^interna
	* El movimento en el núcleo de $J$ no modifica la situación, dejando $q = q_{sing}$, por lo que se tiene que mover por fuera del núcleo para salir de la singularidad