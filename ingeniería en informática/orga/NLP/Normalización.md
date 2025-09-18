---
dia: 2023-03-30
tags:
  - carrera/ingeniería-en-informática/orga/NLP/1
  - investigación/ciencias-de-la-computación/Machine-learning/Natural-Language-Processing
  - investigación/machine-Learning/Natural-Language-Processing
  - investigación/matemática/Estadística/Machine-learning/Natural-Language-Processing
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: NLP
    capitulo: 3
    materia: Organización de datos
    carrera: Ingeniería en informática
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
Existe la idea de normalizar para pre-procesamiento de datos. Donde tiene dos enfoques distintos según la aplicación

Si los datos son numéricos, la normalización de cada componente permite poner a todas las variables en la misma unidad. Esto fuerza a todas las variables de entrada a tener [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|valor medio]] nulo y [[ingeniería en informática/proba/Representación de variables aleatorias/Varianza|varianza]] unitaria. Formalmente asignar los valores $$ (x)_k \leftarrow \frac{(x)_k - \mu_k}{\sigma_k} $$ donde las $\mu_k$ y $\sigma_k$ son calculadas previo al entrenamiento como la [[ingeniería electrónica/estoca/Análisis de datos/Media muestral|media muestral]] $$ \mu_k = \frac{1}{n} \sum_{i = 1}^{n} (x_i)_k,~~~~~ \sigma_k = \sqrt{\frac{1}{n} \sum_{i = 1}^{n} [(x_i)_k - \mu_k]^2 } $$ con $n$ la cantidad de muestras de entrenamiento.

Cabe remarcar que la normalización solo debería aplicarse si los features tengan las mismas unidades, ya que si hay valores con distintas unidades, la relación intrínseca a esas unidades, después de normalizar, puede ser que desaparezcan

Si los datos son [[ingeniería en informática/orga/NLP/Token|tokens]], antes de aplicar uno de los métodos como [[Bag of words|BOF]], [[Term Frequency|TF]] o [[Term frequency x inverse document frequency|TF-IDF]], podemos procesar el texto. Por ejemplo podemos intentar simplificar haciendo que varias palabras se refieran al mismo token. Como auto, automóvil, automotriz, se refieren a lo mismo