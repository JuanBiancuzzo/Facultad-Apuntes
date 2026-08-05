---
etapa: sin-empezar
dia: 2026-06-27
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 126
---
# Enunciado
---
Se quiere clasificar un [[ingeniería en informática/algebra 2/Espacios Vectoriales/Conjunto|conjunto]] de datos en $2$ clases. La etiqueta posee [[colección/distribuciones/discreta/Distribución de Bernoulli|distribución]] $Y \sim Ber\left( \frac{1}{2} \right)$, mientras que los predictores $X \in \mathbb{R}^2$ poseen distribución $$ X \mid Y = 0 \sim \mathcal{N}\left( \begin{bmatrix} 0 \\ 1 \end{bmatrix} 
\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \right), ~~~
X \mid Y = 1 \sim \mathcal{N}\left( 
\begin{bmatrix} 0 \\ 0 \end{bmatrix} 
\begin{bmatrix} 2 & 0 \\ 0 & 1 \end{bmatrix} \right)$$

Hallar la [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Frontera de decisión|frontera de decisión]] y el [[ingeniería electrónica/taller de señales/Clasificación en Inteligencia Artificial/Clasificador Bayesiano|clasificador Bayesiano]]

# Resolución
---
Como ya están definidas las [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de distribución|distribuciones]], se puede hallar la frontera de decisión dado por $$ \mathbb{P}(Y = 0) ~ p_{X \mid Y = 0}(x) = \mathbb{P}(Y = 1) ~ p_{X \mid Y = 1}(x) $$ donde al ser [[ingeniería en informática/proba/Teoría de probabilidades/Evento equiprobable|equiprobables]] se puede simplificar $$ p_{X \mid Y = 0}(x) = p_{X \mid Y = 1}(x) $$
Se puede desarrollar de la siguiente forma $$ \begin{align}
	p_{X \mid Y = 0}(x) &= p_{X \mid Y = 1}(x) \\
	\frac{1}{\sqrt{|\Sigma_0|}} \exp\left( -\frac{1}{2} (x - \mu_0)^T \Sigma_0^{-1} (x - \mu_0) \right) &=
	\frac{1}{\sqrt{|\Sigma_1|}} \exp\left( -\frac{1}{2} (x - \mu_1)^T \Sigma_1^{-1} (x - \mu_1) \right) \\
\end{align} $$ donde las [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz#Norma Matricial|normas matriciales]] son $|\Sigma_0| = 1$ y $|\Sigma_1| = 2$, y las [[ingeniería en informática/algebra 2/Espacios Vectoriales/Matriz#Matriz inversa|matrices inversas]] son $$ \begin{align}
	\Sigma_0^{-1} &= \mathbb{I} & 
	\Sigma_1^{-1} &= \begin{bmatrix} \frac{1}{2} & 0 \\ 0 & 1  \end{bmatrix}
\end{align} $$ por lo tanto se puede reescribir la expresión de la siguiente forma $$ \begin{align}
	\sqrt{\frac{|\Sigma_1|}{|\Sigma_0|}} &=
	\exp\left( -\frac{1}{2} (x - \mu_1)^T \Sigma_1^{-1} (x - \mu_1) + \frac{1}{2} (x - \mu_0)^T \Sigma_0^{-1} (x - \mu_0) \right) \\
	\ln \left( \frac{|\Sigma_1|}{|\Sigma_0|} \right) &= 
	-(x - \mu_1)^T \Sigma_1^{-1} (x - \mu_1) + (x - \mu_0)^T \Sigma_0^{-1} (x - \mu_0) \\
	\ln(2) &= (x - \mu_0)^T (x - \mu_0) 
	- x^T \begin{bmatrix} \frac{1}{2} & 0 \\ 0 & 1  \end{bmatrix} x \\
\end{align} $$ finalmente tomando $x = \begin{bmatrix} x_1 & x_2 \end{bmatrix}^T$ se puede llegar a la expresión $$ \begin{align}
	\ln(2) &= \begin{bmatrix} x_1 & x_2 - 1 \end{bmatrix} ~ \begin{bmatrix} x_1 \\ x_2 - 1 \end{bmatrix} 
	- \begin{bmatrix} x_1 & x_2 \end{bmatrix} \begin{bmatrix} \frac{x_1}{2} \\ x_2 \end{bmatrix} \\
	\ln(2) &= \left[ x_1^2 + (x_2 - 1)^2 \right] - \left[ \frac{1}{2} x_1^2 + x_2^2 \right] \\
	\ln(2) &= \frac{1}{2} x_1^2 - 2 x_2 + 1 \\
	2 x_2 &= \frac{1}{2} x_1^2 + 1 - \ln(2) \\
	x_2 &= \frac{1}{4} x_1^2 + \frac{1 - \ln(2)}{2} \\
\end{align} $$
Esta frontera se representa visualmente de la siguiente forma

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{rojo}{RGB}{255, 0, 127} 
\begin{tikzpicture}[scale=2.1, transform shape, thick]
	\tikzmath {
        function frontera(\x) {
			return 0.25 * \x * \x + 0.153;
        };
		
		\ancho = 3; \altoMin = 1; \altoMax = 2.5; \radio = 0.07;
		\scale = 0.65; \scaleTick = 0.6; \desfase = 1.01; 
		\diff = 0.2; \lenTick = 0.1;
	}
	
	\coordinate (v_0) at (0, 1); 
	\coordinate (v_1) at (0, 0); 
	
	\draw[->] ({-\diff - \ancho}, 0) -- ({\ancho + \diff}, 0) 
		node[pos=\desfase, right=2pt, scale=\scale] {$x_1$};
	\draw[->] (0, {-\diff - \altoMin}) -- (0, {\altoMax + \diff}) 
		node[pos=\desfase, above=2pt, scale=\scale] {$x_2$};
		
    \foreach \tick [parse=true] in {1, ..., \ancho} {
		\draw (\tick, {-\lenTick / 2}) 
				node[below=2pt, scale=\scaleTick] {$\tick$}
			-- ++ (0, \lenTick);
		\draw (-\tick, {-\lenTick / 2}) 
				node[below=2pt, scale=\scaleTick] {$-\tick$}
			-- ++ (0, \lenTick);
    }
    \foreach \tick in {0.25, 0.5, ..., \ancho} {
        \draw (\tick, {-\lenTick / 3}) -- ++(0, {2 * \lenTick / 3});
        \draw (-\tick, {-\lenTick / 3}) -- ++(0, {2 * \lenTick / 3});
    }
		
    \foreach \tick [parse=true] in {1, ..., \altoMax, -1, ..., -\altoMin} {
		\draw ({-\lenTick / 2}, \tick) 
				node[right=2pt, scale=\scaleTick] {$\tick$}
			-- ++ (\lenTick, 0);
    }
	
    \foreach \tick in {0.25, 0.5, ..., \altoMax, -0.25, -0.5, ..., -\altoMin} {
        \draw ({-\lenTick / 3}, \tick) -- ++({2 * \lenTick / 3}, 0);
	}
		
	\foreach \coor/\color/\rx/\ry in {v_0/rojo/1/1, v_1/azul/0.88/0.44} {
		\filldraw[draw=\color, ultra thick] (\coor) circle (\radio);	
		\begin{scope}[cm={1, 0, 0, 1, (\coor)}]
	        \draw[\color] (0, \ry) \foreach \x in {0, 2, ..., 360} {
	            -- ({\rx * sin(\x)}, {\ry * cos(\x)})
	        };
		\end{scope}
	}
	
	\draw (-\ancho, {frontera(-\ancho)}) \foreach \x
		[parse=true] in {-\ancho, -\ancho + 0.25, ..., \ancho} {
		-- (\x, {frontera(\x)})
	};
	
\end{tikzpicture}
\end{document}
```

Finalmente, el clasificador esta dado por $$ \varphi(x) = \begin{cases}
	0 & \displaystyle \text{si} ~ x_2 > \frac{1}{4} x_1^2 + \frac{1 - \ln(2)}{2} \\
	1 & \displaystyle  \text{si} ~ x_2 < \frac{1}{4} x_1^2 + \frac{1 - \ln(2)}{2} \\
\end{cases} $$ 
