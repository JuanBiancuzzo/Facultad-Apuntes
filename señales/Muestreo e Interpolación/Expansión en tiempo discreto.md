---
dia: 2024-04-29
tags:
  - señales/Muestreo-e-Interpolación
  - nota/facultad
---
# Definición
---
El [[Muestreo periódico|muestreo]] de [[Señal#^02aea6|señales de tiempo discreto]] obedece a los mismo principios que las [[Señal#^016a35|señales de tiempo continuo]] y las ideas de fondo son básicamente las mismas

Dada una señal de tiempo discreto $x(n)$ consideramos la siguiente señal $$ x_e(n) = \begin{cases} 
	x(n / L) &~~~ \text{si} ~ n ~ \text{es múltiplo de} ~ L \\
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
			node[left=2pt, scale = 0.8] {$x(n)$};

		\foreach \x in {0, ..., \multi} {
			\draw[blue] (\x * \sep, \y) -- ++(0, {senial(\x * \M)});
			\fill (\x * \sep, {senial(\x * \M) + \y}) circle (0.075);
		}

		\tikzmath { \y = -3; }

		\draw[->] ({-\sep * 2}, \y) -- ++({(\points + 4) * \sep}, 0)
			node[below=2pt] {$n$};
		\draw[->] (-\sep, {\y - \sep}) -- ++(0, {\altura + 2 * \sep})
			node[left=2pt, scale = 0.8] {$x_e(n)$};

		\foreach \x in {0, \M, ..., \points} {
			\draw[red] ({\x * \sep}, \y) -- ++(0, {senial(\x)});
			\fill ({\x * \sep}, {senial(\x) + \y}) circle (0.075);
		}

		\draw[<->] (0, {\y - 0.25}) -- ++({\M * \sep}, 0)
			node[midway, below=2pt] {$L$};
	\end{tikzpicture}
\end{document}
```

Es claro que podemos escribir $$ x_e(n) = \sum_{k = -\infty}^{\infty} x(k) ~ \delta(n - kL) $$
La [[Transformada de Fourier en tiempo discreto|transformada de Fourier]] de $x_e(n)$ puede calcularse como $$ \begin{align} 
	X_e(\Omega) &= \sum_{n = -\infty}^{\infty} \left( \sum_{k = -\infty}^{\infty} x(k) ~ \delta(n - kL) \right) \exp\left( -j\Omega n \right) \\
	&= \sum_{k = -\infty}^{\infty} x(k) ~~ \sum_{n = -\infty}^{\infty} \delta(n - kL)  \exp\left( -j\Omega n \right) \\
	&= \sum_{k = -\infty}^{\infty} x(k) \exp\left( -j\Omega k L \right) \\
	&= X(\Omega L)
\end{align} $$
La salida del expansor es tal que su transformada de Fourier es la transformada de la entrada con una compresión en el eje de la frecuencia por un factor $L$

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{
		\w = 0.5;
		\T = 2 * \w + 0.75;
		\OmegaC = \T / 2;
		\xmax = 7;
		\cant = 3;
		\L = 3;
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
			\draw[red] ({-\w * \L + \x * \T}, \y) 
				-- ({\x * \T}, {\y + 2})
				-- ({\w * \L + \x * \T}, \y);
		}
		
		\path ({-\w * \L}, \y) node[below=2pt] {$-W$}
			-- ({\w * \L}, \y) node[below=2pt] {$W$};
		\path ({-\cant * \T}, \y) node[below=2pt] {$-2\pi$};
		\path ({\cant * \T}, \y) node[below=2pt] {$2\pi$};

		\path (0, {\y + 2}) node[above left=2pt] {$1$};


		\tikzmath { \y = 0; }
		\draw[->] (-\xmax, \y) -- (\xmax, \y)
			node[below=2pt] {$\Omega$};
		\draw[->] (0, {\y - 0.1})
			-- ++ (0, 3)
			node[right=2pt] {$X_e(\Omega)$};

		\foreach \x in {-\cant, ..., \cant} {
			\draw[red] ({-\w + \x * \T}, \y) 
				-- ({\x * \T}, {\y + 2})
				-- ({\w + \x * \T}, \y);
		}

		\draw[blue] (-\OmegaC, \y) 
				node[black, below=2pt] {$-\Omega_c$}
			-- ++(0, 2.2)
			-- (\OmegaC, {\y + 2.2})
			-- ++(0, -2.2)
				node[black, below=2pt] {$\Omega_c$};

		\path (-\w, \y) node[below=2pt] {$-\frac{W}{L}$}
			-- (\w, \y) node[below=2pt] {$\frac{W}{L}$};
		\path ({-\cant * \T}, \y) node[below=2pt] {$-2\pi$};
		\path ({\cant * \T}, \y) node[below=2pt] {$2\pi$};
		\path (\T, \y) node[below=2pt] {$\Omega_s$};
		
		\path (0, {\y + 2.1}) node[above right=2pt] {$L$};
		\path (0, {\y + 2}) node[below left=2pt] {$1$};
		

		\tikzmath { \y = -4; }
		\draw[->] (-\xmax, \y) -- (\xmax, \y)
			node[below=2pt] {$\Omega$};
		\draw[->] (0, {\y - 0.1}) 
			node[below=2pt] {$0$}
			-- ++ (0, 3)
			node[right=2pt] {$X_i(\Omega)$};
		\foreach \x in {-\cant, 0, \cant} {
			\draw[red] ({-\w + \x * \T}, \y) 
				-- ({\x * \T}, {\y + 2})
				-- ({\w + \x * \T}, \y);
		}
		
		\path (-\w, \y) node[below=2pt] {$-\frac{W}{L}$}
			-- (\w, \y) node[below=2pt] {$\frac{W}{L}$};
		\path ({-\cant * \T}, \y) node[below=2pt] {$-2\pi$};
		\path ({\cant * \T}, \y) node[below=2pt] {$2\pi$};

		\path (0, {\y + 2}) node[above left=2pt] {$L$};
	\end{tikzpicture}
\end{document}
```

Luego de la expresión en el tiempo, a través de un [[Filtro pasa-bajo|filtro pasa-bajos]], con ganancia $L$ y frecuencia de corte $\omega_c \le \frac{\pi}{L}$, podemos generar la señal la señal $x_i(n)$