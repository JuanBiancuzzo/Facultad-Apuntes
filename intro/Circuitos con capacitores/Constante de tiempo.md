---
dia: 2023-01-23
materia: intro
capitulo: 3
---
### Definición
---
La constante de tiempo ($\tau$) es un indicador de la velocidad de reacción del circuito ante una perturbación (debido a un escalón de tensión). Cuanto mayor sea este valor, el valor final del estado de equilibrio se alcanzará más rápidamente.

##### Expresión:
$$\begin{align}
\tau = R \cdot C
\end{align}$$

##### Unidades:
$$\begin{align}
[\tau] = \Omega \cdot F = segundos \space (s)
\end{align}$$

##### Características:
Reformulo, lo obtenido en el apartado de [[Circuito RC]]:
$$ 
\left\{ 
\begin{array}{ l } 
V_C (t)&= V_0 \cdot (1 - e^\text{-t/RC})\\
i(t) &= \frac{V_0}{R} \cdot e^\text{-t/RC}\\
\end{array} \right.
$$
Entonces:
$$ 
\left\{ 
\begin{array}{ l } 
V_C (t)&= V_0 \cdot (1 - e^{-t/\tau})\\
i(t) &= \frac{V_0}{R} \cdot e^{-t/\tau}\\
\end{array} \right.
$$
De aqui, puedo concluir que si $t=\tau$ :
$$\begin{align}
V_C (t)= V_0 \cdot (1 - e^{-t/\tau}) = V_0 \cdot(1 - e^{-1}) \approx 0.63 \cdot V_0
\end{align}$$
Es decir, que la [[Tensión]] de carga sobre un capacitor, en un tiempo $t=\tau$ es aproximadamente un $63\%$ de la amplitud pico-pico del escalón de entrada.

##### Esquematizándolo
---

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\tikzmath {
		\vinicio = 2.3;
		\tautiempo = 1.1;
		\maximo = 6 * \tautiempo;
	}
	\begin{tikzpicture}[scale=2.2, transform shape, ultra thick,
		declare function={
			vc(\t) = \vinicio * (1 - exp(-\t / \tautiempo));
		}
	]
		\draw[->] (-0.2, 0) -- (\maximo, 0)
			node[below=2pt, scale=0.7] {$t$};
		\draw[->] (0, -0.2) -- (0, {\vinicio + 0.2});

		\tikzmath { \sep = 0.1; }
		\draw[red] (-0.2, 0) 
			-- (0, 0) \foreach \t in {0, \sep, ..., \maximo} {
				-- (\t, {vc(\t)})
			};
		\draw[dashed] (-0.1, \vinicio) 
				node[left=2pt, scale=0.6] {$100~\%$}
			-- (\maximo, \vinicio);
			
		\draw[dashed] (\tautiempo, -0.1)
				node[below=2pt, scale=0.6] {$\tau$}
			-- (\tautiempo, \vinicio);
		
		\draw[dashed] ({5 * \tautiempo}, -0.1)
				node[below=2pt, scale=0.6] {$5 \tau$}
			-- ({5 * \tautiempo}, \vinicio);
			
		\draw[dashed] (-0.1, {vc(\tautiempo)}) 
				node[left=2pt, scale=0.6] {$63~\%$}
			-- (\maximo, {vc(\tautiempo)});

		\path (-0.1, 0) node[left=2pt, scale=0.6] {$0~\%$};
		\path ({0.5 * \maximo}, {vc(\tautiempo)})
			node[below=2pt, scale=0.6] 
				{$v_C(t) = V_0 \left( 1 - e^{-\frac{t}{\tau}} \right)$};
		
	\end{tikzpicture}
\end{document}
```

##### Tiempo de carga de un capacitor
---
El tiempo que tarda un capacitor para cargarse en su totalidad es de $5\tau$.
