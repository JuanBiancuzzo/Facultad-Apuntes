---
dia: 2024-11-25
etapa: empezado
orden: 555
referencias:
  - "645"
tags:
  - cursos/ciencia-de-datos-para-salud-mental-y-psicología/psicometría
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
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
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```