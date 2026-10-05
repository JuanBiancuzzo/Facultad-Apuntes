---
dia: 2026-10-03
etapa: empezado
referencias: []
aliases:
  - Actor#^actor
tags:
  - carrera/ingeniería-en-informática/concurrentes/Channels-y-Actors
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Channels y Actors
    capitulo: 6
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El actor es la primitiva principal del [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Modelo|modelo]], encapsulando el comportamiento y el estado. A diferencia de un [[ingeniería en informática/sisop/Concurrencia/Thread|thread]], el actor es un elemento liviano para poder crear tantos como el problema requiera. Los actores son aislados de otros actores, por lo que no comparten [[ingeniería en informática/sisop/Virtualización de memoria/Memoria|memoria]], el estado privado solo puede cambiarse a partir de procesar [[ingeniería en informática/concurrentes/Channels y Actors/Modelo de canales|mensajes]] y pueden manejar un mensaje por vez ^actor

Este modelo tiene muchas similitudes con el [[Paradigma Orientado a Objetos (POO) (OOP)|paradigma orientado a objetos]], ya que los actores actuan de objetos, y los métodos/mensajes que se intercambian, los objetos, son el concepto de mensajes que se intercambian los actores

Compuesto por una [[colección/data structures/Queue|queue]] de mensajes recibidos, y una queue para enviar en un mensaje el resultado 

El ciclo de vida de un actor está dado por
* Iniciado, o started
	* Con el método started, el contexto del actor está disponible 
* En ejecucción, o running
	* El estado siguiente a la ejecución de started. Puede estar en este estado de forma indefinida
* Parado, o stopping
	* Puede pasar a este estado en las siguientes situaciones
		* Llamado `context::stop` en el mismo actor
		* Ningún otro actor lo referencia
		* No hay objetos registrados en el contexto
* Detenido, o stopped
	* Desde el estado anterior no modificó su situación. Es el último estado de ejecucción

## En Rust
---
En [[investigación/ciencias de la computación/lenguajes de programación/lenguaje Rust/Lenguaje Rust|Rust]], se puede utilizar el 