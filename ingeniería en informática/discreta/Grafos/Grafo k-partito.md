---
dia: 2024-08-14
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
aliases:
  - Grafo bipartito
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo|grafo]], se define $G$ como $k$-partito si $V(G)$ es una [[Partición|partición]], es decir $$ V(G) = \bigcup_{i = 1}^{k} V_i ~~~~ \bigcap_{i = 1}^{k} V_i = \emptyset $$ tal que si $uv \in E(G)$, entonces $u$, $v$ no pertenecen ambos al mismo $V_i$

El $k$-partito se llama completo si está saturado de aristas permitidas. Estos pueden ser denotados según el tamaño de sus conjuntos, con $K_{n,~m,~\cdots}$

Además, puede ser definido a partir de [[Ensamble de grafos|ensamble entre grafos]], como $$ K_{n,~m,~\cdots} = N_n \ast N_m \ast \cdots $$
Un grafo es bipartito ($k = 2$) si y solo si tiene [[Camino#Ciclo (Cicle)|ciclos]] impares