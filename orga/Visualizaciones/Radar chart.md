---
dia: 2023-03-20
capitulo: 2
tags:
  - orga/Visualizaciones
---
### Definición
---
El mejor uso de este [[Plot|plot]] es cuando se lo piensa como un [[Plot de relación|plot de relación]], donde se tiene varias variables que influyen entre si

```tikz
\usetikzlibrary{math}
\usetikzlibrary{shapes}

\begin{document} 
	\tikzmath{
		\attack = 0.15;
		\technique = 0.35;
		\stats = 0.45;
		\defensa = 1;
		\power = 0.7;
		\speed = 0.5;

		\escala = 2;
		\disx = \escala * sin(60);
		\disy = \escala * cos(60);
	}
	\tikzset {
		texto/.style={
			align=center,
			font=\bfseries,
		}
	}

	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw (0, \escala) node[texto, above=2pt] {ATT}
			-- (\disx, \disy) node[texto, above right=2pt] {TEC}
			-- (\disx, -\disy) node[texto, below right=2pt] {STA}
			-- (0, -\escala) node[texto, below=2pt] {DEF}
			-- (-\disx, -\disy) node[texto, below left=2pt] {POW}
			-- (-\disx, \disy) node[texto, above left=2pt] {SPD}
			-- (0, \escala);

		\foreach \pos in {0, ..., 5} {
			\draw[dashed, gray] (0, 0) -- (
				{\escala * sin(360 * \pos / 6)},
				{\escala * cos(360 * \pos / 6)}
			);
		}

		\draw[red] (0, {\escala * \attack}) 
			-- ({\disx * \technique}, {\disy * \technique}) 
			-- ({\disx * \stats}, {-\disy * \stats}) 
			-- (0, -\escala * \defensa) 
			-- ({-\disx * \power}, {-\disy * \power}) 
			-- ({-\disx * \speed}, {\disy * \speed}) 
			-- (0, {\escala * \attack});
		
	\end{tikzpicture}
\end{document}
```