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
Este [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico|compuesto inorgánico]] se forma con un [[ingeniería electrónica/quimica/Tabla periódica/Carácter metálico|no metal]] y [[Oxígeno|oxígeno]] $\text{O}_2$, y será un compuesto binario. En estos casos el oxígeno siempre tiene un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Número de Oxidación|número de oxidación]] de $-2$, salvo excepciones

Tiene el formato $$ \text{NoMetal}_x  \text{O}_y $$

Este es un óxido [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente|covalentes]], donde los dos no metales comparten [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]]

## Nomenclatura
---
Hay $3$ tipos de nomenclaturas, [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico#Nomenclatura tradicional|tradicional]], por [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico#Nomenclatura sistemática|atomicidad/sistemático]]  y por [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico#Nomenclatura IUPAC|IUPAC/numeral de stock]]

### Ejemplos
---
Para $\text{C} \text{O}_2$ que viene al tomar al [[Carbono|carbono]] con un número de oxidación de $+4$, que tiene la [[ingeniería electrónica/quimica/Enlaces químicos/Estructura de Lewis|estructura de Lewis]]

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.7, transform shape, thick]
	\tikzmath {
		\sep = 0.5; \eSep = 0.2; \eInterSep = 0.2; \alto = 0.01;
		\scale = 1;  
	}
	
	\coordinate (c) at (0, 0);
	\coordinate (o-1) at ({-1.5 * \sep}, 0);
	\coordinate (o-2) at ({1.5 * \sep}, 0);
	
	\foreach \coor/\label in {c/C, o-1/O, o-2/O} {
		\path (\coor) node[scale=\scale] {\label};
		
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
	
	\foreach \desde/\hasta/\angulo in {o-1/c/0, o-2/c/180} {
		\tikzmath{ \invAngulo = int(mod(180 + \angulo, 360)); }
		\foreach \porcen in {0.4, 0.6} {
			\draw ($ (\desde-\angulo-sup)!\porcen!(\desde-\angulo-inf) $) 
				-- ($ (\hasta-\invAngulo-inf)!\porcen!(\hasta-\invAngulo-sup) $);  
		}
	}
	
	
\end{tikzpicture}
\end{document}
```

Notando que como el carbono tiene el n° ox $= 4$, y que este es el mayor que tiene, por eso lo nombraríamos como 
* En el tradicional: óxido carbónico
* En el sistemático: dióxido de carbono
* En el de IUPAC: óxido de carbono (IV)

Para $\text{C} \text{O}$ que viene al tomar al carbono con un número de oxidación de $+2$, que tiene la estructura de Lewis

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.7, transform shape, thick]
	\tikzmath {
		\sep = 0.5; \eSep = 0.2; \eInterSep = 0.2; \alto = 0.01;
		\scale = 1;  
	}
	
	\coordinate (c) at (\sep, 0);
	\coordinate (o) at (-\sep, 0);
	
	\foreach \coor/\label in {c/C, o/O} {
		\path (\coor) node[scale=\scale] {\label};
		
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
	
	\tikzmath{ 
		\angulo = 0; \invAngulo = int(mod(180 + \angulo, 360)); 
	}
	\foreach \porcen in {0.5, 0.7} {
		\draw ($ (o-\angulo-sup)!\porcen!(o-\angulo-inf) $) 
			-- ($ (c-\invAngulo-inf)!\porcen!(c-\invAngulo-sup) $);  
	}
	
	\tikzmath{ \porcen = 0.3; }
	\draw[->] ($ (o-\angulo-sup)!\porcen!(o-\angulo-inf) $) 
		-- ($ (c-\invAngulo-inf)!\porcen!(c-\invAngulo-sup) $);  
	
\end{tikzpicture}
\end{document}
```

Notando que como el carbono tiene el n° ox $= 2$, y que este es el menor que tiene, por eso lo nombraríamos como 
* En el tradicional: óxido carbonoso
* En el sistemático: monóxido de carbono
* En el de IUPAC: óxido de carbono (II)