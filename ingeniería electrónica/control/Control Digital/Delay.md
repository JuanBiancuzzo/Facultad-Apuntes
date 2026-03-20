---
dia: 2026-03-17
etapa: empezado
referencias: []
aliases: 
  - Zero-order-hold
  - ZOH
tags:
  - carrera/ingeniería-electrónica/control/Control-Digital
  - nota/facultad
vinculoFacultad:
  - tema: Control Digital
    capitulo: "8"
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un delay se puede representar en una [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema|transferencia]], se expresar como $$ R(s) = e^{-sT} $$ donde $T$ es tiempo del delay

Podemos notar que la magnitud del delay es $1$, y su argumento es $-sT$, por lo que si vemos su [[ingeniería electrónica/adc/Respuesta en frecuencia/Diagrama de Bode|diagrama de Bode]] es

```tikz
\usepackage{pgfplots}
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\pgfplotsset{compat=1.16}

\begin{document} 
\definecolor{col1}{RGB}{255, 0, 127} 
\definecolor{col2}{RGB}{255, 25, 25} 
\definecolor{col3}{RGB}{229, 51, 178} 
\definecolor{col4}{RGB}{178, 102, 229} 
\definecolor{col5}{RGB}{102, 127, 229} 
\definecolor{col6}{RGB}{0, 127, 204}

\begin{tikzpicture}[scale=1.1, transform shape, ultra thick]
	\tikzmath { 
		\xMinDom = 10^(-3); \xMaxDom = 10^(3); 
		\ancho = 14; \alto = 8; \relacion = \ancho / \alto;
	}
	
	\coordinate (modulo) at (0, 0);
	\coordinate (fase) at (0, {-0.5 * \alto});
	
	\begin{axis}[
		xmin=\xMinDom, xmax=\xMaxDom, 
		ymin={-\alto + 1}, ymax=1, 
		width = \ancho cm, unit vector ratio=\relacion 1,
		xmode=log,
		samples=100,
		grid=major,
		xlabel=$s$,
		ylabel=$\angle R(s)$,
		legend style={fill=white},
		domain=\xMinDom:100,
		cm={1, 0, 0, 1, (fase)},
	]
		\addplot[col1] { -1.2 * \x }; \addlegendentry{$T = 1.2$};
		\addplot[col2] { -1.0 * \x }; \addlegendentry{$T = 1.0$};
		\addplot[col3] { -0.8 * \x }; \addlegendentry{$T = 0.8$};
		\addplot[col4] { -0.6 * \x }; \addlegendentry{$T = 0.6$};
		\addplot[col5] { -0.4 * \x }; \addlegendentry{$T = 0.4$};
		\addplot[col6] { -0.2 * \x }; \addlegendentry{$T = 0.2$};
	
	\end{axis}
	
	\begin{axis}[
		xmin=\xMinDom, xmax=\xMaxDom, 
		ymin={-\alto / 2}, ymax={\alto / 2}, 
		width = \ancho cm, unit vector ratio=\relacion 1,
		xmode=log,
		samples=10,
		grid=major,
		xticklabels={$~$},
		ylabel=$|R(s)|$,
		legend style={fill=white},
		domain=\xMinDom:\xMaxDom,
		cm={1, 0, 0, 1, (modulo)},
	]

		\addplot[col1] { 0 }; \addlegendentry{$T = 1.2$};
		\addplot[col2] { 0 }; \addlegendentry{$T = 1.0$};
		\addplot[col3] { 0 }; \addlegendentry{$T = 0.8$};
		\addplot[col4] { 0 }; \addlegendentry{$T = 0.6$};
		\addplot[col5] { 0 }; \addlegendentry{$T = 0.4$};
		\addplot[col6] { 0 }; \addlegendentry{$T = 0.2$};
	
	\end{axis}
\end{tikzpicture}
\end{document}
```

