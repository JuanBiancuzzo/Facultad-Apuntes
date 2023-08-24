---
dia: 2023-04-05
materia: estructura
capitulo: 1
---
### Definición
---
Su forma de representación aplica para los números negativos el [[Complemento a la base|complemento]].

En el caso del binario, se puede invertir los bits para llegar al número, y luego sumarle uno.

También una forma de verlo, es aplicando la siguiente regla, si se tiene un número de n bits, entonces estaría dado por $b_n~\cdots~b_2~b_1~b_0$ por lo tanto en esta representación se calcula de la siguiente forma
$$ \sum_{i = 0}^{N-1} b_i \cdot 2^i ~ - b_i \cdot 2^N $$

Su [[Rango de representación]] es $$ (-2^{n-1})_{10} \le x \le (-2^{n-1} - 1)_{10}$$

### Ejemplo
---
| Decimal | Complemento a la base |
| ------- | --------------------- |
| -8      | 1000                  |
| -7      | 1001                  |
| -6      | 1010                  |
| -5      | 1011                  |
| -4      | 1100                  |
| -3      | 1101                  |
| -2      | 1110                  |
| -1      | 1111                  |
| 0       | 0000                  |
| 1       | 0001                  |
| 2       | 0010                  |
| 3       | 0011                  |
| 4       | 0100                  |
| 5       | 0101                  |
| 6       | 0110                  |
| 7       | 0111                  |

