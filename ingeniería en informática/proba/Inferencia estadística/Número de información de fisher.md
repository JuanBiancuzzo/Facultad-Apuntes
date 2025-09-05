---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
vinculoFacultad:
  - tema: Inferencia estadística
    capitulo: 10
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
etapa: ampliar
referencias:
  - "1055"
aliases: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este número es una forma de medir la cantidad de [[ingeniería en informática/algo 1/Introducción a la programación/Información|información]] de una [[ingeniería en informática/proba/Variables y vectores aleatorios/Variable aleatoria|variable aleatoria]] observable $X$ contiene sobre un parámetro desconocido $\theta$ de una distribución que modela $X$. Se calcula como $$ I(\theta) = E\Bigg[ \bigg( \frac{d}{d\theta} ~ ln(f_\theta(X)) \bigg)^2 \Bigg] = - E\Bigg[ \frac{d^2}{d\theta^2} ~ ln(f_\theta(X)) \Bigg] $$ donde esta segunda igualdad, solo vale para [[ingeniería en informática/proba/Inferencia estadística/Familia paramétrica regular|familia paramétrica regular]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```