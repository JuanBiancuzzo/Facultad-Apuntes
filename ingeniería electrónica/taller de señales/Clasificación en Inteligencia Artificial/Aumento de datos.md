---
dia: 2025-09-26
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Clasificación-en-Inteligencia-Artificial
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
Se denomina aumento de datos al procedimiento de incorporar [[Dato sintético|datos sintéticos]], dados por un [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Algoritmo generativo|algoritmo generativo]], al [[ingeniería en informática/orga/Machine learning/Entrenar un modelo#Conjunto de entrenamiento|conjunto de datos de entrenamiento]], esto tiene la ventaja de tener más datos para el entrenamiento de un modelo y disminuir el [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^gap-generalizacion|gap de generalización]] evitando así [[ingeniería en informática/orga/Machine learning/Overfitting|overfitting]]

Cabe recordar que hay que usarlo con cuidado porque no dejan de ser datos artificiales y de ninguna manera [[ingeniería en informática/proba/Variables y vectores aleatorios/Variables aleatorias independientes|independientes]] a los datos utilizados para generarlos

