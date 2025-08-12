---
dia: 2025-03-04
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - MOM
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Implementan la [[Topología de comunicación|comunicación entre grupos]] de forma transparente a las [[Aplicación|aplicaciones]] que la requieren. Su funcionamiento se basa en el concepto de comunicar [[Paquete|mensaje]] entre aplicaciones. Resuelve la transparencia respecto de ubicación, fallos, eficacia y escalabilidad

![[ingeniería en informática/distribuidos/Herramientas de Diseño/img/Message Oriented Middleware.png]]

## Operaciones
---
Un MOM tiene las siguientes operaciones generalmente
* `put`
    * Publicación de un cierto mensaje
* `get`
    * Esperar hasta que un mensaje sea detectado. Luego, eliminarlo de la cola y retornarlo
* `poll`
    * Revisar mensajes pendientes, sin bloquear
* `notify`
    * Asociar un [[Callback|callback]] utilizado por el MOM para ser ejecutado frente a publicación de ciertos mensajes

## Centralizado vs Distribuido
---
![[MOM centralizado vs distribuido.png]]

La estrategia centralizada tiene la ventaja la monitorización de los mensajes y la congestión del [[Sistema distribuido|sistema]]

Tiene la desventaja de ser menos eficiente (en general, ya que depende de las implementaciones) en comparación a uno distribuido, y como suele pasar con los sistemas centralizados, es más difícil escalarlos

La estrategia distribuida tiene la ventaja de la escalabilidad, pero tiene la desventaja de la complejidad de su monitorización

## Bus de información vs Colas de mensajes
---
![[MOM bus vs cola.png]]

El beneficio del [[Bus|bus de información]], es la simplicidad en la comunicación, ya que uno se subscribe al bus y pide recibir mensajes de este. La desventaja es que (dependiendo la implementación) los mensajes pueden llegar desordenados, es decir que no mantiene el orden

Por otro lado, la cola de mensajes preserva este orden y no se pierden intercambiándolo por una mayor complejidad de comunicación

## Modelo sincrónico vs asincrónico
---
En el [[Modelo|modelo]] [[Sincronismo|sincrónico]] tiene la ventaja la simplicidad en el modelo de conexiones, ya que este es el de [[Topología de comunicación#^unicast|punto a punto]], y permite obtener respuestas instantáneas a pedidos concretos

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
	\definecolor{relleno}{RGB}{111, 168, 220} 
	\definecolor{borde}{RGB}{35, 136, 219} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
    	\tikzmath { \alto = 1; \ancho = 2; \sep = 2.5; }
    	\filldraw[fill=relleno, draw=borde] (0, 0) rectangle ++(\ancho, \alto)
        	node[midway, scale=0.8] {Sender};
        \path (\ancho, 0) -- ++(0, \alto)
            node[pos=0.3] (sender_inf) {}
            node[pos=0.7] (sender_sup) {}; 
        
        \filldraw[fill=relleno, draw=borde] ({\ancho + \sep}, 0) 
            rectangle ++(\ancho, \alto) node[midway, scale=0.8] {Receiver};
        \path ({\ancho + \sep}, 0) -- ++(0, \alto)
            node[pos=0.3] (receiver_inf) {}
            node[pos=0.7] (receiver_sup) {};
        
        \draw[->, borde, ultra thick] (sender_sup.center) 
            -- (receiver_sup.center);
        \draw[<-, borde, ultra thick, dashed] (sender_inf.center) 
            -- (receiver_inf.center);
	\end{tikzpicture}
\end{document}
```

Por otro lado, tiene la gran desventaja de no permitir la implementación de transparencia frente a errores

En el modelo asincrónico tiene la ventaja de modelarse naturalmente con [[Queue|colas]] y la arquitectura soporta períodos de discontinuidad del transporte

![[MOM asincrónico.png]]

Por otro lado, es complejo recibir respuesta a pedidos realizados (mínimamente es necesario contar con colas para el retorno de información)

![[MOM asincrónico retorno de info.png]]