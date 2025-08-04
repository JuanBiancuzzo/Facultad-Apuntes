---
dia: 2025-03-01
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Introduccion/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta clasificación de [[Middleware|middleware]] ofrece
* Mensajes hacia objetos distribuidos
* Los [[Objeto|objetos]] viven dentro del middleware
    * Donde los clientes tienen una referencia a los objetos que ofrece el middleware
* Esquema de '[[Marshalling|marshalling]]' o [[Serialización|serialización]] para transmitir la información

![[Object oriented middleware.png]]

Esta clasificación aparece con el auge de la [[Programación oientada a objetos (OOP) (POO)|programación orientada a objetos]]