---
dia: 2025-03-01
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta clasificación de [[Middleware|middleware]] ofrece
* Funciona como un sistema de mensajería entre aquellas aplicaciones que utilizan el middleware
* Pueden enviarse [[Paquete|mensajes]] bajo cierto 'tópico' para que aquellos interesados lo reciban 
    * Modo [[Bus|information bus]]
    * Similar al [[Patrón de diseño (design pattern)|patrón de diseño]] [[Patrón de diseño observer|observer]]
    * No necesariamente se respeta el orden de los mensajes enviados
* Pueden enviarse mensajes con un destinatario definido
    * Modo [[Queue|queue]]
    * Se respeta el orden de los mensajes enviados

![[Message Oriented Middleware.png]]

## Comunicación entre grupos
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