---
dia: 2023-08-10
tags:
  - orga/Machine-learning
  - nota/facultad
aliases: []
---
# Definición
---
Es una técnica por la cuál penalizamos a un modelo en función de su complejidad. Esto lo hace alterando el entrenamiento de un modelo para evitar que sus parámetros cambien de forma brusca o rápida con los datos, evitando el [[Overfitting]] 

Por ejemplo, si tenemos que ajustar un polinomio, podemos usar una función de costo a los valores de los coeficientes multiplicado por un [[Hiper-parámetros de un modelo|hiper-parámetro]] para tener control sobre este ajuste

Las técnicas son
* [[Penalización L1|Penalización L1]]
* [[Penalización L2|Penalización L2]]
* [[Weight sharing|Weight sharing]]
* [[Early stopping|Early stopping]]
* [[Dropout|Dropout]]
