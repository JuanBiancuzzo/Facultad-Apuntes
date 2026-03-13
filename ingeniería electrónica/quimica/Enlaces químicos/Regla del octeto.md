---
dia: 2026-03-13
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/quimica/Enlaces-químicos
  - nota/facultad
vinculoFacultad:
  - tema: Enlaces químicos
    capitulo: 3
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Los [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomos]] de los elementos tienden a unirse entre sí compartiendo o transfiriendo [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]] de manera que su nivel más externo se complete. Esto sucede generalmente con $8$ electrones en el último nivel de [[ingeniería electrónica/adc/Circuitos en regimen de corriente continua/Energía|energía]] (o con la [[ingeniería electrónica/quimica/Modelo atómico/Configuración electrónica|configuración electrónica]] completa del [[ingeniería electrónica/quimica/Tabla periódica/Tabla periódica#^gas-noble|gas noble]] más cercano en la [[ingeniería electrónica/quimica/Tabla periódica/Tabla periódica|tabla periódica]])

Utilizando la [[Representación de Lewis|representación de Lewis]] podemos ver el caso de la [[Molécula|molécula]] de $\text{Cl}_2$ y el [[ingeniería electrónica/quimica/Modelo atómico/Ion|ion]] $\text{Br}^{-}$ 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{verde}{RGB}{166, 178, 78}
\definecolor{rojo}{RGB}{218, 111, 142}
   
\begin{tikzpicture}[scale=1.7, transform shape, thick]
    \tikzmath {
		\sep = 1; \eSep = 0.4; \eInterSep = 0.3; \eRadio = 0.05;
        \scale = 1;  
    }
	
	\coordinate (cl2) at (0, 0);
	\coordinate (br-) at (2, 0);
	
	\begin{scope}[cm={1, 0, 0, 1, (cl2)}]
		\coordinate (cl-1) at (-\eSep, 0);
		\coordinate (cl-2) at (\eSep, 0);

		\foreach \coor in {cl-1, cl-2} {
			\foreach \ang [count=\i from 0] in {0, 90, 180, 270} {
				\tikzmath {
					\x = cos(\ang); \y = sin(\ang);
					\dx = -\y; \dy = \x;
					\numPri = int(2 * \i);
					\numSeg = int((2 * \i) + 1);
				}
				
				\coordinate (\coor-\numPri) at ($
					(\coor) + (
						{(\x + \eInterSep * \dx) * \eSep}, 
						{(\y + \eInterSep * \dy) * \eSep}
					)
				$);
				
				\coordinate (\coor-\numSeg) at ($
					(\coor) + (
						{(\x - \eInterSep * \dx) * \eSep}, 
						{(\y - \eInterSep * \dy) * \eSep}
					)
				$);
			}
		}

		\foreach \coor/\saltear/\color in {cl-1/0/azul, cl-2/4/rojo} {
			\foreach \pos in {0, 1, ..., 7} {
				\ifnum \pos = \saltear 
				\else
					\fill[\color] (\coor-\pos) circle (\eRadio);
				\fi
			}
		}
		
		\path (cl-1) node[color=azul, scale=\scale] {Cl};
		\path (cl-2) node[color=rojo, scale=\scale] {Cl};
	\end{scope}

	\begin{scope}[cm={1, 0, 0, 1, (br-)}]
		\path (0, 0) node[color=verde, scale=\scale] {Br};
		\path ({1.2 * \eSep}, {1.2 * \eSep}) 
			node[color=verde, scale=\scale] {-};
		\foreach \ang in {0, 90, 180, 270} {
			\tikzmath {
				\x = cos(\ang); \y = sin(\ang);
				\dx = -\y; \dy = \x;
			}
			
			\fill[verde] (
				{(\x + \eInterSep * \dx) * \eSep}, 
				{(\y + \eInterSep * \dy) * \eSep}
			)  circle (\eRadio);
			
			\fill[verde] (
				{(\x - \eInterSep * \dx) * \eSep}, 
				{(\y - \eInterSep * \dy) * \eSep}
			)  circle (\eRadio);
		}
	\end{scope}
    
\end{tikzpicture}
\end{document}
```
