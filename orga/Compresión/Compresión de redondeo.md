---
dia: 2023-04-03
capitulo: 4
tags:
  - orga/Compresión
---
### Definición
---
Dado una tabla dada por los [[Bit de información]], tenemos 
|     | Proba | Bits    | Redondeo |
| --- | ----- | ------- | -------- |
| A   | 0.4   | 1.32193 | 2        |
| B   | 0.09  | 3.47398 | 4        |
| C   | 0.02  | 5.64386 | 6        |
| D   | 0.1   | 3.32193 | 4        |
| E   | 0.34  | 1.55639 | 2        |
| F   | 0.05  | 4.32193 | 5         |

Por lo tanto se calculamos cuantos bits en promedio estaríamos usando al redondera, nos queda que estaríamos $2.61$ que es mejor que usar $3$ bits por letra. Pero es peor que el optimo ya que si vemos la [[Entropía de shannon]] esta nos da $2.03$.

$$ H = \sum_i \mathbb{P}(x_i) \cdot \text{bit's} $$