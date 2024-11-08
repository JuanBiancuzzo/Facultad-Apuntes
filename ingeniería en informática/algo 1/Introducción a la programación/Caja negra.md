---
dia: 2024-07-27
tags:
  - ingeniería-en-informática/algo-1/Introducción-a-la-programación
  - nota/facultad
  - ingeniería-electrónica/algo-1/Introducción-a-la-programación
aliases:
  - Black box
---
# Definición
---
Aquel elemento que es estudiado desde el punto de vista de las entradas que recibe y las salidas o respuestas que produce, sin tener en cuenta su funcionamiento interno.

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, thick]

	\fill (-1, -1) rectangle ++(2, 2);
	\draw[<-, ultra thick] (-1.1, 0) -- ++(-2, 0)
		node[left=2pt] {Entrada};
	\draw[->, ultra thick] (1.1, 0) -- ++(2, 0)
		node[right=2pt] {Salida};

	\end{tikzpicture}
\end{document}
```