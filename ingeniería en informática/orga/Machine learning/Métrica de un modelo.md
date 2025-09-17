---
dia: 2023-05-26
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
referencias:
  - "514"
  - "515"
etapa: empezado
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Regresión en Inteligencia Artificial
    capitulo: 2
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Hay diferentes métricas que pueden usarse para la [[Validación del modelo|validación de un modelo]], estas intentan cuantificar lo "correcto" que es dicho modelo

* MSE $=\displaystyle\frac{1}{n}\sum (y - \hat{y})^2$
	* Mean squared error
* MAE $=\displaystyle\frac{1}{n}\sum |y - \hat{y}|$
	* Mean absolute error
	* AUC-ROC
	* Es un punto medio entre precisión y recall, donde encuentra este valor sin tener un hyperparameters
* F1 Score
* Specificity

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```