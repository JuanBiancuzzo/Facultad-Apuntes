---
dia: 2022-11-29
tags:
  - ingeniería-electrónica/analisis-3/Serie-de-Fourier
  - nota/facultad
aliases:
  - Periodo#^periodo
  - Frecuencia#Frecuencia
---
# Definición
---
Dado un [[Números Reales|número real]] positivo, una [[Función|función]] $f : \mathbb{R} \to \mathbb{C}$ es $P$-periódica sii $$\forall x \in \mathbb{R} : f(x + P) = f(x)$$ siendo $P$ el periodo 
^periodo

Esta función es [[Seccionalmente continua|seccionalmente continua]] sii en el intervalo $[0, P]$ (y por lo tanto en cualquier intervalo $[a, a + P]$, $a \in \mathbb{R}$), tiene una cantidad finita de [[Función continua|discontinuidad]] de [[Salto finito|salto finito]]

En el caso discreto, se dice que una función $x[n]$ es periódica, con periodo $N \in \mathbb{Z}$, si $$ x[n + N] = x[n], ~ \forall n $$
## Frecuencia
---
Se define la frecuencia como el inverso del periodo, generalmente representado con la letra $f$ $$ f = \frac{1}{P} $$

## Observaciones
---
* Si $f : \mathbb{R} \to \mathbb{C}$ es $P$-periódica, entonces para todo entero $k$ y todo $x \in \mathbb{R}$: $f(x + kP) = f(x)$
* Una función $P$-periódica es, también. $nP$-periódica para todo entero positivo $n$. 
