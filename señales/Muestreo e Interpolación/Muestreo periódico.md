---
dia: 2024-04-16
materia: señales
capitulo: 5
---
### Definición
---
En ese caso [[Muestreo|muestrear]] una [[Señal|señal]] es generar una [[Serie de tiempo|secuencia de tiempo discreto]] según $$ x(n) = x_c(nT), ~~ n \in \mathbb{Z} $$ donde $T$ es el período de muestreo y $x_c(t)$ es la señal de tiempo continuo

```tikz
\begin{document} 
	\definecolor{azul}{RGB}{39, 115, 191}
	
	\begin{tikzpicture}[scale=1, transform shape, ultra thick]
		\draw[->] (-2, 0) -- (4, 0)
			node[above=2pt, font=\bfseries] {$t$}; 
		\draw[->] (0, 0) node[below=2pt, font=\bfseries] {$0$}
			-- (0, 3) node[right=2pt, font=\bfseries] {$x_c(t)$};
		\foreach \x in {-1.5, -1.4, ..., 3.5}{
			\draw[azul] (\x, {2.5 - (\x)^2 / 8}) 
				-- ({\x + 0.1}, {2.5 - (\x + 0.1)^2 / 8});
		}
	\end{tikzpicture}
	
	\begin{tikzpicture}[scale=1, transform shape, ultra thick]
		\path (0, 0) -- (0, 0);
		\draw[->] (-0.5, 2) -- ++ (1, 0);
	\end{tikzpicture}
	
	\begin{tikzpicture}[scale=1, transform shape, ultra thick]
		\draw[->] (-2, 0) -- (4, 0)
			node[above=2pt, font=\bfseries] {$n$}; 
		\draw[->] (0, 0) node[below=2pt, font=\bfseries] {$0$}
			-- (0, 3) node[right=2pt, font=\bfseries] {$x(n)$};
		
		\foreach \x in {-1.5, -1.3, ..., 3.5}{
			\draw[azul, dashed] (\x, {2.5 - (\x)^2 / 8}) 
				-- ({\x + 0.1}, {2.5 - (\x + 0.1)^2 / 8});
		}
		\foreach \x in {-1.2, -0.6, 0, ..., 4}{
			\draw[green] (\x, 0) -- (\x, {2.5 - (\x)^2 / 8});
			\filldraw[green] (\x, {2.5 - (\x)^2 / 8}) circle[radius=0.06];
		}
		\foreach \x in {-2, ..., 6} {
			\path ({\x * 0.6}, 0) node[below=2pt, font=\bfseries] {$\x$};
		}
	\end{tikzpicture}
\end{document}
```

La clave es que el [[Conversor Analógico-Digital|conversor AD]] asegure que las muestras $x(n)$ con $n \in \mathbb{Z}$ provee la misma [[Información|información]] que la señal original $x_c(t)$ o lo que es lo mismo, si es posible reconstruir $x_c(t)$ con solamente los valores $x(n)$