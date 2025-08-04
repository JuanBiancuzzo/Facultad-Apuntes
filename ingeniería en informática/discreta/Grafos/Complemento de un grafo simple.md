---
dia: 2024-08-09
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
aliases:
  - Grafo complementario
vinculoFacultad:
  - "[[ingeniería en informática/discreta/Grafos/Resumen.md]]"
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$  un [[Grafo simple|grafo simple]], entonces definimos su complemento como $G'$, donde 
* $V(G') = V(G)$
* $e \in E(G') \iff e \notin E(G)$ 

Observamos que si sumamos $d(G) + d(G)$ (las [[Grado de un vértice|sucesiones de los grafos]] $G$ y $G'$) obtendremos una sucesión estable, como si fuera la sucesión de un [[Grafo simple completo|grafo completo]]