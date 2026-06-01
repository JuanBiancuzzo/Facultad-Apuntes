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
  - Calor latente#^calor-latente
tags:
  - carrera/ingeniería-electrónica/quimica/Estados-de-la-materia
  - carrera/ingeniería-electrónica/quimica/Termodinámica
  - nota/facultad
vinculoFacultad:
  - tema: Estados de la materia
    capitulo: 7
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
  - tema: Termodinámica
    capitulo: 10
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

Los procesos de fusión, evaporación y sublimación, son [[ingeniería electrónica/quimica/Termodinámica/Proceso endotérmico|procesos endotérmico]]. Los procesos de solidificación, deposición y condensación, son [[ingeniería electrónica/quimica/Termodinámica/Proceso exotérmico|procesos exotérmico]]

En estos procesos, la presión y la temperatura son constantes, y por lo tanto no solo se puede calcular la [[ingeniería electrónica/quimica/Soluciones y solubilidad/Entalpía|entalpía]] de cada proceso, por ejemplo $$ \Delta H_\text{vap} = H_m(\text{vapor}) - H_m(\text{líquido}) $$ pero además como es presión constante, por lo que el [[ingeniería electrónica/quimica/Termodinámica/Capacidad calorífica#^calor-presion-constante|calor a presión constante]] es igual a la variación de entalpía $Q_\text{vap} = \Delta H_\text{vap}$, y esta se la conoce como calor latente, y en este caso calor latente de vaporización ^calor-latente

Como la entalpía es una [[ingeniería electrónica/quimica/Termodinámica/Función de estado|función de estado]], entonces se da que cualquier [[ingeniería en informática/discreta/Grafos/Camino|camino]] de procesos de cambios de estado, siempre que empiecen y terminen en el mismo lugar, van a dar a la misma variación de entalpía