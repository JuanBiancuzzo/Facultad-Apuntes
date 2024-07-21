---
dia: 2023-01-23
capitulo: 3
tags:
  - intro/Circuitos-con-capacitores
  - nota
---
### Definición
---
Se define el tiempo de crecimiento (rise time) como el intervalo de tiempo que tarda la [[Tensión|tensión]] en pasar del $10\%$ al $90\%$ del máximo valor $$ t = - \tau ~ \ln\left(1 - \frac{v_C}{V_0} \right) $$ donde queremos que $\frac{v_C}{V_0}$ sea el porcentaje que buscamos

#### Expresión
---
$$\begin{align}
t_r = t_1 - t_2 = ln(9) \cdot R \cdot C \approx 2.2 \cdot R \cdot C = 2.2 \cdot \tau
\end{align}$$
Siendo
$$ \begin{cases} 
	t_1 = t (10\%)\\
	t_2 = t (90\%)\\
\end{cases} $$
Notar que depende de la [[Constante de tiempo|constante de tiempo]]

#### Esquematizándolo
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
			tpor(\por) = -\tautiempo * ln(1 - \por);
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
			
		\tikzmath {
			\t1 = tpor(0.1);
			\t2 = tpor(0.9);
		}
			
		\draw[dashed] (-0.1, {vc(\t1)}) 
				node[left=2pt, scale=0.6] {$10~\%$}
			-- (\maximo, {vc(\t1)});
		\draw[dashed] (\t1, -0.1) 
				node[below=2pt, scale=0.6] {$t_1$}
			-- (\t1, {vc(\t1)});

		\draw[dashed] (-0.1, {vc(\t2)}) 
				node[left=2pt, scale=0.6] {$90~\%$}
			-- (\maximo, {vc(\t2)});
		\draw[dashed] (\t2, -0.1) 
				node[below=2pt, scale=0.6] {$t_1$}
			-- (\t2, {vc(\t2)});

		\path (-0.1, 0) node[left=2pt, scale=0.6] {$0~\%$};
		\path ({0.75 * \maximo}, {vc(\tautiempo)})
			node[below=2pt, scale=0.6] 
				{$v_C(t) = V_0 \left( 1 - e^{-\frac{t}{\tau}} \right)$};
		
	\end{tikzpicture}
\end{document}
```
