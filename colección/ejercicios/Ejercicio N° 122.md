---
etapa: terminado
dia: 2026-06-27
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 122
---
# Enunciado
---
Se desea una [[ingeniería en informática/proba/Representación de variables aleatorias/Recta de regresión|regresión lineal]] (sin normalizar) sobre el siguiente conjunto de datos $$ \begin{array}{c|c|c|c|c} 
	x & 0.2 & 1.4 & -1.4 & -0.2 \\ \hline
	y & 20 & 10 & 10 & 0
\end{array} $$
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\begin{tikzpicture}[scale=2.1, transform shape, thick]
	\tikzmath {
		\alto = 2.5; \ancho = 2; \radio = 0.07; \escalaY = 1/10;
		\scale = 0.65; \scaleTick = 0.6; \desfase = 1.01; 
		\diff = 0.2; \lenTick = 0.1;
	}
	
	\coordinate (v_1) at ( 0.2, {20 * \escalaY}); 
	\coordinate (v_2) at ( 1.4, {10 * \escalaY}); 
	\coordinate (v_3) at (-1.4, {10 * \escalaY}); 
	\coordinate (v_4) at (-0.2, { 0 * \escalaY}); 
	
	\draw[->] (0, -\diff) -- (0, \alto) 
		node[pos=\desfase, above=2pt, scale=\scale] {$y$};
	\draw[->] ({-\diff - \ancho}, 0) -- ({\ancho + \diff}, 0) 
		node[pos=\desfase, right=2pt, scale=\scale] {$x$};
		
    \foreach \tick in {-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2} {
        \draw (\tick, {-\lenTick / 2}) 
                node[below=2pt, scale=\scaleTick] {$\tick$}
            -- (\tick, {\lenTick / 2});
    }
    \foreach \tick in {0.25, 0.75, 1.25, 1.75} {
        \draw (\tick, {-\lenTick / 3}) -- (\tick, {\lenTick / 3});
        \draw (-\tick, {-\lenTick / 3}) -- (-\tick, {\lenTick / 3});
    }
    \foreach \tick in {5, 10, 15, 20} {
        \draw ({-\lenTick / 2}, {\tick * \escalaY}) 
                node[left=2pt, scale=\scaleTick] {$\tick$}
            -- ({\lenTick / 2}, {\tick * \escalaY});
    }
		
	\foreach \coor in {v_1, v_2, v_3, v_4} {
		\filldraw[draw=azul, ultra thick] (\coor) circle (\radio);	
	}
	
\end{tikzpicture}
\end{document}
```

* Hallar los parámetros del [[ingeniería en informática/ingenieria de software 1/Ingeniería de software/Modelo|modelo]]
* Predecir $y$ para $x = 0.1$

# Resolución
---
Recordemos que para calcular los parámetros se puede hacer utilizando la [[Matriz psudoinversa|matriz psudoinversa]] de la siguiente forma $$ W = \left( X^T X \right)^{-1} ~ X^T y $$ 
En este caso particular se tiene $$ X = \begin{bmatrix} 
	1 & 0.2 \\
	1 & 1.4 \\ 
	1 & -1.4 \\ 
	1 & -0.2 \\
\end{bmatrix}, ~~~  y = \begin{bmatrix} 
	20 \\ 10 \\ 10 \\ 0 
\end{bmatrix}, ~~~  W = \begin{bmatrix} 
	b \\ w
\end{bmatrix} $$
Por lo que solo queda calcular $$ \begin{align}
	X^T X &= \begin{bmatrix} 
		1 & 1 & 1 & 1 \\
		0.2 & 1.4 & -1.4 & -0.2 \\
	\end{bmatrix} ~ \begin{bmatrix} 
		1 & 0.2 \\
		1 & 1.4 \\ 
		1 & -1.4 \\ 
		1 & -0.2 \\
	\end{bmatrix} = \begin{bmatrix} 
		4 & 0 \\
		0 & 4 \\ 
	\end{bmatrix} \\
	X^T y &= \begin{bmatrix} 
		1 & 1 & 1 & 1 \\
		0.2 & 1.4 & -1.4 & -0.2 \\
	\end{bmatrix} ~ \begin{bmatrix} 
		20 \\ 10 \\ 10 \\ 0	
	\end{bmatrix} = \begin{bmatrix} 
		40 \\ 4	
	\end{bmatrix} \\
	W &= \left( X^T X \right)^{-1} X^T y \\
	\begin{bmatrix} 
		b \\ w
	\end{bmatrix} &= \begin{bmatrix} 
		4 & 0 \\
		0 & 4 \\ 
	\end{bmatrix}^{-1} ~ \begin{bmatrix} 
		40 \\ 4	
	\end{bmatrix} = \begin{bmatrix} 
		10 \\ 1
	\end{bmatrix}
\end{align} $$
Por lo que finalmente se obtiene la recta $$ y = x + 10 $$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\begin{tikzpicture}[scale=2.1, transform shape, thick]
	\tikzmath {
		\alto = 2.5; \ancho = 2; \radio = 0.07; \escalaY = 1/10;
		\scale = 0.65; \scaleTick = 0.6; \desfase = 1.01; 
		\diff = 0.2; \lenTick = 0.1;
	}
	
	\coordinate (v_1) at ( 0.2, {20 * \escalaY}); 
	\coordinate (v_2) at ( 1.4, {10 * \escalaY}); 
	\coordinate (v_3) at (-1.4, {10 * \escalaY}); 
	\coordinate (v_4) at (-0.2, { 0 * \escalaY}); 
	
	\draw[->] (0, -\diff) -- (0, \alto) 
		node[pos=\desfase, above=2pt, scale=\scale] {$y$};
	\draw[->] ({-\diff - \ancho}, 0) -- ({\ancho + \diff}, 0) 
		node[pos=\desfase, right=2pt, scale=\scale] {$x$};
		
    \foreach \tick in {-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2} {
        \draw (\tick, {-\lenTick / 2}) 
                node[below=2pt, scale=\scaleTick] {$\tick$}
            -- (\tick, {\lenTick / 2});
    }
    \foreach \tick in {0.25, 0.75, 1.25, 1.75} {
        \draw (\tick, {-\lenTick / 3}) -- (\tick, {\lenTick / 3});
        \draw (-\tick, {-\lenTick / 3}) -- (-\tick, {\lenTick / 3});
    }
    \foreach \tick in {5, 10, 15, 20} {
        \draw ({-\lenTick / 2}, {\tick * \escalaY}) 
                node[left=2pt, scale=\scaleTick] {$\tick$}
            -- ({\lenTick / 2}, {\tick * \escalaY});
    }
		
	\foreach \coor in {v_1, v_2, v_3, v_4} {
		\filldraw[draw=azul, ultra thick] (\coor) circle (\radio);	
	}
	
	\draw[azul, dashed] (-2, {\escalaY * (-2 + 10)})
		-- (2, {\escalaY * (2 + 10)});
	
\end{tikzpicture}
\end{document}
```

Tomando $x = 0.1$ se obtiene la predicción $$ y(x = 0.1) = 0.1 + 10 = 10.1 $$