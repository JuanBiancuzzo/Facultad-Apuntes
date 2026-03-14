---
dia: 2026-03-13
etapa: empezado
referencias: []
aliases:
  - Enlace covalente
  - Enlace homonuclear#^tipo-enlace
  - Enlace heteronuclear#^tipo-enlace
  - Enlace sigma#^enlace-sigma
  - Enlace pi#^enlace-pi
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
Se da entre $2$ [[ingeniería electrónica/quimica/Tabla periódica/Carácter metálico|no metal]] que comparten pares de [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]], ya que ambos atraen fuertemente a los electrones y estos pueden formar [[Molécula|moléculas]]

Los enlaces pueden ser
* Simples, cuando se comparte un único electrón
	```tikz
	\usepackage{amssymb}
	\usetikzlibrary{math}
	\usetikzlibrary{calc}
	\usepackage{chemfig}
	
	\begin{document} 
	\definecolor{azul}{RGB}{0, 127, 204}
	\definecolor{rojo}{RGB}{218, 111, 142}
	
	% \setchemfig{chemfig style={red, line width=1.5pt}}
	   
	\begin{tikzpicture}[scale=1.7, transform shape, thick]
	    \tikzmath {
			\sep = 1; \eSep = 0.4; \eInterSep = 0.3; \eRadio = 0.05;
	        \scale = 1;  
	    }
		
		\coordinate (f-1) at (-\eSep, 0);
		\coordinate (f-2) at (\eSep, 0);
		
		\foreach \coor in {f-1, f-2} {
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
		
		\foreach \coor/\saltear/\color in {f-1/0/azul, f-2/4/rojo} {
			\path (\coor) node[color=\color, scale=\scale] {F};
			
			\foreach \pos in {0, 1, ..., 7} {
				\ifnum \pos = \saltear 
				\else
					\fill[\color] (\coor-\pos) circle (\eRadio);
				\fi
			}
		}
	    
	\end{tikzpicture}
	\end{document}
	```
	los enlaces siempre son enlaces $\sigma$

* Dobles, cuando se comparte $2$ electrones
	```tikz
	\usepackage{amssymb}
	\usetikzlibrary{math}
	\usetikzlibrary{calc}
	
	\begin{document} 
	\definecolor{azul}{RGB}{0, 127, 204}
	\definecolor{rojo}{RGB}{218, 111, 142}
	   
	\begin{tikzpicture}[scale=1.7, transform shape, thick]
	    \tikzmath {
			\sep = 1; \eSep = 0.4; \eInterSep = 0.3; \eRadio = 0.05;
	        \scale = 1;  
	    }
		
		\coordinate (o-1) at ({-1.25 * \eSep}, 0);
		\coordinate (o-2) at ({1.25 * \eSep}, 0);
		
		\foreach \coor in {o-1, o-2} {
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
		
		\foreach \coor/\saltear/\color in {o-1/4/azul, o-2/0/rojo} {
			\path (\coor) node[color=\color, scale=\scale] {O};
			
			\foreach \pos in {0, 1, ..., 7} {
				\tikzmath {
					\mostrar = (\pos == \saltear || \pos == \saltear + 1) ? 0 : 1;	
				}
				\ifnum \mostrar = 1 
					\fill[\color] (\coor-\pos) circle (\eRadio);
				\fi
			}
		}
	    
	\end{tikzpicture}
	\end{document}
	```
	los enlaces siempre son enlaces $\pi$

* Triples, cuando se comparte $3$ electrones
	```tikz
	\usepackage{amssymb}
	\usetikzlibrary{math}
	\usetikzlibrary{calc}
	
	\begin{document} 
	\definecolor{azul}{RGB}{0, 127, 204}
	\definecolor{rojo}{RGB}{218, 111, 142}
	   
	\begin{tikzpicture}[scale=1.7, transform shape, thick]
	    \tikzmath {
			\sep = 1; \eSep = 0.4; \eInterSep = 0.3; \eRadio = 0.05;
	        \scale = 1;  
	    }
		
		\coordinate (n-1) at ({-1.25 * \eSep}, 0);
		\coordinate (n-2) at ({1.25 * \eSep}, 0);
		
		\foreach \coor/\ang/\color in {n-1/0/azul, n-2/180/rojo} {
			\tikzmath {
				\x = cos(\ang); \y = sin(\ang);
				\dx = -\y; \dy = \x;
			}
			
			\path (\coor) node[color=\color, scale=\scale] {N};
			\foreach \mag [parse=true] in {-\eInterSep, 0, \eInterSep} {
				\tikzmath { \saltear = (\mag == 0) ? 1 : 0; }
				\fill[\color] ($
					(\coor) + (
						{(\x + \mag * \dx) * \eSep}, 
						{(\y + \mag * \dy) * \eSep}
					)
				$) circle (\eRadio);
				
				\ifnum \saltear = 0 
					\fill[\color] ($
						(\coor) + (
							{(-\x + \mag * \dx) * \eSep}, 
							{(\y + \mag * \dy) * \eSep}
						)
					$) circle (\eRadio);
				\fi
			}
		}
	\end{tikzpicture}
	\end{document}
	```
	los enlaces son uno enlace $\sigma$ y otro enlace $\pi$

* Dativo, es equivalente a un enlace simple
	```tikz
	\usepackage{amssymb}
	\usetikzlibrary{math}
	\usetikzlibrary{calc}
	
	\begin{document} 
	\definecolor{azul}{RGB}{0, 127, 204}
	\definecolor{rojo}{RGB}{218, 111, 142}
	   
	\begin{tikzpicture}[scale=1.7, transform shape, thick]
	    \tikzmath {
			\sep = 1; \eSep = 0.4; \eInterSep = 0.3; \eRadio = 0.05;
	        \scale = 1;  
	    }
		
		\coordinate (s) at (0, 0);
		\coordinate (o-1) at ({2.5 * \eSep}, 0);
		\coordinate (o-2) at (0, {-2 * \eSep});
		\coordinate (o-3) at ({-2 * \eSep}, 0);
		
		\foreach \coor in {s, o-1, o-2, o-3} {
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
		
		\foreach \coor/\saltear/\color/\atomo in 
			{s/2/rojo/S, o-1/2/azul/O, o-2/2/azul/O, o-3/0/azul/O} {
			\path (\coor) node[color=\color, scale=\scale] {\atomo};
			
			\foreach \pos in {0, 1, ..., 7} {
				\tikzmath {
					\mostrar = (\pos == \saltear || \pos == \saltear + 1) ? 0 : 1;	
				}
				\ifnum \mostrar = 1 
					\fill[\color] (\coor-\pos) circle (\eRadio);
				\fi
			}
		}
	    
	\end{tikzpicture}
	\end{document}
	```
	donde el enlace es un enlace $\sigma$ 

Se los denomina enlaces homonuclear, cuando es un enlace entre [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomos]] iguales y heteronuclear cuando son átomos diferentes ^tipo-enlace

Para compartir electrones, los átomos deben acercar los orbitales que los contienen 
* Enlace $\sigma$ ^enlace-sigma
	* Los orbitales se solapan longitudinalmente
* Enlace $\pi$ ^enlace-pi
	* Los orbitales se solapan de forma paralela