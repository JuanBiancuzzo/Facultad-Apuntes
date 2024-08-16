---
dia: 2024-08-15
tags:
  - discreta/Grafos
  - nota/facultad
aliases:
  - Número cromático
  - Índice cromático
  - Teorema de Vizing
---
### Definición
---
Una $k$-coloración es una asignación al [[Conjunto|conjunto]] de vértices tal que dos vértices adyacentes no son del mismo color. Notemos que por la propiedad definición, los [[Grafo|grafos]] no deben tener [[Lazo|lazos]]

El número cromático de un grafo, designado con $\chi(G)$, es el mínimo $k$ para el cual es posible una coloración. Es decir, existe una $\chi$-coloración y para toda $k$-coloración, entonces $\chi \le k$. Los grafos con un número cromático de uno, son solo los [[Grafo nulo|grafos nulos]] $N_n$

Una [[Cota inferior|cota inferior]] del número cromático de $G$ es el número $p$ si $K_p$ ([[Grafo simple completo|grafo completo]]) es un subgrafo de $G$, notemos que la [[Demostración de equivalencia#Usando proposiciones|recíproca]] es falsa

Una [[Cota superior|cota superior]] del número cromático de $G$ es $\Delta(G) + 1$. Recordemos que se denota $\Delta(G)$ al [[Grafo#^8663e2|máximo grado]]

Se llama el índice cromático $\chi'(G)$ de un grafo al [[Cardinalidad|cardinal]] de una coloración mínima de aristas. Se consideran dos aristas adyacentes si inciden sobre el mismo vértice. Para las aristas, tendremos cotas mucho más poderosa, con el teorema de Vizing $$ \Delta(G) \le \chi'(G) \le \Delta(G) + 1 $$
#### Demostración
---
Buscamos probar que la cota superior del número cromático de $G$ es $\Delta(G) + 1$, para un grafo de cualquier [[Orden de un grafo|orden]]. Esto es $$ p(n): ~~~ \forall G ~ \text{simple de orden} ~ n, ~ \chi(G) \le \Delta(G) + 1 $$
Para $n = 1$, sea $G$ el grafo de orden $1$, entonces existirá la coloración trivial de un color, siendo $\chi(G) = 1 \leq \Delta(G) + 1 = 1$

Para $n> 1$, sea $G$ un [[Grafo simple|grafo simple]] de orden $n$, y sea $v$ un vértice cualquiera del grafo. Luego, definimos $H = Gv$. El grafo $H$ es simple, ya que eliminar aristas no introduce vértices. $\Delta(H) \leq \Delta(G)$, ya que tomamos cualquier vértice $v$, por lo que el grado máximo puede mantenerse igual. Debido a que no introducimos aristas, este nunca podrá ser mayor. Por la [[Principio de inducción|hipótesis inductiva]], sabremos que existe al menos una coloración $H$ con, a lo sumo, $\Delta(H) + 1 \leq\Delta(G) + 1$. Luego, existirá esa misma coloración para $G$, pero aun sin colorear el vértice eliminado $v$. Debido a que el vértice eliminado tiene, por definición, a lo sumo $\Delta(G)$ vecinos y tenemos un total de $\Delta(G) +1$ colores, siempre tendremos un color para utilizar