---
dia: 2024-11-07
etapa: empezado
referencias: 
tags:
  - orga/Machine-learning
  - nota/facultad
aliases:
  - Penalización Ridge
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es una técnica de [[Regularización|regularización]] definida por $$ loss_{L2}(y, \hat{y}) = loss(y, \hat{y}) + \alpha \cdot \sum_k w_k^2 $$ donde $w_k$ son los pesos del modelo

