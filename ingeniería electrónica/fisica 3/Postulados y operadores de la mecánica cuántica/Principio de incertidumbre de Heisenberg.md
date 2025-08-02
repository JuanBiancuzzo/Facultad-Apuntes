---
dia: 2023-08-24
tags:
  - carrera/ingeniería-electrónica/analisis-3/Transformada-de-Fourier
  - carrera/ingeniería-electrónica/fisica-3/Postulados-y-operadores-de-la-mecánica-cuántica
  - carrera/ingeniería-electrónica/señales/Transformada-de-Fourier
  - carrera/ingeniería-en-informática/analisis-3/Transformada-de-Fourier
  - carrera/ingeniería-en-informática/fisica-3/Postulados-y-operadores-de-la-mecánica-cuántica
  - nota/facultad
---
# Definición
---
En [[Física cuántica|mecánica cuántica]], principio de [[Incertidumbre|incertidumbre]] establece la imposibilidad de que determinados pares de [[Magnitud física observable|magnitud física observables]] y complementarias sean conocidas por precisión arbitraria

$$ \begin{align} 
	\Delta_t \Delta_E &\ge \frac{\hbar}{2} \\
	\Delta_x \Delta_p &\ge \frac{\hbar}{2}
\end{align} $$

Esta relacionada por una [[Transformada de Fourier|transformada de Fourier]], veamos un ejemplo, donde tenemos una [[Señal|señal]] que representa la [[Distribución continua|distribución]] de una magnitud física observable a partir de una [[Distribución Normal|distribución normal]] $x(t) = \frac{1}{\sqrt{2\pi\sigma}} \exp\left( - \frac{t^2}{2\sigma^2} \right)$ con $\sigma > 0$ donde su transformada de Fourier $$ X(j\omega) = \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi\sigma}} \exp\left( - \frac{t^2}{2\sigma^2} \right) ~ dt = \exp(- \frac{\omega^2 \sigma^2}{2}) $$ donde notemos que también es una distribución normal escalada

```tikz
\usepackage{pgfplots}
\usepackage{amssymb}

\begin{document} 
	\begin{tikzpicture}[scale=0.9, transform shape]
		\begin{axis}[
			xmin=-15, ymin=0,
			xmax=15, ymax=0.4, 
			samples=100,
			grid=major,
			xlabel=$t$,
			ylabel=Amplitud,
			legend style={fill=white},
		]
		
		\addplot[cyan, ultra thick, domain=-15:15] 
			{ (2 * 3.14 * 1)^(-0.5) * exp(-\x^2 * (2 * 1^2)^(-1)) };
		\addlegendentry{$\sigma = 1$};
		
		\addplot[red, ultra thick, domain=-15:15] 
			{ (2 * 3.14 * 5)^(-0.5) * exp(-\x^2 * (2 * 5^2)^(-1)) };
		\addlegendentry{$\sigma = 5$};
		
		\addplot[green, ultra thick, domain=-15:15] 
			{ (2 * 3.14 * 10)^(-0.5) * exp(-\x^2 * (2 * 10^2)^(-1)) };
		\addlegendentry{$\sigma = 10$};
		
		\end{axis}
	\end{tikzpicture}
	
	\begin{tikzpicture}[scale=0.8, transform shape]
		\draw[->, ultra thick] (0, 0.25) 
			.. controls (0.2, 0.5) and (1.8, 0.5) .. (2, 0.25)
			node[midway, above=2pt, font=\bfseries, scale=1.5]
				{$\mathcal{F}$};
		\path (0, -6);
	\end{tikzpicture}

	\begin{tikzpicture}[scale=0.9, transform shape]
		\begin{axis}[
			xmin=-5, ymin=0,
			xmax=5, ymax=1, 
			samples=200,
			grid=major,
			xlabel=$\omega$,
			ylabel=Amplitud,
			legend style={fill=white}
		]
		
		\addplot[cyan, ultra thick, domain=-5:5] 
			{ exp(-\x^2 * 1^2 * (2)^(-1)) };
		\addlegendentry{$\sigma = 1$};
		
		\addplot[red, ultra thick, domain=-5:5] 
			{ exp(-\x^2 * 5^2 * (2)^(-1)) };
		\addlegendentry{$\sigma = 5$};
		
		\addplot[green, ultra thick, domain=-5:5] 
			{ exp(-\x^2 * 10^2 * (2)^(-1)) };
		\addlegendentry{$\sigma = 10$};
		
		\end{axis}
	\end{tikzpicture}
\end{document}
```

Demostrando que mientras más localizado uno, más deslocalizado en el otro, y viceversa. 
