---
dia: 2024-08-09
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
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$  un [[Grafo|grafo]], se define $M_G$ a la [[Matriz|matriz]] de incidencia de $G$ tal que $A_G(i,~ j)$ lleva un uno si la arista $j$ incide en $i$, y lleva un dos si es un [[Lazo|lazo]]

Se puede contar la cantidad de [[Camino|caminos]] de longitud $q$ entre $v_i$ y $v_j$ con $A_G^q(i,~ j)$

También se puede relacionar con la [[Matriz de adyacencia|matriz de adyacencia]] con $$ M_G ~ M_G^T = A_G + D $$ donde $D$ es una matriz diagonal de los [[Grado de un vértice|grados de los vértices del grafo]]

Para un [[Grafo orientado|grafo orientado]], definiremos con un $1$ si la arista parte del [[Nodo|vértice]], y con un $-1$ si la arista llega al vértice