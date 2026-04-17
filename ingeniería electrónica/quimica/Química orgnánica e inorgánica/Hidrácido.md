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
Este [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto inorgánico|compuesto inorgánico]] se forma con un [[ingeniería electrónica/quimica/Tabla periódica/Carácter metálico|no metal]] e [[Hidrógeno|hidrógeno]] $\text{H}_2$, y será un compuesto binario. En estos casos el hidrógeno siempre tiene un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Número de Oxidación|número de oxidación]] de $+1$, salvo excepciones

Tiene el formato $$ \text{H}_x ~ \text{NoMetal} $$

En estos casos el no metal, toma su única valencia negativa y el enlace es [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente|covalente]]

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
Para $\text{Cl} \text{H}$ que viene al tomar al [[Cloro|cloro]] con un número de oxidación de $-1$, que tiene la [[ingeniería electrónica/quimica/Enlaces químicos/Estructura de Lewis|estructura de Lewis]]

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
	
	\coordinate (cl) at (0, 0);
	\coordinate (h) at ({-1.5 * \sep}, 0);
	
	\foreach \coor/\label in {cl/Cl, h/H} {
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
	
	\foreach \desde/\hasta/\angulo in {h/cl/0} {
		\tikzmath{ \invAngulo = int(mod(180 + \angulo, 360)); }
		\foreach \porcen in {0.5} {
			\draw ($ (\desde-\angulo-sup)!\porcen!(\desde-\angulo-inf) $) 
				-- ($ (\hasta-\invAngulo-inf)!\porcen!(\hasta-\invAngulo-sup) $);  
		}
	}
	
	
\end{tikzpicture}
\end{document}
```

Notando que como el cloro tiene el n° ox $= -1$, y como todos los [[Elemento químico|elementos]] solo tienen una valencia negativa, por eso lo nombraríamos como 
* En el tradicional: ácido clorhídrico
* En el sistemático: cloruro de hidrógeno
* En el de IUPAC: cloruro de hidrógeno


