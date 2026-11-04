---
dia: 2026-10-03
etapa: empezado
referencias: []
aliases:
  - Modelo de canales
tags:
  - carrera/ingeniería-en-informática/concurrentes/Channels-y-Actors
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
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
Se puede [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Modelo|modelar]] un canal con esta estructura

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.3, transform shape, thick]
    \tikzmath { 
        \ancho = 2.5; \alto = 1.5; \largo = 1.5;
        \scale = 0.9; 
    }
    
    \draw (0, 0) rectangle ++(\ancho, \alto)
        node[midway, scale=\scale, align=center]{Canal};
    
    \begin{scope}[shorten <=0.5em, shorten >=0.5em]
        \draw[<-] (0, {\alto / 2}) -- ++({-\largo}, 0)
            node[pos=1.1, scale=\scale] {$X$};
        \draw[->] (\ancho, {\alto / 2}) -- ++(\largo, 0)
            node[pos=1.1, scale=\scale] {$Y$};
    \end{scope}
    
\end{tikzpicture}
\end{document}
```
^modelo

Donde $X$ es la entrada al canal, e $Y$ es la salida del canal

## En un sistema operativo
---
Este canal conectan un [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|proceso]] emisor con un proceso receptor, donde estos son tipados, pueden ser [[ingeniería en informática/concurrentes/Channels y Actors/Comunicación#^sincronica|sincrónicos]] o [[ingeniería en informática/concurrentes/Channels y Actors/Comunicación#^asincronica|asincrónica]], e [[ingeniería en informática/concurrentes/Channels y Actors/Comunicación#^unidireccional|unidireccional]]

En un problema se puede representar como [[ingeniería en informática/distribuidos/Herramientas de Diseño/Patrón de mensajería producer-consumer|productor y consumidor]], el que envía un dato al canal y el que recibir el dato. También se lo puede considerar como un [[ingeniería en informática/concurrentes/Sincronización/Buffer|buffer]] de mensajes

Para el productor, se puede entender [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]], utilizando [[investigación/ciencias de la computación/lenguajes de programación/lenguaje go/Lenguaje go|golang]] como ejemplo
```go
func producer(c chan int, int i) {
	c <- produce(i)
}
```

Mientras que el consumidor
```go
func consumer(c chan int) {
	for i := range c {
		consume(i)
	} 
}
```

En general, la [[investigación/storytelling/worldbuilding/Conlang/Sintaxis|sintaxis]] permitida por los lenguajes que soporta canales, permiten escuchar en varios canales de forma [[ingeniería en informática/taller/Concurrencia/Estados de un proceso#Blocked|bloqueante]] y desbloquearse con el primero que recibe un mensaje

```go
func seleccion(chan1, chan2, chan3 chan int) {
	select {
	case var1 := <-chan1:
		// ...
	case var2 := <-chan2:
		// ...
	case var3 := <-chan3:
		// ...
	}
}
```

