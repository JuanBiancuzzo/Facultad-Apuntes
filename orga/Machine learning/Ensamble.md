---
dia: 2023-08-12
tags:
  - orga/Machine-learning
  - nota/facultad
  - machine-Learning
---
# Definición
---
Los mejores [[machine Learning/Índice|algoritmos de machine learning]] son combinaciones de varios algoritmos. Se pueden usar técnicas como

### Bagging
---
Hacer subconjuntos distintos del mismo [[Validación del modelo|set de entrenamiento]], y entrenando varios [[machine Learning/Índice|algoritmos]]. Estos van a dar un determinado resultado y por medio de alguna votación se determina el resultado final.

Esto disminuye la posibilidad de overfitting, ya que cada uno no ve la totalidad de los registros del set de entrenamiento.

### Boosting
---
Entrenando un [[machine Learning/Índice|algoritmo]] simple, se hace un efecto en cadena, donde el siguiente algoritmo analiza sus resultados e intenta mejorarlo. Se puede entender como un [[Árbol de decisión]] donde cada paso intenta predecir lo que en la iteración anterior se consideró como mal.

### Blending
---
Siguiendo una lógica de Bagging, teniendo un grupo de [[machine Learning/Índice|algoritmos]] que intentan predecir el resultado final, podemos entrenar un algoritmo que se encargue de ver como combinar los resultados dados.