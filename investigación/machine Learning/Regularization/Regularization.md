---
dia: 2024-11-26
estado: Sin empezar
tags:
  - índice
  - investigación/machine-Learning/Regularization
  - nota/investigacion
  - ingeniería-en-informática/orga/Machine-learning
  - investigación/ciencias-de-la-computación/Machine-learning/Regularization
  - investigación/matemática/Estadística/Machine-learning/Regularization
aliases:
  - Regularización
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar la rama de machine learning que se conoce como regularización, para poder realizar modelos para evitar el overfitting

## Resumen
---
Es una técnica por la cuál penalizamos a un modelo en función de su complejidad. Esto lo hace alterando el entrenamiento de un modelo para evitar que sus parámetros cambien de forma brusca o rápida con los datos, evitando el [[Overfitting|overfitting]] 

Por ejemplo, si tenemos que ajustar un polinomio, podemos usar una función de costo a los valores de los coeficientes multiplicado por un [[Hiper-parámetros de un modelo|hiper-parámetro]] para tener control sobre este ajuste

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarTemaInvestigacion", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/investigacion/biblioIndice', { indice: dv.current() });
```