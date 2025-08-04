---
dia: 2024-08-16
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - investigación/ciencias-de-la-computación/algoritmos
  - nota/facultad
  - nota/investigacion
aliases:
  - Flujo de un grafo
vinculoFacultad:
  - "[[ingeniería en informática/discreta/Grafos/Resumen.md]]"
---
# Definición
---
Una red de transporte es un [[Grafo orientado|digrafo]] $G$ [[Grafo conexo#^c4c708|conexo]] y sin [[Lazo|lazos]], donde se verifica que

* Existe un vértice $O$ fuente tal que solo tiene aristas salientes
* Existe un vértice $T$ sumidero tal que solo tiene aristas entrantes
* Existe una [[Función|función]] $C: E(G) \to N_0$ que indica para cada arista, su capacidad de transmisión de flujo

Se le llama flujo de $G$ a una función $F: E(G) \to N_0$ tal que su valor siempre sea menor a la capacidad de dicha arista, y el flujo entrante y saliente a cada vértice debe ser el mismo (exceptuando la fuente y el sumidero)

Buscaremos la cantidad de flujo máximo que podremos transportar desde la fuente al sumidero, y el [[Camino|camino]] óptimo para realizarlo

1. Establecemos como condición inicial, $\Phi = 0$
2. Mientras haya un camino de aumento desde $O$ hacia $T$. Estos los podemos encontrar colocándonos en el sumidero y analizar un camino posible de llegada. No debemos considerar aquellos caminos que ya estén saturados (se esté utilizando su capacidad total)
	1. Calcular el cuello de botella del camino. Esto es la máxima cantidad de flujo que puedo enviar por allí, es decir, el [[Mínimo|mínimo]] de los pesos de las aristas que lo conforman, o en el caso de ser aristas ya utilizadas, el mínimo de la capacidad libre restante de cada una
	2. Actualizar el flujo a través de cada arista, denotando la capacidad en uso actual, y la capacidad libre restante
	3. Actualizar el flujo total $\Phi$, sumándole el valor de cuello de botella calculado anteriormente