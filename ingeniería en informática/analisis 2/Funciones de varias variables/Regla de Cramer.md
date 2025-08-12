---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/analisis-2/Funciones-de-varias-variables
  - carrera/ingeniería-en-informática/analisis-2/Funciones-de-varias-variables
  - nota/facultad
vinculoFacultad:
  - tema: Funciones de varias variables
    capitulo: 4
    materia: Análisis matemático 2 A
    carrera: Ingeniería en informática
---
# Definición
---
Tenemos dos ecuaciones con las variables $u$, $v$, $x$, $y$
$$ 
	\begin{matrix} 
		a \cdot u + b \cdot v - k_1 \cdot x = 0 \\
		c \cdot u + d \cdot v - k_2 \cdot y = 0 
	\end{matrix}
$$

Donde $a$, $b$, $c$, $d$, $k_1$ y $k_2$ son constantes. Nos preguntamos cual podemos resolver el sistema para $u$ y $v$ en términos de $x$ y $y$. Si escribimos el sistema como 
$$ 
	\begin{matrix} 
		a \cdot u + b \cdot v = k_1 \cdot x \\
		c \cdot u + d \cdot v = k_2 \cdot y
	\end{matrix}
$$

Entonces ahora nos podemos preguntar, para que valores de $a$, $b$, $c$ y $d$, este sistema tiene solución, y esto es cuando

$$ \Delta = det \begin{vmatrix} a & b \\ c & d \end{vmatrix} \ne 0 $$

En ese caso, podemos reescribimos 

$$
	\begin{matrix} 
		u = \frac{1}{\Delta}(k_1 \cdot d \cdot x - k_2 \cdot b \cdot y) &&
		v = \frac{1}{\Delta}(k_2 \cdot a \cdot y - k_1 \cdot c \cdot x)
	\end{matrix}
$$

Y si lo planteamos todo como determinantes, nos queda la regla de Cramer

$$
	\begin{matrix} 
		u = \frac{1}{\Delta} \cdot det \begin{vmatrix} k_1 \cdot x && b \\ k_2 \cdot y && d \end{vmatrix} && 
		v = \frac{1}{\Delta} \cdot det \begin{vmatrix} a && k_1 \cdot x \\ c && k_2 \cdot y \end{vmatrix}
	\end{matrix} 
$$
