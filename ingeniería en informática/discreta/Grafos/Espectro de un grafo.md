---
dia: 2024-08-16
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/discreta/Grafos/Resumen.md]]"
---
# Definición
---
Sea $G$ un [[Grafo|grafo]], entonces definimos su espectro $\sigma(G)$ como el [[Espectro de una matriz|espectro de su matriz]] [[Matriz de adyacencia|de adyacencia]], $\sigma\big( A_G \big)$

Notemos que la matriz de adyacencia depende del etiquetado de sus [[Nodo|vértices]], sin embargo, el espectro no depende de él. Sean $A$, $B$  dos matrices de adyacencia para dos grafos $G$, $H$ [[Isomorfismo#Grafos|isomorfos]]. Entonces las matrices $A$, $B$ son [[Matrices semejantes|semejantes]] (la misma permutación de vértices que define el isomorfismo, puede definir el cambio de las matrices)

Si dos matrices son semejantes, comparten el mismo espectro. Además, una matriz simétrica es semejante a su matriz diagonal $$ G \sim H \iff A_G \sim A_H $$
La suma de autovalores de la matriz de adyacencia será, por ser cuadrada, la traza de la misma $$ \sum_{k = 1}^{n} \lambda_k = 0 $$
Recordemos también que sea $p$ un [[Función polinómica|polinomio]] y $P$, su polinomio de matrices asociado, entonces si $\lambda$ es [[Autovalor|autovalor]] de $A$, $p(\lambda)$ es autovalor de $P(A)$. Esto implica que si $\lambda$ es autovalor de $A$, $\lambda^n$ es autovalor de $A^n$

Luego, la suma de los autovalores de $A^n$ es la suma de [[Camino#Ciclo (Cicle)|ciclos]] de [[Longitud de un camino|longitud]] dos, cada uno contado dos veces $$ \sum_{k = 1}^{n} \lambda_k^2 = 2m $$
De igual forma, la suma de los autovalores de $A^3$ es la suma de triángulos, cada uno se cuenta tres veces (una por cada vértice), y cada uno tiene dos orientaciones, luego cada uno se cuenta 6 veces, entonces sea $\tau$ la cantidad de triángulos en $G$ $$ \sum_{k=1}^n \lambda_k^3 = 6\tau $$
La matriz $J$, completa con unos, tiene $n-1$ autovalores de valor $0$, y un solo autovalor de multiplicidad de valor $n$. A partir de estas definiciones, podremos definir el espectro de $K_n$. Su matriz de adyacencia será $J - I$, luego definimos el polinomio $p(\lambda) = \lambda -1$, y su polinomio matricial asociado $P(A) = A - I$. Entonces, $A_{K_n} = J - I = P(J)$. Luego, el espectro de $K_n$ será $\sigma(G) = \{-1\ (\text{orden }n-1), n-1\}$

De forma similar, se demuestra que
* El espectro de un [[Grafo k-partito|bipartito]] $K_{r,s}$ será $\sigma(G) = \set{\pm\sqrt{rs}, 0 (r+s - 2)}$
* El espectro de un [[Camino#Camino simple (Path)|path]] $P_n$ será $\sigma(G) = \set{2\cos(k\pi/(n+1)), k = 1,2,\cdots, n}$
* El espectro de un [[Grafo p-Cube|cubo]] $Q_3$, será $\sigma(G) = \set{-3, 3, 1(3), -1(3)}$