---
dia: 2023-05-26
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
aliases:
  - Tuning
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
En un [[Aprendizaje supervisado|aprendizaje supervisado]] se tiene que validar la respuesta de nuestro modelo, por lo que tendremos que dividir nuestro set de datos en dos
* [[ingeniería en informática/orga/Machine learning/Entrenar un modelo#Conjunto de entrenamiento|Set de entrenamiento]]
* [[ingeniería en informática/orga/Machine learning/Entrenar un modelo#Conjunto de validación|Set de validación]]
* [[ingeniería en informática/orga/Machine learning/Entrenar un modelo#Conjunto de testeo|Set de testeo]]

Recordemos que en la etapa de entrenamiento, se usará un modelo con [[ingeniería en informática/orga/Machine learning/Hiper-parámetros de un modelo|hiper-parámetros]] $\lambda$. En la etapa de validación está basada en el enfoque de prueba y error. Por ejemplo, se deberá realizar $V$ entrenamientos diferentes, donde $V$ es la cantidad de puntos de $\lambda$ que deseo probar. Al final de esta etapa se decide por el valor de $\lambda$ que menor error de validación genere. Finalmente en la etapa de testeo se valida que el $\lambda$ obtenido sea un buen valor y no pierda [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^gap-generalizacion|generalidad]]

El problema principal de este enfoque aparece con la dimensión $\lambda$, ya que existen más combinaciones posibles de valores al aumentar la dimensión de $\lambda$. Por lo que existen diferentes métodos para la búsqueda de los hiper-parámetros, también conocido como tuning el model
* [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Grid search|Grid-search]]
* Random-search
	* Se determina el conjunto valores a probar, y se intenta mejorar la [[Métrica de un modelo|métrica]] probando $k$ combinaciones posibles
* Optimización bayesiana
	* Se determina por cada hiper-parámetro una distribución de probabilidades, y va probando combinaciones y en base a los resultados actualiza esas distribuciones