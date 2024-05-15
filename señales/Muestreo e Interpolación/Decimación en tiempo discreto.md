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
		\d = 4;
		\y1 = 3; 
		\y2 = \y1 - \d; 
		\y3 = \y2 - \d; 
		\w = 0.5;
		\T = 2 * \w + 0.75;
		\xmax = 7;
		\cant = 3;
	}

	\begin{tikzpicture}[scale=1, transform shape, ultra thick]
		\draw[->] (-\xmax, \y1) -- (\xmax, \y1)
			node[below=2pt] {$\Omega$};
		\draw[->] (0, {\y1 - 0.1}) 
			node[below=2pt] {$0$}
			-- ++ (0, 3)
			node[right=2pt] {$X(\Omega)$};
		\foreach \x in {-\cant, 0, \cant} {
			\draw[red] ({-\w + \x * \T}, \y1) 
				-- ({\x * \T}, {\y1 + 2})
				-- ({\w + \x * \T}, \y1);
		}
		
		\path (-\w, \y1) node[below=2pt] {$-W$}
			-- (\w, \y1) node[below=2pt] {$W$};
		\path ({-\cant * \T}, \y1) node[below=2pt] {$-2\pi$};
		\path ({\cant * \T}, \y1) node[below=2pt] {$2\pi$};

		\path (0, {\y1 + 2}) node[above left=2pt] {$1$};
		
		\draw[->] (-\xmax, \y2) -- (\xmax, \y2)
			node[below=2pt] {$\Omega$};
		\draw[->] (0, {\y2 - 0.1}) 
			-- ++ (0, 3)
			node[right=2pt] {$P(\Omega)$};

		\foreach \x in {-\cant, ..., \cant} {
			\draw[->] ({\x * \T}, \y2) 
				-- ({\x * \T}, {\y2 + 2});
		}
		\path (0, {\y2 + 2}) node[above left=2pt] {$\frac{2\pi}{N}$};
		\path ({-\cant * \T}, \y2) node[below=2pt] {$-2\pi$};
		\path ({\cant * \T}, \y2) node[below=2pt] {$2\pi$};
		\path (\T, \y2) node[below=2pt] {$\Omega_s$};
			
		\draw[->] (-\xmax, \y3) -- (\xmax, \y3)
			node[below=2pt] {$\Omega$};
		\draw[->] (0, {\y3 - 0.1})
			-- ++ (0, 3)
			node[right=2pt] {$X_p(\Omega)$};

		\foreach \x in {-\cant, ..., \cant} {
			\draw[red] ({-\w + \x * \T}, \y3) 
				-- ({\x * \T}, {\y3 + 2})
				-- ({\w + \x * \T}, \y3);
		}
		\path (-\w, \y3) node[below=2pt] {$-W$}
			-- (\w, \y3) node[below=2pt] {$W$};	
		\path ({-\cant * \T}, \y3) node[below=2pt] {$-2\pi$};
		\path ({\cant * \T}, \y3) node[below=2pt] {$2\pi$};
		\path (\T, \y3) node[below=2pt] {$\Omega_s$};

		\path (0, {\y3 + 2}) node[above left=2pt] {$\frac{1}{N}$};
	\end{tikzpicture}
\end{document}
```

Veamos que si la [[Señal de banda limitada|señal es de banda limitada]] a $W$ no existe [[Aliasing|aliasing]] si $W < \Omega_s - W$

Suponiendo entonces que es de banda limitada a $W$, y que $W < \Omega_s - W$. Sea $H_r(\Omega)$ un [[Filtro pasa-bajo|filtro pasa-bajos ideal]] con [[Frecuencia de corte de un filtro pasa bajos|frecuencia de corte]] $W \le \Omega_c \le \Omega_s - W$ y ganancia $N$

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{ 
		\w = 0.5;
		\T = 2 * \w + 0.75;
		\wc = (\T) / 2;
		\xmax = 7;
		\cant = 3;
	}

	\begin{tikzpicture}[scale=1, transform shape, ultra thick]			
		\draw[->] (-\xmax, 0) -- (\xmax, 0)
			node[below=2pt] {$\Omega$};
		\draw[->] (0, -0.1)
			-- ++ (0, 3.5)
			node[right=2pt] {$X_p(\Omega)$};

		\foreach \x in {-\cant, ..., \cant} {
			\draw[red] ({-\w + \x * \T}, 0) 
				-- ({\x * \T}, 2)
				-- ({\w + \x * \T}, 0);
		}
		\path (-\w, 0) node[below=2pt] {$-W$}
			-- (\w, 0) node[below=2pt] {$W$};	
		\path ({-\cant * \T}, 0) node[below=2pt] {$-2\pi$};
		\path ({\cant * \T}, 0) node[below=2pt] {$2\pi$};
		\path (\T, 0) node[below=2pt] {$\Omega_s$};

		\draw[blue] (-\wc, 0) 
			-- ++(0, {1.35 * \T})
			-- (\wc, {1.35 * \T}) 
				node[pos=0, above=2pt, black] {$N$}
				node[pos=1, above=2pt, black] {$H_r(\Omega)$}
			-- ++(0, {-1.35 * \T});

		\foreach \x in {-\cant, \cant} {
			\draw[blue] ({-\wc + \x * \T}, 0) 
				-- ++(0, {1.35 * \T})
				-- ({\wc + \x * \T}, {1.35 * \T}) 
				-- ++(0, {-1.35 * \T});
		}
	\end{tikzpicture}
\end{document}
```

Es claro que $$ X_p(\Omega) ~ H_r(\Omega) = \frac{1}{N} \sum_{k = 0}^{N - 1} X(\Omega - k \Omega_s) ~ H_r(\Omega) = X(\Omega) $$
Recuperando la señal original $x(n)$