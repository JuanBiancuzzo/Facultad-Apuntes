---
dia: 2023-08-09
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
---
# Definición
---
Si el set de datos está muy desbalanceado puede ser difícil entrenar el modelo, las posibles soluciones son:
* Oversamplear la clase minoritaria
* Subsamplear la clase mayoritaria
* Manejar el desbalanceo con [[Hiper-parámetros de un modelo|hiper-parámetros del modelo]] 

Al separar el [[ingeniería en informática/orga/Machine learning/Entrenar un modelo#Conjunto de entrenamiento|set de entrenamiento]] del de [[ingeniería en informática/orga/Machine learning/Entrenar un modelo#Conjunto de validación|testeo]], hay que tener en cuenta si hay variables temporales ya que su orden puede afectar la capacidad de predicción, en esos casos se ordena por esa variable y se hace la separación, en cualquier otro caso se puede hacer al azar, aunque esto puede destruir la estructura de los datos que puede ser lo que buscamos aprender