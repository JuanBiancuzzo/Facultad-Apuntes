---
dia: 2023-08-10
tags:
  - "#investigación/matemática/Estadística/Machine-learning"
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - investigación/ciencias-de-la-computación/Machine-learning
  - investigación/machine-Learning
  - nota/facultad
  - nota/investigacion
aliases:
  - Vencinos más cercanos
  - KNN
referencias:
  - "640"
etapa: empezado
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Teniendo $m$ puntos en $n$ dimensiones, podemos usar KNN para [[Problema de clasificación|clasificar]] o para [[Problema de regresión|regresión]]. Este modelo tiene un [[Hiper-parámetros de un modelo|hiper-parámetro]] $k$ el cual indica cuantos vecinos alrededor, del nuevo valor a clasificar, vamos a utilizar.

Agarrando los $k$ vecinos más cercanos, en caso de ser un problema de clasificación, tomamos la etiqueta que más se repita, y si es un problema de regresión tomaremos un promedio de los valores.

Notemos que como calcular la distancia también es un hiper-parámetro.


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```