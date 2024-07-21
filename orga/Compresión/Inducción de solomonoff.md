---
dia: 2023-04-03
capitulo: 4
tags:
  - orga/Compresión
---
### Definición
---
Se puede explicar con los siguientes 4 pasos:
1) Recolectamos los datos y los ponemos en el formato, entrada -> salida
2) Iteramos todos los programas posibles, y los que terminan, miramos si su salida dado la entrada es lo que queríamos para el dato actual
3) Actualizamos la [[Probabilidad]] de que cada programa sea el que explica el fenómeno utilizando la [[Formula de Bayes]]
4) Repetimos

##### Ejemplo
Supongamos que tenemos dos hipotesis que nos dan correctamente la salida. Con esto estaríamos usando el [[Principio de epicúreo]].

Utilizando la [[Formula de Bayes]] para cada hipotesis, nos queda lo siguiente $$ \mathbb{P}(H_k|E) = \frac{\mathbb{P}(E|H_k) \cdot \mathbb{P}(H_k)}{\mathbb{P}(E)} $$
Como esta hipotesis replica perfectamente los datos de salida: $$\mathbb{P}(E|H_k) = 1$$ 

Después para ver la probabilidad de que la hipotesis $H_k$ de la respuesta correcta, utilizaremos la idea de la [[Navaja de Ockam]], donde darémos menor probabilidad aquellos programas que tengan una [[Complejidad de Kolmogorov|complejidad]] mayor. Dandonos lo siguiente $$ \mathbb{P}(H_k) = 2^{-K(H_k)} $$
Por último para calcular la $\mathbb{P}(E)$ vamos a asumir que el evento es [[Computable]] por lo tanto debe existir una hipotesis que lo resuelva, por lo tanto será la suma de probabilidades de las hipotesis. $$ \mathbb{P}(E) = \sum_i \mathbb{P}(H_i) $$

Esto nos permite entrenar con nuestros datos. Cuando queramos predecir, utilizaremos las probabilidades calculadas para conseguir nuestra respuesta. 

Supongamos que entrenamos a nuestro sistema para predecir el 4 elemento de una lista, y queremos predecir el 5to, entonces el valor sería $$ H_\text{Solomonoff}(5) = \sum_i \mathbb{P}(H_i|E) \cdot H_i(5) $$
Donde es la suma de todas las hipotesis.


