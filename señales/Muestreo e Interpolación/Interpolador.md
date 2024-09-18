---
dia: 2024-06-16
aliases:
  - Interpolador de banda limitada
  - Interpolador de orden k
tags:
  - señales/Muestreo-e-Interpolación
  - nota/facultad
---
# Definición
---
El concepto del interpolador es utilizando una [[Señal#^02aea6|señal discreta]] a una [[Señal#^016a35|señal continua]]

## Interpolador de banda limitada
---
Este se define con la [[Transformada de Fourier|transformada de Fourier]] de $$ H_r(j\omega) = \begin{cases} 
	T & |\omega| \le \omega_c \\
	0 & |\omega| > \omega_c
\end{cases} $$ con $W \le \omega_s \le \omega_s - W$, ya que esperamos que la señal sea de [[Señal de banda limitada|banda limitada]] dado por $W$. Vemos que este es un tipo de [[Filtro pasa-bajo|filtro pasa-bajo]] y este interpola de forma perfecta 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[
		scale=1.3,
		transform shape, thick,
		declare function = {
			f(\x) = \x;
		}
	]
		\tikzmath {
			\xmin = -3; \xmax = 3; \xlargo = \xmax - \xmin;
			\ymin = -0.3; \ymax = 1; \ylargo = \ymax - \ymin;
			\xsep = 1; \ysep = 0.2;
			\xscale = 1.3; \yscale = 4; 
		}
		
		\tikzmath { \centroX = \xmin; \centroY = 0; }
		\draw[->] ({\centroX * \xscale}, {\ymin * \yscale}) 
			-- ({\centroX * \xscale}, {(\ymax + \ylargo / 10)) * \yscale})
				node[left=2pt, scale=1.2] {$y$};
		\draw[->] ({\xmin * \xscale}, {\centroY * \yscale}) 
			-- ({\xmax * \xscale}, {\centroY * \yscale});

		\foreach \y [parse=true] in { -\ysep, 0, \ysep, ..., \ymax } {
			\draw ({(-0.1 + \xmin) * \xscale}, {\y * \yscale}) 
					node[left=2pt, scale=0.9] {\pgfmathprintnumber{\y}}
				-- ++({0.2 * \xscale}, 0);
		}
	
	\end{tikzpicture}
\end{document}
```
