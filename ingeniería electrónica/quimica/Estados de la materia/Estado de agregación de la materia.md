---
dia: 2026-05-16
etapa: empezado
referencias: []
aliases:
  - Fase de la materia
  - Cambio de estado#Cambio de estado
  - Cambio de fase#Cambio de estado
  - Fusión#Cambio de estado
  - Solidificación#Cambio de estado
  - Evaporación#Cambio de estado
  - Ebullición#Cambio de estado
  - Condensación#Cambio de estado
  - Deposición#Cambio de estado
  - Deposicioón#Cambio de estado
tags:
  - carrera/ingeniería-electrónica/quimica/Estados-de-la-materia
  - nota/facultad
vinculoFacultad:
  - tema: Estados de la materia
    capitulo: 7
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La materia tiene [[Masa|masa]] y [[Volumen|volumen]], ocupa un lugar en el espacio. Los [[Sólido|sólidos]] ocupan un volumen propio, y los [[Líquido|líquidos]] y los [[Gas|gases]] ocupan el volumen del recipiente

## Cambio de estado
---
Las sustancias pasan de un estado a otro por un [[ingeniería en informática/sisop/La abstracción de proceso/Proceso|proceso]] físico, cambios de [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]] y/o [[Presión|presión]], sin modificar su identidad química

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{arrows.meta, automata, positioning}

\begin{document} 
	\definecolor{azul}{RGB}{0, 127, 204}
	\definecolor{rojo}{RGB}{218, 111, 142}
	\begin{tikzpicture}[scale=1.3, transform shape, thick]
		\tikzmath { \radio = 1.8; }	
	
		\node[state, minimum size=\radio cm] (q_l) at ( 0,  0) {Líquido};
		\node[state, minimum size=\radio cm] (q_s) at (-4, -5) {Sólido};
		\node[state, minimum size=\radio cm] (q_g) at ( 4, -5) {Gaseoso};

		\begin{scope}[
			>={Stealth[round]}, ->, shorten >=4pt, bend angle=15, bend left, 
			every node/.style={fill=white, text=black}
		]
			\path[rojo] (q_s) edge node {Fusión} (q_l);
			\path[azul] (q_l) edge node {Solidificación} (q_s);
			
			\path[azul] (q_g) edge node {Condensación} (q_l);
			\path[rojo] (q_l) edge node {Evaporación} (q_g);
			
			\path[azul] (q_g) edge node {Deposición} (q_s);
			\path[rojo] (q_s) edge node {Sublimación} (q_g);
		\end{scope}
	\end{tikzpicture}
\end{document}
```

Los procesos de fusión, evaporación y sublimación, son procesos [[Endotérmico|endotérmicos]]. Los procesos de solidificación, deposición y condensación, son procesos [[Exotérmico|exotérmicos]]