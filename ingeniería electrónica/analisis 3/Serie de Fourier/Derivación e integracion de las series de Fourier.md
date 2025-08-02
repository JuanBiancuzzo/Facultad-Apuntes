---
dia: 2022-11-30
tags:
  - carrera/ingeniería-electrónica/analisis-3/Serie-de-Fourier
  - carrera/ingeniería-en-informática/analisis-3/Serie-de-Fourier
  - nota/facultad
---
# Definición
---
Sea $f \in E_P$ ([[Conjunto de funciones periódicas]]), y cada entero positivo $m$, $f_m = \sum_{n = -m}^m c_n(f) \cdot e_n$ es la $m$-esima suma de Fourier.

## Teorema
---
Si $f$ es [[Derivable]] y $f' \in E_P$, entonces la función $F : \mathbb{R} \to \mathbb{C}$ tal que $$ F(x) = c_0(f) \cdot x + \frac{P}{2\pi i}\sum_{n = -\infty, n\ne0}^{\infty} \frac{c_n(f)}{n} \cdot e_n $$ es una [[Primitiva]] de $f$ en el intervalo $[0, ~P]$.


# Teorema
---
Si $f \in E_P$ y $f' \in E_P$, en cada punto $x$ donde $f'$ es [[Función continua|continua]] y existen (y son finitas) las derivadas laterales segundas $f''(x^+)$ y $f''(x^-)$, se verifica que: $$ f'(x) = \frac{2\pi i}{P} \sum_{n = -\infty}^{\infty} n \cdot c_n(f) \cdot e_n $$