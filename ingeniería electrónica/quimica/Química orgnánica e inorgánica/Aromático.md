---
dia: 2026-04-19
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/quimica/Química-orgnánica-e-inorgánica
  - nota/facultad
vinculoFacultad:
  - tema: Química orgnánica e inorgánica
    capitulo: 5
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Estos son los [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidrocarburo|hidrocarburos]] donde su estructura esta dada por una cadena cíclica de [[Carbono|carbonos]] unidos por [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^simple|enlaces covalentes simples]] y [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^doble|enlace doble]] de forma alternada. El anillo de carbonos presenta [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hibridación#Hibridación sp2|hibridación sp2]] 

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.7, transform shape, thick]
	\tikzmath {
		\sep = 1.3; \eSep = 0.2; \eInterSep = 0.08; \alto = 0.01;
		\scale = 1; \radio = 0.7; \sepAngulo = 90;
	}

	\tikzmath { \cant = 6; \minAngulo = 360 / \cant; }
	\foreach \pos [parse=true, count=\i] in {0, ..., \cant - 1} {
		\coordinate (cadena_\i) at 
			({\sep * cos(\i * \minAngulo)}, {\sep * sin(\i * \minAngulo)});
	}
	
	\def\elementos{{ 
		{"cadena_1", "CH"}, 
		{"cadena_2", "CH"}, 
		{"cadena_3", "CH"}, 
		{"cadena_4", "CH"}, 
		{"cadena_5", "CH"}, 
		{"cadena_6", "CH"}
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_2", "cadena_3", 2}, 
		{"cadena_3", "cadena_4", 1}, 
		{"cadena_4", "cadena_5", 2}, 
		{"cadena_5", "cadena_6", 1}, 
		{"cadena_6", "cadena_1", 2}
	}}
	
	\tikzmath { \cantElementos = dim(\elementos); }
	\foreach \i [parse=true] in {0, ..., \cantElementos - 1} {
		\tikzmath {
			\coor = \elementos[\i][0]; \label = \elementos[\i][1]; 
		}
		\path (\coor) node[scale=\scale] {\label};
	}

	\tikzmath { \cantUniones = dim(\uniones); }
	\foreach \i [parse=true] in {0, ..., \cantUniones - 1} {
		\tikzmath { 
			\desde = \uniones[\i][0]; \hasta = \uniones[\i][1]; 
			\cantUniones = \uniones[\i][2];
			
			coordinate \diff;
			\diff = (\hasta) - (\desde); 
			
			\ptToCm = 1 / 28.45;

			% Necesitamos calcular el angulo y la distancia
			\angulo = atan2(\diffy, \diffx);
			\distancia = sqrt(abs(\diffx)^2 + abs(\diffy)^2);
			
			\cosA = cos(\angulo); \sinA = sin(\angulo);
			\puntoMedio = (\cantUniones - 1) * \eInterSep / 2;
		}
		
		\begin{scope}[cm={\cosA, \sinA, -\sinA, \cosA, (\desde)}]
			\foreach \i [parse=true] in {0, ..., \cantUniones - 1} {
				\draw[shorten <=\radio cm, shorten >=\radio cm] 
					(0, {\i * \eInterSep - \puntoMedio}) 
						-- ++({\ptToCm * \distancia}, 0);
			}
		\end{scope}
	}
	
\end{tikzpicture}
\end{document}
```

Se da el fenómeno de "resonancia", donde los [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]] del orbital $p$ no hibridados de cada carbono forman un orbital molecular en forma de [[Toroide|toroide]] por encima y por debajo del anillo. Por lo tanto aunque se saben que están alternados los dobles enlaces, estos pueden están en cualquier par de carbonos

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.7, transform shape, thick]
	\tikzmath {
		\sep = 1.0; \eSep = 0.2; \eInterSep = 0.08; \alto = 0.01;
		\scale = 1; \radio = 0.7; \sepAngulo = 90;
	}

	\tikzmath { \cant = 6; \minAngulo = 360 / \cant; }
	\foreach \pos [parse=true, count=\i] in {0, ..., \cant - 1} {
		\coordinate (cadena_\i) at 
			({\sep * cos(\i * \minAngulo)}, {\sep * sin(\i * \minAngulo)});
	}
	
	\coordinate (primera_resonancia) at (0, 0);
	\def\unionesUno{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_2", "cadena_3", 2}, 
		{"cadena_3", "cadena_4", 1}, 
		{"cadena_4", "cadena_5", 2}, 
		{"cadena_5", "cadena_6", 1}, 
		{"cadena_6", "cadena_1", 2}
	}}

	\coordinate (segunda_resonancia) at ({4 * \sep}, 0);
	\def\unionesDos{{
		{"cadena_1", "cadena_2", 2}, 
		{"cadena_2", "cadena_3", 1}, 
		{"cadena_3", "cadena_4", 2}, 
		{"cadena_4", "cadena_5", 1}, 
		{"cadena_5", "cadena_6", 2}, 
		{"cadena_6", "cadena_1", 1}
	}}

	\draw[<->, shorten <=2.3*\sep cm, shorten >=2.3*\sep cm] 
		(primera_resonancia) -- (segunda_resonancia);
	
	\foreach \coor/\uniones in {primera_resonancia/\unionesUno,
		segunda_resonancia/\unionesDos} {
		\tikzmath { \cantUniones = dim(\uniones); }
		\foreach \i [parse=true] in {0, ..., \cantUniones - 1} {
			\tikzmath { 
				\desde = \uniones[\i][0]; \hasta = \uniones[\i][1]; 
				\cantUniones = \uniones[\i][2];
				
				coordinate \diff;
				\diff = (\hasta) - (\desde); 
				
				\ptToCm = 1 / 28.45;
	
				% Necesitamos calcular el angulo y la distancia
				\angulo = atan2(\diffy, \diffx);
				\distancia = sqrt(abs(\diffx)^2 + abs(\diffy)^2);
				
				\cosA = cos(\angulo); \sinA = sin(\angulo);
			}
			
			\coordinate (inicio) at ($ (\desde) + (\coor) $);
			
			\begin{scope}[cm={\cosA, \sinA, -\sinA, \cosA, (inicio)}]
				\foreach \i [parse=true] in {0, ..., \cantUniones - 1} {
					\draw (0, {\i * \eInterSep}) 
						-- ++({\ptToCm * \distancia}, 0);
				}
			\end{scope}
		}
	}
	
\end{tikzpicture}
\end{document}
```

Por este motivo se suele escribir de la siguiente forma

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.7, transform shape, thick]
	\tikzmath {
		\sep = 1.0; \eSep = 0.2; \eInterSep = 0.08; \alto = 0.01;
		\scale = 1; \radio = 0.7; \sepAngulo = 90;
	}

	\tikzmath { \cant = 6; \minAngulo = 360 / \cant; }
	\foreach \pos [parse=true, count=\i] in {0, ..., \cant - 1} {
		\coordinate (cadena_\i) at 
			({\sep * cos(\i * \minAngulo)}, {\sep * sin(\i * \minAngulo)});
	}
	
	\def\uniones{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_2", "cadena_3", 1}, 
		{"cadena_3", "cadena_4", 1}, 
		{"cadena_4", "cadena_5", 1}, 
		{"cadena_5", "cadena_6", 1}, 
		{"cadena_6", "cadena_1", 1}
	}}
	
	\draw (0, 0) circle ({0.7 * \sep});
	
	\tikzmath { \cantUniones = dim(\uniones); }
	\foreach \i [parse=true] in {0, ..., \cantUniones - 1} {
		\tikzmath { 
			\desde = \uniones[\i][0]; \hasta = \uniones[\i][1]; 
			\cantUniones = \uniones[\i][2];
			
			coordinate \diff;
			\diff = (\hasta) - (\desde); 
			
			\ptToCm = 1 / 28.45;

			% Necesitamos calcular el angulo y la distancia
			\angulo = atan2(\diffy, \diffx);
			\distancia = sqrt(abs(\diffx)^2 + abs(\diffy)^2);
			
			\cosA = cos(\angulo); \sinA = sin(\angulo);
		}
		
		\begin{scope}[cm={\cosA, \sinA, -\sinA, \cosA, (\desde)}]
			\foreach \i [parse=true] in {0, ..., \cantUniones - 1} {
				\draw (0, {\i * \eInterSep}) 
					-- ++({\ptToCm * \distancia}, 0);
			}
		\end{scope}
	}
	
\end{tikzpicture}
\end{document}
```

