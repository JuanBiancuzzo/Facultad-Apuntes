---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - nota/facultad
---
# Definición
---
Sea $f : D \subset \mathbb{R}^n \to \mathbb{R}$ con $n > 1$, tal que $f \in C^2(E(\vec{A}))$ y $\nabla f(\vec{A}) = 0$. Sea $H(\vec{A})$ el [[Matriz Hessiana#Determinante Hessiano|determinante Hessiano]] de $f$ en $\vec{A}$

$$ H_1 = det \begin{vmatrix} 
	f''_{x_1 x_1}(\vec{A}) 
\end{vmatrix} 
=  f''_{x_1 x_1}(\vec{A})
$$

$$ H_2 = det \begin{vmatrix} 
	f''_{x_1 x_1}(\vec{A}) & f''_{x_1 x_2} (\vec{A}) \\ 
	f''_{x_2 x_1}(\vec{A}) & f''_{x_2 x_2} (\vec{A}) 
\end{vmatrix} 
= f''_{x_1 x_1}(\vec{A}) \cdot f''_{x_2 x_2}(\vec{A}) - (f''_{x_1 x_2}(\vec{A}))^2
$$

$$ H_n = H(\vec{A}) = det \begin{vmatrix} 
	f''_{x_1 x_1}(\vec{A}) & f''_{x_1 x_2} (\vec{A}) & \cdots & f''_{x_1 x_n} (\vec{A})  \\ 
	f''_{x_2 x_1}(\vec{A}) & f''_{x_2 x_2} (\vec{A}) & \cdots & f''_{x_2 x_n} (\vec{A})  \\ 
	\vdots                 & \vdots                  & \ddots & \vdots \\
	f''_{x_n x_1}(\vec{A}) & f''_{x_n x_2} (\vec{A}) & \cdots & f''_{x_n x_n} (\vec{A})
\end{vmatrix} 
$$

Habiendo calculado todos estos determinantes, se puede afirmar lo siguiente
 * Si $H(\vec{A}) \ne 0$, se dan tres posibles situaciones
	  1. $H_1 < 0, H_2 > 0, \cdots$ signos alternados hasta $H_n$ : $f(\vec{A})$ es [[Máximo|máximo]] local
	  2. $H_k > 0, k = 1, \cdots, n$ : $f(\vec{A})$ es [[Mínimo|mínimo]] local
	  3. Otra situaciones: $f(\vec{A})$ no es [[Extremo|extremo]] local
 * Si $H(\vec{A}) = 0$, este teorema no permite determinar si $f(\vec{A})$ es o no es extremo local