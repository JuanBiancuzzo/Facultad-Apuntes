---
dia: 2025-09-26
etapa: empezado
referencias: []
aliases: 
  - Modelo generativo
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
Los algoritmos generativos, a diferencia de los [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Algoritmo discriminativo|discriminativos]], son aquellos que modelan la [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de distribución#Para vector aleatorio|distribución conjunta]] de los datos

Estos tienen la desventaja de imponer más [[ingeniería en informática/proba/Test de hipótesis/Hipótesis|hipótesis]] sobre el modelo ya que requieren modelar también la [[ingeniería electrónica/estoca/Distribuciones multivariables/Función de distribución marginal|distribución marginal]] de los datos, por lo que además necesitan mayor cantidad de datos para estimar. A pesar de esto, tienen la ventaja y la habilidad (que los algoritmos discriminativos no la tienen) de poder generar nuevos [[Dato sintético|datos sintéticos]] $X \sim p_X$
