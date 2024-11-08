---
dia: 2024-08-12
tags:
  - ingeniería-en-informática/discreta/Grafos
  - nota/facultad
aliases:
  - Arista-conectividad
  - vértice-conectividad
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo|grafo]], definimos el [[Conjunto|conjunto]] de aristas $S$ como un corte de $G$ si al eliminar las aristas de $S$ en $G$, este se forma un [[Grafo conexo|grafo disconexo]]
* Un corte es [[Mínimo|mínimo]] si no existe otro corte de [[Cardinalidad|cardinal]] menor, el cual se denomina arista-conectividad $\lambda(G)$

De la misma forma, definimos un corte de vértices. Conjunto de vértices que, al eliminarlos, vuelve al grafo disconexo
* El cardinal del mínimo corte se denomina vértice-conectividad $\lambda'(G)$

Los cortes de vértices son más fuertes que los cortes de aristas. Esto se debe a que podremos encontrar un corte de vértices de igual tamaño que un corte de aristas, si eliminamos todos los vértices incidentes sobre estas aristas $$ \lambda'(G) \le \lambda(G) $$

