---
dia: 2023-04-08
capitulo: 2
tags:
  - estructura/Punto-flotante
  - nota
---
### Definición
---
Es un método de representación de los números decimales, en [[Sistemas de numeración|base 2]], utilizando el método de notación cientifica. $$ x = M \cdot B^e $$
Donde $M$ es la mantisa, este tiene un bit que representa el signo. $B$ la base, que en nuestro caso sería $2$, y por último $e$ el exponente que tiene la [[Representación de enteros|representación]] [[Representación de enteros exceso n|exceso n]]. Este es un estandar llamado **IEEE 754**. Hay que tener en cuenta algunos [[Valores especificos de IEEE 754]].

Esta se conoce con dos posibles tamaños, simple presición y doble precisión. La diferencia es que en simple presición son 32 bits, mientras que doble presición es de 64 bits.

| tipo   | Exponente | Mantisa |
| ------ | --------- | ------- |
| Simple | 8 bits    | 23 bits |
| Doble  | 11 bits   | 52 bits |

Para útilizarlo, el número que queremos almacenar se normaliza, es decir si tuvieramos $23,433_{10} = 10111.01101110110110010001_2$ se lo pienza de la siguiente forma

$$  \begin{matrix} 
	10111.01101110110110010001 \cdot 2^0 \\
	~~1.011101101110110110010001 \cdot 2^{-4}
\end{matrix} $$
Por lo que guardamos en el exponente es $-4$ y en la mantiza es $011101101110110110010001$.

#### [[Rango de representación]]
---
Para simple precisión este será $$ 2^{-126} \le |x| \le 2^{128} $$
Para doble precisión este será $$ 2^{-1022} \le |x| \le 2^{1024} $$