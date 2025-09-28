---
dia: 2025-09-26
etapa: empezado
referencias: []
aliases: 
  - Modelo discriminativo
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Clasificación-en-Inteligencia-Artificial
  - investigación/ciencias-de-la-computación/algoritmos
  - nota/investigación
  - nota/facultad
vinculoFacultad:
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Los algoritmos discriminativos, a diferencia de los [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Algoritmo generativo|generativos]], son aquellos que solamente modelan la [[ingeniería electrónica/estoca/Distribuciones multivariables/Distribución condicional|distribución condicional]] $Y \mid_{X = x}$

Estos tienen la ventaja de imponer menos [[ingeniería en informática/proba/Test de hipótesis/Hipótesis|hipótesis]], modelando solamente la relación que se encarga de la [[ingeniería en informática/proba/Representación de variables aleatorias/Predicción|predicción]]

