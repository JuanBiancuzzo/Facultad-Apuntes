---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/algebra-2/Transformaciones-lineales
  - carrera/ingeniería-en-informática/algebra-2/Transformaciones-lineales
  - nota/facultad
---
# Definición
---
Teniendo dos subespacios $S_1$ y $S_2$ en [[Suma directa entre subespacios]], tal que generen el espacio vectorial $\mathbb{V}$. Recordando, $v = v_1 + v_2$ si $v_1 \in S_1$ y $v_2 \in S_2$

Entonces se define la proyeccion de $\mathbb{V}$ sobre $S_1$ en la direccion de $S_2$, denotada por $\Pi_{S_1, S_2}$ es la [[Transformación lineal]] de $\mathbb{V}$ en $\mathbb{V}$ definida por 
$$\Pi_{S_1, S_2}(V) := v_1$$

Donde la [[Imagen de una transformación lineal]] es $S_1$ y el [[Núcleo de una transformación lineal]] es $S_2$
$$ Im(T) = S_1, ~~ Nu(T) = S_2$$

Recordar que eso datos son importantes, ya que podemos plantear lo siguiente:
Con $\{v_1, v_2, \cdots, v_n \}$ es base de $S_1$, y $\{w_1, w_2, \cdots, w_m \}$ es base de $S_2$ entonces
$$\Pi_{S_1, S_2}(v_1) = v_1, \Pi_{S_1, S_2}(v_2) = v_2, \cdots, \Pi_{S_1, S_2}(v_n) = v_n$$
$$\Pi_{S_1, S_2}(w_1) = 0_\mathbb{V}, \Pi_{S_1, S_2}(w_2) = 0_\mathbb{V}, \cdots, \Pi_{S_1, S_2}(w_m) = 0_\mathbb{V}$$

# Propiedades 
 * $Im(\Pi_{S_1, S_2}) \oplus Nu(\Pi_{S_1, S_2}) = \mathbb{V}$
 * $\Pi_{S_1, S_2}$ es *idempotente*, es decir, $\Pi^2_{S_1, S_2} = \Pi_{S_1, S_2} \circ \Pi_{S_1, S_2} = \Pi_{S_1, S_2}(\Pi_{S_1, S_2}) = \Pi_{S_1, S_2}$
 * $\Pi_{S_1, S_2} + \Pi_{S_2, S_1} = \mathbb{I}_\mathbb{V}$ 
	* Donde $\mathbb{I}_\mathbb{V}$ es la matriz identidad del espacio $\mathbb{V}$
 * Suponiendo que $\{v_1, v_2, \cdots, v_r\}$ es base $S_1$ y $\{v_{r+1}, v_{r+2}, \cdots, v_{r+n}\}$ es base $S_2$ entonces propondremos la base $B= \{v_1, v_2, \cdots, v_r, v_{r+1}, v_{r+2}, \cdots, v_{r+n}\}$. Entonces
 	$$ [\Pi_{S_1, S_2}]^B_B=\begin{bmatrix} 
	\mathbb{I}_{r \times r} & 0_{r \times n - r} \\
	0_{n - r \times r}       & 0_{n - r \times n - r}
	\end{bmatrix}$$