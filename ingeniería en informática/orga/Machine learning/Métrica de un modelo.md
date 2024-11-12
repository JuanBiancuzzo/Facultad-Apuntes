---
dia: 2023-05-26
tags:
  - ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
---
# Definición
---
Hay diferentes métricas que pueden usarse para la [[Validación del modelo|validación de un modelo]], estas intentan cuantificar lo "correcto" que es dicho modelo, tenemos algunos como:
* Accuracy $=\displaystyle\frac{\#\text{correctos}}{\#\text{totales}}$
	* Donde tiene un [[Hiper-parámetros de un modelo|hiper-parámetro]] de como determinar que es un valor correcto
* Precisión $=\displaystyle\frac{\#\text{predichos correctos}}{\#\text{predichos}}$
	* Cuantos de los que predije que eran de una categoría son de esa categoría realmente
	* Se predice por cada categoría
	* Donde tiene un [[Hiper-parámetros de un modelo|hiper-parámetro]] de como determinar que es un valor correcto
* Recall $=\displaystyle\frac{\#\text{recuperados}}{\#\text{totales}}$
	* Cuantos de esa categoría predije que son de esa categoría
	* Se predice por cada categoría
	* Donde tiene un [[Hiper-parámetros de un modelo|hiper-parámetro]] de como determinar que es un valor correcto
* MSE $=\displaystyle\frac{1}{n}\sum (y - \hat{y})^2$
	* Mean squared error
* MAE $=\displaystyle\frac{1}{n}\sum |y - \hat{y}|$
	* Mean absolute error
	* AUC-ROC
	* Es un punto medio entre precisión y recall, donde encuentra este valor sin tener un hyperparameters