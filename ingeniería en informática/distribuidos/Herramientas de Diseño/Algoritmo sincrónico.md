---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - investigación/ciencias-de-la-computación/algoritmos
  - investigación/protocolos
  - nota/facultad
  - nota/investigacion
aliases:
  - Algoritmo parcialmente sincrónico#Parcialmente sincrónico
  - Algoritmo asincrónico#Asincrónico
  - Protocolo sincrónico
  - Protocolo parcialmente sincrónico#Parcialmente sincrónico
  - Protocolo asincrónico#Asincrónico
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
An [[Algoritmo|algoritmo]] o [[Protocolo|protocolo]] es sincrónico si sus acciones pueden ser delimitadas en el tiempo. Podemos pensarlo como que si se entrega un [[Paquete|mensaje]] en un tiempo $t_0$ conocido es sincrónico

## Parcialmente sincrónico
---
Esta definición nos deja definir los algoritmos parcialmente sincrónicos que se refieren a aquellos algoritmos que la entrega del mensaje no posee un tiempo $t$ conocido, o bien este es variable. Es decir que tiene un tiempo en el cual va a tardar pero este no lo conocemos o puede variar

## Asincrónico
---
Un algoritmo puede ser asincrónico si la entrega del mensaje no posee un tiempo $t$ asociado, es decir, que no esta definido el tiempo $t$ que va a tardar