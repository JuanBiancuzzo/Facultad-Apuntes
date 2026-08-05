---
dia: 2025-09-10
etapa: empezado
referencias: []
aliases: []
tags:
  - nota/facultad
  - carrera/ingeniería-electrónica/taller-de-señales/Regresión-en-Inteligencia-Artificial
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Regresión en Inteligencia Artificial
    capitulo: 2
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La [[ingeniería en informática/orga/Machine learning/Métrica de un modelo|métrica]] de recall es la [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] que el [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador|clasificador]] $\varphi(X)$ de un valor positivo, dado que era positivo, se define como $$ \text{Recall} = \mathbb{P}\big( \varphi(X) = 1 \mid Y = 1 \big) \simeq \frac{\#\text{recuperados}}{\#\text{totales}} $$ donde tiene un [[Hiper-parámetros de un modelo|hiper-parámetro]] de como determinar que es un valor correcto
