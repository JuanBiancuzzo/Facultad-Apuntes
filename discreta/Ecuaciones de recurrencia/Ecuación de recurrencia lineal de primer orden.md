---
dia: 2024-08-08
tags: 
 - discreta/Ecuaciones-de-recurrencia
 - nota/facultad
---
### Definición
---
Sea la[[Ecuación de recurrencia lineal|ecuación de recurrencia]] $x_{n+1} = a~x_n + b$, con $x_0$, $a$, $b$ constantes, entonces podemos llegar a una solución de forma artesanal de la forma $$ x_{n+1} =a_0 ~ a^n + b ~ \frac{a^n - 1}{a - 1}, ~~~ a \ne 1 $$
Podemos llegar a una expresión equivalente, definiendo $x^*$ como el punto de equilibrio $$ x_{n + 1} = \begin{cases} 
    (x_0 - x^*) ~ a^n + x^*, & x^* = \frac{b}{1 - a}, & a \ne 1 \\
    x_0 + bn, && a = 1
\end{cases} $$Observamos que se cumple
- Si $x_0 = x^*$, entonces $x_n = x^*$ para cualquier $n$
- El punto de equilibrio es un atractor global si $|a| < 1$ $$ \lim_{n \to \infty} x_n = x^* $$
- El punto de equilibrio es un repulson global si $|a| > 1$ $$ \nexists\lim_{n \to \infty} x_n $$
- Si $a = 1$, tiene un comportamiento lineal (como se define en la expresión general)
- Si $a = -1$, entonces $x_n$ oscila infinitamente alrededor de $x^*$

Si $b$ ya no es constante, tendremos $x_{n+1} = ax_{n} + b_n$, en donde encontramos la solución general $$ x_0 ~ a^n + \sum_{k=0}^{n-1}a^k ~ b_{n-1-k} $$