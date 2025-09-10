---
dia: 2023-08-10
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
aliases:
  - Problema de varianza
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
El modelo tiene muy buen resultado para el [[Validación del modelo|set de entrenamiento]] pero no es tan bueno para el [[Validación del modelo|set de testeo]]. El modelo generaliza mal, y es demasiado expresivo. Esto se puede solucionar con más datos, disminuyendo la complejidad del modelo y/o [[Regularization|regularizando]]

El overfitting también se lo puede relacionar al problema de varianza, donde el [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^gap-generalizacion|gap de generalización]] va aumentando, que también lo podemos ver como que el [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^riesgo-empirico|error empírico]] decrece por la complejidad del [[ingeniería en informática/aninfo/Ingeniería de software/Modelo|modelo]] pero el [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^riesgo-esperado|error esperado]] dado por la verdadera distribución va aumentando por el exceso de complejidad