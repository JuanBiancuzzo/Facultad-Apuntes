---
dia: 2023-08-09
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
aliases:
  - Conjunto de datos para un modelo#Conjuntos de datos
  - Conjunto de entrenamiento#Conjunto de entrenamiento
  - Error de entrenamiento#Conjunto de entrenamiento
  - Conjunto de validación#Conjunto de validación
  - Conjunto de testeo#Conjunto de testeo
  - Error de testeo#Conjunto de testeo
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
El entrenamiento de un [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelo]] es un [[Problema de optimización|problema de optimización]], donde buscamos los parámetros óptimos para minimizar o maximizar la [[Métrica de un modelo|métrica]] elegida. Dependiendo del modelo varía la técnica de optimización a usar

## Conjuntos de datos
---
En general se necesitan datos para efectuar distintas funciones
* Para entrenar
* Para ajustar la [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#Relación de compromiso Sesgo/Varianza|relación de compromiso sesgo/varianza]]
* Para estimar el [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^riesgo-esperado|riesgo esperado]]

Se suele dividir los datos entre entrenamiento, validación y testeo, donde las proporciones no están completamente definidas y depende de la cantidad de los datos, o incluso que en casos no es necesario (aunque en general si) dividir en estos conjuntos

### Conjunto de entrenamiento
---
Son los datos utilizados para minimizar el [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^riesgo-empirico|riesgo empírico]]. Sobre estos se produce el aprendizaje. Las variables definidas a partir de este conjunto se llaman parámetros

El error de entrenamiento es el calculo del riesgo empírico utilizando alguna [[Métrica de un modelo|métrica]] que elegimos

### Conjunto de validación
---
Son los datos utilizados para comparar modelos. Las variables definidas a partir de este conjunto se llaman [[ingeniería en informática/orga/Machine learning/Hiper-parámetros de un modelo|hiper-parámetros]] y este es el momento en el que [[Validación del modelo|tuniamos]] los modelos para compararlos

### Conjunto de testeo
---
Son los datos utilizados para evaluar el desempeño final del [[investigación/ciencias de la computación/algoritmos/Algoritmo|algoritmo]]. Su única función es presentar [[ingeniería en informática/proba/Inferencia estadística/Sesgo#^estimador-insesgado|estimadores insesgados]] de las métricas de error y no es imprescindible. Para esta es importante que tenga la misma distribución que el conjunto de entrenamiento que en producción para no tener un [[Set desbalanceado|set desbalanceado]]