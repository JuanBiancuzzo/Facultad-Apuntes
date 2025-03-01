---
dia: 2024-07-27
tags:
  - carrera/ingeniería-en-informática/algo-1/Introducción-a-la-programación
  - nota/facultad
  - carrera/ingeniería-electrónica/algo-1/Introducción-a-la-programación
aliases:
  - White box
---
# Definición
---
Aquel elemento que es estudiado desde el punto de vista de las interacciones entre los componentes internos que lo integran

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, thick]

	\node (a) at (-1, 0) {A};
	\node (b) at (0, 0) {B};
	\node (c) at (0, 1) {C};
	\node (d) at (1, -1) {D};
	\node (e) at (1, 1) {E};
	\node (f) at (1, 0) {F};

	\draw (-1.5, -1.5) rectangle ++(3, 3);
	
	\draw[->] (a) -- (b);
	\draw[->] (a) -- (c);
	\draw[->] (c) -- (e);
	\draw[->] (b) -- (f);
	\draw[->] (e) -- (f);
	\draw[->] (f) -- (d);

	\draw[<-] (a) -- ++($ (a) - (b) $);
	\draw[->] (d) -- ++($ (d) - (f) $);
	
	\end{tikzpicture}
\end{document}
```