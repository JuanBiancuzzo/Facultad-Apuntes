---
dia: 2025-10-01
etapa: empezado
referencias: []
aliases:
  - Verdadero Positivo#^vp
  - Falso Negativo#^fn
  - Falso Positivo#^fp
  - Verdadero Negativo#^vn
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

Tomando $\varphi(x)$ como la predicción, $y$ el valor correcto, y $0$ como negativo y $1$ como positivo

* Verdadero Positivo ^vp
    * Clasificado correctamente como positivo
    * Se puede expresar como $\varphi(x) = y = 1$
* Falso Negativo ^fn
    * Clasificado erróneamente como negativo
    * Se puede expresar como $\varphi(x) = 0$ cuando $y = 1$
* Falso Positivo ^fp
    * Clasificado erróneamente como positivo
    * Se puede expresar como $\varphi(x) = 1$ cuando $y = 0$
* Verdadero Negativo ^vn
    * Clasificado correctamente como negativo
    * Se puede expresar como $\varphi(x) = y = 0$

