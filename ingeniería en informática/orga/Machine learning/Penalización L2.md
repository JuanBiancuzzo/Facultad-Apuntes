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
  - Weigth decay
  - Regularización de Tikhonov
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
Es una técnica de [[Regularization|regularización]], específicamente sobre [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Penalización de parámetros de un modelo|penalización de parámetros]]  definida por $$ J(\theta) = \frac{1}{n} \sum_{i = 1}^{n} l(x_i,~ y_i) + \frac{\lambda}{n} \lVert \theta \rVert^2 $$ donde el [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Penalización de parámetros de un modelo#^regularizador|regularizador]] esta definido por $R(\theta) = \frac{1}{n} \lVert \theta \rVert^2$

Una primera interpretación de esta sección es que el incorporar la [[ingeniería en informática/algebra 2/Espacios euclídeos/Norma|norma]] cuadrática de los pesos $\theta$ en la función a minimizar tenderá a "apagar" coeficientes, es decir hacer tender a $0$ esos coeficientes, y por lo tanto la complejidad efectiva del modelo bajará, tendiendo a disminuir el [[ingeniería en informática/orga/Machine learning/Overfitting|overfitting]]

Otra posible interpretación es que limitando los valores de $\theta$ lo que estamos haciendo a limitar el máximo valor posible de la [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Función de costo|función de costo]] $l(x,~ y) \le L$, y por lo tanto limitando el [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^gap-generalizacion|gap de generalización]] y por lo tanto el overfitting

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```