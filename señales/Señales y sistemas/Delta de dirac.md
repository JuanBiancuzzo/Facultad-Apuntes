---
dia: 2024-03-13
tags:
  - señales/Señales-y-sistemas
  - nota/facultad
---
### Definición
---
Es una [[Función de distribución|distribución]] que tiene las propiedades $$ \begin{matrix} 
	\delta(t) = 0 ~~ \forall t \ne 0 \\
	\displaystyle \int_{-\infty}^{\infty} \delta(t) ~ dt = 1
\end{matrix} $$
Con la representación 
```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (-2.5, 0) -- (2.5, 0)
			node[right=2pt] {$t$};
		\draw[->] (0, -0.2) node[below=2pt] {$0$}
			-- (0, 2.5);
	\end{tikzpicture}
\end{document}
```
También se puede entender la delta de Dirac con el [[Límite|límite]], donde $$ \lim_{\Delta \to 0} \delta_\Delta (t) = \delta(t) $$ y gráficamente se ve

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 	
	\definecolor{col1}{RGB}{255, 0, 127} 
	\definecolor{col2}{RGB}{255, 25, 25} 
	\definecolor{col3}{RGB}{229, 51, 178} 
	\definecolor{col4}{RGB}{178, 102, 229} 
	\definecolor{col5}{RGB}{102, 127, 229} 
	\definecolor{col6}{RGB}{0, 127, 204}
	
	\begin{tikzpicture}[scale=1.3, transform shape, ultra thick]

		\draw[->] (-0.2, 0) -- (3.5, 0)
			node[right=2pt] {$t$};
		\draw[->] (0, -0.2) node[below=2pt] {$0$}
			-- (0, 4.2);

		\draw[->] (3, 1) arc (-90:-180:2 and 2.5);

		\tikzmath { \t = 0.3; }
		\draw[col1] (\t, 0)
			-- (\t, {1/\t})
			-- (0, {1/\t});

		\tikzmath { \t = 0.5; }
		\draw[col2] (\t, 0)
			-- (\t, {1/\t})
			-- (0, {1/\t});

		\tikzmath { \t = 0.75; }
		\draw[col3] (\t, 0)
			-- (\t, {1/\t})
			-- (0, {1/\t});

		\tikzmath { \t = 1; }
		\draw[col4] (\t, 0)
			-- (\t, {1/\t})
			-- (0, {1/\t});

		\tikzmath { \t = 2; }
		\draw[col5] (\t, 0)
			-- (\t, {1/\t})
			-- (0, {1/\t});

		\tikzmath { \t = 3; }
		\draw[col6] (\t, 0)
			-- (\t, {1/\t})
			-- (0, {1/\t});
	\end{tikzpicture}
\end{document}
```

En el caso discreto, la delta se define como $$ \delta[n] = \begin{cases} 
	1 ~~ \text{si} ~~ t = 0 \\
	0 ~~ \text{si} ~~ t \ne 0 \\
\end{cases} $$

#### Propiedades
---
* Para funciones continuas en un $t_0 \in \mathbb{R}$ arbitrario, la delta de Dirac nos permite evaluar el valor de dicha función en $t_0$ de la siguiente forma $$ \int_{-\infty}^{\infty} \delta(t - t_0) ~ x(t) ~ dt = x(t_0) $$
* En el caso discreto, usando la [[Función de Heaviside|función escalón]]
	* $\displaystyle u[n] = \sum_{k = - \infty}^{n} \delta[n]$
	* $\displaystyle \delta[n] = u[n] - u[n - 1]$
	* $\displaystyle \sum_{k = -\infty}^{\infty} x[k] ~ \delta[n - k] = x[n]$ para cualquier [[Señal#^02aea6|señal de tiempo discreto]] $x[n]$