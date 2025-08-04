---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/analisis 2/Funciones de varias variables/Resumen.md]]"
---
# Definición
---
Seguimos expandiendo de la idea [[Función implícita generalizada|función implícita generalizada]]

Ahora tendremos un sistema de ecuaciones de [[Función implícita|funciones implícitas]], donde cada una podremos escribirla como

$$ 
	\begin{matrix} 
		F_i(x_1, \cdots, x_n, y_1, \cdots, y_m) = 0 &&
		F_i(x_1, \cdots, x_n, \varphi_1(x_1, \cdots, x_n), \cdots, \varphi_m(x_1, \cdots, x_n)) = 0
	\end{matrix} 
$$

Donde existe un $p = (x_1, \cdots, x_n, y_1, \cdots, y_m)$ tal que $F_i(p) = 0, i = 1, 2, \cdots, m$

Donde $\nabla F_i$ es continuo en un [[Entorno|entorno]] alrededor de $p$ para $i = 1, 2, \cdots, m$

Por ultimo, donde 
$$\frac{\partial(F_1, F_2, \cdots, F_m)}{\partial(y_1, y_2, \cdots, y_m)}(p) \ne 0$$

donde se resuelve de la siguiente forma

$$ \frac{\partial(F_1, F_2, \cdots, F_n)}{\partial(y_1, y_2, \cdots, y_n)} = det \begin{vmatrix}
		\frac{\partial F_1}{\partial y_1} & \frac{\partial F_1}{\partial y_2} & \cdots & \frac{\partial F_1}{\partial y_n} \\ 
		\frac{\partial F_2}{\partial y_1} & \frac{\partial F_2}{\partial y_2} & \cdots & \frac{\partial F_2}{\partial y_n} \\ 
		\vdots & \vdots & \ddots & \vdots \\
		\frac{\partial F_n}{\partial y_1} & \frac{\partial F_n}{\partial y_2} & \cdots & \frac{\partial F_n}{\partial y_n} \\ 
	\end{vmatrix} $$
	
Donde vamos a poder encontrar la [[Derivada parcial|derivada parcial]] de la siguiente forma

$$ \frac{\partial y_i}{\partial x_j} = -\frac{\frac{\partial(F_1, F_2, \cdots, F_n)}{\partial(y_1, \cdots, y_{i-1}, x_j, y_{i+1}, \cdots, y_n)}}{\frac{\partial(F_1, F_2, \cdots, F_n)}{\partial(y_1, y_2, \cdots , y_n)}}$$

Para aclarar, el numerador se calcula de la siguiente forma

$$ \frac{\partial(F_1, F_2, \cdots, F_n)}{\partial(y_1, \cdots, y_{i-1}, x_j, y_{i+1}, \cdots, y_n)} = det \begin{vmatrix}
		\frac{\partial F_1}{\partial y_1} & \cdots & \frac{\partial 	F_1}{\partial y_{i - 1}} & \frac{\partial F_1}{\partial x_i} & \frac{\partial F_1}{\partial y_{i + 1}} & \cdots & \frac{\partial F_1}{\partial y_n} \\ 
		\frac{\partial F_2}{\partial y_1} & \cdots & \frac{\partial 	F_2}{\partial y_{i - 1}} & \frac{\partial F_2}{\partial x_i} & \frac{\partial F_2}{\partial y_{i + 1}} & \cdots & \frac{\partial F_2}{\partial y_n} \\ 
		\vdots & \ddots & \vdots & \vdots & \vdots & \ddots & \vdots \\
		\frac{\partial F_n}{\partial y_1} & \cdots & \frac{\partial 	F_n}{\partial y_{i - 1}} & \frac{\partial F_n}{\partial x_i} & \frac{\partial F_n}{\partial y_{i + 1}} & \cdots & \frac{\partial F_n}{\partial y_n} \\ 
	\end{vmatrix} $$

Acá se aplica el [[Teorema Cauchy-Dini para sistema de ecuaciones escalares|Teorema de Cauchy-Dini para sistema de ecuaciones]]

## Explicación de la resolución
---
Esto ultimo, se calcula usando el determinante del [[Jacobiana|Jacobiano]], y para verlo, vamos a usar un ejemplo

Teniendo el sistema
$$ 
	\begin{matrix}
		F(x, y, \varphi_1(x, y), \varphi_2(x, y)) = 0 \\
		G(x, y, \varphi_1(x, y), \varphi_2(x, y)) = 0 
	\end{matrix}
$$

Como tenemos las funciones $\varphi_1$ y $\varphi_2$ vamos a derivarlas con respecto de $x$ (después lo haremos con respecto a $y$) entonces se tiene que aplicar la [[Regla de la cadena|regla de la cadena]]

$$ 
	\begin{matrix}
		\frac{\partial F}{\partial x} + \frac{\partial F}{\partial u}  \frac{\partial u}{\partial x} + \frac{\partial F}{\partial v} \frac{\partial v}{\partial x} = 0 \\ \\
		\frac{\partial G}{\partial x} + \frac{\partial G}{\partial u}  \frac{\partial u}{\partial x} + \frac{\partial G}{\partial v} \frac{\partial v}{\partial x} = 0 
	\end{matrix}
$$

Que podemos reescribir como 

$$ 
	\begin{matrix}
		\frac{\partial F}{\partial u}  \frac{\partial u}{\partial x} + \frac{\partial F}{\partial v} \frac{\partial v}{\partial x} = -\frac{\partial F}{\partial x} \\ \\
		\frac{\partial G}{\partial u}  \frac{\partial u}{\partial x} + \frac{\partial G}{\partial v} \frac{\partial v}{\partial x} = -\frac{\partial G}{\partial x}
	\end{matrix}
$$

Y usando la [[Regla de Cramer|regla de Cramer]], podemos encontrar que la $\frac{\partial u}{\partial x}$ y $\frac{\partial v}{\partial x}$ son

$$ \frac{\partial u}{\partial x} = \frac{det 
	\begin{vmatrix}  
		-\frac{\partial F}{\partial x} & \frac{\partial F}{\partial v} \\
		-\frac{\partial G}{\partial x} & \frac{\partial G}{\partial v}
	\end{vmatrix} }
	{ det 
	\begin{vmatrix}  
		\frac{\partial F}{\partial u} & \frac{\partial F}{\partial v} \\
		\frac{\partial G}{\partial u} & \frac{\partial G}{\partial v}
	\end{vmatrix} } 
$$

$$ \frac{\partial v}{\partial x} = \frac{det 
	\begin{vmatrix}  
		\frac{\partial F}{\partial u} & -\frac{\partial F}{\partial x} \\
		\frac{\partial G}{\partial u} & -\frac{\partial G}{\partial x}
	\end{vmatrix} }
	{ det 
	\begin{vmatrix}  
		\frac{\partial F}{\partial u} & \frac{\partial F}{\partial v} \\
		\frac{\partial G}{\partial u} & \frac{\partial G}{\partial v}
	\end{vmatrix} } 
$$


