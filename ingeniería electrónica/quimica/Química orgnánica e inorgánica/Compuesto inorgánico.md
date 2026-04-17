---
dia: 2026-03-29
etapa: empezado
referencias:
  - "1145"
  - "1146"
aliases:
  - Nomenclatura de compuestos inorgánicos#Nomenclatura
  - Nomenclatura tradicional de compuestos inorgánicos#Nomenclatura tradicional
  - Nomenclatura sistemática de compuestos inorgánicos#Nomenclatura sistemática
  - Nomenclatura de atomicidad de compuestos inorgánicos#Nomenclatura sistemática
  - Nomenclatura IUPAC de compuestos inorgánicos#Nomenclatura IUPAC
  - Nomenclatura de stock de compuestos inorgánicos#Nomenclatura IUPAC
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
Se denomina compuesto inorgánico a aquellos [[Compuesto químico|compuestos químicos]] que están formados por distintos [[Elemento químico|elementos]], pero en los que su componente principal no siempre es el [[Carbono|carbono]], siendo el [[Agua|agua]] el más abundante

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[
	scale=1, transform shape, thick, shorten <= 0.5em, shorten >= 0.5em
]
	\def\radios {{ 1.1, 0.85, 0.7 }}
	\def\scales {{ 0.9, 0.75, 0.7 }}
	\def\angulos {{ 40, 50, 70, 75, 90, 105, 110, 130, 140 }}
	\def\distancias {{ 2, 1.8 }}
	
	\coordinate (binarios) at (0, 0);
	\coordinate (ternarios) at (8, 0);
	
	\begin{scope}[cm={1, 0, 0, 1, (binarios)}]
		\draw (0, 0) circle ({\radios[0]})
			node[scale={\scales[0]}, align=center] {Compuestos\\binarios};
			
		\foreach \iAngulo/\texto [count=\i] in 
			{0/Óxidos, 3/Peróxidos, 5/Hidruros, 8/Sales\\Binarisas} {
			\tikzmath { 
				\radioIni = \radios[0]; \radioFin = \radios[1]; 
				\dist = \radioIni + \distancias[0] + \radioFin;
				\angulo = \angulos[\iAngulo] + 180;
			}
			\coordinate (binario-\i) at 
				({\dist * cos(\angulo)}, {\dist * sin(\angulo)});

			\draw[->] ({\radioIni * cos(\angulo)}, {\radioIni * sin(\angulo)})
				-- ($ (binario-\i) +
					({-\radioFin * cos(\angulo)}, {-\radioFin * sin(\angulo)}) 
				$);
						
			\draw (binario-\i) circle ({\radios[1]})
				node[scale={\scales[1]}, align=center] {\texto};
		}
				
		\foreach \padre/\iAngulo/\texto in {
			1/0/Óxidos\\Básicos, 1/3/Óxidos\\Ácidos, 
			3/3/Hidruro\\metalico, 3/5/Hidrácido} {
			\tikzmath { 
				\radioIni = \radios[1]; \radioFin = \radios[2]; 
				\dist = \radioIni + \distancias[1] + \radioFin;
				\angulo = \angulos[\iAngulo] + 180;
			}
			
			\coordinate (actual) at ($
				(binario-\padre) + ({\dist * cos(\angulo)}, {\dist * sin(\angulo)})
			$);

			\draw[->] ($ (binario-\padre) +
					({\radioIni * cos(\angulo)}, {\radioIni * sin(\angulo)})
				$)
				-- ($ (actual) +
					({-\radioFin * cos(\angulo)}, {-\radioFin * sin(\angulo)}) 
				$);
						
			\draw (actual) circle ({\radios[2]})
				node[scale={\scales[2]}, align=center] {\texto};
		}
	\end{scope}
	
	\begin{scope}[cm={1, 0, 0, 1, (ternarios)}]
		\draw (0, 0) circle ({\radios[0]})
			node[scale={\scales[0]}, align=center] {Compuestos\\ternarios};
			
		\foreach \iAngulo/\texto in {1/Hidróxidos, 4/Oxácidos, 7/Sal ternaria} {
			\tikzmath { 
				\radioIni = \radios[0]; \radioFin = \radios[1]; 
				\dist = \radioIni + \distancias[0] + \radioFin;
				\angulo = \angulos[\iAngulo] + 180;
			}
			\coordinate (actual) at 
				({\dist * cos(\angulo)}, {\dist * sin(\angulo)});

			\draw[->] ({\radioIni * cos(\angulo)}, {\radioIni * sin(\angulo)})
				-- ($ (actual) +
					({-\radioFin * cos(\angulo)}, {-\radioFin * sin(\angulo)}) 
				$);
						
			\draw (actual) circle ({\radios[1]})
				node[scale={\scales[1]}, align=center] {\texto};
		}
	\end{scope}
    
\end{tikzpicture}
\end{document}
```

Compuestos binarios
* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Óxido básico|Óxido básico]]
* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Óxido ácido|Óxido ácido]]
* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Sal binaria|Sal binaria]]
* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidrácido|Hidrácido]]
* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidruro metálico|Hidruro metálico]]

Compuestos ternarios
* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidróxido|Hidróxido]]
* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Oxoácido|Oxoácido]]
* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Oxosal|Oxosal]]

## Nomenclatura
---
Hay $3$ tipos de nomenclaturas, tradicional, por atomicidad/sistemático y por [[Unión Internacional de Química Pura y Aplicada (IUPAC) (International Union of Pure and Applied Chemistry)|IUPAC]]/numeral de stock

### Nomenclatura tradicional
---

### Nomenclatura sistemática
---

### Nomenclatura IUPAC
---

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```