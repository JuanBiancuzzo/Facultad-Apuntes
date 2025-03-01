---
dia: 2023-04-08
tags:
  - nota/facultad
  - ingeniería-en-informática/discreta/Álgebra-proposicional
  - ingeniería-en-informática/estructura/Álgebra-de-Boole
  - carrera/ingeniería-electrónica/estructura/Álgebra-de-Boole
aliases:
  - Suma de productos
---
# Definición
---
Dada una [[Función|función lógica]], lo que expresa este método es que se puede expresar como producto de sumas, con el objetivo de replicar esta función si necesidad de conocer cual es pero conociendo su output.

Veamos un ejemplo, sea la siguiente función: 

| $x$ | $y$ | $f(x, y)$ |
| --- | --- | ------ |
| 0   | 0   | 1      |
| 0   | 1   | 0      |
| 1   | 0   | 1      |
| 1   | 1   | 1       |

Lo que vamos a buscar ahora es crear una función para cada posición. Estas funciones diremos que llamaremos $g_{i,j}(x, y)$ tienen la particularidad de que están definidas de la siguiente forma $$ g_{i,j}(x, y) = \begin{cases} 
	f(x, y) & \text{si} ~~ x = i, y = j \\
	0 
\end{cases} $$
Entonces en este caso para $g_{0, 1}(x, y) = 0$ y en todos los otros casos es una [[Función|función]] partida.

Para replicar las siguientes funciones, veamos un caso que puede representar los otros casos $$  g_{1,0}(x, y) = \begin{cases} 
	1 & \text{si} ~~ x = 1, y = 0 \\
	0 
\end{cases} $$
Esta función la podemos replicar, si hacemos $g_{1,0}(x,y) = x \cdot y'$ ya que para cualquier caso es $1$ excepto para cuando $x = 1$ e $y = 0$.

Por último, podemos replicar $f(x, y)$ sumando todas nuestras funciones, ya que va a propagar cuando alguna es $1$ y dejar que sea $0$ en cualquier otro caso. Dejando en este caso $$ f(x, y) =  g_{0, 0}(x, y) + g_{0, 1}(x, y) + g_{1, 0}(x, y) + g_{1, 1}(x, y) $$
En un caso general se puede expresar como $$ f(x_1, \cdots, x_n) = \sum_{i_1 = 0}^{1} \cdots \sum_{i_n = 0}^{1} g_{i_1, \cdots, i_n}(x_1, \cdots, x_n) $$