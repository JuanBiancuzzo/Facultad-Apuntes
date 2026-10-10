---
dia: 2026-10-10
etapa: sin-empezar
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/robótica-industrial/Cinemática-y-estática
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Cinemática y estática
    capitulo: 3
    materia: Robótica industrial
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---


![[colección/ejercicios/img/Robot collaborative Z-ARM 2140C.png|500]]


```tikz
\usetikzlibrary{fit, matrix}
\usetikzlibrary{math}

\begin{document}
\definecolor{azul}{RGB}{0, 127, 204}
\tikzset{ 
    table/.style={
	    matrix of nodes,    
	    text depth=0.5ex,
        text height=2ex,
        nodes in empty cells,
            
        nodes={ 
	        align=center,
	        text width=8em
	    },        
        row 1/.style={
            nodes={ fill=azul }
        },
		column 4/.style={
			nodes={ text width=22em }
		},
    }
}
\begin{tikzpicture}
	\tikzmath { \columnas = 4; \filas = 23; }
    \matrix (table) [table] {
		& & & Datos \\
		& & Arm length & $200$ mm \\
		& & Rotaion angle & $\pm 90$ \\
		& & Arm length & $200$ mm \\
		& & Rotaion angle & $\pm 164$ \\
		& Z-axis & Stroke & $210$ mm \\
		& R-axixs & Rotaion angle & $\pm 180$ \\
		& & & $1023.79$ mm/s ($2$kg payload) \\
		& & & $\pm 0.03$ mm \\
		& & & $2$ kg \\
		& & & $3$ kg \\
		& & & $4$ \\
		& & & $200$ V/$110$ V $50$~$60$ Hz \\
		& & & Wifi/Ethernet \\
		& & & Provides 10 I/O \\
		& & & $5$ \\
		& & & $5$ \\
		& & & $565$ mm \\
		& & & $19$ kg \\
		& & & $250$ mm $\cdot$ $250$ mm $\cdot$ $10$ mm \\
		& & & $200$ mm $\cdot$ $200$ mm \\
		& & & Yes \\
		& & & Yes \\
    };

	\tikzmath { \fila = 1; \colInicio = 1; \colFinal = 3; }
	\filldraw[fill=azul] (table-\fila-\colInicio.north -| table-\fila-\colInicio.west)
		rectangle (table-\fila-\colFinal.south -| table-\fila-\colFinal.east)
			node[midway, align=center] {Parameter};

	\foreach \columna/\filaInicio/\filaFinal in {2/6/7, 3/2/7, 4/1/\filas} {
		\foreach \fila in {\filaInicio, ..., \filaFinal} {
			\draw (table-\fila-\columna.north -| table-\fila-\columna.east)
				rectangle (table-\fila-\columna.south -| table-\fila-\columna.west);
		}
	}
	
	% Misma fila, multiples columnas
	\def\elementos{{ 
		{1, 3,  8, "Linear velocity"},
		{1, 3,  9, "Repeatability"},
		{1, 3, 10, "Rated payload"},
		{1, 3, 11, "Maximum payload"},
		{1, 3, 12, "Degree of freedom"},
		{1, 3, 13, "Power"},
		{1, 3, 14, "Communication"},
		{1, 3, 15, "Extensibility"},
		{2, 3, 16, "Digital input (isolated)"},
		{2, 3, 17, "Digital output (isolated)"},
		{1, 3, 18, "Height"},
		{1, 3, 19, "Weight"},
		{2, 3, 20, "Overall size"},
		{2, 3, 21, "Mounting hole spacing"},
		{1, 3, 22, "Collision detection"},
		{1, 3, 23, "Handhold teaching"}
	}}
	\tikzmath { \cantidad = dim(\elementos); }
	\foreach \i [parse=true] in {0, ..., \cantidad - 1} {
		\tikzmath { 
			\colInicio = \elementos[\i][0]; \colFinal = \elementos[\i][1];
			\fila = \elementos[\i][2]; \texto = \elementos[\i][3];
		}
		\draw (table-\fila-\colInicio.north -| table-\fila-\colInicio.west)
			rectangle (table-\fila-\colFinal.south -| table-\fila-\colFinal.east)
				node[midway, align=center] {\texto};
    }

	% Misma columna, multiples filas
	\def\elementos{{ 
		{2, 7, 1, "Basic\\Information"},
		{2, 3, 2, "J1-axis"},
		{4, 5, 2, "J2-axis"},
		{16, 17, 1, "I/O"},
		{20, 21, 1, "Base\\installation\\parameters"}
	}}
	\tikzmath { \cantidad = dim(\elementos); }
	\foreach \i [parse=true] in {0, ..., \cantidad - 1} {
		\tikzmath { 
			\filaInicio = \elementos[\i][0]; \filaFinal = \elementos[\i][1];
			\col = \elementos[\i][2]; \texto = \elementos[\i][3];
		}
		\draw (table-\filaInicio-\col.north -| table-\filaInicio-\col.west)
			rectangle (table-\filaFinal-\col.south -| table-\filaFinal-\col.east)
				node[midway, align=center] {\texto};
    }

\end{tikzpicture}
\end{document}
``` 
^parametros

