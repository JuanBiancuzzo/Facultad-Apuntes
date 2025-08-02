---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - nota/facultad
aliases:
  - Grupo de comunicación
  - Unicast#^unicast
  - Anycast#^anycast
  - Multicast#^muticast
  - Broadcast#^broadcast
  - Comunicación punto a punto#^unicast
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Las conexiones que se establen para comunicar dos [[Host|hosts]] son completamente arbitrarías por lo que se podrían representar estas conexiones con cualquier [[Grafo|grafo]], pero existen algunas estructuras que se fueron estudiando por sus ventajas y sus desventajas, algunas de estas son las siguientes

![[Topología de comunicación.png]]

Estos grupos de comunicación pueden ser dinámicos, creciendo y reduciéndose, cuando un host o [[Proceso|proceso]] se incorpora o se desconecta. Esto implica que necesitamos dos primitivas que permitan ingresar o salir del grupo, a estas las llamaremos `suscribir` y `desuscribir` 

## Difusión de mensajes
---
Existen dos formas de difundir mensajes

### Uno a uno
---
* Unicast
    * Comunicación punto a punto
^unicast
* Anycast
    * Uno sólo en el grupo recibe el mensaje
    * Se usa un criterio para encontrar al nodo buscado
^anycast
### Uno a muchos
---
* Multicast
    * Sólo aquellos que se encuentran en el grupo reciben el mensaje
^multicast
* Broadcast
    * Todos reciben el mensaje
^broadcast

## Topologías
---
Se puede tener distintas estructuras de grupos que pueden tener distintas ventajas y desventajas

Cabe remarcar que el [[Grafo|grafo]] que representa cada grupo, necesariamente tiene que ser [[Grafo conexo|conexo]], representando que cualquier [[Nodo#En teoría de grafos|nodo]] puede mandar un mensaje a otro nodo 

### Anillos
---
En este grupo, se puede pensar como un grafo donde tiene la estructura dada por [[Camino#Ciclo (Cicle)|ciclo]]

![[Message Oriented Middleware - Grupo anillo.png]]

Tiene la ventaja de ser muy simple, donde para cualquier cantidad de clientes siempre se va a tener dos conexiones con los demás clientes, ya que cada nodo tiene [[Grado de un vértice|grado]] es $d(n) = 2$. También se lo puede pensar como una [[Lista enlazada|lista doblemente enlazada]]

Como desventajas es que mientas más clientes se tiene, más tarda la comunicación en llegar a todos los clientes

### Punto a punto
---
En este grupo, se puede pensar como un grafo donde tiene la estructura dada por un [[Grafo simple completo|grafo completo]]

![[Message Oriented Middleware - Grupo punto a punto.png]]

Tiene la ventaja que todos los mensajes siempre tardan lo [[Mínimo|mínimo]] posible, ya que siempre se esta conectado de todas las maneras posibles

Como desventaja, al crecer el número de clientes, se tienen que establecer cada vez más conexiones entre todos los clientes

### Grupos jerárquicos
---
En este grupo, se puede pensar como un grafo donde tiene la estructura dada por un [[Árbol|árbol]]

![[Message Oriented Middleware - Grupo jerárquico.png]]

Esta tiene la ventaja de establecer esta jerarquía para difundir mensajes, pero tiene la desventaja de que suele ser más compleja la comunicación en general a diferencia de los grupos anteriores