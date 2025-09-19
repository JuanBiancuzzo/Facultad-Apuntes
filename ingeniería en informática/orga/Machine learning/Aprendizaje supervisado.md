---
dia: 2023-05-26
tags:
  - investigación/matemática/Estadística/Machine-learning
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - investigación/ciencias-de-la-computación/Machine-learning
  - investigación/machine-Learning
  - nota/facultad
  - nota/investigacion
aliases:
  - Riesgo esperado#^riesgo-esperado
  - Error esperado#^riesgo-esperado
  - Riesgo empírico#^riesgo-empirico
  - Error empírico#^riesgo-empirico
  - Error bayesiano#^error-bayesiano
  - Gap de generalización#^gap-generalizacion
  - Relación de compromiso sesgo varianza#Relación de compromiso Sesgo/Varianza
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
# Definición
---
Podemos entender el problema del aprendizaje supervisado como inferir una etiqueta $Y$ a partir del [[ingeniería en informática/proba/Representación de variables aleatorias/Predicción|predictor]] $X$, dependiendo de si $X$ es de tipo numérico entonces es un [[ingeniería en informática/orga/Machine learning/Problema de regresión|problema de regresión]] o en el caso de que sea categórico entonces sería un [[ingeniería en informática/orga/Machine learning/Problema de clasificación|problema de clasificación]]

El objetivo será crear un [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelo]] minimizar el valor [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|esperado]] de la [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Función de costo|función de costo]] $l(x,~ y)$, el cuál recibe el nombre de riesgo esperado $E[l(X,~ Y)]$. La estimación que minimice dicho riesgo se conocerá como solución óptima ^riesgo-esperado

Por otro lado existe el riesgo empírico, este se calcula como $$ \frac{1}{n} \sum_{i = 1}^n l(x_i,~ y_i) $$ para un conjunto de datos observados $\set{(x_i,~ y_i)}_{i = 1}^n$ ^riesgo-empirico

Llamaremos error bayesiano al mínimo error posible capaz de ser alcanzado. Estamos hablando de un límite fundamental para el error que nunca podrá ser mejorado independientemente de la tecnología utilizada ^error-bayesiano

## Relación de compromiso Sesgo/Varianza
---
Para encontrar una solución, solo se busca minimizar el riesgo empírico, pero se busca minimizar el riesgo esperado, donde no necesariamente van a coincidir

En este sentido surge el gap de generalización que es la capacidad de generalizar el comportamiento de los datos observados a datos desconocidos $$ \underbrace{E[l(X,~ Y)]}_\text{Riesgo esperado} = \frac{1}{n} \underbrace{\sum_{i = 1}^n l(x_i,~ y_i)}_\text{Riesgo empírico} + \left(\underbrace{E[l(X,~ Y)] - \frac{1}{n} \sum_{i = 1}^n l(x_i,~ y_i)}_\text{Gap de generalización} \right) $$ ^gap-generalizacion
En este sentido, para disminuir el riesgo esperado se necesita simultáneamente tratar de minimizar el riesgo empírico y el gap de generalización, dos magnitudes de características muy distintas 

Este problema es una relación de compromiso entre el [[ingeniería en informática/proba/Inferencia estadística/Sesgo|sesgo]], representado por el riesgo empírico y la [[ingeniería en informática/proba/Representación de variables aleatorias/Varianza|varianza]] representado por el gap

Dando una intuición sobre esta relación, podemos ver como el riesgo empírico muestra que tan bien aproximamos los datos, por lo tanto si tenemos un riesgo empírico muy alto, significa que nuestro modelo no tiene la complejidad necesaria para representar los datos, llevando a un modelo con [[ingeniería en informática/orga/Machine learning/Underfitting|underfitting]]. Por el otro lado el gap representa como los resultados se asemejan a la distribución real, por lo tanto si tenemos un gap muy alto significa que los resultados se están alejando de la distribución real, y generalmente que se están pareciendo demasiado a los datos de entrenamiento, llevando a un modelo con [[ingeniería en informática/orga/Machine learning/Overfitting|overfitting]]