---
dia: 2024-03-14
tags:
  - carrera/ingeniería-electrónica/control/Linealización
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-electrónica/señales/Señales-y-sistemas
  - nota/facultad
referencias:
  - "899"
etapa: ampliar
aliases:
  - Sistema no lineal
vinculoFacultad:
  - tema: Linealización
    capitulo: 2
    materia: Control automático
    carrera: Ingeniería electrónica
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
  - tema: Señales y sistemas
    capitulo: 1
    materia: Señales y sistemas
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un [[Sistema|sistema]] se denomina lineal si se aplica el [[Principio de superposición|principio de superposición]]

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
	
		\draw (0, 0) rectangle (3, 4)
			node[midway, align=center, font=\bfseries] {Sistema\\lineal};
		\draw[->] (-1.1, 3.25) node[left=2pt] {$X_1$}
			-- ++(1, 0);
		\draw[->] (-1.1, 2.5) node[left=2pt] {$X_2$}
			-- ++(1, 0);
		\path (-1.6, 1.75) node {$\vdots$};
		\draw[->] (-1.1, 1) node[left=2pt] {$X_n$}
			-- ++(1, 0);
		\path (-1.6, 0.25) node {Entradas};

		\draw[<-] (4.1, 3.25) node[right=2pt] 
				{$~ Y_1 = \sum_{i=1}^{n} Y_1 ~ \big|_{X_i} $}
			-- ++(-1, 0);
		\draw[<-] (4.1, 2.5) node[right=2pt] 
				{$~ Y_2 = \sum_{i=1}^{n} Y_2 ~ \big|_{X_i} $}
			-- ++(-1, 0);
		\path (5, 1.75) node {$\vdots$};
		\draw[<-] (4.1, 1) node[right=2pt] 
				{$Y_m = \sum_{i=1}^{n} Y_m ~ \big|_{X_i} $}
			-- ++(-1, 0);
		\path (4.6, 0.25) node {Salidas};
	
	
	\end{tikzpicture}
\end{document}
```

## Sistema no lineal
---
Un sistema es no lineal si no se aplica el principio de superposición. Por tanto, para un sistema no lineal la respuesta a dos entradas no puede calcularse tratando cada entrada a la vez y sumando los resultados

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```