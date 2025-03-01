---
dia: 2023-01-22
tags:
  - nota/facultad
  - ingeniería-en-informática/analisis-2/Nomenclatura
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
aliases:
  - Producto vectorial
---
# Definición
---
El producto cruz esta definido para [[Espacio Rn|espacio Rn]] con $n=3$ y su definición es $$ u \times v = det \begin{pmatrix} \hat{i} & \hat{j} & \hat{k} \\ u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \end{pmatrix} $$ ^f60aee

Donde existe la regla de la mano derecha para guiarse un poco en que dirección resulta

```tikz
\begin{document}
	\begin{tikzpicture}[scale = 1.25, transform shape]
		\draw[->, thick] (0, 0) -- (-3, -1.5)
			node[above left=2pt] {$u$};
		\draw[->, thick] (0, 0) -- (0, 3)
			node[left=3pt] {$u \times v$};
		\draw[->, thick] (0, 0) -- (2.5, -1.75)
			node[right=2pt] {$v$};
		\draw[dashed, ->, very thick] (-1.5, -0.75) .. controls (-0.5, -1.5) and (0.5, -1.25) .. (1.15, -1);
		
	
	\end{tikzpicture}
\end{document}
```

