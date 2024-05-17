---
dia: 2023-03-30
materia: orga
capitulo: 3
aliases:
  - TF
---
### Definición
---
Es similar a [[Bag of words]], donde dado un conjunto de [[Token|tokens]] se toman los primeros `k` [[Token|tokens]] más comunes. Después se genera una [[Matriz]], de `n` por `k`, donde `n` son la cantidad de frase/páginas. El valor en cada posición de la matriz representa la cantidad de veces que aparece dicho token en esa frase o página.

Dado un query del usuario, vamos a hacer un vector para esa query con los mismos tokens anterior. Finalmente haremos la [[Similitud coseno]] entre la query y los datos que obtuvimos anteriormente.

Esto nos da el orden de nuestra información, donde el que tenga mayor similitud va primero y se ordena de forma descendente.