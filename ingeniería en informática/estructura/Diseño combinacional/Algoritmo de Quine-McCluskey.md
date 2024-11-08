---
dia: 2023-04-23
tags:
  - ingeniería-en-informática/estructura/Diseño-combinacional
  - nota/facultad
---
# Definición
---
Tiene las mismas propiedades que el [[Mapa de Karnaugh]] pero se puede implementar en software. Por lo tanto podemos reducir [[Función|funciones]] donde la cantidad de variables de entrada son mayores a 5.

Este [[Algoritmo|algoritmo]] se aprovecha de que para saber si dos [[Implicante|implicantes]] son vecinos, entonces su representación en binario tiene un único valor distintio. Por lo tanto vamos construyendo de los implicantes más chicos a los más grandes, y aquellos implicantes que no se hayan usado para hacer implicantes más grandes, serán los [[Implicante primo|implicantes primos]].

# Ejemplo
---
Tenemos la función que depende de $a$, $b$, $c$ y $d$, y si los pensamos como números en [[Base númerica|base]] 2 las posibilidades, entonces esta función es $1$ cuando ese número es: $0$, $1$, $2$, $5$, $6$, $7$, $8$, $9$, $10$, $14$, donde el $7$ y el $9$ son redundantes. Entonces agrupamos esos números en binario por aquellos que tengan la misma cantidad de $1$.

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

| grupo | números | representación | diferencia |
| ----- | ------- | -------------- | ---------- |
| 0     | 0, 1    | 000-           | 1          |
|       | 0, 2    | 00-0           | 2          |
|       | 0, 8    | -000           | 8          |
| 1     | 1,5     | 010-           | 4          |
|       | 2, 6    | 01-0           | 4          |
|       | 1, 9    | 100-           | 8          |
|       | 8,9     | 100-           | 1          |
|       | 2, 10   | 10-0           | 8          |
|       | 8, 10   | -010           | 2          |
| 2     | 5, 7    | 01-1           | 2          |
|       | 6, 7    | 011-           | 1          |
|       | 6, 14   | -110           | 8          |
|       | 10, 14  | 1-10           | 4          |

Logrando reducir el número de grupos por 1. Notemos que usamos todos los [[Implicante|implicantes]], eso de debe tener en cuenta para los últimos pasoso.

Ahora aplicaremos la misma regla, pero únicamente a los que tenga el mismo resultado de la resta, por ejemplo el $(0, 1)$ y el $(8, 9)$. En el caso de repetirse los números este no lo usaremos, entonces nos queda:

| grupo | números      | representación | diferencia | usamos |
| ----- | ------------ | -------------- | ---------- | ------ |
| 0     | 0, 1, 8, 9   | -00-           | 9          | Si     |
|       | 0, 2, 8, 10  | -0-0           | 10         | Si     |
|       | 0, 9, 1, 9   | -00-           | 9          | No     |
|       | 0, 8, 2, 10  | -0-0           | 10         | No     |
| 1     | 2, 6, 10, 14 | --10           | 12         | Si     |
|       | 2, 10, 6, 1  | --10           | 12         | No       |

Notemos que ya no podemos reducir más pero sino se podría hacer un grupo más. 

Por lo tanto ahora tenemos todos los [[Implicante primo|implicantes primos]], en este caso son

| número       | representación |
| ------------ | -------------- |
| 1, 5         | 0-01           |
| 5, 7         | 01-1           |
| 6, 7         | 011-           |
| 0, 1, 8, 9   | -00-           |
| 0, 2, 8, 10  | -0-0           |
| 2, 6, 10, 14 | --10               |

Ahora tenemos que obtener únicamente los [[Implicante esencial|implicantes escenciales]], para eso haremos una tabla de la siguiente forma

| minitérminos | 0   | 1   | 2   | 5   | 6   | 8   | 10  | 14  | Redundantes | 7   | 9   |
| ------------ | --- | --- | --- | --- | --- | --- | --- | --- | ----------- | --- | --- |
| 1, 5         |     | x   |     | x   |     |     |     |     |             |     |     |
| 5, 7         |     |     |     | x   |     |     |     |     |             | x   |     |
| 6, 7         |     |     |     |     | x   |     |     |     |             | x   |     |
| 0, 1, 8, 9   | x   | x   |     |     |     | x   |     |     |             |     | x   |
| 0, 2, 8, 10  | x   |     | x   |     |     | x   | x   |     |             |     |     |
| 2, 6, 10, 14 |     |     | x   |     | x   |     | x   | x   |             |     |     |

Los [[Suma de minitérminos|minitérminos]] que verticalmente tenga una única "x", significa que solo esta incluido en ese implicante primo, y por definición es un implicante escencial.

En este caso sería el $14$ por lo que incluye a los minitérminos $2$, $6$ y $10$. Ahora como ya fueron incluidos en este, podemos ignorarlos y aquellas columnas que usan. Dejandonos con los minitérminos $0$, $1$, $5$ y $8$.

| minitérminos | 0   | 1   | -   | 5   | -   | 8   | -   | -   | Redundantes | 7   | 9   |
| ------------ | --- | --- | --- | --- | --- | --- | --- | --- | ----------- | --- | --- |
| 1, 5         |     | x   |     | x   |     |     |     |     |             |     |     |
| 5, 7         |     |     |     | x   |     |     |     |     |             | x   |     |
| 6, 7         |     |     |     |     | -   |     |     |     |             | x   |     |
| 0, 1, 8, 9   | x   | x   |     |     |     | x   |     |     |             |     | x   |
| 0, 2, 8, 10  | x   |     | -   |     |     | x   | -   |     |             |     |     |
| 2, 6, 10, 14 |     |     | -   |     | -   |     | -   | -   |             |     |     |

Notemos que si usamos el implicante anterior, nos quedamos sin implicantes escenciales, por lo tanto buscaremos aquellos implicantes primos que tengan la mayor cantidad de minitérmino no redundantes. Por lo tanto elegimos el implicante $(0,~2,~8,~10)$ dejandonos con los minitérminos $1$ y $5$.

| minitérminos | -   | 1   | -   | 5   | -   | -   | -   | -   | Redundantes | 7   | 9   |
| ------------ | --- | --- | --- | --- | --- | --- | --- | --- | ----------- | --- | --- |
| 1, 5         |     | x   |     | x   |     |     |     |     |             |     |     |
| 5, 7         |     |     |     | x   |     |     |     |     |             | x   |     |
| 6, 7         |     |     |     |     | -   |     |     |     |             | x   |     |
| 0, 1, 8, 9   | -   | x   |     |     |     | -   |     |     |             |     | x   |
| 0, 2, 8, 10  | -   |     | -   |     |     | -   | -   |     |             |     |     |
| 2, 6, 10, 14 |     |     | -   |     | -   |     | -   | -   |             |     |     |

De nuevo, como no tenemos implicantes escenciales buscaremos aquellos implicantes primos que tengan la mayor cantidad de minitérminos no redundantes. Por lo tanto elegimos el implicante $(1, ~5)$ que no deja implicantes no redundantes sin usar.

Dejandonos con los implicantes:

| número       | representación |
| ------------ | -------------- |
| 1, 5         | 0-01           |
| 0, 2, 8, 10  | -0-0           |
| 2, 6, 10, 14 | --10           |

que podemos expresar como: 
$$ f(a, b, c, d) = \overline{a} \cdot \overline{c} \cdot d + \overline{b} \cdot \overline{d} + c \cdot \overline{d} $$
