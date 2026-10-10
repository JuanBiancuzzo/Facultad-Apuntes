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

![[colección/ejercicios/img/Robot MyCobot Pro-600.png|250]]


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
	        text width=14em
	    },        
        row 1/.style={
            nodes={ fill=azul }
        },
		column 2/.style={
			nodes={ text width=22em }
		},
    }
}
\begin{tikzpicture}
	\tikzmath { \columnas = 2; \filas = 18; }
    \matrix (table) [table] {
		Parameter & Datos \\
		Weight & $8.8$ kg \\
		Payload & $2$ kg \\
		IP level & IP42 \\
		Repeatability & $\pm 0.5$ mm \\
		Working radius & $600$ mm \\
		Materail & Aluminum alloy, plastic, rubber \\
		Working condition & $0$~$5$ C \\
		Maximum end speed & $0.6$ m/s \\
		 & J1 $\pm 180$ \\
		 & J2 $-270$~$90$ \\
		 & J3 $\pm 150$ \\
		 & J4 $-260$~$80$ \\
		 & J5 $\pm 168$ \\
		 & J6 $\pm 174$ \\
		DOF & $6$ \\
		 & J1/J2/J3 $115$ /seg \\
		 & J4/J5/J6 $115$ /seg \\
    };
	
	\foreach \columna/\filaInicio/\filaFinal in {2/1/\filas, 1/1/9, 1/15/16} {
		\foreach \fila in {\filaInicio, ..., \filaFinal} {
			\draw (table-\fila-\columna.north -| table-\fila-\columna.east)
				rectangle (table-\fila-\columna.south -| table-\fila-\columna.west);
		}
	}
	
	% Misma columna, multiples filas
	\def\elementos{{ 
		{10, 16, 1, "Joints range"},
		{17, 18, 1, "Maximum joint speed"}
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