---
dia: 2023-03-30
tags:
  - orga/NLP/1
  - nota/facultad
---
# Definición
---
Es similar a [[Term Frequency|TF]] donde dado un conjunto de [[Token|tokens]] se toman los primeros `k` [[Token|tokens]] más comunes. Después se genera una [[Matriz booleana|matriz booleana]], de `n` por `k`, donde `n` son la cantidad de frase/páginas. El booleano representa si aparece o no dicho token en esa frase o página.

Dado un query del usuario, vamos a hacer un vector booleano para esa query con los mismos tokens anterior. Finalmente haremos la [[Similitud coseno|similitud coseno]] entre la query y los datos que obtuvimos anteriormente.

Esto nos da el orden de nuestra información, donde el que tenga mayor similitud va primero y se ordena de forma descendente.

## Hiper-parámetros
---
* [[Tokenización]]
* [[Stop-word]]
* [[Steamming]]
* [[Lematización]]