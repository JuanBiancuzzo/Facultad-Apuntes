---
dia: 2024-11-26
etapa: empezado
tipoCita: Paper
numReferencia: 641
autores:
  - apellido: Tibshiranti
    nombre: Robert
tituloInforme: Regression Shrinkage and Selection via the Lasso
numeroInforme: 
anio: "1995"
editores: 
url: https://www.jstor.org/stable/2346178
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - colección/biblioteca/paper
  - investigación/ciencias-de-la-computación/Machine-learning/Regularization
  - investigación/machine-Learning/Regularization
  - investigación/matemática/Estadística/Machine-learning/Regularization
  - nota/colección
  - nota/facultad
  - nota/investigacion
  - referencia/paper
aliases:
  - Least Absolute Shrinkage and Selection Operator
  - LASSO
  - L1 Regularization
  - Lasso Regression
  - Penalización Lasso
  - Penalización L1
referencias:
  - "492"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Resumen
---
Es una técnica de [[Regularization|regularización]] definida por $$ loss_{L1}(y, \hat{y}) = loss(y, \hat{y}) + \alpha \cdot \sum_k |w_k| $$ donde $w_k$ son los pesos del modelo


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```