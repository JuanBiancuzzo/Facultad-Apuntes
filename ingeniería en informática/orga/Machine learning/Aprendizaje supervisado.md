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
  - Error bayesiano#^error-bayesiano
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

El objetivo será crear un [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelo]] minimizar el valor [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|esperado]] de la [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Función de costo|función de costo]] $l(x,~ y)$, el cuál recibe el nombre de riesgo esperado $E[l(X,~ Y)]$.La estimación que minimice dicho riesgo se conocerá como solución óptima ^riesgo-esperado

Llamaremos error bayesiano al mínimo error posible capaz de ser alcanzado. Estamos hablando de un límite fundamental para el error que nunca podrá ser mejorado independientemente de la tecnología utilizada ^error-bayesiano