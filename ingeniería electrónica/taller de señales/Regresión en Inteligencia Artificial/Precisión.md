---
dia: 2025-09-10
etapa: empezado
referencias: []
aliases:
  - Precision
  - Exactitud
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
  - tema: Circuitos con resistencias
    capitulo: 1
    materia: Introducción a la ingeniería electronica
    carrera: Ingeniería electrónica
  - tema: Cinemática y estática
    capitulo: 3
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La precisión la podemos definir como la noción de cercanía que existe entre valores de una [[cursos/ciencia de datos para salud mental y psicología/Psicometría/Medición|medición]] si fuese repetida reiteradas veces. Se relaciona con el concepto de "repetibilidad", es decir, la capacidad de volver a medir siempre el mismo valor al repetir el mismo expermiento. Mientras menor sea la dispersión de la medición, más precisa será

También se puede ver como la [[ingeniería en informática/orga/Machine learning/Métrica de un modelo|métrica]] de precisión es la [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] que el valor haya sido positivo dado que el [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador|clasificador]] $\varphi(X)$ fue positivo, se define como $$ \text{Precision} = \mathbb{P}\big( Y = 1 \mid \varphi(X) = 1 \big) \simeq \frac{\#\text{predichos correctos}}{\#\text{predichos}} $$ donde tiene un [[Hiper-parámetros de un modelo|hiper-parámetro]] de como determinar que es un valor correcto

Como contraparte de la precisión se encuentra la exactitud, nos indica la cercanía del valor medido al valor real, es decir, dada una magnitud que desea medirse, existe un valor "verdadero" y mientras más cerca esté nuestra medición de dicho valor, más exacta será
