---
dia: 2024-08-16
tags:
  - discreta/Grafos
  - nota/facultad
  - redes/Capa-de-Red
---
# Definición
---
El [[Algoritmo|algoritmo]] de **Dijkstra** busca, para un vértice $v$, el [[Camino|camino]] de [[Longitud de un camino|longitud]] mínima hacia el resto de vértices del [[Grafo|grafo]]. Para hacerlo, requiere los siguientes elementos
* Un vector de vértices visitados del grafo $V$
* Un vector de vértices no visitados del grafo $NV$
* Una tabla de distancias en la que, para cada nodo, se guarda su distancia al origen y el vértice por el cual se llega a él. Inicialmente, la distancia a cada nodo será infinito, excepto el vértice del origen. La columna de vértice anterior estará inicialmente vacía

El algoritmo es el siguiente
1. Elijo el vértice no visitado con menor distancia conocida en la tabla, inicialmente este será el vértice elegido como inicial. Marco el vértice actual como visitado
2. Para cada vértice adyacente, calculo su nuevo distancia como la distancia al nodo actual, más la distancia del nodo actual al vértice adyacente. Si esta distancia es menor a la indicada, entonces actualizo la distancia del vértice adyacente, denotando el vértice actual como el anterior
3. Repito hasta haber visitado todos los vértices
4. Puedo calcular la distancia del nodo inicial a todos los nodos a partir de reconstruir los caminos de forma inversa. Tomo un nodo, voy a su nodo marcado como anterior, repito hasta alcanzar el nodo inicial. Luego, puedo reconstruir el camino del nodo inicial al nodo deseado

## Implementación
---
```
function Dijkstra(Graph, source):
	for each vertex v in Graph.Vertices:
		dist[v] <- INFINITY
		prev[v] <- UNDEFINED
		add v to Q
	dist[source] <- 0

	while Q is not empty:
		u <- vertex in Q with min dist[u]
		remove u from Q
		
		for each neighbor v of u still in Q:
			alt <- dist[u] + Graph.Edges(u, v)
			if alt < dist[v]:
				dist[v] <- alt
				prev[v] <- u
	
	return dist[], prev[]
```

[[Complejidad computacional|Complejidad]]: $O(|E| + |V| ~ \log|V|)$ 
* $E$ es el número de aristas, ejes o conexiones
* $V$ es el número de vértices, nodos o participantes