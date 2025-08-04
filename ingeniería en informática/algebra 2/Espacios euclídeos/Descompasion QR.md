---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/algebra-2/Espacios-euclídeos
  - carrera/ingeniería-en-informática/algebra-2/Espacios-euclídeos
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/algebra 2/Espacios euclídeos/Resumen.md]]"
---
# Definición
---
Sea $A \in \mathbb{K}^{m \times n}$ de rango $n$ ([[Rango de una matriz|rango de una matriz]]). Una descomposición QR de $A$ es una factorización 

$$ A = QR \text{ con } Q \in \mathbb{K}^{m \times n} \text{ y } R \in \mathbb{n \times n} $$

tales que las columnas de $Q$ son una [[Base ortonormal|base ortonormal]] de $col(A)$ considerando el producto interno canónico de $\mathbb{R}^m$ y $R$ es triangular superior con números positivos en la diagonal principal


Para encontrar $Q$ vamos a necesitar una base ortonormal, para eso vamos a crear una base $B$ a partir de $col(A)$

Después para asegurarnos que sea [[Ortogonalidad|ortogonalidad]]es entre si, vamos a usar el [[Método de Gram-Schmidt|método de Gram-Schmidt]] dejando que $B' = \{ w_1, w_2, \cdots, w_n \}$

Por ultimo, a cada elemento vamos a normalizarlo, obteniendo asi la base ortonormal, que van a ser las columnas de $Q$ tal que 

$$ Q := [q_1, q_2, \cdots, q_n ], q_i = \frac{w_i}{\lVert w_i \rVert} , i = 1, \cdots, n $$

Para encontrar $R$ va a ser mas dificil, mas cuentoso, ya que podemos hacer

$$ R := \begin{bmatrix} 
	\lVert w_1 \rVert & \alpha_{12} \lVert w_1 \rVert & \alpha_{13} \lVert w_1 \rVert & \cdots & \alpha_{1n} \lVert w_1 \rVert \\ 
	0 & \lVert w_2 \rVert & \alpha_{23} \lVert w_2 \rVert & \cdots & \alpha_{2n} \lVert w_2 \rVert \\ 
	0 & 0 & \lVert w_3 \rVert & \cdots & \alpha_{3n} \lVert w_2 \rVert \\ 
	\vdots & \vdots & \vdots & \ddots & \vdots \\
	0 & 0 & 0 & \cdots & \lVert w_n \rVert
\end{bmatrix} $$

Donde encontramos los $\alpha_{ij}$, planteando el método de Gram-Schmidt, con $col(a) = \{a_1, a_2, \cdots, a_n \}$

$$ \begin{matrix} 
	w_1 = a_1 \\
	w_2 = a_2 - \alpha_{12} w_1 \\
	w_3 = a_3 - \alpha_{13} w_1 - \alpha_{23} w_2 \\
	\vdots \\
	w_n = a_n - \alpha_{1n} w_1 - \alpha_{2n} w_2 - \cdots - \alpha_{(n-1)n}w_{n-1} 
\end{matrix} $$

con

$$\alpha_{ij} = \frac{\langle a_j, w_i \rangle}{\lVert w_i \rVert^2} = \frac{w_i^T a_j}{\lVert w_i \rVert^2} \text{ para } 1 \le i < j $$

## Propiedades
---
 * $col(A) = col(Q)$
 * $R$ es una matriz inversible, por lo tanto $A R^{-1} = Q$
 * $Q^T Q = I_{\mathbb{R}^n}$ por lo tanto $Q^T A = R$
 * $Q^T Q = [P_{col(A)}]_E^E$, donde encontramos [[Matriz de proyección ortogonal|matriz de proyección ortogonal]]
 * $T(x)=QQ^T(x)$ siendo un [[Proyector|proyector]], tiene las propiedades
	 * $\langle T(x), y \rangle = \langle x, T(y) \rangle$
	 * $Im(T) = col(QQ^T) = col(Q) = col(A)$
	 * $[T]^E_E = [P_{col(A)}]_E^E$