---
dia: 2024-08-14
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/discreta/Grafos/Resumen.md]]"
---
# Definición
---
Análogo al [[Cubrimiento de aristas|cubrimiento de aristas]], sea $G$ un [[Grafo|grafo]], $S \subset V(G)$ es un cubrimiento de vértices si y solo si cualquier arista $uv \in E(G)$ tiene uno de sus extremos en $S$
* El invariante $\beta(G)$ define el cardinal del mínimo cubrimiento
* Un cubrimiento de vértices es [[Minimal|minimal]] si este no incluye a otro cubrimiento de vértices $$ \alpha + \beta = n $$
Si $T$ es un [[Clique|conjunto independente de vértices]], no hay ninguna arista entre cualquier par de vértices del [[Conjunto|conjunto]], luego cualquier arista en $G$ tiene incide al menos una vez en $V(G) - T$, luego este será un cubrimiento de vértices