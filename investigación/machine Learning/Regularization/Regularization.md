---
dia: 2024-11-26
estado: Sin empezar
tags:
  - investigación/ciencias-de-la-computación/Machine-learning/Regularization
  - investigación/índice
  - investigación/machine-Learning/Regularization
  - investigación/matemática/Estadística/Machine-learning/Regularization
  - nota/investigacion
aliases:
  - Regularización
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
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar la rama de machine learning que se conoce como regularización, para poder realizar modelos para evitar el overfitting

## Resumen
---
#carrera/ingeniería-en-informática/orga/Machine-learning 
El [[ingeniería en informática/orga/Machine learning/Underfitting|problema de sesgo]] se detecta cuando el [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^riesgo-empirico|riesgo empírico]] de [[ingeniería en informática/orga/Machine learning/Entrenar un modelo#Conjunto de entrenamiento|entrenamiento]] es grande comparado con el supuesto [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^error-bayesiano|error bayesiano]]. El mismo se soluciona aumentando la complejidad del modelo. En cambio, el [[ingeniería en informática/orga/Machine learning/Overfitting|problema de varianza]] se detecta cuando el riesgo empírico de [[ingeniería en informática/orga/Machine learning/Entrenar un modelo#Conjunto de validación|validación]] es grande comparado con el de entrenamiento, y la mejor manera de combatirlo es aumentar la cantidad de muestras. Por desgracia esto no siempre es posible, ya sea por la dificultad de obtener los datos o de procesarlos. Las técnicas destinadas a combatir el overfitting sin incorporar nuevos datos se denomina regularización

Existen diferentes técnicas de regularización
* Generar datos sintéticos para incorporarlos
* Incorporar ruido a las muestras para dificultar el sobreajuste
* Limitar la complejidad del modelo
* Entre otros

Por ejemplo, si tenemos que [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Regresión polinómica|ajustar un polinomio]], podemos usar una función de costo a los valores de los coeficientes multiplicado por un [[Hiper-parámetros de un modelo|hiper-parámetro]] para tener control sobre este ajuste

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/referencia/referenciasAcumuladas', { archivo: dv.current() });
```