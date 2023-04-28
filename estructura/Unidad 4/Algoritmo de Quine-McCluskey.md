---
dia: 2023-04-23
materia: estructura
capitulo: 4
---
### Definición
---
Tiene las mismas propiedades que el [[Mapa de Karnaugh]] pero se puede implementar en software. Por lo tanto podemos reducir [[Función|funciones]] donde la cantidad de variables de entrada son mayores a 5.

Este algoritmo se aprovecha de que para saber si dos [[Implicante|implicantes]] son vecinos, entonces su representación en binario tiene un único valor distintio. Por lo tanto vamos construyendo de los implicantes más chicos a los más grandes, y aquellos implicantes que no se hayan usado para hacer implicantes más grandes, serán los [[Implicante primo|implicantes primos]].

### Ejemplo
---
Tenemos la función que depende de $a$, $b$, $c$ y $d$, y si los pensamos como números en [[Base numerica|base]] 2 las posibilidades, entonces esta función es $1$ cuando ese número es: $0$, $1$, $2$, $5$, $6$, $7$, $8$, $9$, $10$, $14$. Entonces agrupamos esos números en binario por aquellos que tengan la misma cantidad de $1$.
| grupo | número | representación |
| ----- | ------ | -------------- |
| 0     | 0      | 0000           |
| 1     | 1      | 0001           |
|       | 2      | 0010           |
|       | 8      | 1000           |
| 2     | 5      | 0101           |
|       | 6      | 0110           |
|       | 9      | 1001           |
|       | 10     | 1010           |
| 3     | 7      | 0111           |
|       | 14     | 1110               |

Notemos que los elementos que estan en el mismo grupo nunca van a poder ser adyacentes, como también pasa con los grupos que esten separados por otro, como el 0 y el 2, que estan separados por el grupo 1, ya que estos tiene 2, o más, números que se deberían cambiar para que sean iguales.

Entre grupos seguidos, vamos a ver cuales son adyacentes (matemáticamente si tienen un digito de diferencia, entonces su resta es un multiplo de 2). Vamos a anotar solo el valor que no cambia, de la siguiente forma:
| grupo | números | representación |
| ----- | ------- | -------------- |
| 0     | 0, 1    | 000-           |
|       | 0, 2    | 00-0           |
|       | 0, 8    | -000           |
| 1     | 1,5     | 010-           |
|       | 2, 6    | 01-0           |
|       | 1, 9    | 100-           |
|       | 8,9     | 100-           |
|       | 2, 10   | 10-0           |
|       | 8, 10   | -010           |
| 2     | 5, 7    | 01-1           |
|       | 6, 7    | 011-           |
|       | 6, 14   | -110           |
|       | 10, 14  | 1-10               |

Logrando reducir el número de grupos por 1. Notemos que usamos todos los [[Implicante|implicantes]], eso de debe tener en cuenta para los últimos pasoso.

Ahora aplicaremos la misma regla, pero únicamente a los que tenga la misma falta de valores, por ejemplo el $(0, 1)$ y el $(8, 9)$.


