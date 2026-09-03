---
dia: 2026-09-02
etapa: empezado
referencias: []
aliases:
  - Triángulo de Sábato
tags:
  - carrera/ingeniería-en-informática/ebt-1/Empresas-de-Base-Tecnológica
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Empresas de Base Tecnológica
    capitulo: 1
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Está relacionado al concepto de [[ingeniería electrónica/seguridad/Contaminación del agua/Ecosistema|ecosistema]], donde son los elementos "necesarios" para tener un ambiente que permita crear una [[ingeniería en informática/ebt 1/Empresas de Base Tecnológica/Empresa de Base Tecnológica|StartUp]], donde se puede representar con un triángulo 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{arrows.meta, automata, positioning}

\begin{document} 
	\definecolor{azul}{RGB}{0, 127, 204}
	\begin{tikzpicture}[scale=1.1, transform shape, thick]
		\tikzmath { \radio = 1.5; \escala = 1.15; }	
	
		\node[state, minimum size=\radio cm] (q_1) at ( 0,  0) {};
		\node[state, minimum size=\radio cm] (q_2) at (-4, -6) {};
		\node[state, minimum size=\radio cm] (q_3) at ( 4, -6) {};

		\begin{scope}[
			>={Stealth[round]}, <->, shorten <=4pt, shorten >=4pt, 
			bend angle=15, bend left, 
			every node/.style={fill=white, text=black}
		]
			\path[azul] (q_2) edge (q_1);
			\path[azul] (q_1) edge (q_3);
			\path[azul] (q_3) edge (q_2);
			
		\end{scope}

		\coordinate (medio_abajo) at ($ (q_2)!0.5!(q_3) $) {};	
		\coordinate (centro) at ($ (q_1)!0.5!(medio_abajo) $) {};
		
		\begin{scope}[align=center, scale=\escala] 
			\path (centro) node[below=2pt] {Ecosistema de\\Innovación};
			
			\tikzmath { \angulo = 90; \cos = cos(\angulo); \sin = sin(\angulo); }
			\path ($ (q_1) + ({\radio * \cos / 2}, {\radio * \sin / 2}) $) 
				node[above=2pt] {Sistema Científico\\Tecnológico};

			\tikzmath { \angulo = 225; \cos = cos(\angulo); \sin = sin(\angulo); }
			\path ($ (q_2) + ({\radio * \cos / 2}, {\radio * \sin / 2}) $) 
				node[below left=2pt] {Estado};
				
			\tikzmath { \angulo = 315; \cos = cos(\angulo); \sin = sin(\angulo); }
			\path ($ (q_3) + ({\radio * \cos / 2}, {\radio * \sin / 2}) $) 
				node[below right=2pt] {Empresa};
		\end{scope}
	\end{tikzpicture}
\end{document}
```
