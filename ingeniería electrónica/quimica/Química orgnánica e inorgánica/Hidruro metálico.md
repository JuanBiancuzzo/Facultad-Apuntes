---
dia: 2026-04-16
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
Este [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico|compuesto inorgánico]] se forma con un [[ingeniería electrónica/quimica/Tabla periódica/Carácter metálico|metal]] e [[Hidrógeno|hidrógeno]] $\text{H}_2$, y será un compuesto binario. En estos casos el hidrógeno siempre tiene un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Número de Oxidación|número de oxidación]] de $-1$, salvo excepciones

Tiene el formato $$ \text{Metal} ~ \text{H}_x $$

Este es un [[Compuesto iónico|compuesto iónico]], donde el metal cede sus [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]] a los hidrógenos, y por eso el hidrógeno usa su valencia negativa

## Nomenclatura
---
Hay $3$ tipos de nomenclaturas, [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico#Nomenclatura tradicional|tradicional]], por [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico#Nomenclatura sistemática|atomicidad/sistemático]]  y por [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico#Nomenclatura IUPAC|IUPAC/numeral de stock]]

### Nomenclatura tradicional
---

### Nomenclatura sistemática
---

### Nomenclatura IUPAC
---

### Ejemplos
---
Para $\text{Na} \text{H}$ que viene a tomar al [[Sodio|sodio]] con un número de oxidación de $+1$, que tiene la [[ingeniería electrónica/quimica/Enlaces químicos/Estructura de Lewis|estructura de Lewis]]

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
	
	\coordinate (na) at ({-2 * \sep}, 0);
	\coordinate (h) at (\eSep, 0);
	
	\foreach \coor/\label/\color in {na/Na/azul, h/H/rojo} {
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
	\foreach \lado in {\anguloE} {
		\fill[azul] ($ (h-\lado-inf)!0.33!(h-\lado-sup) $) circle (\eRadio);
		\fill[rojo] ($ (h-\lado-inf)!0.66!(h-\lado-sup) $) circle (\eRadio);
	}
	
	\foreach \coor in {h} {
		\draw ($ (\coor-180-sup) + (0, \sepEsp) $) 
			-- ++(-\sepEsp, 0)
			-- ($ (\coor-180-inf) + (-\sepEsp, -\sepEsp) $)
			-- ++(\sepEsp, 0);
		\draw ($ (\coor-0-inf) + (0, \sepEsp) $) 
			-- ++(\sepEsp, 0) node[color=rojo, right=2pt, scale=\scaleExp] {$-$} 
			-- ($ (\coor-0-sup) + (\sepEsp, -\sepEsp) $)
			-- ++(-\sepEsp, 0);
	}

	\foreach \pos in {0.5} {
		\tikzmath { \invAngulo = int(mod(\anguloE + 180, 360)); }
		\path (na-\invAngulo-inf) node[color=azul, scale=\scaleExp] {$+$};
		\draw[->, shorten <=0.5em, shorten >=1.5em, ultra thick] 
			($ (na-\invAngulo-inf)!\pos!(na-\invAngulo-sup) $)
			-- ($ (h-\anguloE-sup)!\pos!(h-\anguloE-inf) $);
	}
	
\end{tikzpicture}
\end{document}
```

Notando que el sodio solo tiene un número de oxidación, lo nombraríamos como 
* En el tradicional: hidruro de sodio 
* En el sistemático: monohidruro de sodio
* En el de IUPAC: hidruro de sodio

Para $\text{Cu} \text{H}$ que viene al tomar al [[Cobre|cobre]] con un número de oxidación de $+1$, que tiene la estructura de Lewis

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
	
	\coordinate (cu) at ({-2 * \sep}, 0);
	\coordinate (h) at (\eSep, 0);
	
	\foreach \coor/\label/\color in {cu/Cu/azul, h/H/rojo} {
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
	\foreach \lado in {\anguloE} {
		\fill[azul] ($ (h-\lado-inf)!0.33!(h-\lado-sup) $) circle (\eRadio);
		\fill[rojo] ($ (h-\lado-inf)!0.66!(h-\lado-sup) $) circle (\eRadio);
	}
	
	\foreach \coor in {h} {
		\draw ($ (\coor-180-sup) + (0, \sepEsp) $) 
			-- ++(-\sepEsp, 0)
			-- ($ (\coor-180-inf) + (-\sepEsp, -\sepEsp) $)
			-- ++(\sepEsp, 0);
		\draw ($ (\coor-0-inf) + (0, \sepEsp) $) 
			-- ++(\sepEsp, 0) node[color=rojo, right=2pt, scale=\scaleExp] {$-$} 
			-- ($ (\coor-0-sup) + (\sepEsp, -\sepEsp) $)
			-- ++(-\sepEsp, 0);
	}

	\foreach \pos in {0.5} {
		\tikzmath { \invAngulo = int(mod(\anguloE + 180, 360)); }
		\path (cu-\invAngulo-inf) node[color=azul, scale=\scaleExp] {$+$};
		\draw[->, shorten <=0.5em, shorten >=1.5em, ultra thick] 
			($ (cu-\invAngulo-inf)!\pos!(cu-\invAngulo-sup) $)
			-- ($ (h-\anguloE-sup)!\pos!(h-\anguloE-inf) $);
	}
	
\end{tikzpicture}
\end{document}
```

Notando que el cobre tiene un número de oxidación $1$ que es el menor que tiene, lo nombraríamos como 
* En el tradicional: hidruro curposo
* En el sistemático: monohidruro de cobre
* En el de IUPAC: hidruro de cobre (I)

Para $\text{Cu} \text{H}_2$ que viene al tomar al cobre con un número de oxidación de $+2$, que tiene la estructura de Lewis

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
	
	\coordinate (cu) at ({-2 * \sep}, 0);
	\coordinate (h-1) at (\sep, {1.2 * \sep});
	\coordinate (h-2) at (\sep, {-1.2 * \sep});
	
	\foreach \coor/\label/\color in {cu/Cu/azul, h-1/H/rojo, h-2/H/rojo} {
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
	\foreach \coor in {h-1, h-2} {
		\fill[azul] ($ (\coor-\anguloE-inf)!0.33!(\coor-\anguloE-sup) $) 
			circle (\eRadio);
		\fill[rojo] ($ (\coor-\anguloE-inf)!0.66!(\coor-\anguloE-sup) $) 
			circle (\eRadio);
	}
	
	\foreach \coor in {h-1, h-2} {
		\draw ($ (\coor-180-sup) + (0, \sepEsp) $) 
			-- ++(-\sepEsp, 0)
			-- ($ (\coor-180-inf) + (-\sepEsp, -\sepEsp) $)
			-- ++(\sepEsp, 0);
		\draw ($ (\coor-0-inf) + (0, \sepEsp) $) 
			-- ++(\sepEsp, 0) node[color=rojo, right=2pt, scale=\scaleExp] {$-$} 
			-- ($ (\coor-0-sup) + (\sepEsp, -\sepEsp) $)
			-- ++(-\sepEsp, 0);
	}

	\foreach \pos/\hasta/\posHasta in {0.33/h-1/0.33, 0.66/h-2/0.33} {
		\tikzmath { \invAngulo = int(mod(\anguloE + 180, 360)); }
		\path (cu-\invAngulo-inf) node[color=azul, scale=\scaleExp] {$+$};
		\draw[->, shorten <=0.5em, shorten >=1.5em, ultra thick] 
			($ (cu-\invAngulo-inf)!\pos!(cu-\invAngulo-sup) $)
			-- ($ (\hasta-\anguloE-inf)!\posHasta!(\hasta-\anguloE-sup) $);
	}
	
\end{tikzpicture}
\end{document}
```

Notando que el cobre tiene un número de oxidación $2$ que es el mayor que tiene, lo nombraríamos como 
* En el tradicional: hidruro cúprico
* En el sistemático: dihidruro de cobre
* En el de IUPAC: hidruro de cobre (II)
