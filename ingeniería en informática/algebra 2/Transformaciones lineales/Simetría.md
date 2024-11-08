---
dia: 2023-01-22
tags:
  - ingeniería-en-informática/algebra-2/Transformaciones-lineales
  - nota/facultad
  - ingeniería-electrónica/algebra-2/Transformaciones-lineales
---
# Definición
---
Teniendo dos [[Subespacio|subespacios]] $S_1$ y $S_2$ en [[Suma directa entre subespacios|suma directa]], tal que generen el [[Espacio vectorial|espacio vectorial]] $\mathbb{V}$

La simetría de $\mathbb{V}$ de $S_1$ de la dirección $S_2$, denotada por $\Sigma_{S_1, S_2}$, es la [[Transformación lineal|transformación lineal]] de $\mathbb{V}$ en $\mathbb{V}$ definida por 
$$\Pi_{S_1, S_2} := \mathbb{I}_\mathbb{V} - 2 \cdot \Pi_{S_1, S_2}$$

Donde $\Pi_{S_1, S_2}$ es la [[Proyector|proyector]], de $S_1$ en $S_2$

## Propiedades 
---
 * $\begin{cases} \Sigma_{S_1, S_2} = \mathbb{I}_\mathbb{V}(V) - 2 \cdot \Pi_{S_1, S_2} = v - 2 \cdot 0_\mathbb{V} =  v, \text{ si } v \in S_1 \\  ~~ \\  \Sigma_{S_1, S_2} = \mathbb{I}_\mathbb{V}(V) - 2 \cdot \Pi_{S_1, S_2} = v - 2 \cdot v = -v, \text{ si } v \in S_2 \\  \end{cases}$
 
 *  $\Sigma^2_{S_1, S_2} = \Sigma_{S_1, S_2} \circ \Sigma_{S_1, S_2} = \Sigma_{S_1, S_2}(\Sigma_{S_1, S_2}) = \mathbb{I}_\mathbb{V}$

 * Suponiendo que $\{v_1, v_2, \cdots, v_r\}$ es base $S_1$ y $\{v_{r+1}, v_{r+2}, \cdots, v_{r+n}\}$ es base $S_2$ entonces propondremos la base $B= \{v_1, v_2, \cdots, v_r, v_{r+1}, v_{r+2}, \cdots, v_{r+n}\}$. Entonces
 	$$ \left[ \Sigma_{S_1, S_2} \right]^B_B=\begin{bmatrix} 
	\mathbb{I}_{r \times r} & 0_{r \times n - r} \\
	0_{n - r \times r}      & -\mathbb{I}_{n - r \times n - r}
	\end{bmatrix}$$ 