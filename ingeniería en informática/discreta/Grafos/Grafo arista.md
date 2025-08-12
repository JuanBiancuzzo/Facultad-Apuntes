---
dia: 2024-08-13
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
vinculoFacultad:
  - tema: Grafos
    capitulo: 8
    materia: Matemática discreta
    carrera: Ingeniería en informática
---
# Definición
---
Dado el [[Grafo|grafo]] sin [[Lazo|lazos]] $G$, se define su grafo arista $L$ como el grafo tal que sus [[Nodo|vértices]] sean las aristas de $G$, y dos vértices son adyacentes si y solo si sus aristas asociadas al grafo original indician sobre el mismo vértice

Sea $u$ el vértice de $L(G)$ asociada a las aristas $xy$ de $G$, siendo $x$ e $y$ dos vértices, entonces el [[Grado de un vértice|grado]] de $u$, $d(u)$ estará dado por el grado de ambos vértices $x$, $y$, Sin embargo, debemos descontar dos vecinos, ya que estos estarán contados en la propia arista $$ d(u) = d(x) + d(y) - 2 $$
Si $G$ es [[Isomorfismo#Grafos|isomorfo]] a $L(G)$, entonces (y la [[Demostración de equivalencia#Usando proposiciones|recíproca]] es verdadera) $G$ es [[Grafo regular|2-regular]]. Esto implica que es un [[Camino#Ciclo (Cicle)|ciclo]], o una suma disjunta de ciclos

Si $G$ es un grafo de [[Orden de un grafo|orden]] $n$ y [[Tamaño de un grafo|tamaño]] $m$, con [[Grado de un vértice|sucesión de grados]] $d(G) = (d_1,~d_2,~\cdots,~d_n)$, entonces se cumpliría que, por definición $$ n\big( L(G) \big) = m(G) $$
Cada arista estará asociada a todos el resto de aristas incidentes en un vértice, esto implicará que para cada vértice $u$, se obtendrá un sub-grafo completo de orden $d(u)$ en el grafo arista $$ m\big( L(G) \big) = \sum_{k=1}^n \binom{d_k}{2} = \frac 12\sum_{k=1}^n d_k^2 - m $$

Si un grafo $G$ es [[Grafo euleriano|euleriano]], entonces por la propia definición, su grafo arista $L(G)$ es hamiltoniano. Además, será euleriano, ya que todos los vértices tendrán un grado par (debido a que los vértices asociados al grafo original también tendrán un grado par).

Si un grafo $G$ es [[Grafo Hamiltoniano|hamiltoniano]], entonces su grafo arista $L(G)$ también lo será. Sea $H$ el ciclo hamiltoniano al grafo original, entonces podremos partir de ese ciclo y, para cada vértice, agregar al recorrido las aristas que no pertenezcan al ciclo. Debido a que todas las aristas incidentes en un mismo vértice son adyacentes, podremos agregar las aristas al recorrido y continuar el recorrido actual. Luego, obtendremos un camino que recorre todos los vértices del grafo arista.
