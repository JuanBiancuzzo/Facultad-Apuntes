---
dia: 2023-08-12
materia: orga
capitulo: 10
---
### Definición
---
Es una [[Red neuronal]] donde la función que se aplica en cada [[Neurona]] es una [[Convolución]]. En esta convolución, el dato inicial la podemos entender como una de las funciones en esta, y un kernel, siendo la otra función. Este kernel es el que tiene que aprender la red neuronal. 

Las neuronas de esta red serían del estilo $$ o = Y \ast k_i $$ donde $o$ es el output, $Y$ es el input, ya sea el input inicial o de otra neurona, y $k_i$ es el i-esimo kernel.

#### [[Hiper-parámetros de un modelo|Hiper-parámetros]]
---
Tiene como hiper-parámetros la 
* Cantidad de neuronas
* El tamaño del kernel
* El stride
* l padding. 

#### Reducción del tamaño
---
También se puede reducir el tamaño del input con diferentes métodos como max-pooling que dado una [[Matriz]] de valores, tomaremos el máximo de una bloque de $n\times m$. $$ \begin{bmatrix} 
1 & 1 & 2 & 4 \\
5 & 6 & 7 & 8 \\
3 & 2 & 1 & 0 \\
1 & 2 & 3 & 4 \\
\end{bmatrix} \xrightarrow[\text{stride 2}]{\text{max pooling con } 2 \times 2 \text{ filtro}} \begin{bmatrix}
6 & 8 \\
3 & 4 \\
\end{bmatrix} $$
