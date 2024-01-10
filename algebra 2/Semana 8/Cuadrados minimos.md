---
dia: 2023-01-22
materia: algebra 2
capitulo: 8
---
### Definición
---
Teniendo la [[Transformación lineal]] $T \in \mathcal{L}(\mathbb{V}, \mathbb{W})$, existe la ecuacion $T(v_0) = w_0$ cuando $w_0 \in Im(T)$ ([[Imagen de una transformación lineal]])

Entonces si $w_0 \notin Im(T)$, no existe solucion, pero si queremos obtener la solucion aproximada, podemos usar el vector mas cercano a $w_0$ que tenga solucion

El problema de cuadrados minimos, consiste en encontrar (si existen) todos los vectores $\hat{v} \in \mathbb{V}$ tal que la distancia de $T(\hat{v})$ a $w_0$ sea minima

$$ \lVert w_0 - T(\hat{v}) \rVert = min\{ \lVert w_0 - T(v) \rVert : v \in \mathbb{V} \} $$

Notar que $\{ \lVert w_0 - T(v) \rVert : v \in \mathbb{V} \} = \{ \lVert w_0 - w \rVert : w \in Im(T) \}$


Como vimos [[Distancia minima entre vector y subespacio]], $P_{Im(T)}(w_0)$ es el unico vector de $Im(T)$ que minimiza la distancia a $w_0$. Entonces los vectores $\hat{v}$ que buscamos son las soluciones del sistema

$$ T(v) = P_{Im(T)}(w_0) $$

Como siempre tiene solucion, sera unica cuando $T$ sea [[Monomorfismo]]

## Vista con matrices
Sean $A \in \mathbb{R}^{m \times n}$ y $b \in \mathbb{R}^m$. Entonces son equivalentes:

 * $\hat{x} \in \mathbb{R}^n$ es una solucion de cuadrados minimos de la ecuacion $Ax = b$, donde $b$ no pertenece a la conjunto columna de $A$ (ver [[Subespacios fundamentales de una matriz]])
 * $\lVert A\hat{x} - b \rVert = min\{\lVert Ax - b \rVert : x \in \mathbb{R}^n\}$ o, equivalentemente, $\lVert A\hat{x} - b \rVert \le \lVert Ax - b \rVert$ para todo $x \in \mathbb{R}^n$
 * $\hat{x} \in \mathbb{R}^n$ es una solucion de la ecuacion $Ax=P_{col(A)}(b)$ es decir $A\hat{x} = P_{col(A)}(b)$
 * $\hat{x} \in \mathbb{R}^n$ es una solucion de la [[Ecuacion normal]], es decir $A^TA\hat{x} = A^T b$

En este caso, si $\hat{x}_p$ es una solucion de cuadrados minimos, entonces la vamos a escribir $\hat{x}$ como

$$ \hat{x} = \hat{x}_p + \hat{x}_h $$

Donde $\hat{x}_h \in nul(A)$ 