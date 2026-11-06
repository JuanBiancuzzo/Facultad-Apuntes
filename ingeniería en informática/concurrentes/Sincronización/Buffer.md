---
dia: 2026-11-04
etapa: empezado
referencias: []
aliases:
  - Buffer infinito
  - Buffer acotado
tags:
  - carrera/ingeniería-en-informática/concurrentes/Sincronización
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Sincronización
    capitulo: 4
    materia: Programación Concurrente
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Los buffers son un [[ingeniería en informática/sisop/Concurrencia/Sincronización de un programa concurrente|método de sincronización]] el cual comunica a $2$ familias de procesos, los productores y consumidores. Esta tiene como invariantes 
1. No se puede consumir lo que no hay
2. Todos los items producidos son eventualmente consumidos
3. Al espacio de almacenamiento se accede de a uno
4. Se debe respetar el orden de almacenamiento y retiro de los items

Se puede estudiar el caso real de un buffer, también conocido como buffer acotado, donde tiene el problema que no se puede producir si el buffer esta lleno, o se puede estudiar el buffer infinito, donde no presenta este problema

Implementando ambas con [[ingeniería en informática/distribuidos/Herramientas de Diseño/Semáforo|semáforos]], los cual nos van a permitir mantener las invariantes del problema

## Buffer infinito
---
Sea `d` el dato a enviar, `buffer` una [[colección/data structures/Queue|queue]] vacía y `notEmpty` un semáforo con `V`$= 0$ y `L`$= \emptyset$ 

Del lado del productor, en un estilo [[investigación/ciencias de la computación/lenguajes de programación/Lenguaje Python/Lenguaje Python|Python]]  
```
def enviar(d):
	self.buffer.append(d)
	self.notEmpty.signal()
```

Por el lado del consumidor
```
def recibir() -> d:
	self.notEmpty.wait()
	d = self.buffer.take()
	return d
```

Su representación por una [[ingeniería en informática/concurrentes/Redes de Petri/Red de Petri#General|red de Petri]] sería

![[ingeniería en informática/concurrentes/Sincronización/img/Red de Petri - Buffer Infinito.png|500]]

Donde se puede entender $p_5$ el evento de que existe un mensaje para procesar

## Buffer acotado
---
De forma similar al infinito, se utiliza $2$ semáforos para lograr resolver el problema de intentar envía en un buffer lleno

Sea `d` el dato a enviar, `buffer` una queue vacía, `notEmpty` un semáforo con `V`$= 0$ y `L`$= \emptyset$ y `notFull` un semáforo con `V`$= N$ y `L`$= \emptyset$, donde $N$ es la capacidad del buffer

Para el lado del productor
```
def enviar(d):
	self.notFull.wait()
	self.buffer.append(d)
	self.notEmpty.signal()
```

Por el lado del consumidor
```
def recibir() -> d:
	self.notEmpty.wait()
	d = self.buffer.take()
	self.notFull.signal()
	return d
```

Su representación por una red de Petri sería

![[ingeniería en informática/concurrentes/Sincronización/img/Red de Petri - Buffer acotado.png|500]]

Donde $p_5$ mantiene la funcionalidad que tiene en el buffer infinito, y $p_6$ toma el rol de contabilizar la capacidad del buffer