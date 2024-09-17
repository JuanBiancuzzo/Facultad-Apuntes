---
dia: 2023-09-25
aliases:
  - TBJ
  - NPN#NPN
  - PNP#PNP
tags:
  - dispo/Transistor-bipolar-de-juntura
  - nota/facultad
  - circuitos/Dispositivos-de-control-de-señal-y-en-conmutación
---
### Definición
---
El [[Transistor]] bipolar de juntura es la superposición de tres regiones con [[Dopaje|dopajes]] contrarios, formando dos [[Juntura PN|junturas PN]]. Estas tienen que estar suficientemente juntas como para que los [[Carga eléctrica|portadores]] minoritarios interactúen (pueden difundirse rápido sin [[Recombinación|recombinarse]] en la base). También tiene que estar suficientemente separados como para que las regiones de deserción (SCR) no se solapen (punch-through)

Al intercambiar el tipo de dopaje, pueden obtenerse dos combinaciones distintas

##### NPN
---
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=0.8, transform shape, thick]
		\begin{scope}[ultra thick]
			\draw (0, 0) -- ++(-1.8, 0)
				node[left=2pt] {B};
			
			\draw (0, 0.9) -- ++(0, -1.8);

			\draw (0, 0.3) -- ++(0.6, 0.5)
				-- ++(0, {2 - 0.5})
					node[above=2pt] {C};
			\draw[->] (0, -0.3) -- ++(0.6, -0.5)
				node (temp) {};
			\draw (temp.center) -- ++(0, {-2 + 0.5})
					node[below=2pt] {E};
		\end{scope}

		\fill (-1.8, 0) circle (0.1)
			node (base) {};
		\fill (0.6, 2.3) circle (0.1)
			node (colector) {};
		\fill (0.6, -2.3) circle (0.1)
			node (emisor) {};

		\tikzmath {
			\sep = 0.3;
			\dist = 1;
		}

		\draw[->] ($ (colector.center) + (\sep, -\sep) $)
			-- ++(0, -1)
				node[midway, right=2pt] {$I_C$};
		\draw[->] ($ (base.center) + (\sep, \sep) $)
			-- ++(1, 0)
				node[midway, above=2pt] {$I_B$};

		\draw[->] ($ (emisor.center) + (-\sep, 0) $)
			.. controls
				($ (emisor.center -| base.center) + (\dist, 0) $)
					and
				($ (emisor.center -| base.center) + (0, \dist) $)
			.. ($ (base.center) + (0, -\sep) $)
				node[midway, below left=2pt] {$V_{BE}$};

		\draw[->] ($ (emisor.center) + (\sep, 0) $)
			.. controls
				($ (emisor.center) + ({2.5 * \dist}, 0) $)
					and
				($ (colector.center) + ({2.5 * \dist}, 0) $)
			.. ($ (colector.center) + (\sep, 0) $)
				node[midway, right=2pt] {$V_{CE}$};
	\end{tikzpicture}
\end{document}
```

Donde tenemos, por construcción $$ N_{dE} > N_{aB} > N_{dC} $$
##### PNP
---
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=0.8, transform shape, thick]
		\begin{scope}[ultra thick]
			\draw (0, 0) -- ++(-1.8, 0)
				node[left=2pt] {B};
			
			\draw (0, 0.9) -- ++(0, -1.8);

			\draw[->] (0, 0.3) -- ++(0.6, 0.5)
				node (temp) {};
			\draw (temp.center) -- ++(0, {2 - 0.5})
					node[above=2pt] {E};
			\draw (0, -0.3) -- ++(0.6, -0.5)
				-- ++(0, {-2 + 0.5})
					node[below=2pt] {C};
		\end{scope}

		\fill (-1.8, 0) circle (0.1)
			node (base) {};
		\fill (0.6, 2.3) circle (0.1)
			node (emisor) {};
		\fill (0.6, -2.3) circle (0.1)
			node (colector) {};

		\tikzmath {
			\sep = 0.3;
			\dist = 1;
		}

		\draw[->] ($ (colector.center) + (-\sep, \sep) $)
			-- ++(0, 1)
				node[midway, left=2pt] {$I_C$};
		\draw[->] ($ (base.center) + (\sep, \sep) $)
			-- ++(1, 0)
				node[midway, above=2pt] {$I_B$};

		\draw[->] ($ (emisor.center) + (-\sep, 0) $)
			.. controls
				($ (emisor.center -| base.center) + (\dist, 0) $)
					and
				($ (emisor.center -| base.center) + (0, -\dist) $)
			.. ($ (base.center) + (0, \sep) $)
				node[midway, above left=2pt] {$V_{BE}$};

		\draw[->] ($ (emisor.center) + (\sep, 0) $)
			.. controls
				($ (emisor.center) + ({2.5 * \dist}, 0) $)
					and
				($ (colector.center) + ({2.5 * \dist}, 0) $)
			.. ($ (colector.center) + (\sep, 0) $)
				node[midway, right=2pt] {$V_{CE}$};
	\end{tikzpicture}
\end{document}
```

Donde tenemos, por construcción $$ N_{aE} > N_{dB} > N_{aC} $$

Con una estructura
![[Transistor NPN.webp]]

#### Curvas características
---
![[Curvas características del TBJ.png]]

### Modos de operación
---
Independientemente de si el TBJ es NPN o PNP, tiene 4 modos de operación. Tomaremos como referencia el NPN, pero se aplica de la misma forma para el PNP

* [[Modo activo directo del transistor bipolar de juntura|Modo activo directo (MAD)]] ![[Modo activo directo del transistor bipolar de juntura#^bfa932]]
* [[Modo activo inverso del transistor bipolar de juntura|Modo activo inverso (MAI)]] ![[Modo activo inverso del transistor bipolar de juntura#^71eca7]]
* [[Corte del transistor bipolar de juntura|Corte]] ![[Corte del transistor bipolar de juntura#^640694]]
* [[Saturación del transistor bipolar de juntura|Saturación]] ![[Saturación del transistor bipolar de juntura#^7f7ec7]]