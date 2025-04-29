---
dia: 2024-04-16
tags:
  - carrera/ingeniería-electrónica/señales/Muestreo-e-Interpolación
  - nota/facultad
---
# Definición
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

## Transformada de Fourier
---
Podemos analizar como es la [[Transformada de Fourier en tiempo discreto|transformada de Fourier]] de la secuencia de tiempo $x(n)$. Denotaremos la frecuencia para la transformada de tiempo discreto como $\Omega$. Sabemos que $$ X\left( e^{j\Omega} \right) = \sum_{n=-\infty}^{\infty} x(n) ~ \exp(-j\Omega n) $$
Por otro lado dado que $x_p(t) = \sum_{n=-\infty}^{\infty} x(n) ~ \delta(t - nT)$, tenemos que $$ X_p(j\omega) = \sum_{n=-\infty}^{\infty} x(n) ~ \exp(-j\omega T n) $$
Vemos entonces que $X_p(j \omega) = X\left( e^{j\Omega} \right) \biggm|_{\Omega=\omega T} = X\left( e^{j\omega T} \right)$ . De esta forma $$ X\left( e^{j\omega T} \right) = X_p(j\omega) = \frac{1}{T} \sum_{k=-\infty}^{\infty} X_c(j(\omega - k\omega_s)) $$
Y la transformada de la secuencia $x(n)$ se puede escribir como $$ X\left( e^{j\Omega} \right) = \frac{1}{T} \sum_{k = -\infty}^{\infty} X_c\left( j \left( \frac{\Omega}{T} - \frac{2\pi k}{T} \right) \right) $$
Vemos que la transformada de Fourier de $x(n)$ es [[Función periódica|periódica]] como debe ser y que está directamente relacionada con la transformada $X_c(j\omega)$ de la [[Señal#^016a35|señal de tiempo continuo]] origina $x_c(t)$

Está claro que si [[Señal de banda limitada|señal limitada]] $X_c(j\omega) = 0, ~~ \forall |\omega| \ge W$ y $2W < \omega_s$ [[Filtro antialiasing|no tenemos aliasing]] y que $$ X\left( e^{j\Omega} \right) = \frac{1}{T} X_c\left( j \frac{\Omega}{T} \right), ~~~ \Omega \in [-\pi, ~\pi) $$
Cuando no hay aliasing, la transformada de Fourier de la secuencia $x(n)$ es una versión escalada de frecuencia de $X_c(j\omega)$, donde el factor de escala esta dada por $$ \omega = \frac{\Omega}{T} $$