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
* Permiten garantizar transaccionalidad de operaciones respecto de datos
* Conectan muchas fuentes de datos y permiten un acceso transparente al grupo
* Poseen políticas de reintentos y retención de datos frente a caídas internas

Esto es muy similar a lo que ofrece una [[Base de datos distribuidos|base de datos distribuidas]] y no fue muy exitosa ya que se transformó en lo que se conoce como [[Object Oriented Middleware|Middleware basados en objetos]]