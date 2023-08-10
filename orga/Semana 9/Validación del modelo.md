---
dia: 2023-05-26
materia: orga
capitulo: 9
---
### Definición
---
En un [[Aprendizaje supervisado|aprendizaje supervisado]] se tiene que validar la respuesta de nuestro modelo, por lo que tendremos que dividir nuestro set de datos en dos:
* Set de entrenamiento
* Set de testeo

El Set de entrenamiento lo usaremos para entrenar, mientras que el test set lo usamos para medir la performance de nuestro modelo, lo cual implica el uso de alguna [[Métrica de un modelo|métrica]]. Para esta es importante que tenga la misma distribución que en producción para no tener un [[Set desbalanceado]].

Al separar el set de entrenamiento del de testeo, hay que tener en cuenta si hay variables temporales ya que su orden puede afectar la capacidad de predicción, en esos casos se ordena por esa variable y se hace la separación, en cualquier otro caso se puede hacer al azar.

En el momento de [[Tuning]] nos vemos obligados a tener otra set, separado de los otros. Este set lo llamaremos set de validación.