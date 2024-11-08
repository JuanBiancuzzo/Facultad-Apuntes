---
dia: 2024-08-13
tags:
  - ingeniería-en-informática/discreta/Grafos
  - nota/facultad
aliases:
  - Inmersión
  - Espesor de un grafo
---
# Definición
---
Un [[Grafo|grafo]] $G$ es planar si y solo si puede representarse en un plano (inmersión), tal que sus aristas no tengan puntos de cruce

La planeidad es un concepto particular de cuando la inmersión se exige en un plano, pero puede exigirse en otras formas (como un toroide, o una esfera)

Si un grafo no es planar, hablamos de su espesor. Esta es la cantidad mínima de capas que son necesarias para representarlo

> [!quote]+ Demostración
> Por definición de [[Fórmula de Euler|grado de una cara]], cada arista que separa dos caras contribuye a la suma de grados de las caras en dos unidades. Cada arista que no separa caras también contribuye en dos. Luego, tendremos que $$ \sum_{k = 1}^{f} d(f_k) = 2m \tag{1} $$
> Si $G$ es un primo conexo con $n(G) \ge 3$, entonces podremos demostrar el criterio de rechazo tal que si no se cumple, descartamos la posibilidad de que el grafo sea planar $$ m \le 3(n - 2) $$
> A partir de este criterio, podemos demostrar por fuerza bruta que $K_5$ es el primer grafo completo no planar. Además, todos los grafos siguientes tampoco lo son
> 
> Por [[Principio de inducción|inducción]] podemos probar que para todos los grafos de orden mayor a dos, se cumple que $$ d(f_k) \ge 3, ~~~ \forall k \in 0,~\cdots,~f $$
> Intuitivamente, se puede pensar como que toda cara está delimitada por una frontera. La [[Conjunto frontera|curva de frontera]] de menor [[Longitud de un camino|longitud]] que podemos formar es el triángulo, de longitud tres
> 
> Si utilizamos $(1)$, tendremos que $3f \le 2m$. Si combinamos esta inecuación con el [[Fórmula de Euler|teorema de Euler]], tendremos un criterio de rechazo para la planaridad de un grafo $$ m \le 3(n - 2) $$
> Si no se cumple esta prioridad, entonces podemos asegurar que el grafo conexo de grado mayor a dos no es planar