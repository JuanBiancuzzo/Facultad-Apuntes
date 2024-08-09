---
dia: 2024-08-09
tags: 
 - discreta/Ecuaciones-de-recurrencia
 - nota/facultad
---
### Definición
---
Sea $a, b$ constantes, entonces la [[Ecuación de recurrencia lineal|ecuación de recurrencia]] de la forma $$ x_{n+2} + ax_{n+1} +bx_n = 0 $$
Podemos obtener la solución general como suma de solución de la homogénea más una solución particular

1. Definimos la ecuación homogénea $x_{n+2} + ax_{n+1} +bx_n = 0$ y la [[Ecuación característica|ecuación característica]] $\lambda^2 + a\lambda +b= 0$. De aquí, obtenemos el espectro $\sigma = \{\lambda_1, \lambda_2\}$. Luego, la solución de la homogénea será de la forma
	1. Si $\lambda_1 \neq \lambda_2 \in \mathbb{R}$, entonces proponemos como solución $x_n = C_1\lambda_1^n + C_2\lambda_2^n$
	2. Si $\lambda_1 = \lambda_2 \in \mathbb{R}$, entonces proponemos como solución $x_n = C_1\lambda_1^n + C_2n\lambda_1^n$
	3. Si $\lambda_1 = \overline\lambda_2 \in \mathbb{C}$ con $\lambda_{1,2} = re^{\pm i\theta}$, entonces proponemos como solución a $$ x_n = C_1r^n\cos(n\theta) + C_2r^n\sin(n\theta) $$
2. Debido a que es homogénea, únicamente debemos hallar las constantes a partir de la condición inicial