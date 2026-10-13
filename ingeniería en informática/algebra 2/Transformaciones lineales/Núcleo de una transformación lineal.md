---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/algebra-2/Transformaciones-lineales
  - carrera/ingeniería-en-informática/algebra-2/Transformaciones-lineales
  - nota/facultad
vinculoFacultad:
  - tema: Transformaciones lineales
    capitulo: 2
    materia: Álgebra 2 A
    carrera: Ingeniería en informática
etapa: empezado
referencias: []
aliases:
  - Núcleo de una matriz
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El núcleo de la transformada es el [[ingeniería en informática/algebra 2/Espacios Vectoriales/Conjunto|conjunto]] de vectores que si se le aplica la [[ingeniería en informática/algebra 2/Transformaciones lineales/Transformación lineal|transformación lineal]] estos terminan siendo el $0_\mathbb{W}$

```tikz
\begin{document} 
	\begin{tikzpicture}[scale = 1.5, transform shape]
		%\draw (0, 0) [cyan, ultra thin] grid (8, 4);	
		\filldraw[color=red!60, fill=red!60, very thick](2, 2) circle (1); 
		\draw (2, 3) node[above] {$V_K$};
		\filldraw[color=blue!30, fill=blue!30, very thick](2, 1.75) circle (.5); 
		\draw (2, 2.25) node[above] {$Nuc(T)$};
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

Entonces se puede expresar como 
$$Nu(t) := \{v \in \mathbb{V} : T(v) = 0_\mathbb{W} \}$$

Que se puede ver como un caso particular de la [[Preimagen de una transformación lineal|preimagen de una transformación lineal]] donde el intervalo, o conjunto es el $0_\mathbb{W}$

## Relación con la matriz de la transformación lineal
---
Con $\{[x_1]^{B_1}, [x_2]^{B_1}, \cdots, [x_r]^{B_1} \}$ es una base de $nul([T]_{B_1}^{B_2})$ si y solo si, $\{x_1, x_2, \cdots, x_r \}$ es una base de $Nu(T)$, entonces  $$ \text{dim}(\text{Nu}(T)) = \text{dim}(\text{nul}([T]_{B_1}^{B_2}))$$