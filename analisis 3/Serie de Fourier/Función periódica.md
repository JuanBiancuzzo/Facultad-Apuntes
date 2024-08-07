---
dia: 2022-11-29
tags:
  - analisis-3/Serie-de-Fourier
  - nota/facultad
---
### Definición
---
Dado un número real positivo, una función $f : \mathbb{R} \to \mathbb{C}$ es $P$-periódica sii $$\forall x \in \mathbb{R} : f(x + P) = f(x)$$
Esta función es [[Seccionalmente continua]] sii en el intervalo $[0, P]$ (y por lo tanto en cualquier intervalo $[a, a + P]$, $a \in \mathbb{R}$), tiene una cantidad finita de [[Función continua|discontinuidad]] de [[Salto finito]].

En el caso discreto, se dice que una función $x[n]$ es periódica, con periodo $N \in \mathbb{Z}$, si $$ x[n + N] = x[n], ~ \forall n $$

### Observaciones
---
* Si $f : \mathbb{R} \to \mathbb{C}$ es $P$-periódica, entonces para todo entero $k$ y todo $x \in \mathbb{R}$: $f(x + kP) = f(x)$
* Una función $P$-periódica es, también. $nP$-periódica para todo entero positivo $n$. 
