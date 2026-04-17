---
dia: 2026-03-27
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/quimica/Química-orgnánica-e-inorgánica
  - nota/facultad
vinculoFacultad:
  - tema: Química orgnánica e inorgánica
    capitulo: 5
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico|compuesto inorgánico]] se forma con un [[ingeniería electrónica/quimica/Tabla periódica/Carácter metálico|metal]] y [[Oxígeno|oxígeno]] $\text{O}_2$, y será un compuesto binario. En estos casos el oxígeno siempre tiene un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Número de Oxidación|número de oxidación]] de $-2$, salvo excepciones

## Nomenclatura
---
Hay $3$ tipos de nomenclaturas, [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico#Nomenclatura tradicional|tradicional]], por [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico#Nomenclatura sistemática|atomicidad/sistemático]]  y por [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico#Nomenclatura IUPAC|IUPAC/numeral de stock]]

### Ejemplos
---
Para $\text{Na}_2 \text{O}$ que tiene la [[ingeniería electrónica/quimica/Enlaces químicos/Estructura de Lewis|estructura de Lewis]]

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

Notando que el [[Sodio|sodio]] solo tiene un número de oxidación, lo nombraríamos como 
* En el tradicional: óxido de sodio
* En el sistemático: monóxido de disodio
* En el de IUPAC: óxido de sodio

Para $\text{Fe} \text{O}$ que viene al tomar al [[Hierro|hierro]] con un número de oxidación de $+2$, que tiene la estructura de Lewis

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
	
	\coordinate (fe) at ({-2 * \sep}, 0);
	\coordinate (o) at (\eSep, 0);
	
	\foreach \coor/\label/\color in {fe/Fe/azul, o/O/rojo} {
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

	\foreach \pos in {0.66, 0.33} {
		\tikzmath { \invAngulo = int(mod(180 + \anguloE, 360)); }
		\path (fe-0-inf) node[color=azul, scale=\scaleExp] {$2+$};
		\draw[->, shorten <=0.5em, shorten >=1.5em, ultra thick] 
			($ (fe-\invAngulo-sup)!\pos!(fe-\invAngulo-inf) $) 
			-- ($ (o-\anguloE-inf)!\pos!(o-\anguloE-sup) $);
	}
	
\end{tikzpicture}
\end{document}
```

Notando que como el hierro tiene el n° ox $= 2$, y que este es el menor que tiene. También hay que aclarar que se usa la raíz del latín, por eso lo nombraríamos como 
* En el tradicional: óxido ferroso
* En el sistemático: monóxido de hierro
* En el de IUPAC: óxido de hierro (II)

Para $\text{Fe}_2 \text{O}_3$ que viene al tomar al [[Hierro|hierro]] con un número de oxidación de $+3$, que tiene la estructura de Lewis

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
	
	\coordinate (fe-1) at ({-2 * \sep}, {\sep});
	\coordinate (fe-2) at ({-2 * \sep}, {-\sep});
	
	\coordinate (o-1) at (\sep, {1.7 * \sep});
	\coordinate (o-2) at ({1.2 * \sep}, 0);
	\coordinate (o-3) at (\sep, {-1.7 * \sep});
	
	\foreach \coor/\label/\color in 
		{fe-1/Fe/azul, fe-2/Fe/azul, o-1/O/rojo, o-2/O/rojo, o-3/O/rojo} {
		
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
	\foreach \coor in {o-1, o-2, o-3} {
		\foreach \lado in {0, 90, 180, 270} {
			\tikzmath { \color = (\lado == \anguloE) ? "azul" : "rojo"; }
			
			\fill[\color] ($ (\coor-\lado-inf)!0.33!(\coor-\lado-sup) $) 
				circle (\eRadio);
			\fill[\color] ($ (\coor-\lado-inf)!0.66!(\coor-\lado-sup) $) 
				circle (\eRadio);
		}
		
		\draw ($ (\coor-180-sup) + (0, \sepEsp) $) 
			-- ++(-\sepEsp, 0)
			-- ($ (\coor-180-inf) + (-\sepEsp, -\sepEsp) $)
			-- ++(\sepEsp, 0);
		\draw ($ (\coor-0-inf) + (0, \sepEsp) $) 
			-- ++(\sepEsp, 0) node[color=rojo, right=2pt, scale=\scaleExp] {$2-$} 
			-- ($ (\coor-0-sup) + (\sepEsp, -\sepEsp) $)
			-- ++(-\sepEsp, 0);
	}

	\foreach \coor/\angulo/\pos/\target in 
		{fe-1/0/0.33/o-1, fe-1/0/0.66/o-1, fe-1/270/0.66/o-2, 
		fe-2/0/0.33/o-3, fe-2/0/0.66/o-3, fe-2/90/0.33/o-2} {
		\draw[->, shorten <=0.5em, shorten >=1.5em, ultra thick] 
			($ (\coor-\angulo-sup)!\pos!(\coor-\angulo-inf) $) 
			-- ($ (\target-\anguloE-inf)!\pos!(\target-\anguloE-sup) $);
	}
	
	\foreach \coor in {fe-1, fe-2} {
		\path (\coor-0-inf) node[color=azul, scale=\scaleExp] {$3+$};
	}
	
\end{tikzpicture}
\end{document}
```

Notando que como el hierro tiene el n° ox $= 3$, y que este es el mayor que tiene, lo nombraríamos como 
* En el tradicional: óxido férrico
* En el sistemático: trióxido de dihierro
* En el de IUPAC: óxido de hierro (III)
