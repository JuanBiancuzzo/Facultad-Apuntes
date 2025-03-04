---
dia: 2025-03-01
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - nota/facultad
aliases:
  - Arquitectura Serverless
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---

* El middleware trabaja como un [[Servidor|servidor]] de [[Función|funciones]] que se pueden invocar
* Los servicios se puede explorar y ejecutar pero no presentan estado para futuras invocaciones

![[Procedure oriented middleware.png]]

Similar al [[Object Oriented Middleware|object oriented middleware]] van a tener los servicios por dentro del middleware, con lo que antes serían los métodos de los objetos, pero ahora reemplazados por funciones puras, sin necesidad del estado, como lo hace los [[Remote Procedure Call|RPC]]
