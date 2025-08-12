---
dia: 2024-11-25
etapa: empezado
referencias:
  - "645"
tags:
  - curso/ciencia-de-datos-para-salud-mental-y-psicología/Psicometría
  - nota/curso
vinculoCurso:
  - tema: Psicometría
    capitulo: 1
    tipo: Presencial
    curso: Ciencia de datos para salud mental y psicología
    anio: "2024"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se puede entender psicológico construido, definidos por humanos, mutables y no tienen límites definidos

## Modelos
---
* Modelo reflexivo
    * Análisis factorial, a menudo asume [[Naturaleza esencial|naturaleza esencial]]
* Modelo formativo
    * Modelos de ecuaciones estructurales
* Modelo de red
    * [[Grafo|Grafo]] [[Camino#Ciclo (Cicle)|cíclico]] [[Grafo orientado|dirigido]] 
    * Sin variable latente los [[Lazo|lazos]] propios indican que los ítems se causan a sí mismos a lo largo del tiempo
* Red bayesiana
    * Grafo acíclico dirigido
    * Red bayesiana dinámica


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```