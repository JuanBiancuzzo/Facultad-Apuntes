---
dia: 2023-08-09
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
aliases:
  - Validación cruzada
  - k-fold cross validation
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
---
# Definición
---
Es dividir el [[Validación del modelo|set de entrenamiento]] en $k$ particiones del mismo tamaño, conocidos como "folds", usando cada fold como set de validación. Después se promedia la [[Métrica de un modelo|métrica]] en las $k$ validaciones.