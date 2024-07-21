---
dia: 2023-03-20
capitulo: 2
tags:
  - orga/Visualizaciones
---
### Definición
---
El bar [[Plot]] es parecido al [[Histograma]] pero donde la [[Distribución discreta|distribución es discreta]] para le eje x.

```tikz
\usepackage{pgfplots}

\begin{document} 
	\definecolor{no}{RGB}{185, 90, 49}
	\definecolor{uno}{RGB}{199, 156, 63}
	\definecolor{dos}{RGB}{183, 173, 65}
	\definecolor{tres}{RGB}{158, 206, 55}
	\definecolor{mas}{RGB}{72, 179, 61}

	\begin{tikzpicture}[scale=1.3, transform shape]
		\begin{axis}[ 
			xtick={0, 1, 2, 3, 4},
			xticklabels={No, Uno, Dos, Tres, Más de tres}, 
			xlabel=¿Tuviste ajustes por inflación en 2019?,
			
			ytick={0, 250, ..., 1750},
			ylabel=Cantidad de encuestados, 
			ymin=0,

			title=Encuenta sysarmy: ¿Tuviste ajustes por inflación en 2019?,
			
			every axis plot/.append style={
				ybar,
				bar width=2em,
				bar shift=0pt,
				fill,
	        },
		] 
			\addplot[no] coordinates { (0, 1450) };
			\addplot[uno] coordinates { (1, 1200) };
			\addplot[dos] coordinates { (2, 1800) };
			\addplot[tres] coordinates { (3, 1000) };
			\addplot[mas] coordinates { (4,  500) };
			
		\end{axis} 
	\end{tikzpicture}
\end{document}
```

Este plot puede modificarse donde se puede mostrar porcentajes, o podemos comparar los dos parámetros con la misma [[Distribución discreta|distribución]].
