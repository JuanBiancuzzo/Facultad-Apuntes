---
dia: 2023-03-14
tags:
  - carrera/ingeniería-electrónica/numerico/Ecuaciones-no-lineales
  - carrera/ingeniería-en-informática/numerico/Ecuaciones-no-lineales
  - nota/facultad
---
# Definición
---
Se tiene $f(\alpha) = 0$ donde se busca $\alpha$ en un intervalo $[a, b]$ donde se presupone que existe una única raíz en dicho intervalo, y por lo tanto $f(a) \cdot f(b) < 0$.

Para cada iteración se estima el punto medio como $$ m_k = \frac{a_k + b_k}{2} $$ en donde si $f(m_k) = 0$ entonces encontramos nuestra raíz, sino seguimos iterando, de la siguiente forma $$ \left(a_{k+1}, b_{k+1} \right) = \begin{cases} 
	\left(a_k, ~ m_k \right) & \text{si} ~~~ f(a_k) ~ f(m_k) < 0 \\ \\
	\left(m_k, ~ b_k \right) & \text{si} ~~~ f(a_k) ~ f(m_k) > 0  
\end{cases}$$
En este método nos podemos asegurar llegar a la raíz en infinitos pasos.


## Cota de error
---
El [[Error absoluto|error absoluto]] de este algoritmo es $\Delta x_n = \frac{\Delta x_0}{2^{n}}$ donde $\Delta x_0 = \frac{b_0 - a_0}{2}$. 


## Solución
---
Se dice que el resultado es $$ \alpha = m_k ~ \pm ~ \Delta x_n $$