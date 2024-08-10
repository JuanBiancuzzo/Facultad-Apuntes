---
dia: 2024-08-08
tags:
  - discreta/Ecuaciones-de-recurrencia
  - nota/facultad
---
### Definición
---
Sea la[[Ecuación de recurrencia lineal|ecuación de recurrencia]] $x_{n+1} = ax_n + b$, con $x_0$, $a$, $b$ constantes, entonces podemos llegar a una solución de forma artesanal de la forma $$ x_{n+1} =a_0 ~ a^n + b ~ \frac{a^n - 1}{a - 1}, ~~~ a \ne 1 $$
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

#### Solución
---
Sea $a$ constante, entonces la ecuación de recurrencia de la forma $$ x_{n + 1}= ax_n + b_n $$
Podemos obtener la solución general como suma de solución de la homogénea más una solución particular

1. Definimos la ecuación homogénea $x_{n+1} - ax_n = 0$ y la [[Ecuación característica|ecuación característica]] $\lambda -a = 0$. De aquí, obtenemos el espectro $\sigma = \{\lambda_1 = a\}$. Luego, la solución de la homogénea será de la forma $$ X_{h_n} = C_1a^n $$
2. Proponemos una solución particular $x_{p_n}$ cuya forma dependerá de $b_n$
	1. Si $b_n$ es un polinomio: $x_{p_n}$ será un polinomio del mismo grado si $a \neq 1$, multiplicado por $n$ si $a = 1$
	2. Si $b_n$ es una exponencial del tipo $\alpha^n$, se propone otra exponencial del mismo tipo cuando $\alpha \neq \lambda$, multiplicada por $n$ si $\alpha = \lambda$
	3. Si $b_n$ es una [[algebra 2/Espacios Vectoriales/Combinación lineal.md|combinación lineal]] de los casos anteriores, se propone una combinación lineal de las reglas anteriores
	4. Si $b_n$ es un producto de las reglas anteriores, se propone un producto de las reglas anteriores si $\alpha \neq \lambda$, multiplicado por $n$ si $\alpha = \lambda$

	Para hallar los coeficientes, reemplazamos la solución planeada en la ecuación de recurrencia
3. Hallamos la solución general como suma de ambas $$ X_n = X_{h_n} + X_{p_n} $$
4. Imponemos la condición inicial para hallar las constantes apropiadas