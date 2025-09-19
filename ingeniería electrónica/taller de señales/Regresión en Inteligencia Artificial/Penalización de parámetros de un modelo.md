---
dia: 2025-09-19
etapa: empezado
referencias: []
aliases:
  - Riesgo regularizado
  - Regularizador#^regularizador
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Regresión-en-Inteligencia-Artificial
  - nota/facultad
vinculoFacultad:
  - tema: Regresión en Inteligencia Artificial
    capitulo: 2
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un método de [[investigación/machine Learning/Regularization/Regularization|regularización]] es agregar un término de penalización al riesgo a minimizar durante el entrenamiento. Básicamente se busca perturbar la optimización del modelo, minimizando en lugar del [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^riesgo-empirico|riesgo empírico]], el riesgo regularizado $$ J(\theta) = \frac{1}{n} \sum_{i = 1}^{n} l(x_i,~ y_i) + \lambda ~ R(\theta) $$ donde $\lambda \ge 0$ es un [[ingeniería en informática/orga/Machine learning/Hiper-parámetros de un modelo|hiper-parámetros]] que controlará el [[ingeniería en informática/orga/Machine learning/Overfitting|overfitting]]. El riesgo regularizado define una función a optimizar durante el entrenamiento

La [[ingeniería en informática/analisis 2/Nomenclatura/Función|función]] $R(\theta)$ recibe el nombre de regularizador. La incorporación del regularizador tiene por objetivo acercar la función a optimizar $J(\theta)$ al riesgo esperado ^regularizador

En ese sentido, un buen regularizador será aquel donde $\lambda ~ R(\theta)$ sea representativo del [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^gap-generalizacion|gap de generalización]]. Cuando $\lambda = 0$ la regularización es ignorada, mientras que para $\lambda$ muy grandes lo que se ignora son los datos

Las penalizaciones más conocidas son 
* [[ingeniería en informática/orga/Machine learning/Penalización L2|Penalización Ridge]]
* [[colección/papers/Regression Shrinkage and Selection via the Lasso de Robert Tibshiranti|Penalización Lasso]]

