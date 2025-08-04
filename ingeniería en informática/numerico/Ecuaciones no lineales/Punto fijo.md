---
dia: 2023-03-14
tags:
  - carrera/ingeniería-electrónica/numerico/Ecuaciones-no-lineales
  - carrera/ingeniería-en-informática/numerico/Ecuaciones-no-lineales
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/numerico/Ecuaciones no lineales/Resumen.md]]"
---
# Definición
---
Se tiene $f(\alpha) = \alpha$ donde se busca $\alpha$ en un intervalo $[a, ~b]$, se propone que $$ x_{n + 1} = f(x_n) $$
### Hipótesis
---
1. $f(x)$ es [[Función continua|continua]] en $(a, ~ b)$
2. $f(x) \in (a, ~b)$, $\forall x \in (a, ~b)$
3. $|f'(x)| \le m < 1$, $\forall x \in (a, ~b)$

Con (1) y (2) nor permite decir que converge y existe, al menos 1 punto fijo. Sumándole (3) nos dice que hay un único punto fijo.

## Cota de error
---
El [[Error absoluto|error absoluto]] de este algoritmo es: $$ \bigg| \alpha - x_{n - 1} \bigg| \le \frac{m}{1 - m} \bigg| x_{n + 1} - x_n \bigg| $$