---
dia: 2026-04-04
etapa: empezado
referencias:
  - "1148"
aliases:
  - Diagrama de valencia
  - Modelo de Lewis
  - Diagrama de Lewis
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
Es una representación gráfica que muestra los pares de [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]] en guiones o puntos de [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente|enlaces]] entre los [[ingeniería en informática/estructura/Álgebra de Boole/Átomo|átomos]] de una [[Molécula|molécula]], y los pares de electrones solitarios que pueden existir

Se arreglan los átomos de manera que tengan una [[ingeniería electrónica/quimica/Modelo atómico/Configuración electrónica|configuración]] de [[ingeniería electrónica/quimica/Tabla periódica/Tabla periódica#^gas-noble|gas noble]], siguiendo la [[ingeniería electrónica/quimica/Enlaces químicos/Regla del octeto|regla del octeto]]. Muestran los diferentes átomos usando su símbolo químico y líneas que se trazan entre los átomos que se unen entre sí. Los electrones no enlazantes o par solitario de electrones se representan mediante una línea o con un par de puntos, y deben colocarse siempre alrededor de los átomos a los que pertenecen

Los enlaces covalentes que se crean en las moléculas, se representan los electrones utilizado en los enlaces con una línea uniendo los átomos que forman el enlace

* Para [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^simple|enlaces simples]] , cuando se comparte un único electrón
	```tikz
	\usepackage{amssymb}
	\usetikzlibrary{math}
	\usetikzlibrary{calc}
	\usetikzlibrary{shadings}
	
	\begin{document} 
	\definecolor{azul}{RGB}{0, 127, 204}
	\definecolor{rojo}{RGB}{218, 111, 142}
	   
	\begin{tikzpicture}[scale=1.7, transform shape, thick]
	    \tikzmath {
			\sep = 0.5; \eSep = 0.2; \eInterSep = 0.3; \alto = 0.01;
			\scale = 1;  
	    }
		
		\coordinate (f-1) at (-\sep, 0);
		\coordinate (f-2) at (\sep, 0);
		
		\foreach \coor/\color in {f-1/azul, f-2/rojo} {
			\path (\coor) node[color=\color, scale=\scale] {F};
			\foreach \ang [count=\i from 0] in {0, 90, 180, 270} {
				\tikzmath {
					\x = cos(\ang); \y = sin(\ang);
					\dx = -\y; \dy = \x;
				}
				
				\coordinate (\coor-\ang-inf) at ($
					(\coor) + (
						{(\x * \eSep + \eInterSep * \dx)}, 
						{(\y * \eSep + \eInterSep * \dy)}
					)
				$);
				
				\coordinate (\coor-\ang-sup) at ($
					(\coor) + (
						{(\x * \eSep - \eInterSep * \dx)}, 
						{(\y * \eSep - \eInterSep * \dy)}
					)
				$);
			}
		}
		
		\foreach \porcen in {0.5} {
			\tikzmath{ \invPorcen = real(1 - \porcen); }
			\fill[left color=azul, right color=rojo] 
				($ (f-1-0-sup)!\porcen!(f-1-0-inf) + (0, \alto) $) rectangle 
				($ (f-2-180-sup)!\invPorcen!(f-2-180-inf) + (0, -\alto) $);
		}
	    
	\end{tikzpicture}
	\end{document}
	```
* Para [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^doble|enlaces dobles]], cuando se comparte $2$ electrones
	```tikz
	\usepackage{amssymb}
	\usetikzlibrary{math}
	\usetikzlibrary{calc}
	\usetikzlibrary{shadings}
	
	\begin{document} 
	\definecolor{azul}{RGB}{0, 127, 204}
	\definecolor{rojo}{RGB}{218, 111, 142}
	   
	\begin{tikzpicture}[scale=1.7, transform shape, thick]
	    \tikzmath {
			\sep = 0.5; \eSep = 0.2; \eInterSep = 0.2; \alto = 0.01;
			\scale = 1;  
	    }
		
		\coordinate (o-1) at (-\sep, 0);
		\coordinate (o-2) at (\sep, 0);
		
		\foreach \coor/\color in {o-1/azul, o-2/rojo} {
			\path (\coor) node[color=\color, scale=\scale] {O};
			
			\foreach \ang [count=\i from 0] in {0, 90, 180, 270} {
				\tikzmath {
					\x = cos(\ang); \y = sin(\ang);
					\dx = -\y; \dy = \x;
				}
				
				\coordinate (\coor-\ang-inf) at ($
					(\coor) + (
						{(\x * \eSep + \eInterSep * \dx)}, 
						{(\y * \eSep + \eInterSep * \dy)}
					)
				$);
				
				\coordinate (\coor-\ang-sup) at ($
					(\coor) + (
						{(\x * \eSep - \eInterSep * \dx)}, 
						{(\y * \eSep - \eInterSep * \dy)}
					)
				$);
			}
		}
		
		\foreach \porcen in {0.4, 0.6} {
			\tikzmath{ \invPorcen = real(1 - \porcen); }
			\fill[left color=azul, right color=rojo] 
				($ (o-1-0-sup)!\porcen!(o-1-0-inf) + (0, \alto) $) rectangle 
				($ (o-2-180-sup)!\invPorcen!(o-2-180-inf) + (0, -\alto) $);
		}
		
	    
	\end{tikzpicture}
	\end{document}
	```
* Para [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^triple|enlaces triples]], cuando se comparte $3$ electrones
	```tikz
	\usepackage{amssymb}
	\usetikzlibrary{math}
	\usetikzlibrary{calc}
	\usetikzlibrary{shadings}
	
	\begin{document} 
	\definecolor{azul}{RGB}{0, 127, 204}
	\definecolor{rojo}{RGB}{218, 111, 142}
	   
	\begin{tikzpicture}[scale=1.7, transform shape, thick]
	    \tikzmath {
			\sep = 0.5; \eSep = 0.2; \eInterSep = 0.2; \alto = 0.01;
			\scale = 1;  
	    }
		
		\coordinate (n-1) at (-\sep, 0);
		\coordinate (n-2) at (\sep, 0);
		
		\foreach \coor/\color in {n-1/azul, n-2/rojo} {
			\path (\coor) node[color=\color, scale=\scale] {N};
			
			\foreach \ang [count=\i from 0] in {0, 90, 180, 270} {
				\tikzmath {
					\x = cos(\ang); \y = sin(\ang);
					\dx = -\y; \dy = \x;
				}
				
				\coordinate (\coor-\ang-inf) at ($
					(\coor) + (
						{(\x * \eSep + \eInterSep * \dx)}, 
						{(\y * \eSep + \eInterSep * \dy)}
					)
				$);
				
				\coordinate (\coor-\ang-sup) at ($
					(\coor) + (
						{(\x * \eSep - \eInterSep * \dx)}, 
						{(\y * \eSep - \eInterSep * \dy)}
					)
				$);
			}
		}
		
		\foreach \porcen in {0.325, 0.5, 0.675} {
			\tikzmath{ \invPorcen = real(1 - \porcen); }
			\fill[left color=azul, right color=rojo] 
				($ (n-1-0-sup)!\porcen!(n-1-0-inf) + (0, \alto) $) rectangle 
				($ (n-2-180-sup)!\invPorcen!(n-2-180-inf) + (0, -\alto) $);
		}
		
	    
	\end{tikzpicture}
	\end{document}
	```
* Para [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^dativo|enlaces dativos]], cuando un átomo usa sus electrones para hacer un enlace simple
	```tikz
	\usepackage{amssymb}
	\usetikzlibrary{math}
	\usetikzlibrary{calc}
	\usetikzlibrary{shadings}
	
	\begin{document} 
	\definecolor{azul}{RGB}{0, 127, 204}
	\definecolor{rojo}{RGB}{218, 111, 142}
	   
	\begin{tikzpicture}[scale=1.7, transform shape, thick]
	    \tikzmath {
			\sep = 0.5; \eSep = 0.2; \eInterSep = 0.2; \alto = 0.01;
			\scale = 1;  
	    }
		
		\coordinate (s) at (0, 0);
		\coordinate (o-1) at ({-2 * \sep}, 0);
		\coordinate (o-2) at (0, {-2 * \sep});
		\coordinate (o-3) at ({2 * \sep}, 0);
		
		\foreach \coor/\color/\simb in {s/rojo/S, o-1/azul/O, o-2/azul/O, o-3/azul/O} {
			\path (\coor) node[color=\color, scale=\scale] {\simb};
			
			\foreach \ang [count=\i from 0] in {0, 90, 180, 270} {
				\tikzmath {
					\x = cos(\ang); \y = sin(\ang);
					\dx = -\y; \dy = \x;
				}
				
				\coordinate (\coor-\ang-inf) at ($
					(\coor) + (
						{(\x * \eSep + \eInterSep * \dx)}, 
						{(\y * \eSep + \eInterSep * \dy)}
					)
				$);
				
				\coordinate (\coor-\ang-sup) at ($
					(\coor) + (
						{(\x * \eSep - \eInterSep * \dx)}, 
						{(\y * \eSep - \eInterSep * \dy)}
					)
				$);
				
				\coordinate (\coor-\ang) at ($ 
					(\coor-\ang-sup)!0.5!(\coor-\ang-inf) 
				$);
			}
		}
		
		\foreach \porcen in {0.4, 0.6} {
			\tikzmath{ \invPorcen = real(1 - \porcen); }
			\fill[left color=azul, right color=rojo] 
				($ (o-1-0-sup)!\porcen!(o-1-0-inf) + (0, \alto) $) rectangle 
				($ (s-180-sup)!\invPorcen!(s-180-inf) + (0, -\alto) $);
		}
		
		\draw[->, rojo] (s-0) -- (o-3-180);
		\draw[->, rojo] (s-270) -- (o-2-90);
		
	\end{tikzpicture}
	\end{document}
	```
	donde notemos que se utiliza una flecha que va desde el átomo que entrega los electrones, hasta el átomo con quien se hace el enlace

## Enlaces iónicos
---
Para los [[ingeniería electrónica/quimica/Enlaces químicos/Unión iónica|enlaces iónicos]], los cuales no forman moléculas, no podemos representarlos de la misma forma. Como estos enlaces se caracterizan por una transferencia de electrones, la estructura de Lewis lo representa cada elemento con su carga resultante, y flechas mostrando la transferencia

Podemos tomar como ejemplo la [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Óxido básico|óxido de sodio]] $\text{Na}_2 \text{O}$  

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{rojo}{RGB}{218, 111, 142}
   
\begin{tikzpicture}[scale=1.7, transform shape, thick]
	\tikzmath {
		\sep = 0.65; \eSep = 0.3; \eInterSep = 0.3; \eRadio = 0.05;
		\scale = 1; \scaleExp = 0.8; \sepEsp = 3 * \eRadio;
	}
	
	\coordinate (na-1) at ({-2 * \sep}, \sep);
	\coordinate (na-2) at ({-2 * \sep}, -\sep);
	\coordinate (o) at (\eSep, 0);
	
	\foreach \coor/\label/\color in {na-1/Na/azul, na-2/Na/azul, o/O/rojo} {
		\path (\coor) node[color=\color, scale=\scale] {\label};
		\foreach \ang [count=\i from 0] in {0, 90, 180, 270} {
			\tikzmath {
				\x = cos(\ang); \y = sin(\ang);
				\dx = -\y; \dy = \x;
			}
			
			\coordinate (\coor-\ang-inf) at ($
				(\coor) + (
					{(\x * \eSep + \eInterSep * \dx)}, 
					{(\y * \eSep + \eInterSep * \dy)}
				)
			$);
			
			\coordinate (\coor-\ang-sup) at ($
				(\coor) + (
					{(\x * \eSep - \eInterSep * \dx)}, 
					{(\y * \eSep - \eInterSep * \dy)}
				)
			$);
			
			\coordinate (\coor-\ang) 
				at ($ (\coor-\ang-inf)!0.5!(\coor-\ang-sup) $);
		}
	}

	\tikzmath { \anguloE = 180; }
	\foreach \lado in {0, 90, 180, 270} {
		\tikzmath {
			\color = (\lado == \anguloE) ? "azul" : "rojo";
		}
		
		\fill[\color] ($ (o-\lado-inf)!0.33!(o-\lado-sup) $) circle (\eRadio);
		\fill[\color] ($ (o-\lado-inf)!0.66!(o-\lado-sup) $) circle (\eRadio);
	}
	\draw ($ (o-180-sup) + (0, \sepEsp) $) 
		-- ++(-\sepEsp, 0)
		-- ($ (o-180-inf) + (-\sepEsp, -\sepEsp) $)
		-- ++(\sepEsp, 0);
	\draw ($ (o-0-inf) + (0, \sepEsp) $) 
		-- ++(\sepEsp, 0) node[color=rojo, right=2pt, scale=\scaleExp] {$2-$} 
		-- ($ (o-0-sup) + (\sepEsp, -\sepEsp) $)
		-- ++(-\sepEsp, 0);

	\foreach \coor/\pos in {na-1-0/0.66, na-2-0/0.33} {
		\path (\coor-inf) node[color=azul, scale=\scaleExp] {$+$};
		\draw[->, shorten <=0.5em, shorten >=1.5em, ultra thick] (\coor) 
			-- ($ (o-\anguloE-inf)!\pos!(o-\anguloE-sup) $);
	}
	
\end{tikzpicture}
\end{document}
```

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```