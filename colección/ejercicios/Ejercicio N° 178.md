---
etapa: sin-empezar
dia: 2026-06-28
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 178
nombre: Modulació ortogonal usando la matriz de Hadamard
---
# Enunciado
---
Una [[Matriz de Hadamard|matriz de Hadamard]] es una [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz|matriz]] con columnas [[ingeniería en informática/analisis 2/Nomenclatura/Ortogonalidad|ortogonales]] cuyos elementos son $\pm 1$. En el caso de $n$ es potencia de $2$, una matriz de Hadamard de $n \times n$ puede construirse utilizando la siguiente recursión $$ \begin{align}
	H_2 &= \begin{bmatrix}
		1 & 1 \\	
		1 & -1
	\end{bmatrix}, &
	H_{2n} &= \begin{bmatrix}
		H_n & H_n \\	
		H_n & -H_n
	\end{bmatrix}
\end{align} $$
Definimos $c_i = \begin{bmatrix} c_{i~1} & \cdots & c_{i~n} \end{bmatrix}$ a la $i$-ésima fila de la matriz de Hadamard de $n \times n$

1. Muestre que las señales construidas según $$ s_i(t) = \sum_{k = 1}^{n} c_{i~k} ~ p(t - k T_c),~~~ i = 1,~ \cdots,~ n $$ son ortogonales, donde $p(t)$ es un pulso arbitrario de soporte $0 \le t \le T_c$ y $T_c$ es conocido como período de chip. El período de símbolo es $T = n T_c$. De esta manera, es posible construir [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital#Constelación|constelaciones]]  ortogonales en el tiempo
2. Muestre que los [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Filtro adaptativo|filtros adaptados]] a cada una de las señales $s_i(t)$ pueden ser realizados por un único filtro adaptado de $p(t)$ seguido de filtros adaptados digitales adaptados a las palabras de código $\set{c_i}$
3. Calcula las cotas de probabilidad de error de símbolo de [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Cota de unión de fronteras|unión de eventos]] y de [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Cota de unión de fronteras por vecinos más cercanos|vecinos más cercanos]]
4. Obtenga una expresión aproximada para la probabilidad de error de bit en función de la probabilidad de error de símbolo ¿Es posible etiquetar los símbolos con secuencias de bits que sólo difieran en $1$ bit entre símbolos adyacentes (es decir, empleando el [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Código de Gray|código de Gray]])?

# Resolución
---


# Resultado
---

