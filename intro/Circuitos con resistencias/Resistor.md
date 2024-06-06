---
dia: 2023-01-23
materia: intro
capitulo: 1
---
### Definición
---
Es el elemento que introduce una [[Resistencia|resistencia]] en un circuito eléctrico

##### Simbología
---
```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, 0) to[R, *-*] ++ (1.7, 0);
		\draw (0, 1) to[R, european, *-*] ++ (1.7, 0);
	\end{circuitikz}
\end{document}
```

##### Código de colores
---

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{matrix}

\begin{document} 
	\definecolor{negro}{RGB}{29, 27, 25}
	\definecolor{cafe}{RGB}{190, 132, 78}
	\definecolor{rojo}{RGB}{230, 34, 3}
	\definecolor{naranja}{RGB}{209, 124, 19}
	\definecolor{amarillo}{RGB}{237, 241, 0}
	\definecolor{verde}{RGB}{81, 249, 0}
	\definecolor{azul}{RGB}{74, 72, 243}
	\definecolor{violeta}{RGB}{133, 74, 118}
	\definecolor{gris}{RGB}{133, 130, 125}
	\definecolor{blanco}{RGB}{255, 255, 253}
	\definecolor{dorado}{RGB}{159, 151, 0}
	\definecolor{plata}{RGB}{143, 144, 139}
	
	\tikzset{ 
	    table/.style={
		    matrix of nodes,    
		    text depth=0.5ex,
	        text height=2ex,
	            
	        nodes={
	            rectangle,
	            draw=black,
	            align=center,
	            text width=8em,
	            font=\bfseries
	        },        
	
	        row 1/.style={ nodes={fill=white} },
	        row 2/.style={ nodes={fill=negro} },
	        row 3/.style={ nodes={fill=cafe} },
	        row 4/.style={ nodes={fill=rojo} },
	        row 5/.style={ nodes={fill=naranja} },
	        row 6/.style={ nodes={text=white, fill=amarillo} },
	        row 7/.style={ nodes={text=white, fill=verde} },
	        row 8/.style={ nodes={fill=azul} },
	        row 9/.style={ nodes={fill=violeta} },
	        row 10/.style={ nodes={fill=gris} },
	        row 11/.style={ nodes={text=white, fill=blanco} },
			row 12/.style={ nodes={fill=dorado} },
			row 13/.style={ nodes={fill=plata} },
	    }
	}

	\begin{tikzpicture}	
		\matrix (tabla) at (0, 0) [table] {
			Color & 1ra Banda & 2da Banda & 3ra Banda & Tolerancia \% \\
			Negro & 0 & 0 & x1 & ~ \\
			Cafe & 1 & 1 & x10 & ~ \\
			Rojo & 2 & 2 & x100 & 2\% \\
			Naranja & 3 & 3 & x1000 & ~ \\
			Amarillo & 4 & 4 & x10000 & ~ \\
			Verde & 5 & 5 & x100000 & ~ \\
			Azul & 6 & 6 & x1000000 & ~ \\
			Violeta & 7 & 7 & x10000000 & ~ \\
			Gris & 8 & 8 & x100000000 & ~ \\
			Blanco & 9 & 9 & x1000000000 & ~ \\
			 & & & & Dorado 5\% \\
			 & & & & Plata 10\% \\ 
		};

		\coordinate (primeraTabla) at (tabla-1-2.north);
		\coordinate (segundaTabla) at (tabla-1-3.north);
		\coordinate (terceraTabla) at (tabla-1-4.north);
		\coordinate (toleranciaTabla) at (tabla-1-5.north);

		\begin{scope}[ultra thick]
			\tikzmath {
				\dist = 2;
				\sep = 0.05;
				\alto = 0.6;
				\indentacion = 0.45;
				\distIndent = 0.7;
				\banda = 0.35;
				\cantBandas = 2.5;

				\ancho = \distIndent + \banda + \cantBandas * \banda + \alto;
			}

			\coordinate (centro) at ($ (tabla.north) + (0, \dist) $);
			\coordinate (inicio) at (tabla.west |- centro);
			\coordinate (dif) at ($ (centro) - (inicio) $);

			%% Padding
			\path (centro) -- ++(dif) --++(3, 0);

			%% Cables
			\draw ($ (inicio) + (0, \sep) $) -- ++($ (dif) + (-\ancho, 0) $);
			\draw ($ (inicio) + (0, -\sep) $) -- ++($ (dif) + (-\ancho, 0) $);

			\draw ($ (centro) + (\ancho, \sep) $) -- ++($ (dif) + (-\ancho, 0) $);
			\draw ($ (centro) + (\ancho, -\sep) $) -- ++($ (dif) + (-\ancho, 0) $);

			%% Bandas
			\fill[plata] ($ (centro) + (\distIndent, \indentacion) $) 
				-- ++(\banda, {\alto - \indentacion})
				-- ++(0, {-2 * \alto})
				-- ++(-\banda, {\alto - \indentacion})
				-- ++(0, {2 * \alto});
			\coordinate (tolerancia) 
				at ($ (centro) + (
					{\distIndent + \banda / 2}, 
					{-(\alto + \indentacion) / 2}) 
				$);
			
			\fill[rojo] ($ (centro) + (0, \indentacion) $) -- ++({\banda / 2}, 0)
				-- ++(0, {-2 * \indentacion})
				-- ++(-\banda, 0)
				-- ++(0, {2 * \indentacion})
				-- ($ (centro) + (0, \indentacion) $);
			\coordinate (tercera) at ($ (centro) + (0, -\indentacion) $);

			\fill[violeta] ($ (centro) + (-\distIndent, \indentacion) $) 
				-- ++(-\banda, {\alto - \indentacion})
				-- ++(0, {-2 * \alto})
				-- ++(\banda, {\alto - \indentacion})
				-- ++(0, {2 * \alto});
			\coordinate (segunda) 
				at ($ (centro) + (
					{-\distIndent - \banda / 2}, 
					{-(\alto + \indentacion) / 2}
				) $);

			\fill[amarillo] ($ (centro) + ({\alto + \banda/2 - \ancho}, \alto) $) 
				-- ++(\banda, 0)
				-- ++(0, {-2 * \alto})
				-- ++(-\banda, 0)
				-- ++(0, {2 * \alto});
			\coordinate (primera) 
				at ($ (centro) + ({\alto + \banda - \ancho}, -\alto) $);

			%% Resistor
			\draw ($ (centro) + (0, \indentacion) $) -- ++(\distIndent, 0)
				-- ++(\banda, {\alto - \indentacion})
				-- ++({\cantBandas * \banda}, 0);
			\draw ($ (centro) + (0, -\indentacion) $) -- ++(\distIndent, 0)
				-- ++(\banda, {\indentacion - \alto})
				-- ++({\cantBandas * \banda}, 0);
			\draw ($ (centro) + ({\ancho - \alto}, -\alto) $) arc (-90:90:\alto);
			
			\draw ($ (centro) + (0, \indentacion) $) -- ++(-\distIndent, 0)
				-- ++(-\banda, {\alto - \indentacion})
				-- ++({-\cantBandas * \banda}, 0);
			\draw ($ (centro) + (0, -\indentacion) $) -- ++(-\distIndent, 0)
				-- ++(-\banda, {\indentacion - \alto})
				-- ++({-\cantBandas * \banda}, 0);
			\draw ($ (centro) + ({\alto - \ancho}, \alto) $) arc (90:270:\alto);

			%% Referencias
			\tikzmath{ \sep=0.2; }

			\foreach \inicio/\terminal/\dist in {
				primera/primeraTabla/0.5, 
				segunda/segundaTabla/0.5, 
				tercera/terceraTabla/0.5, 
				tolerancia/toleranciaTabla/0.7} {
				
				\draw[thick, rounded corners=1em, ->] ($ (\inicio) + (0, -\sep) $) 
					-- ++(0, -\dist)
					-- ($ (\inicio -| \terminal) + (0, {-\dist - \sep}) $)
					-- ($ (\terminal) + (0, \sep) $);
			}
		\end{scope}
	
	\end{tikzpicture}
\end{document}
```
