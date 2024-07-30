---
dia: 2023-01-23
tags:
  - intro/Respuesta-en-frecuencia
  - nota/facultad
---
### Definición
---
La frecuencia de corte de un [[Filtro pasa-bajo|filtro]] ($f_\text{corte}$) delimita y separa los rangos de lo que se considera las frecuencias que "pasan" y las que se "eliminan"

##### Expresiones
---
Se calcula como $$ f_\text{corte} = \frac{1}{2 \pi ~ R ~ C} = \frac{1}{2 \pi ~ \tau} $$
Notar que depende de la [[Constante de tiempo|constante de tiempo]]

Además, la frecuencia de corte es la frecuencia a la cual la [[Ganancia|ganancia]] se reduce a 0.707 de su valor máximo
Es decir, que $$ G (f_\text{corte})= \frac{V_0}{V_i}(f_\text{corte})=\frac{1}{\sqrt{2}} $$
Esto generalmente se utiliza en gráficos de ganancia vs frecuencia, como el que se muestra a continuación

```tikz
\usetikzlibrary{math}

\begin{document} 
	\begin{tikzpicture}[scale=1.7, transform shape]
		\draw[->, ultra thick] (-0.2, 0) -- (6, 0)
			node[pos=0, left=3pt, scale=0.7] {$0$}
			node[below=2pt, scale=0.8] {$\omega$ [Hz]};
		\draw[->, ultra thick] (0, -0.2) -- (0, 3)
			node[right=2pt, scale=0.85] {$v_o$ pico};

		\foreach \y in {1, ..., 4} {
			\tikzmath{ \tag = int(2 * \y); }
			\path (0, {(2.5 * \y / 5)})
				node[left=2pt, scale=0.7] {$0.\tag$};
		}
		
		\draw[dashed, thick] (0, 2.5) -- ++(6, 0)
			node[pos=0, left=2pt, scale=0.7] {$1$}
			node[pos=0.7, above=2pt, scale=0.7] {Máxima transferencia $= 1$};

		\draw[dashed, thick] (0, 1.85) -- ++(2.9, 0)
			node[pos=0.3, above=2pt, scale=0.7] {$\frac{\sqrt{2}}{2} = 0.707$};

		\draw[ultra thick, cyan] (0, 2.5) -- (2, 2.5)
			.. controls (3, 2.5) and (3.5, 0) 
				.. (4.5, 0)
			-- (5.9, 0);

		\draw[ultra thick, violet] (0, 2.5) 
			-- (2.9, 2.5)
			-- (2.9, 0)
				node[below=2pt, scale=0.8, black] {$f_c$}
			-- (5.9, 0);
	\end{tikzpicture}
\end{document}
```