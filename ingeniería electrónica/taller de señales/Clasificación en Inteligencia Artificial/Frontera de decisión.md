---
dia: 2025-09-21
etapa: ampliar
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
Dado que un [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador|clasificador]] define una [[ingeniería en informática/proba/Inferencia estadística/Estimador|estimador]] $\varphi : \mathbb{R}^d \to \mathcal{Y}$, donde $d$ es la cantidad de parámetros usados para estimar, se establece una [[ingeniería en informática/proba/Representación de variables aleatorias/Partición|partición]] del espacio $\mathbb{R}^d$ donde la cantidad de elementos de la partición corresponde a la cantidad de clases o elementos de $\mathcal{Y}$. Las [[ingeniería en informática/analisis 2/Topología/Conjunto frontera|fronteras]] que separan los elementos de dicha partición se las denomina frontera de decisión
