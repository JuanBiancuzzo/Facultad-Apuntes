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
El accuracy es una [[ingeniería en informática/orga/Machine learning/Métrica de un modelo|métrica]] ... donde se define como $$ \text{Accuracy} = \frac{\#\text{correctos}}{\#\text{totales}} $$ donde tiene un [[Hiper-parámetros de un modelo|hiper-parámetro]] de como determinar que es un valor correcto

También se puede definir más simplemente para un [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador|clasificador]] que intenta estimar $\varphi(X)$ como $$ \mathbb{P}(Y = \varphi(X)) $$