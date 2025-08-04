---
dia: 2025-03-03
etapa: ampliar
referencias:
  - "866"
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - HATEOAS
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta forma arquitectura que impone sobre [[Representational state transfer#RESTful|RESTful]] que tiene la filosofía de permitir explorar la [[Aplicación Programming Interface|API]] por medio de las respuestas dadas al servidor, es decir, en la respuesta [[Javascript Object Notation (JSON)|JSON]] o [[Lenguaje de marcado extensible|XML]], este devuelve links que pueden convertirse en botones para el usuario

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```