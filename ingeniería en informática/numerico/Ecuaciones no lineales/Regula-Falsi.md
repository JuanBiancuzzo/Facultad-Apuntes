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
Se tiene $f(\alpha) = 0$ donde se busca $\alpha$ en un intervalo $[a, b]$ donde se presupone que existe una unica raíz en dicho intervalo, y por lo tanto $f(a) \cdot f(b) < 0$.

Para cada iteración se estima el punto medio como $$ m_k = \frac{f(b_k) \cdot a_k - f(a_k) \cdot b_k}{f(b_k) - f(a_k)} $$ en donde si $f(m_k) = 0$ entonces encontramos nuestra raíz, sino seguimos iterando, de la siguiente forma $$ \left(a_{k+1}, b_{k+1} \right) = \begin{cases} 
	\left(a_k, ~ m_k \right) & \text{si} ~~~ f(a_k) ~ f(m_k) < 0 \\ \\
	\left(m_k, ~ b_k \right) & \text{si} ~~~ f(a_k) ~ f(m_k) > 0  
\end{cases}$$
Se requiere que $f'(x)$ sea continua y no se anule en $(a_0, b_0)$. Por lo que existen dos números $c$ y $C$ tal que $$ 0 < c < \left| f'(x) \right| < C < \infty, ~~ x \in (a_0, b_b) $$

## Cota de error
---
El [[Error absoluto|error absoluto]] de este algoritmo es: $$ \left| \alpha - m_k \right| \le \frac{C - c}{c} \left| m_k - m_{k - 1} \right| $$