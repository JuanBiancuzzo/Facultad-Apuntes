---
dia: 2026-03-17
etapa: empezado
referencias:
  - "916"
aliases: []
tags:
  - carrera/ingeniería-electrónica/control/Root-Locus
  - nota/facultad
vinculoFacultad:
  - tema: Root Locus
    capitulo: 6
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La técnica de Root Locus permite analizar y diseñar el efecto de [[ingeniería electrónica/control/Respuesta dinámica/Controlador closed-loop|loop]] del sistema, tomando el siguiente grafico, se usa el diagrama para poder ver como los [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema|polos]] del closed-loop del sistema donde la ganancia $K$ cambia

```tikz
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.1, transform shape, ultra thick]
    \tikzmath { 
        \largo = 2.5; \alto = 1.5; \isep = 1.8; \sep = 1.3; 
        \radio = 0.4; \scale = 1.3; \scaleSimb = 0.85; \scaleText = 1.1;
    }
	
	\coordinate (diferencia) at (0, 0);
	\coordinate (ampli) at ({\radio + \sep + \largo / 2}, 0);
	\coordinate (planta) at ($ (ampli) + ({\isep + \largo}, 0) $);
	
	\foreach \coor/\arr/\abj/\izq/\der in {diferencia//-/+/} {
		\begin{scope}[cm={1, 0, 0, 1, (\coor)}] 
			\foreach \angle/\label in {-45/\der, 45/\arr, 135/\izq, 225/\abj} {
				\tikzmath { \angleLabel = \angle + 45; }
				\draw (0, 0) -- ({\radio * cos(\angle)}, {\radio * sin(\angle)});
				\path (0, 0) 
					-- ({\radio * cos(\angleLabel)}, {\radio * sin(\angleLabel)})
						node[pos=0.6, scale=\scaleSimb] {\label};
			}	
			\draw (0, 0) circle (\radio);
		\end{scope}
	}

	\foreach \coor/\label/\texto in {ampli/K_1/Amplificador, planta/\frac{K_2}{s ~ (s + 10)}/Planta} {
		\draw ($ (\coor) + ({-\largo / 2}, {-\alto / 2}) $) 
			rectangle ++(\largo, \alto) 
				node[midway, scale=\scale] {$\label$};
		\path ($ (\coor) + ({-\largo / 2}, {\alto / 2}) $)
			-- ++(\largo, 0)
				node[midway, above=2pt, scale=\scaleText] {\texto};
	}
	
	\draw[->] ($ (diferencia) + (\radio, 0) $) -- ++(\sep, 0);
	\draw[->] ($ (ampli) + ({\largo / 2}, 0) $) -- ++(\isep, 0);
	\draw[->] ($ (planta) + ({\largo / 2}, 0) $) -- ++({2 * \isep}, 0)
		node[midway] (temp) {}
		node[pos=0.7, above=2pt, scale=\scale] {$C(s)$};
		
	\draw (temp.center) -- ++(0, {-0.75 * \largo})
		-- ($ (diferencia) + (0, {-0.75 * \largo}) $)
		-- ($ (diferencia) + (0, -\radio) $);
		
	\draw[<-] ($ (diferencia) + (-\radio, 0) $) 
		-- ++(-\isep, 0)
			node[midway, above=2pt, scale=\scale] {$R(s)$};

\end{tikzpicture}
\end{document}
```

Tomando el sistema general como $$ G(s) = \frac{K}{s^2 + 10s + K} $$
Al variar $K$ desde $0$ a $50$, se obtiene la tabla de los polos 

| $K$  | Polo $1$        | Polo $2$        |
| ---- | --------------- | --------------- |
| $0$  | $-10$           | $0$             |
| $5$  | $-9.47$         | $-0.53$         |
| $10$ | $-8.87$         | $-1.13$         |
| $15$ | $-8.87$         | $-1.84$         |
| $20$ | $-7.24$         | $-2.76$         |
| $25$ | $-5$            | $-5$            |
| $30$ | $-5 + j ~ 2.24$ | $-5 - j ~ 2.24$ |
| $35$ | $-5 + j ~ 3.16$ | $-5 - j ~ 3.16$ |
| $40$ | $-5 + j ~ 3.87$ | $-5 - j ~ 3.87$ |
| $45$ | $-5 + j ~ 4.47$ | $-5 - j ~ 4.47$ |
| $50$ | $-5 + j ~ 5$    | $-5 - j ~ 5$    |
El diagrama de Root locus, representa el camino de los polos al cambiar la ganancia del sistema, donde se utiliza valores $K \in \mathbb{R}_+$
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{polo1}{RGB}{249, 207, 50} 
\definecolor{polo2}{RGB}{0, 127, 204}

\begin{tikzpicture}[scale=1.1, transform shape, ultra thick]
	\tikzmath { 
		\alto = 5; \minAncho = -10; \maxAncho = 0;
		\sep = 0.5; \isep = 0.3; \scaleSimb = 0.8;
		\a = 1; \b = 10; \dk = 0.5;
		
		function RePolo(\k, \signo) {
			\argPolo = \b^2 - 4 * \a * \k; \argSqrt = sqrt(abs(\argPolo));
			return -0.5 * \b + \signo * 0.5 * (\argPolo > 0 ? \argSqrt : 0);
		};
		
		function ImPolo(\k, \signo) {
			\argPolo = \b^2 - 4 * \a * \k; \argSqrt = sqrt(abs(\argPolo));
			return \signo * 0.5 * (\argPolo > 0 ? 0 : \argSqrt);
		};
	}
	
	\draw[->] ({\minAncho - \sep}, 0) -- ({\maxAncho + \sep}, 0)
		node[pos=1.02, right=2pt, scale=\scaleSimb] {$\sigma$};
	\foreach \i [parse=true] in {\minAncho, \minAncho + 1, ..., \maxAncho - 1} {
		\tikzmath { \x = int(\i); }
		\draw (\x, {-\isep / 2}) -- (\x, {\isep / 2})
			node[pos=0, below=2pt, scale=\scaleSimb] {$\x$};
	}
		
	\draw[->] (0, {-\alto - \sep}) -- (0, {\alto + \sep})
		node[pos=1.02, above=2pt, scale=\scaleSimb] {$j \omega$};
	\foreach \i [parse=true] in {-\alto, -\alto + 1, ..., -1, 1, 2, ..., \alto} {
		\tikzmath { \y = int(\i); }
		\draw ({-\isep / 2}, \y) -- ({\isep / 2}, \y)
			node[pos=1, right=2pt, scale=\scaleSimb] {$\y j$};
	}

	\foreach \signo/\color in {1/polo1, -1/polo2} {
		\draw[\color, ->] ({RePolo(0, \signo)}, {ImPolo(0, \signo)}) 
		\foreach \k [parse=true] in {\dk, 2 * \dk, ..., 55} {
			-- ({RePolo(\k, \signo)}, {ImPolo(\k, \signo)})
		};
	}
	
	\foreach \k in {0, 5, ..., 50} {
		\fill[polo1] ({RePolo(\k, 1)}, {ImPolo(\k, 1)}) circle (0.1);
		\fill[polo2] ({RePolo(\k, -1)}, {ImPolo(\k, -1)}) circle (0.1);
	}
	
\end{tikzpicture}
\end{document}
```

Tomando una planta general, tenemos $$ G(s) = \frac{K ~ C(s)}{1 + K ~ G(s) ~ H(s)} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```