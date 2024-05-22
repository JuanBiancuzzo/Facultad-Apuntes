---
dia: 2024-04-29
materia: señales
capitulo: 5
---
### Definición
---
El [[Muestreo periódico|muestreo]] de [[Señal#^02aea6|señales de tiempo discreto]] obedece a los mismo principios que las [[Señal#^016a35|señales de tiempo continuo]] y las ideas de fondo son básicamente las mismas

Dada una señal de tiempo discreto $x(n)$ consideramos la siguiente señal $$ x_p(n) = \begin{cases} 
	x(n) &~~~ \text{si} ~ n ~ \text{es múltiplo de} ~ N \\
	0 &~~~ \text{en otro caso}
\end{cases} $$
```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\tikzmath {
		\M = 5;
		\multi = 4;
		\points = \M * \multi;
		\sep = 0.4;

		\altura = 1.75;
	}
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick,
		declare function = {
			senial(\x) = \altura * (
				abs(cos(deg(\x))) * 0.9 + 0.1
			);
		},
	]
		\tikzmath { \y = 0; }
		
		\draw[->] ({-\sep * 2}, \y) -- ++({(\points + 4) * \sep}, 0)
			node[below=2pt] {$n$};
		\draw[->] (-\sep, {\y - \sep}) -- ++(0, {\altura + 2 * \sep})
			node[left=2pt, scale = 0.7] {$x(n)$};

		\draw[<->] (0, {\y - 0.25}) -- ++({(\M - 1) * \sep}, 0)
			node[midway, below=2pt] {$N$};

		\foreach \x in {0, ..., \points} {
			\draw ({\x * \sep}, \y) -- ++(0, {senial(\x)});
			\fill ({\x * \sep}, {senial(\x) + \y}) circle (0.075);
		}

		\tikzmath { \y = -3; }

		\draw[->] ({-\sep * 2}, \y) -- ++({(\points + 4) * \sep}, 0)
			node[below=2pt] {$n$};
		\draw[->] (-\sep, {\y - \sep}) -- ++(0, {\altura + 2 * \sep})
			node[left=2pt, scale = 0.7] {$x_p(n)$};

		\foreach \x in {0, \M, ..., \points} {
			\draw[red] ({\x * \sep}, \y) -- ++(0, {senial(\x)});
			\fill ({\x * \sep}, {senial(\x) + \y}) circle (0.075);
		}

		\tikzmath { \y = -6; }

		\draw[->] ({-\sep * 2}, \y) -- ++({(\points + 4) * \sep}, 0)
			node[below=2pt] {$n$};
		\draw[->] (-\sep, {\y - \sep}) -- ++(0, {\altura + 2 * \sep})
			node[left=2pt, scale = 0.7] {$x_d(n)$};

		\foreach \x in {0, ..., \multi} {
			\draw[blue] (\x * \sep, \y) -- ++(0, {senial(\x * \M)});
			\fill (\x * \sep, {senial(\x * \M) + \y}) circle (0.075);
		}
	\end{tikzpicture}
\end{document}
```

Podemos escribir $$ \begin{align} 
	p(n) &= \sum_{k = -\infty}^{\infty} \delta(n - kN) \\
	x_p(n) &= x(n) ~ p(n) \\
	&= \sum_{k = -\infty}^{\infty} x(kN) ~ \delta(n - kN) \\
\end{align} $$

En el dominio de la frecuencia $$ \begin{align} 
	X_p(\Omega) &= \frac{1}{2\pi} \int_{-\pi}^{\pi} P(\theta) ~ X(\Omega - \theta) ~ d\theta \\
	&= \frac{1}{2\pi} \int_{0}^{2\pi} P(\theta) ~ X(\Omega - \theta) ~ d\theta \\
\end{align} $$
Donde $$ P(\Omega) = \frac{2\pi}{N} \sum_{k = -\infty}^{\infty} \delta(\Omega - k \Omega_s) $$ donde $\Omega_s = \frac{2\pi}{N}$ es la frecuencia de muestreo

entonces podemos escribir $$ \begin{align} 
	X_p(\Omega) &= \frac{1}{2\pi} \int_{0}^{2\pi} P(\theta) ~ X(\Omega - \theta) ~ d\theta \\
	&= \frac{1}{2\pi} \int_{0}^{2\pi} \frac{2\pi}{N} \sum_{k = -\infty}^{\infty} \delta\left(\theta - \frac{2\pi k}{N}\right) ~ X(\Omega - \theta) ~ d\theta \\
	&= \frac{1}{N} \sum_{k = -\infty}^{\infty} \int_{0}^{2\pi} \delta\left(\theta - \frac{2\pi k}{N}\right) ~ X(\Omega - \theta) ~ d\theta \\
\end{align} $$
Notemos que sólo los impulsos con $0 \le k < N$ quedan dentro del intervalo $[0, ~ 2\pi)$, entonces $$ \begin{align} 
	X_p(\Omega) &= \frac{1}{N} \sum_{k = 0}^{N - 1} \int_{0}^{2\pi} \delta\left(\theta - \frac{2\pi k}{N}\right) ~ X(\Omega - \theta) ~ d\theta \\
	&= \frac{1}{N} \sum_{k = 0}^{N - 1} ~ X\left(\Omega - \frac{2\pi k}{N}\right) \\
	&= \frac{1}{N} \sum_{k = 0}^{N - 1} ~ X\left(\Omega - k \Omega_s \right), ~~~ \Omega \in [-\pi, ~\pi)
\end{align} $$

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{
		\w = 0.5;
		\T = 2 * \w + 0.75;
		\xmax = 7;
		\cant = 3;
	}

	\begin{tikzpicture}[scale=1, transform shape, ultra thick]
		\tikzmath { \y = 4; }
		\draw[->] (-\xmax, \y) -- (\xmax, \y)
			node[below=2pt] {$\Omega$};
		\draw[->] (0, {\y - 0.1}) 
			node[below=2pt] {$0$}
			-- ++ (0, 3)
			node[right=2pt] {$X(\Omega)$};
		\foreach \x in {-\cant, 0, \cant} {
			\draw[red] ({-\w + \x * \T}, \y) 
				-- ({\x * \T}, {\y + 2})
				-- ({\w + \x * \T}, \y);
		}
		
		\path (-\w, \y) node[below=2pt] {$-W$}
			-- (\w, \y) node[below=2pt] {$W$};
		\path ({-\cant * \T}, \y) node[below=2pt] {$-2\pi$};
		\path ({\cant * \T}, \y) node[below=2pt] {$2\pi$};

		\path (0, {\y + 2}) node[above left=2pt] {$1$};

		\tikzmath { \y = 0; }			
		\draw[->] (-\xmax, \y) -- (\xmax, \y)
			node[below=2pt] {$\Omega$};
		\draw[->] (0, {\y - 0.1})
			-- ++ (0, 3)
			node[right=2pt] {$X_p(\Omega)$};

		\foreach \x in {-\cant, ..., \cant} {
			\draw[red] ({-\w + \x * \T}, \y) 
				-- ({\x * \T}, {\y + 2})
				-- ({\w + \x * \T}, \y);
		}
		\path (-\w, \y) node[below=2pt] {$-W$}
			-- (\w, \y) node[below=2pt] {$W$};	
		\path ({-\cant * \T}, \y) node[below=2pt] {$-2\pi$};
		\path ({\cant * \T}, \y) node[below=2pt] {$2\pi$};
		\path (\T, \y) node[below=2pt] {$\Omega_s$};

		\path (0, {\y + 2}) node[above left=2pt] {$\frac{1}{N}$};

		\tikzmath { \y = -4; }
		\draw[->] (-\xmax, \y) -- (\xmax, \y)
			node[below=2pt] {$\Omega$};
		\draw[->] (0, {\y - 0.1}) 
			node[below=2pt] {$0$}
			-- ++ (0, 3)
			node[right=2pt] {$X_d(\Omega)$};
		\foreach \x in {-\cant, 0, \cant} {
			\draw[red] ({-\w * \cant + \x * \T}, \y) 
				-- ({\x * \T}, {\y + 2})
				-- ({\w * \cant+ \x * \T}, \y);
		}
		
		\path ({-\w * \cant}, \y) node[below=2pt] {$-NW$}
			-- ({\w * \cant}, \y) node[below=2pt] {$NW$};
		\path ({-\cant * \T}, \y) node[below=2pt] {$-2\pi$};
		\path ({\cant * \T}, \y) node[below=2pt] {$2\pi$};

		\path (0, {\y + 2}) node[above left=2pt] {$\frac{1}{N}$};
	\end{tikzpicture}
\end{document}
```