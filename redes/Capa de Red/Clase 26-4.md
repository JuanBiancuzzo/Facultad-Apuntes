---
dia: 2024-04-26
capitulo: 4
tags:
  - redes/Capa-de-Red
  - nota
---
### Definición
---
Resumen
* Plano de control
* Organización de internet
* Protocolos de ruteo

### Plano de control
---
* Distribuido vs centralizado
	* Distribuido
		* Nadie tiene la visión completa
		* El plano de control esta embebido en cada router 
	* Centralizado
		* Se tiene una visión completa del problema
		* Están conectados todos los routers a un punto de control central
* Dinámico vs estático
	* Dinámico
		* Se va actualizando los valores de los enlaces
	* Estático
		* Cuando se calcula la tabla no se modifica 
		* Ejemplo
			* Default gateway
			* El NAT
* Dependientes, o no, del tráfico
	* Dependiente
		* Se modifica el valor del enlace por el trafico
		* El trafico cambia tan rápido en comparación a establecer rutas que aparecen problemas como oscilaciones
	* Independiente
		* Puede modificarse el valor del enlace o no (dependiendo si es o no dinámico) pero no cambia por el trafico



### Organización de internet
---
* ASes
	* Sistemas autónomos
	* Tiene un ente central que organiza y toma decisiones para esa red autónoma 
* ISP
	* Tier 1 (sistemas autónomos de transito) Transit providers
		* Se conectan todos con todos
		* Grafo completo
		* Brindan conexión (proveedores)
	* Tier 2 Internet service providers
		* Se conectan a algunos (no necesariamente todos y al menos 2) los de tier 1
			* Al menos dos por si falla uno
		* Brindar el servicio 
		* Clientes del tier 1
		* Se pueden conectar entre sí
			* Comparten clientes de tier 3
			* Es barato
	* Tier 3 Internet service providers
		* Similar al tier 2 en relación con tier 1, pero estos se conectan al tier 2
		* Se pueden conectar entre sí
			* Comparten clientes de stubs
			* Es barato
	* IXP
		* Es un peer de tier 2/3 especifico para intercambiar clientes en el mismo tier
		* Combina muchos combinaciones entre el mismo tier con menos enlaces, ya que con un solo enlace a IXP ponemos compartir clientes con todos los que estén conectados
		* Más barato aún porque son menos enlaces
	* Stubs
		* Se tienen q conectar a dos tier 3
		
* Jerarquía y relaciones
	* Si no hay un IXP o conexiones entre peers del mismo tier, se tiene que ir desde un stub a tier 3, tier 2, tier 1 y a tier 2, tier 3 y stub con el servidor. Por lo que se tiene que pagar todos los cambios de tiers. Por lo tanto es beneficiario si hay interconexiones entre los tiers

	Ahora los tier 1 y tier 2 queriendo tener clientes de stubs entonces se empezaron a agregar tiers y actualmente hay 82 niveles
		Definimos el nivel por la cantidad de vecinos y el nivel de esos vecinos
	
	Los [[Redes de distribución de contenido|CDN]] actúan como tier 1 por la necesidad de conexiones necesarias como google, netflix, facebook, etc. Se conectan a IXP y algunas tier 2 o tier 1. Entonces son de niveles muy alto porque tienen muchos vecinos y esos vecinos tienen muchos vecinos


### Protocolos de ruteo (internos)
---
Estos se aplica en sistemas autónomos
* Link state
	* Chequean los enlaces y si algo ocurre (creación o caída de un enlace) se avisan a todos haciendo un flooding (broadcast controlado ya que avanza pero no vuelve para nodos que ya lo tienen)
	* Todos los routers están al tanto de lo que ocurre en toda la red del sistema autónomo

* Dijkstra
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

Complejidad: $O(|E| + |V| ~ \log|V|)$ 
* $E$ es el número de aristas, ejes o conexiones
* $V$ es el número de vértices, nodos o participantes

Es centralizado porque la información esta centralizada en cada router, aunque cada router tiene los datos y hace los cálculos 

Tiene problemas porque todos tienen que tener toda la información

---
  
* Distance vector
	* Se tienen en las tablas de enrutamiento se agrega la columna de de distancia y se puede transmitir la parte de red y distancia, para poder ir actualizando sus tablas de enrutamiento que se pueden transmitir si hay cambios

| Red             | Distancia          | Próximo Salto    |
| --------------- | ------------------ | ---------------- |
| prefijo/máscara | Cantidad de saltos | puerto de salida |
| ....            | ...                | ...              |


* Algoritmo Bellman Ford
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

* Esta relacionado al diámetro del grafo de conexiones
* Cada 30 segundos se retransmiten las tablas
* Si se cae un enlace, aparece un loop infinito donde los nodos desconectados aumentan hasta el máximo posible actualizando (y aumentando) la distancia de la conexión caida
* Complejidad $O(|E| ~ |V|)$

#### OSPF (Open shortest path first) (RFC 2328)
---
Busca el camino entre dos nodos más cortos, usa Dijkstra
* Pesos
	* Capacidades
	* Prioridades
* Autenticación
* Zonas
	* Podemos dividir toda la red para crear un árbol entre las zonas y una zona 0 que es la raíz que se encarga de la conexión entre zonas y la suya propia
* Multicast
* Define su propia capa de transporte (no usa udp ni tcp)

#### IS-IS
---
Usa Dijkstra

#### Router information protocol RIP 2 (distance-vector) (RFC 2453)
---
* No se puede poner pesos
* Autenticación (en rip2)
* Resuelve bucles do distancia 1
* Es plug and play
* Usa udp