---
dia: 2024-04-23
capitulo: 5
tags:
  - señales/Muestreo-e-Interpolación
  - nota
---
### Definición
---
Podemos [[Modelo|modelar]] un conversor D/A de la siguiente forma

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1, transform shape, ultra thick]	
		\node[draw, font=\bfseries, align=center, inner sep=5pt] 
			(conversor) at (3, 0.5) 
			{Conversor de secuencia\\de tiempo discreto a\\tren de impulsos};

		\node[draw, font=\bfseries, inner sep=5pt] 
			(filtro) at (7.5, 0.5) 
			{$H_r(j\omega)$};

		\draw[<-] (conversor.west) -- ++(-2, 0)
			node[pos=0.8, above=2pt] {$x(n)$};
		\draw[->] (conversor.east) -- (filtro.west)
			node[midway, above=2pt] {$x_p(t)$};
		\draw[->] (filtro.east) -- ++(2, 0)
			node[pos=0.8, above=2pt] {$x_c(t)$};

		\draw[dashed] (0, -1.5) rectangle (9, 2.5);
		\path (0, 2.5) -- (9, 2.5)
			node[midway, font=\bfseries, above=2pt] {Conversor D/A};
	\end{tikzpicture}
\end{document}
```



La señal $x_p(t)$ puede escribirse claramente como $$ x_p(t) = \sum_{n = -\infty}^{\infty} x_c(nT) ~ \delta(t - nT) = \sum_{n = -\infty}^{\infty} x(n) ~ \delta(t - nT)$$
De esta señal podemos obtener (usando el conversor de treen de impulsos a secuencias en tiempo discreto) las muestras $x(n) = x_c(nT)$, esto lo hacemos por todo lo dicho en el [[Conversor Analógico-Digital|conversor analógico-digital]]

Supongamos, entonces, que $x_c(t)$ es una [[Señal de banda limitada|señal de banda limitada]] limitado por $W$, y que $2W < \omega_s$. Sea $H_r(j\omega)$ un [[Filtro pasa-bajo|filtro pasa-bajos ideal]] con [[Frecuencia de corte de un filtro pasa bajos|frecuencia de corte]] $W \ge \omega_c \ge \omega_s - W$ y [[Ganancia|ganancia]] $T$

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{
		\w = 1;
		\ws = 2 * \w + 1;
		\wc = \ws / 2;
		\T = 0.8;
		\cant = 2;
		\xmax = \ws * (2 * \cant + 1);
	}

	\begin{tikzpicture}[scale=1, transform shape, ultra thick]			
		\draw ({-\xmax / 2}, 0) -- ({\xmax / 2}, 0)
			node[below=2pt] {$\omega$};
		\draw[->] (0, {0 - 0.1})
			-- ++ (0, 3)
			node[right=2pt] {$X_p(j\omega)$};

		\foreach \x in {-\cant, ..., \cant} {
			\draw[red] ({-\w + \x * \ws}, 0) 
				-- ({\x * \ws}, 2)
				-- ({\w + \x * \ws}, 0);
			\path ({\x * \ws}, 0) 
				node[below=2pt] {$\x ~ \omega_s$};
		}
		\path (-\w, 0) node[below=2pt] {$-W$}
			-- (\w, 0) node[below=2pt] {$W$};
		\draw[->, dashed] ({\w - \ws}, 0) 
			-- ++(0, -0.7) node[below=1pt] {$-\omega_s + W$};
		\draw[->, dashed] ({\ws - \w}, 0) 
			-- ++(0, -0.7) node[below=1pt] {$\omega_s - W$};
		
		\draw[blue] (-\wc, 0) 
			-- ++(0, {2 * \T})
				node[above=2pt, black] {$-\omega_c$}
			-- (\wc, {2 * \T}) 
				node[pos=0.2, above=5pt, black] {$T$}
				node[pos=0.7, above=5pt, black] {$H_r(j\omega)$}
				node[above=2pt, black] {$\omega_c$}
			-- ++(0, {-2 * \T});
	\end{tikzpicture}
\end{document}
```

Es claro que $$ X_p(j\omega) ~ H_r(j\omega) = \frac{1}{T} \sum_{k = -\infty}^{\infty} X_c(j(\omega - k \omega_s)) ~ H_r(j\omega) = X_c(j\omega) $$
donde $X_c(j\omega)$ es la [[Transformada de Fourier|transformada de Fourier]] de $x_c(t)$

Por lo que aplicando este filtro a esta [[Señal#^02aea6|señal discreta]] (sin solapamiento) nos devuelve la señal original $x_c(t)$. Este filtro es lo que se llama un [[Interpolador|interpolador de banda limitada]], pero puede ser muy complejo de implementar en la práctica, por lo que existen los [[Interpolador|interpoladores de orden k]]

