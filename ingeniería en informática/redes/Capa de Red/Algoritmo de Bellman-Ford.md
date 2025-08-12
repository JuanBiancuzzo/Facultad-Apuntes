---
dia: 2024-08-18
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Red
  - carrera/ingeniería-en-informática/redes/Capa-de-Red
  - nota/facultad
referencias:
  - "195"
etapa: sin-empezar
vinculoFacultad:
  - tema: Capa de Red
    capitulo: 4
    materia: Redes
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El [[Algoritmo|algoritmo]] de Bellman-Ford genera el [[Camino|Camino simple]] más corto en un [[Grafo orientado|grafo dirigido]] ponderado (en el que el peso de alguna de las aristas puede ser negativo). El [[Algoritmo de Dijkstra|algoritmo de Dijkstra]] resuelve el mismo problema en un tiempo menor, pero requiere que los pesos de las aristas no sean negativos, salvo que el grafo sea dirigido y sin [[Camino#Ciclo (Cicle)|ciclos]]. Por lo que el Algoritmo Bellman-Ford normalmente se utiliza cuando hay aristas con peso negativo. Este algoritmo fue desarrollado por Richard Bellman, Samuel End y Lester Ford<sup><a href="#ref-195" style="color: inherit; text-decoration: none;">[195]</a></sup> 

Tiene una [[Complejidad computacional|complejidad]] $O(|E| ~ |V|)$
## Implementación
---
```
function bellmanFord(G, S):
	for each vertex v in G:
		distance[v] <- INFINITY
		previous[v] <- UNDEFINED
	distance[S] <- 0
	
	for each vertex v in G:
		for each edge (u, v) in G:
			tempDistance <- distance[u] + edge_weight(u, v)
			if tempDistance < distance[v]:
				distance[v] <- tempDistance
				previous[v] <- u
	
	for each edge (u, v) in G:
		if distance[u] + edge_weigth(u, v) < distance[v]:
			Error: Negative Cycle Exists
	
	return distance[], previous[]
```


# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```