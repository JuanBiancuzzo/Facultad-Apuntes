---
dia: 2026-11-04
etapa: empezado
referencias: []
aliases: 
  - Modelos de comunicación#Modelos de informática
  - Comunicación sincrónica#^sincronica
  - Comunicación asincrónica#^asincronica
  - Comunicación simétrica#^simetrico
  - Comunicación asimétrica#^asimetrico
  - Comunicación unidireccional#^unidireccional
  - Comunicación bidireccional#^bidireccional
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
La comunicación puede darse en distintos aspectos, pero en todos implica el intercambio de información

## Modelos de informática
---
Entre ellos podemos diferenciar por
* Sincronicidad
	* Sincrónica ^sincronica
	* Asincrónica, en general por medio de [[ingeniería en informática/concurrentes/Sincronización/Buffer|buffer]] ^asincronica
* Direccionamiento, como se determina a quién se dirige el mensaje
	* Simétrico ^simetrico
	* Asimétrico ^asimetrico
	* Sin direccionamiento, es un macheo por estructura del mensaje
* Flujo de datos
	* Unidireccional ^unidireccional
	* Bidireccional ^bidireccional