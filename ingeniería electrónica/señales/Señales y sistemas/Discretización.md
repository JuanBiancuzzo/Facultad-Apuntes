---
dia: 2024-03-12
tags:
  - carrera/ingeniería-electrónica/señales/Señales-y-sistemas
  - nota/facultad
---
# Definición
---
Empezando con una [[Señal#^016a35|señal continua]] $\implies$ Después la [[Muestreo|muestreamos]] $\implies$ La [[Cuantizar|cuantizamos]] $\implies$ Finalmente tenemos la [[Señal#^02aea6|señal discreta]]

```tikz
\usepackage{amssymb}
\begin{document} 
	\begin{tikzpicture}
		\draw[domain=-1.5:1.5, smooth, cyan] (0, 0) 
			plot (\x,{2 * sin((2 * \x - 1.6) r )});
			
		\draw (-1.7, -2.25) rectangle (1.7, 2.25);
		\path (-1.7, 2.25) -- (1.7, 2.25)
			node[midway, above=2pt] {Señal analógica};
		\path (-1.7, -2.25) -- (1.7, -2.25)
			node[midway, below=2pt] {$t \in \mathbb{R}$};
		\path (-1.7, -2.25) -- (-1.7, 2.25)
			node[midway, above=2pt, rotate=90] {$x(t) \in \mathbb{R}$};
		\path (2.5, 0) -- (2.5, 0);
	\end{tikzpicture}	

	\begin{tikzpicture}
		\draw[domain=-1.5:1.5, smooth, dashed] (0, 0) 
			plot (\x,{2 * sin((2 * \x - 1.6) r )});
		\foreach \x in {-1.5, -1, -0.5, 0, 0.5, 1, 1.5} {
			\draw[green] (\x, -2.25) 
				-- (\x,{2 * sin((2 * \x - 1.6) r) - 0.1});
			\draw[green] (\x,{2 * sin((2 * \x - 1.6) r)})
				circle (0.1);
		}
			
		\draw (-1.7, -2.25) rectangle (1.7, 2.25);
		\path (-1.7, 2.25) -- (1.7, 2.25)
			node[midway, above=2pt] {Señal muestrada};
		\path (-1.7, -2.25) -- (1.7, -2.25)
			node[midway, below=2pt] {$n \in \mathbb{Z}$};
		\path (-1.7, -2.25) -- (-1.7, 2.25)
			node[midway, above=2pt, rotate=90] {$x[n] \in \mathbb{R}$};
		\path (2.5, 0) -- (2.5, 0);
	\end{tikzpicture}	

	\begin{tikzpicture}
		\draw[domain=-1.5:1.5, smooth, dashed] (0, 0) 
			plot (\x,{2 * sin((2 * \x - 1.6) r )});
		\foreach \x in {-1.5, -1, -0.5, 0, 0.5, 1} {
			\draw[green] (\x, {2 * sin((2 * \x - 1.6) r)})
				-- ({\x + 0.5}, {2 * sin((2 * \x - 1.6) r)})
				-- ({\x + 0.5}, {2 * sin((2 * (\x + 0.5) - 1.6) r)});
		}
			
		\draw (-1.7, -2.25) rectangle (1.7, 2.25);
		\path (-1.7, 2.25) -- (1.7, 2.25)
			node[midway, above=2pt] {Señal cuantizada};
		\path (-1.7, -2.25) -- (1.7, -2.25)
			node[midway, below=2pt] {$t \in \mathbb{R}$};
		\path (-1.7, -2.25) -- (-1.7, 2.25)
			node[midway, above=2pt, rotate=90] {$x_q(t) \in \mathbb{Z}$};
		\path (2.5, 0) -- (2.5, 0);
	\end{tikzpicture}	

	\begin{tikzpicture}
		\draw[domain=-1.5:1.5, smooth, dashed] (0, 0) 
			plot (\x,{2 * sin((2 * \x - 1.6) r )});
		\foreach \x in {-1.5, -1, -0.5, 0, 0.5, 1, 1.5} {
			\draw[green] (\x, -2.25) 
				-- (\x,{2 * sin((2 * \x - 1.6) r) - 0.1});
			\draw[green] (\x,{2 * sin((2 * \x - 1.6) r)})
				circle (0.1);
		}
			
		\draw (-1.7, -2.25) rectangle (1.7, 2.25);
		\path (-1.7, 2.25) -- (1.7, 2.25)
			node[midway, above=2pt] {Señal digital};
		\path (-1.7, -2.25) -- (1.7, -2.25)
			node[midway, below=2pt] {$n \in \mathbb{Z}$};
		\path (-1.7, -2.25) -- (-1.7, 2.25)
			node[midway, above=2pt, rotate=90] {$x_d[n] \in \mathbb{Z}$};
	\end{tikzpicture}	
\end{document}
```

En este ejemplo se muestrea con un [[Función periódica|período]] de $T$, y se define $f_s = \frac{1}{T}$ como [[Función periódica#Frecuencia|frecuencia]]  de muestreo