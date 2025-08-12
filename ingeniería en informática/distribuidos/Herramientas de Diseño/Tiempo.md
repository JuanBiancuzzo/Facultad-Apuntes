---
dia: 2025-03-04
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - Timestamp#^timestamp
  - Timespan#^timespan
vinculoFacultad:
  - tema: Herramientas de Diseño
    capitulo: 1
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El tiempo es una magnitud física que podríamos definir como una variable [[Función monótona|monótona]] creciente

## En ciencia de la computación
---
En la [[Ciencia de la computación|ciencia de la computación]], la tomaremos como [[Matemática discreta|discreta]], y a veces se la puede usar apartado de la magnitud real

Esto nos permite ver la duración entre eventos, que podemos usar para ordenar y [[Mecanismo de sincronización|sincronizar]]

Llamaremos timestamp como un punto absoluto en la línea del tiempo ^timestamp

Llamaremos timespan como un intervalo en la línea del tiempo ^timespan

## Referencias global
---
* [[Greenwich Mean Time (GMT)|Greenwich Mean Time (GMT)]]
* [[Universal Time Coordinated (UTC)|Universal Time Coordinated (UTC)]]
* [[Global Positioning System time (GPS time)|Global Positioning System time (GPS time)]]
* [[Temps Atomique International (TAI)|Temps Atomique International (TAI)]]
