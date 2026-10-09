---
dia: 2026-10-09
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 723
etapa: empezado
---
# Enunciado
---
Se desean realizar los siguientes [[Movimiento Joint|movimientos Joint]], en el [[Robot FANUC LR Mate 200iD|robot FANUC LR Mate 200iD]], tal que
* Parte de reposo de la posición de ejes $q_0$
* Luego va hacia $q_1$ en un tiempo deseado de $0.5 \cdot a$ , pasando sin detenerse
* Por último va a $q_2$ a velocidad máxima, deteniéndose en el punto

Las expresiones de las posiciones de los ejes en grados son $$ \begin{align} 
	q_0 &= \begin{bmatrix} -150 &  0 &    0 & 0 &  0 &  180 \end{bmatrix}^T \\
	q_1 &= \begin{bmatrix}  150 & 45 & 30.2 & 0 &  0 & -180 \end{bmatrix}^T \\
	q_2 &= \begin{bmatrix} 39.5 &  0 & 30.2 & 0 & 10 &  -90 \end{bmatrix}^T \\
\end{align} $$

Considerar que el tiempo de aceleración es de $100 ~ \text{ms}$, y las especificaciones de movimiento están en la siguiente tabla

```tikz
\usetikzlibrary{fit, matrix}
\usetikzlibrary{math}

\begin{document}
\tikzset{ 
    table/.style={
	    matrix of nodes,    
		column sep=0,
        nodes in empty cells,
            
        nodes={
            align=center,
            text width=2.5em,
			minimum height=7ex,
			anchor=south,
            font=\bfseries
        },        
        row 1/.style={
            nodes={ text height=1.5ex }
        },
        row 2/.style={
            nodes={ minimum height=20ex }
        },
    }
}
\begin{tikzpicture}
    \tikzmath { \n = 5; \filas = (\n * (\n + 1)) / 2 + 1; }

    \matrix (table) [table] {
		 & & & & & & & & & & & & & & & & \\
		 & & & & & J1 & J2 & J3 & J4 & J5 & J6 & J1 & J2 & J3 & J4 & J5 & J6 \\
		7 & 717 & 6 & $\pm 0.01$ & 25 & 
		340 (360) & 245 & 420 & 380 & 250 & 720 & 
		450 & 380 & 520 & 550 & 545 & 1000 \\
    };

	\tikzmath { \fila = 3; }
    \foreach \x in {1, ..., 17} {
		\draw (table-\fila-\x.north -| table-\fila-\x.east)
			rectangle (table-\fila-\x.south -| table-\fila-\x.west);
    }
	
	\tikzmath { \fila = 2; }
    \foreach \x in {6, ..., 17} {
		\draw (table-\fila-\x.north -| table-\fila-\x.east)
			rectangle (table-\fila-\x.south -| table-\fila-\x.west);
    }
	
	\def\textos{{ 
		"Max. load capacity at\\wrist $[$kg$]$", 
		"Reach\\$[$mm$]$",
		"Controlled axes",
		"Repeatability\\$[$mm$]$",
		"Mechanical\\weight $[$kg$]$"
	}}
	\tikzmath { \filaInicio = 1; \filaFinal = 2; \cantidad = dim(\textos); }
    \foreach \i [parse=true, count=\x] in {0, ..., \cantidad - 1} {
		\tikzmath { \texto = \textos[\i]; }
		\draw (table-\filaInicio-\x.north -| table-\filaInicio-\x.east)
			rectangle (table-\filaFinal-\x.south -| table-\filaFinal-\x.west)
				node[midway, align=center, rotate=90] {\texto};
    }
	
	\def\textos{{ 
		{6, 11, "Motion range $[$grados$]$"}, 
		{12, 17, "Maximum speed $[$grados/s$]$"}
	}}
	\tikzmath { \fila = 1; \cantidad = dim(\textos); }
	\foreach \i [parse=true] in {0, ..., \cantidad - 1} {
		\tikzmath { 
			\colInicio = \textos[\i][0]; \colFinal = \textos[\i][1];
			\texto = \textos[\i][2];
		}
		\draw (table-\fila-\colInicio.north -| table-\fila-\colInicio.west)
			rectangle (table-\fila-\colFinal.south -| table-\fila-\colFinal.east)
				node[midway, align=center] {\texto};
    }

\end{tikzpicture}
\end{document}
```

Se pide para el segundo eje, un gráfico completo de las curvas de posicón, velocidad y aceleración en función del tiempo. ¿Qué tiempo empleará en realizar el recorrido propuesto?

# Resolución
---

