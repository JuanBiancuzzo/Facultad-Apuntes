---
dia: 2024-11-07
etapa: empezado
referencias:
  - "492"
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - investigación/ciencias-de-la-computación/Machine-learning/Regularization
  - investigación/machine-Learning/Regularization
  - investigación/matemática/Estadística/Machine-learning/Regularization
  - nota/facultad
  - nota/investigacion
aliases:
  - Penalización Ridge
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es una técnica de [[Regularization|regularización]] definida por $$ loss_{L2}(y, \hat{y}) = loss(y, \hat{y}) + \alpha \cdot \sum_k w_k^2 $$ donde $w_k$ son los pesos del modelo

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```