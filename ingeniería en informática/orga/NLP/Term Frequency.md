---
dia: 2023-03-30
aliases:
  - TF
tags:
  - carrera/ingeniería-en-informática/orga/NLP/1
  - curso/ciencia-de-datos-para-salud-mental-y-psicología/Machine-learning-deep-learning-e-interpretabilidad-algorítmica
  - investigación/ciencias-de-la-computación/Machine-learning/Natural-Language-Processing
  - investigación/machine-Learning/Natural-Language-Processing
  - investigación/matemática/Estadística/Machine-learning/Natural-Language-Processing
  - nota/curso
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - "[[ingeniería en informática/orga/NLP/Resumen Parte 1.md]]"
vinculoCurso:
  - "[[cursos/ciencia de datos para salud mental y psicología/Machine learning, deep learning e interpretabilidad algorítmica/Resumen.md]]"
---
# Definición
---
Es similar a [[Bag of words|bag of words]], donde dado un conjunto de [[Token|tokens]] se toman los primeros `k` [[Token|tokens]] más comunes. Después se genera una [[Matriz|matriz]], de `n` por `k`, donde `n` son la cantidad de frase/páginas. El valor en cada posición de la matriz representa la cantidad de veces que aparece dicho token en esa frase o página

Dado un query del usuario, vamos a hacer un [[Vector|vector]] para esa query con los mismos tokens anterior. Finalmente haremos la [[Similitud coseno|similitud coseno]] entre la query y los datos que obtuvimos anteriormente

Esto nos da el orden de nuestra información, donde el que tenga mayor similitud va primero y se ordena de forma descendente

Esta es una forma de resolver el [[Document Distance Problem|problema de la distancia entre documentos]]