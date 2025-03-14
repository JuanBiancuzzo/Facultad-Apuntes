---
dia: 2023-01-22
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-2/Nomenclatura
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
  - carrera/licenciatura-en-ciencias-matemáticas/analisis-1/Vectores-y-geometría-del-espacio
  - carrera/licenciatura-en-ciencias-de-datos/analisis-1/Vectores-y-geometría-del-espacio
  - carrera/licenciatura-en-ciencias-físicas/analisis-1/Vectores-y-geometría-del-espacio
aliases:
  - Distancia entre vectores
referencias:
  - "517"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La [[Distancia euclidiana|distancia]] entre dos vectores $x$ y $y$ se puede usar la definición de [[Norma|norma]] para definirla, tal que

$$ d: A \times A \to \mathbb{R}, ~~~~ d(X, Y) \doteq \lVert X - Y \rVert $$

```tikz
\begin{document}
	\begin{tikzpicture}
		\draw[->, very thick] (0, 0) -- (6, 1)
			node[below=2pt] {$x$};

		 \draw[->, very thick] (0, 0) -- (4, 5)
			node[above=2pt] {$y$};

		\draw[thin] (6, 1) -- (4, 5)
			node[pos=0.5, rotate=-63, below=4pt] {$x - y$};

		\draw[|<->|, very thick] (6.4, 1.2) -- (4.4, 5.2)
			node[pos=0.5, rotate=-63, above=4pt] {$d(x, y) = ||x- y||$};
	\end{tikzpicture}
\end{document}
```


## Propiedades
---
1. $d(x, y) \ge 0$, si $d(x, y) = 0 \iff x = y$
2. $d(x, y) = d(y, x)$
3. $d(x, y) \le d(x, z) + d(z, y)$, con $z$ un vector cualquiera de $\mathbb{R}^n$

## Otra forma de verlo
---
Teniendo una [[Base ortonormal|base ortonormal]] tal que $B = \{u_1, u_2, \cdots, u_n \}$, podemos escribir la distancia entre dos vectores usando el [[Teorema de Pitagoras|teorema de Pitagoras]] como

$$ d(v_1, v_2) = \sqrt{\sum^n_{j = 1}(\langle v_2, u_j \rangle - \langle v_1, u_j \rangle)^2} $$

Recordemos que 

$$ \lVert v_2 - v_1 \rVert^2 = \langle v_2 - v_1, v_2 - v_1 \rangle $$ 

como vimos en [[Norma inducida|norma inducida]], por lo tanto 

$$ \langle v_2 - v_1, v_2 - v_1 \rangle = \sum^n_{j = 1}(\langle v_2, u_j \rangle - \langle v_1, u_j \rangle)^2 $$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```