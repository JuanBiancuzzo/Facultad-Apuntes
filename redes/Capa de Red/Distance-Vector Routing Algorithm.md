---
dia: 2024-08-17
tags:
  - redes/Capa-de-Red
  - nota/facultad
aliases:
  - DV Routing Algorithm
  - DV Algoritmo de ruteo
---
### Definición
---
Este [[Algoritmo|algoritmo]] es iterativo (el proceso continúa hasta que no haya más información para intercambiar entre los vecinos), asincrónico (el algoritmo no requiere que los nodos operen de forma bloqueante los unos con los otros), y [[Algoritmo de ruteo descentralizado|distribuido]] (todos los nodos reciben cierta información, realizan una calculación, y reenvían la información al resto de la red)

Curiosamente, el algoritmo es auto-terminante. No hay una señal para la finalización, simplemente lo hace. Este algoritmo es utilizado por muchos [[Protocolo|protocolo]] de ruteo en la práctica

Este algoritmo se desarrolló alrededor de la [[Algoritmo de Bellman-Ford|ecuación de Bellman-Ford]]. Sea $dx(y)$ el [[Camino|camino]] de menor costo entre $x$, $y$. Entonces $$ dx(y) = \min\Set{ c(x,~v) + dv(y) : ~~ \forall v } $$ siendo $c(x,~v)$ el costo de viaje desde el nodo $x$ a su adyacente $v$

#### Algoritmo
---
Cada nodo $x$ mantiene la siguiente información de ruteo
* Por cada vecino $v$, el costo de viajar de $x$ hacia $v$
* El vector de distancias de $x$. Un estimado del costo de viajar de $x$ a $y$, siendo $y$ cualquier nodo de la red
* Los vectores de distancias de sus nodos vecinos

Cada cierto tiempo, cada nodo envía una copia de su vector de distancias a sus vecinos. Cuando un nodo $x$ recibe un vector de partes de alguno de sus vecinos, guarda el vector y utiliza la ecuación para actualizar su propio vector de distancias. Si el camino óptimo es actualizado para algún destino, se reenvía a sus nodos vecinos. Este algoritmo converge al camino óptimo ideal

Para actualizar la propia tabla de envío, se debe encontrar el nodo vecino siguiente en el camino de menor [[Longitud de un camino|longitud]]. Este es, el vecino que alcance el [[Mínimo|mínimo]] en la ecuación de Bellman-Ford

##### Link-Cost Chances and Link Failure
---
Cuando un nodo ejecutando este algoritmo detecta un cambio en el costo, entonces actualiza su vector de distancias. Si hay algún cambio en el camino óptimo para alguno de los posibles destinos, se le informa a los nodos vecinos

Es posible que se forme un bucle, en el cual un cambio local del vector de distancias cause que paquetes oscilan entres dos routers, hasta que el otro actualice su vector de distancias. Este problema es comúnmente referido como el count-to-infinity problem

##### Adding Poisoned Reverse
---
El escenario descrito puede ser evitado utilizando una técnica conocida como poisoned reverse. Cuando un [[Router|router]] $z$ envía un [[Paquete|paquete]] a $y$ para llegar a $x$, también le informa (miente) que su distancia a $x$ es infinito, evitando así que el router le devuelva el paquete enviado. Cuando $z$ actualiza su vector de distancias (cambiando así el ruteo de $z$ a $x$ para no pasar por $y$), entonces le informe del valor real de $dz(x)$

Lamentablemente, los bucles de más de dos nodos no son solucionados a partir de esta técnica

#### Análisis
---
Podemos analizar el algoritmos bajo tres categorías
* Complejidad del mensaje
    * Requiere que los mensajes se intercambian entre nodos vecinos tras cada iteración. El tiempo de convergencia dependerá de muchos factores. Cuando cambia el costo de un enlace, solo se enviaran mensajes si se cambia una ruta óptima
* Velocidad de convergencia
    * Este puede converger lentamente y formar bucles de rutina mientras está convergiendo. También sufre del problema de count-to-ininity
* Robustez
    * Un error de cálculo puede ser por toda la red, causando grandes problemas