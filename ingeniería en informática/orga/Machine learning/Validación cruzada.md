---
dia: 2023-08-09
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
aliases:
  - Cross-validation
  - k-fold cross-validation#K-fold Cross-validation
  - Leave-one-out cross-validation#Leave-one-out Cross-validation
  - LOOCV#Leave-one-out Cross-validation
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
  - tema: Regresión en Inteligencia Artificial
    capitulo: 2
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
  - tema: Regresión en Inteligencia Artificial
    capitulo: 2
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
etapa: ampliar
referencias: []
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
En la [[ingeniería en informática/orga/Machine learning/Validación del modelo|etapa de validación]] es crítica en modelos de alta complejidad, ya que los [[ingeniería en informática/orga/Machine learning/Hiper-parámetros de un modelo|hiper-parámetros]] asociados con la [[investigación/machine Learning/Regularization/Regularization|regularización]] suelen ser muy sensibles. En los casos donde establecer un [[ingeniería en informática/orga/Machine learning/Entrenar un modelo#Conjunto de validación|conjunto de validación]] se torne imposible por la cantidad de datos que se tiene, se puede pagar el preció de mayor costo de computación pero logrando validar estos hiper-parámetros sin definir un conjunto de validación. Esta técnica se la conoce como validación cruzada

## Leave-one-out Cross-validation
---
Leave-one-out Cross-validation (LOOCV) es el método básico de validación cruzada, donde propone reservar una sola muestra para validación y entrenar con el resto. Este proceso se repite para cada muestra, realizando $n$ entrenamientos, donde $n$ es la cantidad de muestras. El error entonces se puede estimar promediando el error de validación de todos los entrenamiento

Para utilizar este método para validar un hiper-parámetro se requiere realizar una gran cantidad de entrenamientos, y recordemos que son $n$ entrenamientos para estimar el error de una configuración de hiper-parámetros, por lo tanto se tienen que hacer $V \cdot n$ entrenamientos si hay $V$ posibles valores de hiper-parámetros que probar

Es recomendable usar este método únicamente si se tiene muy pocos datos, y una dimensión chica de hiper-parámetros que probar, especialmente si el entrenamiento es costoso

## K-fold Cross-validation
---
En K-folds se propone separar el [[ingeniería en informática/orga/Machine learning/Entrenar un modelo#Conjunto de entrenamiento|conjunto de datos de entrenamiento]] en $K$ paquetes para entrenar con $K - 1$ de ellos y validar con el restante. Se repite el procedimiento $K$ veces usando como conjunto de validación siempre un paquete diferente, y se define el error de validación total como el promedio del error de validación de cada experimento. De esta manera, para probar $V$ valores de un hiper-parámetro se debe realizar $V \cdot K$ entrenamiento

Notemos como si $K = n$, es el caso de LOOCV, por lo que sabemos que si se toma un valor grande, cercano a $n$ se tiene las mismas desventajas, por otro lado con un $K$ tendiendo a $1$ se reduce la cantidad de entrenamientos y al mismo tiempo reduce la calidad de la estimación del error
