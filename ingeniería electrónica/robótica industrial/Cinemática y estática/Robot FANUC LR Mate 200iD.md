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


![[colección/ejercicios/img/Robot FANUC LR Mate 200iD.png|500]]

```tikz
\usetikzlibrary{fit, matrix}
\usetikzlibrary{math}

\begin{document}
\definecolor{azul}{RGB}{0, 127, 204}
\tikzset{ 
    table/.style={
	    matrix of nodes,    
	    text depth=0.5ex,
        text height=1.2em,
        nodes in empty cells,
            
        nodes={ 
	        align=center,
	        text width=8em
	    },        
        row 1/.style={
            nodes={ fill=azul }
        },
		column 3/.style={
			nodes={ text width=22em }
		},
    }
}
\begin{tikzpicture}
	\tikzmath { \columnas = 3; \filas = 18; }
    \matrix (table) [table] {
		& & Datos \\
		& & $7$ \\
		& & $717$ \\
		& & $6$ \\
		& & $\pm 0.01$ \\
		& & $25$ \\
		& J1 & $340$ ($360$) \\
		& J2 & $245$ \\
		& J3 & $420$ \\
		& J4 & $380$ \\
		& J5 & $250$ \\
		& J6 & $720$ \\
		& J1 & $450$ \\
		& J2 & $380$ \\
		& J3 & $520$ \\
		& J4 & $550$ \\
		& J5 & $545$ \\
		& J6 & $1000$ \\
    };
	
	\tikzmath { \fila = 1; \colInicio = 1; \colFinal = 2; }
	\filldraw[fill=azul] (table-\fila-\colInicio.north -| table-\fila-\colInicio.west)
		rectangle (table-\fila-\colFinal.south -| table-\fila-\colFinal.east)
			node[midway, align=center] {Parameter};

	\foreach \columna/\filaInicio/\filaFinal in {2/7/18, 3/1/\filas} {
		\foreach \fila in {\filaInicio, ..., \filaFinal} {
			\draw (table-\fila-\columna.north -| table-\fila-\columna.east)
				rectangle (table-\fila-\columna.south -| table-\fila-\columna.west);
		}
	}
	
	% Misma fila, multiples columnas
	\def\elementos{{ 
		{1, 2, 2, "Max. load capacity at writst $[$kg$]$"},
		{1, 2, 3, "Reach $[$mm$]$"},
		{1, 2, 4, "Controlled axes"},
		{1, 2, 5, "Repeatability $[$mm$]$"},
		{1, 2, 6, "Mechanical weight $[$kg$]$"}
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
		{ 7, 12, 1, "Motion range"},
		{13, 18, 1, "Maximum speed"}
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
