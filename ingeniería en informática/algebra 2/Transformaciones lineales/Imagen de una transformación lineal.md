---
dia: 2023-01-22
tags:
  - carrera/ingeniería-en-informática/algebra-2/Transformaciones-lineales
  - nota/facultad
  - carrera/ingeniería-electrónica/algebra-2/Transformaciones-lineales
---
# Definición
---
Siendo $T: \mathbb{V} \to \mathbb{W}$ , la imagen de $T$ son todos los vectores de $\mathbb{W}$ que son resultado de la [[Transformación lineal|transformación lineal]]

```tikz
\begin{document} 
	\begin{tikzpicture}[scale = 1.5, transform shape]
		%\draw (0, 0) [cyan, ultra thin] grid (8, 4);	
		\filldraw[color=red!60, fill=red!60, very thick](2, 2) circle (1); 
		\draw (2, 3) node[above] {$V_K$};
		\filldraw[color=black, fill=black, very thick](2, 2) circle (.1)
			node[below=4pt] {$x$};

		\filldraw[color=blue!60, fill=blue!60, very thick](7, 2) circle (1);
		\draw (7, 3) node[above] {$W_K$};
		\filldraw[color=black, fill=black, very thick](7, 2) circle (.1)
			node[below=4pt] {$~y = T(x)$};

		\draw[->, very thick, black] (2.25, 2) -- (6.75, 2) 
			node[pos=0.5, above=3pt] {$T$};
	\end{tikzpicture}
\end{document}
```


Por lo tanto se puede escribir como 
$$Im(T) := \{w \in \mathbb{W} : \exists v \in \mathbb{V} : w = T(v) \}$$

## Relación con la matriz de la transformación lineal
---
Con $\{[y_1]^{B_2}, [y_2]^{B_2}, \cdots, [y_t]^{B_2} \}$ es una base de $col([T]_{B_1}^{B_2})$ si y solo si, $\{y_1, y_2, \cdots, y_t \}$ es una base de $Im(T)$, entonces  
$$dim(Im(T)) = dim(col([T]_{B_1}^{B_2}))$$ 