---
dia: 2026-03-13
etapa: empezado
referencias: []
aliases:
  - Enlace iónico
  - Unión electrostática
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
En este enlace entre [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomo]] hay una transferencia completa de [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]], donde el [[ingeniería electrónica/quimica/Tabla periódica/Carácter metálico|metal]] sede electrones formando un [[ingeniería electrónica/quimica/Modelo atómico/Ion|cationes]] y el [[ingeniería electrónica/quimica/Tabla periódica/Carácter metálico|no metal]] captando los electrones formando un [[ingeniería electrónica/quimica/Modelo atómico/Ion|aniones]]. Por lo tanto el sólido se forma por [[ingeniería en informática/fisica 2/Electrostática en el vacío/Ley de Coulomb|fuerzas electrostáticas]] y por lo tanto no se forma una [[Molécula|moléculas]]

Como ejemplo podemos ver el par $\text{MgO}$ 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{rojo}{RGB}{218, 111, 142}
   
\begin{tikzpicture}[scale=1.7, transform shape, thick]
    \tikzmath {
		\sep = 1; \eSep = 0.5; \eInterSep = 0.3; \eRadio = 0.05;
        \scale = 1;  
    }
	
	\coordinate (Mg) at (0, 0);
	\coordinate (O) at ({3 * \eSep}, 0);
	
	\foreach \coor in {Mg, O} {
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
	
	\foreach \pos in {0, 1, ..., 7} {
		\fill[azul] (Mg-\pos) circle (\eRadio);
	}
	
	\foreach \pos in {0, 1, ..., 7} {
		\tikzmath { \esDelOtro = (\pos == 5 || \pos == 4) ? 1 : 0; }
		\ifnum \esDelOtro = 1
			\fill[azul] (O-\pos) node[scale=\scale] {x};
		\else
			\fill[rojo] (O-\pos) circle (\eRadio);
		\fi
	}

	\begin{scope}[scale=\scale, align=center] 
		\path (Mg) node[color=azul] {Mg$^{2+}$};
		\path (O) node[color=rojo] {O$^{2-}$};
	\end{scope}

\end{tikzpicture}
\end{document}
```
