---
dia: 2023-01-23
tags:
  - intro/Reducción-de-circuitos
  - nota/facultad
  - fisica-2/Electrostática-en-el-vacío
aliases:
  - Teorema de superposición
referencias:
  - "200"
---
### Definición
---
El principio de superposición es una herramienta matemática que permite descomponer un [[Función lineal|problema lineal]] o de otro tipo en dos o más subproblemas más sencillos, de tal manera que el problema original se obtiene como "superposición" de estos subproblemas más sencillos

Técnicamente, el principio de superposición afirma que cuando las ecuaciones de comportamiento que rigen un problema físico son lineales, entonces el resultado de una medida o la solución de un problema práctico relacionado con una magnitud extensiva asociada al fenómeno, cuando están presentes los conjuntos de factores causantes A y B, puede obtenerse como la suma de los efectos de A más los efectos de B<sup><a href="#ref-200" style="color: inherit; text-decoration: none;">[200]</a></sup> 

##### Esquematizando
---

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

#### Superposición de fuerzas
---


#### Para circuitos
---
Se establece que la [[Tensión|tensión]] entre los extremos (o la [[Corriente eléctrica|corriente]] a través) de un elemento en un [[Circuito lineal|circuito lineal]] es la suma algebraica de las tensiones (o corrientes) a través de ese elemento debido a que cada fuente independiente actúa sola 

##### Condiciones
---
- Circuito lineal
- Hay igual cantidad de fuentes ([[Fuente de tensión|tensión]] o [[Fuente de corriente|corriente]]) que de circuitos.
- Las fuentes de tension se cierran.
- Las fuentes de corriente se abren.

##### Pasos
---
1.  Apagar todas las fuentes ([[Fuente de tensión|fuente de tensión]] y [[Fuente de corriente|fuente de corriente]]) independientes excepto una. Calcular la salida (tensión o corriente eléctrica) debido a la única fuente activa
2.  Repetir el paso anterior para cada una de las fuentes independientes presentes en el circuito
3.  La contribución total viene dada por la suma algebraica de las contribuciones de cada una de las fuentes independientes



### Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/referenciasView", { archivo: dv.current() });
```