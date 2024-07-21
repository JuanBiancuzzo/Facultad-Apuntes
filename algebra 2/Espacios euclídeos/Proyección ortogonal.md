---
dia: 2023-01-22
capitulo: 3
tags:
  - algebra-2/Espacios-euclídeos
---
### Definición
---
Sea $S$ un [[Subespacio|subespacio]] de $\mathbb{V}$ y $v \in \mathbb{V}$, decimos que $\hat{v}$ es la [[Proyección|proyección]] ortogonal del vector $v$ sobre $S$ si verifica

$$ \hat{v} \in S \text{ y } v - \hat{v} \in S^\perp $$

Se puede encontrar $\hat{v}$ teniendo una base con el [[Sistema ortogonal|sistema ortogonal]] de $S$ tal que $B_S = \{v_1, v_2, \cdots, v_r \}$ (que si tenemos una base pero esta no es ortogonal, entonces podemos usar el [[Método de Gram-Schmidt|método de Gram-Schmidt]] para convertirlo en ortogonal), entonces

$$ \hat{v} = \frac{\langle v, v_1 \rangle}{\langle v_1, v_1 \rangle} \cdot v_1 + \frac{\langle v, v_2 \rangle}{\langle v_2, v_2 \rangle} \cdot v_2 + \cdots + \frac{\langle v, v_r \rangle}{\langle v_r, v_r \rangle} \cdot v_r $$

Esta proyección también escrita como $P_S(v) := \hat{v}$, determinando una [[Transformación lineal|transformación lineal]]

#### Propiedades
---
 * $P_S^2 = P_S$, esta propiedad la tiene por ser un [[Proyector|proyector]]
 * $Im(P_S) = S$ y $Nu(P_S) = S^\perp$ Entonces, claramente $\mathbb{V} = Im(T) \oplus Nu(T)$ y además $Im(P_S) \perp Nu(P_S)$
 * Como $P_S$ es un proyector y tenemos que $Im(P_S) = S$ y $Nu(P_S) = S^\perp$, entonces $$ P_{S^\perp}(v) = I_\mathbb{V}(v) - P_S(v) = v - P_S(v) $$
 * Para todo $x, y \in \mathbb{V}$ vale $\langle P_S(x), y \rangle = \langle x, P_S(y) \rangle$
 * Para todo $x \in \mathbb{V}$ vale $\lVert P_S(x) \rVert \le \lVert x \rVert$