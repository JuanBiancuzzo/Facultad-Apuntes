---
dia: 2024-08-14
tags:
  - carrera/ingeniería-en-informática/discreta/Grafos
  - data-structures
  - nota/facultad
aliases:
  - Bosque
---
# Definición
---
Sea $G = \big( V(G),~E(G),~\Psi_G \big)$ un [[Grafo|grafo]] es un bosque si y solo si es [[Camino#Ciclo (Cicle)|acíclico]]. Las componentes conexas de los bosques son árboles. Por definición, un árbol es un boques de una sola componente conexa

Cualquiera de las siguientes definiciones de árbol son equivalentes. El grafo $T$ es un árbol si y solo si
- Es conexo acíclico
- Es acíclico y $m = n-1$
- Es conexo y $m = n-1$
- Es conexo minimal
- Es acíclico, pero $T+e$ no
- Cualquier par de vértices tiene exactamente un [[Camino|camino]] que los une

## Propiedad
---
Si a un árbol se le quita una hoja ([[Nodo|vértice]] de [[Grado de un vértice|grado]] $1$), el grafo resultante es un árbol. Esto se debe a que no se generan ciclos ni se pierde la conexidad

## Demostraciones
---
Para demostrar que en un árbol, el [[Tamaño de un grafo|tamaño]] es igual a el [[Orden de un grafo|orden]] menos uno ($m = n - 1$), utilizaremos [[Principio de inducción|inducción]]. Sea $G$ un árbol de tamaño $n$
* $n = 1$, al ser [[Grafo simple|simple]], $m = 0$
* $n \ge 1$. Si $h$ es una hoja de $G$, con orden $m = n - 1$, entonces $G - h$ es un árbol de tamaño $n - 1$, y por hipótesis inductiva, de tamaño $n - 2$. Al agregar nuevamente $h$ no generamos ningún ciclo, y generamos un árbol de orden $n$ y tamaño $n - 1$

Para demostrar que $G$ es conexo minimal, se supone false que es un conexo minimal. Luego, existe una arista  que al retirarla, el grafo sigue siendo conexo. Si el grafo es acíclico, entonces existe un único camino entre dos vértices, ya que si no lo fuese existiría un ciclo. Luego, al eliminar la arista , se desconecta los vértices en los que incide y separa el grafo, volviéndolo disconexo. Luego, el grafo era conexo minimal

Para demostrar que $G$ es acíclico, se supone falso que es acíclico. Luego, existe una arista  perteneciente al ciclo tal que al eliminarla el grafo continúa siendo conexo, pero como un grafo es conexo minimal, entonces esto es un absurdo. Todo árbol es acíclico