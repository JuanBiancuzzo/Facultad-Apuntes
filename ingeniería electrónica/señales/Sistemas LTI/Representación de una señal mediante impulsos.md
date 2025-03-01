---
dia: 2024-03-16
tags:
  - carrera/ingeniería-electrónica/señales/Sistemas-LTI
  - nota/facultad
---
# Definición
---
Se puede representar una [[Señal#^02aea6|señal discreta]] mediante [[Delta de Dirac|impulsos]] de la siguiente forma $$ x[n] = \sum_{k = -\infty}^{\infty} x[k] ~ \delta[n - k] $$
Como ejemplo veamos la función 
```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]
		% Eje x
		\draw[->] (-4.5, 0) -- (4.5, 0)
			node[above=2pt] {$n$};
		\foreach \x in {-4, -3, -2, -1, 0, 1, 2, 3, 4} {
			\draw[thick] (\x, -0.1) -- (\x, 0.1)
				node[scale=0.8, midway, below right=2pt] {$\x$};
		}

		% Eje x
		\draw[->] (0, -2.5) -- (0, 2.5)
			node[right=2pt] {$x[n]$};
		\foreach \y in {-2, -1, 1, 2} {
			\draw[thick] (-0.1, \y) -- (0.1, \y)
				node[scale=0.8, midway, left=2pt] {$\y$};
		}

		% Función
		\foreach \x/\y in {-4/0, -3/0, -2/1, -1/2, 0/-2, 1/-1, 2/1, 3/0, 4/0} {
			\draw[green] (\x, 0) -- (\x, \y);
			\filldraw[green] (\x, \y) circle [radius=0.05];
		}
	\end{tikzpicture}
\end{document}
```
Por lo que su representación sería $$ x[n] = x[-2] ~ \delta[n + 2] + x[-1] ~ \delta[n + 1] + x[0] ~ \delta[n] + x[1] ~ \delta[n - 1] + x[2] ~ \delta[n - 2]$$
