---
dia: 2024-04-22
tags:
  - carrera/ingeniería-electrónica/señales/Muestreo-e-Interpolación
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/señales/Muestreo e Interpolación/Resumen.md]]"
---
# Definición
---
Un [[Filtro|filtro]] antialiasing intenta reducir el [[Aliasing|aliasing]] de una [[Señal|señal]], donde podemos convertir una señal arbitraria a una [[Señal de banda limitada|señal de banda limitada]] usando un [[Filtro pasa-bajo|filtro pasa-bajo]] 

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{
		\d = 4;
		\y1 = 3; 
		\y2 = \y1 - \d; 
		\y3 = \y2 - \d; 
		
		\W = 2;
		\ws = 1.5;
		\altura = 1.5;
		\extraDeltas = 1;
		
		\sep = 0.2;
		\xmax = \W + (2 * \W) * \extraDeltas - 2 * (\W - \ws) * \extraDeltas + 0.5;
	}

	\begin{tikzpicture}[scale=1.3, transform shape, very thick,
		declare function = {
			triangulo(\w) = ifthenelse(
				( -\W <= \w && \w <= \W ), 
				\altura * (1 - (sign(\w) * \w) / \W), 
				0
			);
		},
	]
		\draw[->] (-\xmax, \y1) -- (\xmax, \y1)
			node[above=2pt] {$\omega$};
		\draw[->] (0, {\y1 - 0.3}) -- (0, {\y1 + \altura * (3/2)})
			node[right=2pt] {$X_c(\omega)$};
	
		\tikzmath{ \sepMin = -\xmax + \sep; \sepMax = \xmax - \sep; }
		\foreach \x in {-\xmax, \sepMin, ..., \sepMax} {
			\draw[blue, ultra thick] (\x, {triangulo(\x) + \y1})
				-- ({\x + \sep}, {triangulo(\x + \sep) + \y1});
		}

		\path (-\W, \y1) node[below=2pt] {$-W$};
		\path ( \W, \y1) node[below=2pt] {$ W$};

		\draw[->] (-\xmax, \y2) -- (\xmax, \y2)
			node[above=2pt] {$\omega$};
		\draw[->] (0, {\y2 - 0.3}) -- (0, {\y2 + \altura * (3/2)})
			node[right=2pt] {$X_p(\omega)$};

		\foreach \xdelta in {-\extraDeltas, ..., \extraDeltas} {
			\tikzmath{ \sepMin = -\W + \sep; \sepMax = \W - \sep; }
			
			\foreach \x in {-\W, \sepMin, ..., \W} {				
				\draw[dashed, green, ultra thick] ({\x + 2 * \xdelta * \ws}, {
					triangulo(\x) + \y2
				}) -- ({\x + 2 * \xdelta * \ws + \sep}, {
					triangulo(\x + \sep) + \y2
				});
					
				\draw[blue, ultra thick] (\x + 2 * \xdelta * \ws, {
					triangulo(\x + 2 * \ws) + 
					triangulo(\x - 2 * \ws) + 
					triangulo(\x) + \y2
				}) -- (\x + 2 * \xdelta * \ws + \sep, {
					triangulo(\x + \sep + 2 * \ws) + 
					triangulo(\x + \sep - 2 * \ws) + 
					triangulo(\x + \sep) + \y2
				});
			}
		}

		\draw (-\W, \y2) node[above=2pt] {$-W~$}
			-- ++(0, 0.1);
		\draw ({-2 * \ws}, \y2) node[below=2pt] {$-\omega_s$}
			-- ++(0, 0.1);
		\draw (-\ws, \y2) node[below=2pt] {$-\frac{\omega_s}{2}$}
			-- ++(0, 0.1);
		\draw ({-2 * \ws + \W}, \y2) node[below=2em] 
				{$W - \omega_s~$}
			-- ++(0, 0.1);

		\draw ({2 * \ws - \W}, \y2) node[below=2em] 
				{$\omega_s - W~$}
			-- ++(0, 0.1);
		\draw ({2 * \ws}, \y2) node[below=2pt] {$\omega_s$}
			-- ++(0, 0.1);
		\draw (\ws, \y2) node[below=2pt] {$\frac{\omega_s}{2}$}
			-- ++(0, 0.1);
		\draw ( \W, \y2) node[above=2pt] {$~W$}
			-- ++(0, 0.1);

		\draw[->] (-\xmax, \y3) -- (\xmax, \y3)
			node[above=2pt] {$\omega$};
		\draw[->] (0, {\y3 - 0.3}) -- (0, {\y3 + \altura * (3/2)})
			node[right=2pt] {$X_c(\omega) - X_p(\omega)$};

		\draw[cyan, ultra thick] ({-2 * \ws}, \y3)
			-- (-\W, \y3)
			-- ({-\ws}, {-triangulo(-\ws) + \y3})
			-- ({-\ws}, { triangulo(-\ws) + \y3})
			-- ({-2 * \ws + \W}, \y3)
			-- ({2 * \ws - \W}, \y3)
			-- (\ws, { triangulo(\ws) + \y3})
			-- (\ws, {-triangulo(\ws) + \y3})
			-- (\W, \y3)
			({2 * \ws}, \y3);

		\draw (-\W, \y3) node[above=2pt] {$-W~$}
			-- ++(0, 0.1);
		\draw ({-2 * \ws}, \y3) node[below=2pt] {$-\omega_s$}
			-- ++(0, 0.1);
		\path (-\ws, {-triangulo(-\ws) + \y3}) node[below=2pt] 
				{$-\frac{\omega_s}{2}$};
		\draw ({-2 * \ws + \W}, \y3) node[below=2pt] 
				{$~~ W - \omega_s$}
			-- ++(0, 0.1);

		\draw ({2 * \ws - \W}, \y3) node[below=2pt] 
				{$\omega_s - W ~~$}
			-- ++(0, 0.1);
		\draw ({2 * \ws}, \y3) node[below=2pt] {$\omega_s$}
			-- ++(0, 0.1);
		\path (\ws, {-triangulo(\ws) + \y3}) node[below=2pt] 
				{$\frac{\omega_s}{2}$};
		\draw ( \W, \y3) node[above=2pt] {$~W$}
			-- ++(0, 0.1);
	\end{tikzpicture}
\end{document}
```

Si aplicamos el filtro, entonces tenemos lo siguiente

```tikz
\usetikzlibrary{math}
\begin{document} 
	\tikzmath{
		\d = 4;
		\y1 = 3; 
		\y2 = \y1 - \d; 
		\y3 = \y2 - \d; 
		
		\W = 2;
		\ws = 1.5;
		\altura = 1.5;
		\extraDeltas = 1;
		
		\sep = 0.2;
		\xmax = \W + (2 * \W) * \extraDeltas - 2 * (\W - \ws) * \extraDeltas + 0.5;
	}

	\begin{tikzpicture}[scale=1.3, transform shape, very thick,
		declare function = {
			triangulo(\w) = ifthenelse(
				( -\W <= \w && \w <= \W ), 
				\altura * (1 - (sign(\w) * \w) / \W), 
				0
			);
		},
	]
		\draw[->] (-\xmax, \y1) -- (\xmax, \y1)
			node[above=2pt] {$\omega$};
		\draw[->] (0, {\y1 - 0.3}) -- (0, {\y1 + \altura * (3/2)})
			node[right=2pt] {$X_c(\omega)$};
	
		\tikzmath{ \sepMin = -\xmax + \sep; \sepMax = \xmax - \sep; }
		\foreach \x in {-\xmax, \sepMin, ..., \sepMax} {
			\draw[blue, ultra thick] (\x, {triangulo(\x) + \y1})
				-- ({\x + \sep}, {triangulo(\x + \sep) + \y1});
		}
		\draw[dashed, red] ({-\xmax + 2 * \sep}, \y1) 
			-- (-\ws, \y1)
			-- (-\ws, {\altura + \y1})
			-- ( \ws, {\altura + \y1})
			-- ( \ws, \y1)
			-- ({\xmax - 2 * \sep}, \y1);

		\path (-\W, \y1) node[below=2pt] {$-W$};
		\draw (-\ws, \y1) node[below=2pt] {$-\frac{\omega_s}{2}$}
			-- ++(0, 0.1);

		\draw ( \ws, \y1) node[below=2pt] {$ \frac{\omega_s}{2}$}
			-- ++(0, 0.1);
		\path ( \W, \y1) node[below=2pt] {$ W$};

		\draw[->] (-\xmax, \y2) -- (\xmax, \y2)
			node[above=2pt] {$\omega$};
		\draw[->] (0, {\y2 - 0.3}) -- (0, {\y2 + \altura * (3/2)})
			node[right=2pt] {$X_p(\omega)$};

		\foreach \xdelta in {-\extraDeltas, ..., \extraDeltas} {
			\tikzmath{ \sepMin = -\ws + \sep; \sepMax = \ws - \sep; }
			
			\foreach \x in {-\ws, \sepMin, ..., \sepMax} {				
				\draw[blue, ultra thick] (\x + 2 * \xdelta * \ws, {
					triangulo(\x) + \y2
				}) -- (\x + 2 * \xdelta * \ws + \sep, {
					triangulo(\x + \sep) + \y2
				});
			}

			\draw[dashed, green, ultra thick] 
				({2 * \ws * \xdelta + \ws}, \y2) 
				-- ++(0, {triangulo(\ws)});
			\draw[dashed, green, ultra thick] 
				({2 * \ws * \xdelta - \ws}, \y2) 
				-- ++(0, {triangulo(\ws)});
		}

		\draw ({-2 * \ws}, \y2) node[below=2pt] {$-\omega_s$}
			-- ++(0, 0.1);
		\draw (-\ws, \y2) node[below=2pt] {$-\frac{\omega_s}{2}$}
			-- ++(0, 0.1);
		\draw ({-2 * \ws + \W}, \y2) node[below=2em] 
				{$W - \omega_s~$}
			-- ++(0, 0.1);

		\draw ({2 * \ws - \W}, \y2) node[below=2em] 
				{$\omega_s - W~$}
			-- ++(0, 0.1);
		\draw ({2 * \ws}, \y2) node[below=2pt] {$\omega_s$}
			-- ++(0, 0.1);
		\draw (\ws, \y2) node[below=2pt] {$\frac{\omega_s}{2}$}
			-- ++(0, 0.1);

		\draw[->] (-\xmax, \y3) -- (\xmax, \y3)
			node[above=2pt] {$\omega$};
		\draw[->] (0, {\y3 - 0.3}) -- (0, {\y3 + \altura * (3/2)})
			node[right=2pt] {$X_c(\omega) - X_p(\omega)$};

		\draw[cyan, ultra thick] ({-2 * \ws}, \y3)
			-- (-\W, \y3)
			-- ({-\ws}, {-triangulo(-\ws) + \y3})
			-- ({-\ws}, \y3)
			-- ({\ws}, \y3)
			-- (\ws, {-triangulo(\ws) + \y3})
			-- (\W, \y3)
			({2 * \ws}, \y3);

		\draw (-\W, \y3) node[above=2pt] {$-W~$}
			-- ++(0, 0.1);
		\draw ({-2 * \ws}, \y3) node[below=2pt] {$-\omega_s$}
			-- ++(0, 0.1);
		\path (-\ws, {-triangulo(-\ws) + \y3}) node[below=2pt] 
				{$-\frac{\omega_s}{2}$};
		\draw ({-2 * \ws + \W}, \y3) node[below=2pt] 
				{$~~ W - \omega_s$}
			-- ++(0, 0.1);

		\draw ({2 * \ws - \W}, \y3) node[below=2pt] 
				{$\omega_s - W ~~$}
			-- ++(0, 0.1);
		\draw ({2 * \ws}, \y3) node[below=2pt] {$\omega_s$}
			-- ++(0, 0.1);
		\path (\ws, {-triangulo(\ws) + \y3}) node[below=2pt] 
				{$\frac{\omega_s}{2}$};
		\draw ( \W, \y3) node[above=2pt] {$~W$}
			-- ++(0, 0.1);
	\end{tikzpicture}
\end{document}
```

Si nuestro objetivo es obtener una representación fiel de una señal mediante [[Muestreo|muestreo]] siempre tenemos que usar un filtro antialiasing