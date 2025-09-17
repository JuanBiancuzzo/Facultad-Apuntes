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
Es una técnica por la cuál penalizamos a un modelo en función de su complejidad. Esto lo hace alterando el entrenamiento de un modelo para evitar que sus parámetros cambien de forma brusca o rápida con los datos, evitando el [[Overfitting|overfitting]] 

Por ejemplo, si tenemos que ajustar un polinomio, podemos usar una función de costo a los valores de los coeficientes multiplicado por un [[Hiper-parámetros de un modelo|hiper-parámetro]] para tener control sobre este ajuste

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