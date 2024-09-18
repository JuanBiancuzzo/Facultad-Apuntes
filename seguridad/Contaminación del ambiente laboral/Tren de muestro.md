---
dia: 2023-03-21
tags:
  - seguridad/Contaminación-del-ambiente-laboral
  - nota/facultad
---
# Definición
---
El objetivo del empleo de un dispositivo de toma de [[Muestreo de contaminantes|muestras]] de aire en un ambiente de trabajo es obtener una evaluación cualitativa y cuantitativa de un riesgo potencial o real.
* Independientemente del contaminante en cuestión, un tren de muestro para la captación de partículas o gases y vapores contaminantes, es básicamente el indicado en el esquema

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 

	\definecolor{verde}{RGB}{148, 203, 0}
	\definecolor{verdeoscuro}{RGB}{105, 143, 4}

	\begin{tikzpicture}[scale=1.4, transform shape, ultra thick]
		\tikzmath {
			\largo = 1.2;
			\alto = 0.7;
			\flecha = 1.5;
		}

		\coordinate (centro) at (0, 0);
		\coordinate (esquina) at ($ (centro) + (-\largo, -\alto) $);
		\filldraw[fill=verde, draw=verdeoscuro] (esquina)
			rectangle ++({2 * \largo}, {2 * \alto});
		\path (esquina) -- ++({2 * \largo}, 0)
			node[midway, scale=1.5, below=2pt] {R};
		\draw[<-] ($ (centro) + (-\largo, 0) $) -- ++(-\flecha, 0)
			node[midway, below=2pt] {aire};
		

		\coordinate (centro) at ($ (centro) + ({2 * \largo + \flecha}, 0) $);
		\coordinate (esquina) at ($ (centro) + (-\largo, -\alto) $);
		\filldraw[fill=verde, draw=verdeoscuro] (esquina)
			rectangle ++({2 * \largo}, {2 * \alto});
		\path (esquina) -- ++({2 * \largo}, 0)
			node[midway, scale=1.5, below=2pt] {M};
		\draw[<-] ($ (centro) + (-\largo, 0) $) -- ++(-\flecha, 0);

		\coordinate (centro) at ($ (centro) + ({2 * \largo + \flecha}, 0) $);
		\coordinate (esquina) at ($ (centro) + (-\largo, -\alto) $);
		\filldraw[fill=verde, draw=verdeoscuro] (esquina)
			rectangle ++({2 * \largo}, {2 * \alto});
		\path (esquina) -- ++({2 * \largo}, 0)
			node[midway, scale=1.5, below=2pt] {Q};
		\draw[<-] ($ (centro) + (-\largo, 0) $) -- ++(-\flecha, 0);
			
	\end{tikzpicture}
\end{document}
```

Donde $R$ es un equipo de retención de contaminantes y varía según sea éste. $M$ es el medidor de caudal de aire que atraviesa el tren de muestro. $Q$ es el equipo de bombeo.