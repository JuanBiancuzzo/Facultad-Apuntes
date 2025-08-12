---
dia: 2025-03-22
etapa: ampliar
referencias:
  - "1017"
tags:
  - carrera/ingeniería-electrónica/circuitos-2/Fuentes-de-alimentación-lineales
  - nota/facultad
aliases:
  - Voltage regulator
vinculoFacultad:
  - tema: Fuentes de alimentación lineales
    capitulo: 2
    materia: Taller de diseño de circuitos electrónicos
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Una forma de implementar una [[Fuente de tensión|fuente de tensión]] es mediante un regulador de [[Tensión|tensión]], la cual toma como entrada una [[Señal|señal]] de entrada poco especifica, y posiblemente variante en el tiempo dentro de un rango, y devuelve una tensión constante

## Técnicas
---
Para generar una tensión de referencia estable se puede usar un [[Diodo Zener|diodo Zener]]

```tikz
\usepackage[
	straightvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.1, transform shape, thick]
		
		\draw (0, 0) 
        		node[ground] {}
    		to[zzDo] ++(0, 2) 
        		node (salida) {}
        	to[R, l^=$R$, -*] ++(0, 2)
            	node[above=2pt] {$V_{in}$};
        \draw (salida.center) to[short, *-o] ++(1.5, 0)
            node[right=2pt] {$V_{ref}$};	
        
	\end{circuitikz}
\end{document}
```

O usando un [[Bandgap voltage reference|Bandgap voltage reference]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```