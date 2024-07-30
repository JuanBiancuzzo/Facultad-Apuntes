---
dia: 2023-08-10
tags:
  - orga/Machine-learning
  - nota/facultad
---
### Definición
---
Es una técnica por la cuál penalizamos a un modelo en función de su complejidad. Esto lo hace alterando el entrenamiento de un modelo para evitar que sus parámetros cambien de forma brusca o rápida con los datos, evitando el [[Overfitting]] 

Por ejemplo, si tenemos que ajustar un polinomio, podemos usar una función de costo a los valores de los coeficientes multiplicado por un [[Hiper-parámetros de un modelo|hiper-parámetro]] para tener control sobre este ajuste

#### Técnicas
---
* L1 (Lasso): $$ loss_{L1}(y, \hat{y}) = loss(y, \hat{y}) + \alpha \cdot \sum_k |w_k| $$ donde $w_k$ son los pesos del modelo
* L2 (Ridge): $$ loss_{L2}(y, \hat{y}) = loss(y, \hat{y}) + \alpha \cdot \sum_k w_k^2 $$ donde $w_k$ son los pesos del modelo
* Dropout:
	  La idea es que con alguna cierta [[Probabilidad|probabilidad]] algunos pesos pasen a ser 0, en el modelo que se este entrenando. Esto es para que el modelo no pueda confiar completamente en la existencia de esos datos