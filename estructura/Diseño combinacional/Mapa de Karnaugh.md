---
dia: 2023-04-21
tags:
  - estructura/Diseño-combinacional
  - nota/facultad
---
### Definición
---
Este método permite encontrar las expresiones mínimas en forma de [[Suma de minitérminos]] o [[Producto de maxitérminos]]. Se basa en encontrar todos los [[Implicante primo|implicantes primos]], y seleccionar un conjunto mínimo de [[Implicante|implicantes]] que cubra la función.

Al tener todos los [[Implicante primo|implicantes primos]] se tiene que ver cuales son los [[Implicante esencial|implicantes escenciales]] y estos son los que podemos representar como operación mínima.

Este método también nos puede ayudar con las [[Redundancia|redundancias]] ya que representaríamos con $x$ las redundancias y les asignaríamos un valor que nos sirva para reducir la cantidad de implicantes, y en el caso que no reduzca la cantidad, entonces que aumente el tamaño de un implicante.

### Ejemplo
---
Digamos que tenemos 4 variables, $a$, $b$, $c$ y $d$, y haremos la siguiente tabla

| ab \\ cd | 00  | 01  | 11  | 10  |
| -------- | --- | --- | --- | --- |
| 00       | 1   | 0   | 0   | 1   |
| 01       | 1   | 1   | 0   | 0   |
| 11       | 0   | 0   | 1   | 0   |
| 10       | 1   | 0   | 0   | 1    |

Tenemos los siguientes [[Implicante primo|implicantes primos]] para el valor $1$:
1) Cuando $a = 1$, $b = 1$, $c = 1$ y $d = 1$
2) Cuando $a = 0$, $b = 0$ y $c = 0$
3) Cuando $a = 0$, $c = 0$ y $d = 0$
4) Cuando $b = 0$ y  $d = 0$

Notemos como el (4) es un [[Implicante|implicante]] de 4 elementos y es como si la tabla fuera periódica.

Ahora, tenemos que identificar los [[Implicante esencial|implicantes escenciales]], y vemos que el implicante primo (3) no es esencial, ya que el valor $a = 0$, $b = 0$, $c = 0$ y $d = 0$, lo tiene el implicante (4). El punto $a = 0$, $b = 1$, $c = 0$ y $d = 0$, lo tiene el implicante (2). 

Teniendo los implicantes esenciales, y como estamos viendo el para el valor $1$, lo podemos plantear como una [[Suma de minitérminos]].
$$ f(a, b, c, d) = (a \cdot b \cdot c \cdot d) + (\overline{a} \cdot \overline{b} \cdot \overline{c}) + (\overline{b} \cdot \overline{d}) $$

En caso de que veamos los implicantes para el valor $0$ entonces usaríamos el [[Producto de maxitérminos]].