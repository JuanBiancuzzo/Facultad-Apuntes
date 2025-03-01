---
dia: 2024-04-29
tags:
  - carrera/ingeniería-electrónica/señales/Muestreo-e-Interpolación
  - nota/facultad
---
# Definición
---
La posibilidad de poder [[Muestreo|muestrear]] una [[Señal#^02aea6|señal de tiempo continuo]] y poder volver a recuperar la señal original a partir de sus muestras permite que muchas operaciones de procesamiento de una señal se puedan realizar en tiempo discreto

```tikz
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=0.8, transform shape, ultra thick]
		\node[draw, circle, scale=1.3] 
			(x) at (0, 0.5) {$\times$};
		
		\node[draw, font=\bfseries, align=center, inner sep=1em, scale=0.8] 
			(conversor) at (3.5, 0.5) 
			{Conversor de tren de\\impulsos a secuencia\\de tiempo discreto};

		\draw[<-] (x) -- ++(-2, 0)
			node[pos=0.8, font=\bfseries, above=2pt] {$x_c(t)$};
		\draw[<-] (x) -- ++(0, 1.5)
			node[font=\bfseries, below left=2pt] {$p(t)$};
		\draw[->] (x) -- (conversor.west)
			node[midway, font=\bfseries, above=2pt] {$x_p(t)$};
		\draw[->] (conversor.east) -- ($ (conversor.east -| 0, 0) + (7, 0) $)
			node[pos=0.7, font=\bfseries, above=2pt] {$x(n)$};

		\draw[dashed] (-1.3, -1.5) rectangle (6, 2.5);
		\path (-1.3, 2.5) -- (6, 2.5)
			node[midway, font=\bfseries, above=2pt] {Conversor A/D};

		\draw[red] (7, -1.5) rectangle ++(4, 4)
			node[midway, font=\bfseries, align=center, scale=1.2, black] 
				{Procesamiento\\en tiempo\\discreto};

		\node[draw, font=\bfseries, align=center, inner sep=1em, scale=0.8] 
			(conversor) at (14.5, 0.5) 
			{Conversor de secuencia\\de tiempo discreto a\\tren de impulsos};

		\node[draw, font=\bfseries, inner sep=5pt] 
			(filtro) at (18.5, 0.5) 
			{$H_r(j\omega)$};

		\draw[<-] (conversor.west) -- ($ (conversor.west -| 0, 0) + (11, 0) $)
			node[pos=0.65, above=2pt] {$y(n)$};
		\draw[->] (conversor.east) -- (filtro.west)
			node[midway, above=2pt] {$y_p(t)$};
		\draw[->] (filtro.east) -- ++(1.5, 0)
			node[pos=0.7, above=2pt] {$y_c(t)$};

		\draw[dashed] (12, -1.5) rectangle (19.75, 2.5);
		\path (12, 2.5) -- (19.75, 2.5)
			node[midway, font=\bfseries, above=2pt] {Conversor D/A};
	\end{tikzpicture}
\end{document}
```

La etapa de procesamiento en tiempo discreto se puede modelar como un [[Sistema|sistema]] de tiempo discreto. Dependiendo de la naturaleza del procesamiento a realizar dicho sistema puede ser [[Sistema lineal|no lineal]] y [[Sistema invariante en el tiempo|variante en el tiempo]]

Aunque nosotros vamos a modelarlo con [[Sistema lineal e invariante en el tiempo|sistemas LTI]], dado que el sistema será LTI, lo podemos representar con su [[Respuesta en frecuencia|respuesta en frecuencia]]

```tikz
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=0.8, transform shape, ultra thick]
		\node[draw, circle, scale=1.3] 
			(x) at (0, 0.5) {$\times$};
		
		\node[draw, font=\bfseries, align=center, inner sep=1em, scale=0.8] 
			(conversor) at (3.5, 0.5) 
			{Conversor de tren de\\impulsos a secuencia\\de tiempo discreto};

		\draw[<-] (x) -- ++(-2, 0)
			node[pos=0.8, font=\bfseries, above=2pt] {$x_c(t)$};
		\draw[<-] (x) -- ++(0, 1.5)
			node[font=\bfseries, below left=2pt] {$p(t)$};
		\draw[->] (x) -- (conversor.west)
			node[midway, font=\bfseries, above=2pt] {$x_p(t)$};
		\draw[->] (conversor.east) -- ($ (conversor.east -| 0, 0) + (7, 0) $)
			node[pos=0.7, font=\bfseries, above=2pt] {$x(n)$};

		\draw[dashed] (-1.3, -1.5) rectangle (6, 2.5);
		\path (-1.3, 2.5) -- (6, 2.5)
			node[midway, font=\bfseries, above=2pt] {Conversor A/D};

		\draw[red] (7, -1.5) rectangle ++(4, 4)
			node[midway, font=\bfseries, align=center, scale=1.6, black] 
				{$H_d\left( e^{j\Omega} \right)$};

		\node[draw, font=\bfseries, align=center, inner sep=1em, scale=0.8] 
			(conversor) at (14.5, 0.5) 
			{Conversor de secuencia\\de tiempo discreto a\\tren de impulsos};

		\node[draw, font=\bfseries, inner sep=5pt] 
			(filtro) at (18.5, 0.5) 
			{$H_r(j\omega)$};

		\draw[<-] (conversor.west) -- ($ (conversor.west -| 0, 0) + (11, 0) $)
			node[pos=0.65, above=2pt] {$y(n)$};
		\draw[->] (conversor.east) -- (filtro.west)
			node[midway, above=2pt] {$y_p(t)$};
		\draw[->] (filtro.east) -- ++(1.5, 0)
			node[pos=0.7, above=2pt] {$y_c(t)$};

		\draw[dashed] (12, -1.5) rectangle (19.75, 2.5);
		\path (12, 2.5) -- (19.75, 2.5)
			node[midway, font=\bfseries, above=2pt] {Conversor D/A};
	\end{tikzpicture}
\end{document}
```

## Analizando el sistema en cascada
---
Sabemos que la [[Transformada de Fourier en tiempo discreto|transformada de Fourier]] de $x(n)$ vale $$ X\left( e^{j\Omega} \right) = \frac{1}{T} X_c\left( j \frac{\Omega}{T} \right), ~~~ \Omega \in [-\pi, ~\pi) $$ recordando la relación entre $\omega$ y $\Omega$ vista [[Muestreo periódico#Transformada de Fourier|acá]], para el caso en el que no hay [[Aliasing|aliasing]] (que podemos asegurar aplicando un [[Filtro antialiasing|filtro antialiasing]]). De esta forma la señal $y(n)$ a la salida del sistema de procesamiento discreto se puede escribir como $$ Y\left( e^{j\Omega} \right) = H_d\left( e^{j\Omega} \right) ~ X\left( e^{j\Omega} \right) = \frac{1}{T} H_d\left( e^{j\Omega} \right) ~ X_c\left( j\frac{\Omega}{T} \right), ~~~ \Omega \in [-\pi, ~\pi) $$
La señal de tiempo continuo $y_c(t)$ se puede escribir como $$ Y_c(j\omega) = \frac{1}{T} H_d\left(e^{j\omega T}\right) ~ H_r(j\omega) ~ X_c(j\omega), ~~~ \omega \in \mathbb{R} $$
Vemos que en el caso en que la señal $x_c(t)$ es de [[Señal de banda limitada|banda limitada]] y el [[Muestreo periódico|muestreo]] se realiza de acuerdo al [[Teorema Whittaker-Kotelnikov-Nyquist-Shannon|teorema del muestreo]] para que no exista aliasing, tenemos que la cascada es equivalente a un sistema LTI con [[Respuesta en frecuencia|respuesta en frecuencia]] $$ H_c(j \omega) = \frac{1}{T} H_d\left(e^{j\omega T}\right) ~ H_r(j\omega) $$