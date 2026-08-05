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
La [[ingeniería en informática/orga/Machine learning/Métrica de un modelo|métrica]] de accuracy es la [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]]  de que el [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador|clasificador]] $\varphi(X)$ sea igual al valor que se estima, se define como $$ \text{Accuracy} = \mathbb{P}\big( Y = \varphi(X) \big) \simeq \frac{\#\text{correctos}}{\#\text{totales}} $$ donde tiene un [[Hiper-parámetros de un modelo|hiper-parámetro]] de como determinar que es un valor correcto