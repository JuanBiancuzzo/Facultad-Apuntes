---
dia: 2023-08-12
tags:
  - carrera/ingeniería-en-informática/orga/NLP/2
  - investigación/ciencias-de-la-computación/Machine-learning/Deep-Learning
  - investigación/machine-Learning/Deep-Learning
  - investigación/matemática/Estadística/Machine-learning/Deep-Learning
  - nota/facultad
  - nota/investigacion
aliases:
  - Convolutional Neural Network
  - CNN
---
# Definición
---
Es una [[Red neuronal|red neuronal]] donde la función que se aplica en cada [[Neurona|neurona]] es una [[Convolución|convolución]]. En esta convolución, el dato inicial la podemos entender como una de las funciones en esta, y un kernel, siendo la otra función. Este kernel es el que tiene que aprender la red neuronal

Las neuronas de esta red serían del estilo $$ o = Y \ast k_i $$ donde $o$ es el output, $Y$ es el input, ya sea el input inicial o de otra neurona, y $k_i$ es el i-esimo kernel

## Hiper-parámetros
---
Tiene como [[Hiper-parámetros de un modelo|hiper-parámetros]] la 
* Cantidad de neuronas
* El tamaño del kernel
* El stride
* l padding. 

## Reducción del tamaño
---
También se puede reducir el tamaño del input con diferentes métodos como max-pooling que dado una [[Matriz|matriz]] de valores, tomaremos el máximo de una bloque de $n\times m$ $$ \begin{bmatrix} 
1 & 1 & 2 & 4 \\
5 & 6 & 7 & 8 \\
3 & 2 & 1 & 0 \\
1 & 2 & 3 & 4 \\
\end{bmatrix} \xrightarrow[\text{stride 2}]{\text{max pooling con } 2 \times 2 \text{ filtro}} \begin{bmatrix}
6 & 8 \\
3 & 4 \\
\end{bmatrix} $$
