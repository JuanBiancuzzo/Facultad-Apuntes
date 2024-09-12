---
dia: 2024-08-14
tags: 
 - discreta/Grafos
 - nota/facultad
---
### Definición
---
Análogo al [[Cubrimiento de vértices|cubrimiento de vértices]], sea $G$ un [[Grafo|grafo]], $S \subset V(G)$ es un cubrimiento de aristas si y solo cualquier [[Nodo|vértice]] del grafo es alcanzado por una de las aristas del cubrimiento

Un cubrimiento de aristas será [[Minimal|minimal]] si no incluye a otro [[Apareamiento|matching]] y es [[Mínimo|minimo]] si no hay otro con menor [[Cardinalidad|cardinal]]

El número del cardinal mínimo se denota $\beta'(G)$ se conoce como número de cubrimiento de aristas

De forma análoga, se demuestra que $$ \alpha' + \beta' = n $$

Sea $S$ un [[discreta/Grafos/Apareamiento.md|apareamiento]] [[discreta/Relaciones/Máximo.md|máximo]], el [[algebra 2/Espacios Vectoriales/Conjunto.md|conjunto]] de vértices que no pertenecen al apareamiento es un conjunto independiente, luego para cubrirlos se necesita al menos una arista para cada uno. Luego, la forma más óptima de seleccionar el resto de vértices es con una arista para cada par de vértices, lo cual se obtiene seleccionando $S$
