---
dia: 2026-10-03
etapa: empezado
referencias: []
aliases: []
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
Conectan un [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|proceso]] emisor con un proceso receptor, donde estos son tipados, pueden ser sincrónicos o [[ingeniería en informática/distribuidos/Herramientas de Diseño/Sincronismo|asincrónicos]], e unidireccionales

En un problema se puede representar como [[ingeniería en informática/distribuidos/Herramientas de Diseño/Patrón de mensajería producer-consumer|productor y consumidor]], el que envía un dato al canal y el que recibir el dato

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

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```