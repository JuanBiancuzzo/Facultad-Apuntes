---
dia: 2024-04-21
tags:
  - carrera/ingeniería-electrónica/circuitos/Dispositivos-de-control-de-señal-y-en-conmutación
  - nota/facultad
---
# Definición
---
Dado el [[Circuito eléctrico|circuito]] con un [[Dispositivo de control de potencia|dispositivo de control de potencia]]

```tikz
\usepackage{circuitikz} 

\begin{document} 
	\begin{circuitikz}[american, scale=1.3, transform shape, thick]
		\draw (0.25, 0) rectangle (1.75, 3);

		\draw (1, 0) to[short, -*] ++(0, -0.5)
				node[left=2pt, font=\bfseries] (dosp) {$2'$}
			to ++(0, -0.5)
			to ++(3, 0)
			to[vsource, invert, l_=$V_A$] ++(0, 2.5)
			to[R, l_=$R_c$] ++(0, 2.5)
			to[short, f_=$I_0$] ++(-3, 0)
			to[short, -*] ++(0, -0.5)
				node[left=2pt, font=\bfseries] (dos) {$2$}
			to ++(0, -0.5);
		\draw ($ (dos) + (1.3, 0) $) 
			to[open, v^=$V_0$] ($ (dosp) + (1.3, 0) $);
		
		\draw[dashed] (1, 0) to (1, 0.7) to (0.25, 0.7);
		\draw (0.25, 2.3) to[short, -*] ++(-1.5, 0)
				node[above=2pt, font=\bfseries] {$1$}
			to[short] ++(-1, 0)
			to[short] ++(0,  1)
			to[short] ++(-2, 0)

			to[sV, invert, v_=$v_i$] ++(0, -1.8)
			to[vsource, v_=$V_{IQ}$] ++(0, -1.8)

			to[short] ++( 2, 0)
			to[short] ++(0,  1)
			to[short, -*] ++(1, 0)
				node[below=2pt, font=\bfseries] {$1'$}
			to ++(1.5, 0);
	\end{circuitikz}
\end{document}
```

Partiendo de la [[Curva de salida|curva de salida]]

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{
		\va = 6.5;
		\rc = 1.8;
		\voq = 3;

		\lin = 4;
		\sep = (7/3) / \lin;
		\cant = 7;

		\excursion = 1.3;
	}
	\begin{tikzpicture}[scale=1.2, transform shape, ultra thick,
		declare function = {
			cde(\v) = (\va - \v) / \rc;
			senial(\t) = \excursion * sin(mod(\t * 360, 360));
		},
	]
		\tikzmath { 
			\altura = cde(\voq);
			\divisiony = \altura / 8; 
		}
		
		\draw[->] (-0.5, 0) -- (8, 0)
			node[below right=2pt] {$V_0$};
		\draw[->] (0, -0.5) -- (0, 5)
			node[left=2pt] {$I_0$};

		\draw (\va, 0) node[below=2pt] {$V_A$}
			-- (0, {cde(0)})
				node[left=2pt] {$\frac{V_A}{R_C}$};

		\draw[very thick] (\voq, -0.2) 
				node[below=2pt] {$V_{0Q}$}
			-- (\voq, {cde(\voq)})
				node[above right=2pt] {$Q$}
				node[circle, fill, minimum size=5pt, 
					inner sep=0pt, outer sep=0pt] {};
		
		\path (0, {cde(\voq)}) node[left=2pt] {$I_{0Q}$};

		\draw[very thick] (0, 0) 
			rectangle (\voq, {cde(\voq)});
		\begin{scope}
			\tikzmath{  \longitud = \voq; }
			\foreach \y in {0, \divisiony, ..., \altura} {
				\draw[thin] (0, \y) -- ++(\longitud, 0);
			}
		\end{scope}
	
		\draw[very thick] (\voq, 0) 
			rectangle (\va, {cde(\voq)});
		\begin{scope}
			\tikzmath{ 
				\longitud = (\va - \voq);				
				\divisionx = \longitud / floor(\longitud / \divisiony); 
			}
			\foreach \y in {0, \divisiony, ..., \altura} {
				\draw[thin] (\voq, \y) -- ++(\longitud, 0);
			}
			\foreach \x in {0, \divisionx, ..., \longitud} {
				\draw[thin] ({\voq + \x}, 0) -- ++(0, \altura);
			}
		\end{scope}

		\draw[->] (\voq, -1) -- ++(0, -4)
			node[right=2pt] {$t$};
		\draw[->] ({\voq - \excursion - 0.4}, -1.25) -- 
			({\voq + \excursion + 0.4}, -1.25)
				node[below=2pt] {$v_i$};
		\foreach \t in {0, 0.1, ..., 2.7} {
			\draw[very thick] ({\voq + senial(\t)}, {-1.25 - (\t)})
				-- ({\voq + senial(\t + 0.1)}, {-1.25 - (\t + 0.1)});
		}		

		\draw[dashed, very thick] ({\voq - \excursion}, -4.5)
			-- ({\voq - \excursion}, {cde(\voq - \excursion)})
				node[circle, fill, minimum size=5pt, 
					inner sep=0pt, outer sep=0pt] {};
		\draw[dashed, very thick] ({\voq + \excursion}, -4.5)
			-- ({\voq + \excursion}, {cde(\voq + \excursion)})
				node[circle, fill, minimum size=5pt, 
					inner sep=0pt, outer sep=0pt] {};
		\draw[very thick] ({\voq - \excursion}, {cde(\voq)})
			-- ({\voq - \excursion}, {cde(\voq + \excursion)})
			-- (\voq, {cde(\voq)});

		\draw ({\voq - \excursion}, {cde(\voq)})
			-- ({\voq - \excursion}, {cde(\voq - \excursion)});
		\begin{scope}
			\clip ({\voq - \excursion}, {cde(\voq)})
				-- ({\voq - \excursion}, {cde(\voq - \excursion)})
				-- (\voq, {cde(\voq)})
				-- ({\voq - \excursion}, {cde(\voq)});

			\foreach \x in {0, \divisiony, ..., 3} {
				\draw[thin] (\x, {cde(\voq)}) -- ++(1, 1);
			}
		\end{scope}
	\end{tikzpicture}
\end{document}
```

Donde 
* La suma de la zona rallada horizontalmente y cuadriculada es la [[Potencia disipada|potencia disipada]] por la [[Fuente de tensión|fuente]]
* La zona rallada horizontalmente representa la potencia disipada por el componente en continua, es decir $v_i = 0$
* La zona cuadriculada es la potencia disipada por la carga $R_c$ en continua, es decir $v_i = 0$
* La zona rallada diagonalmente es la potencia que disipa la carga $R_c$ en alterna dado por $$P_o = \frac{1}{2} ~ \hat{i_o} ~ \hat{v_i}$$ donde $\hat{i_o}$ es la [[Corriente eléctrica|corriente]] pico dado por $\hat{v_i}$ que es la [[Tensión|tensión]] pico de entrada, también llamada excursión
	* Esta potencia disipada, es entregada por el componente, representado por el triángulo sobre la zona rallada horizontalmente
 
La [[Señal|señal]] de alterna va a mover el punto de reposo $Q$ por la [[Recta de carga dinámica de un componente|recta de carga dinámica]], que en este caso coincide con la [[Recta de carga estática de un componente|recta de carga estática]]

En el caso que excursión sea la máxima posible, es decir que este en el medio entre $0$ y $V_A$, por lo tanto la [[Máxima potencia|máxima potencia]] disipada es $$ P_o = \frac{1}{2} ~ \hat{i}_0 \cdot \frac{1}{2} V_A $$
Por lo tanto el [[Rendimiento en potencia|rendimiento]] [[Máximo|máximo]] es $$ \eta = \frac{P_o}{P_A} = \frac{1}{4} $$
Es decir, un rendimiento máximo del $25\%$, que es muy bajo, ya que esto es el máximo que puede conseguir