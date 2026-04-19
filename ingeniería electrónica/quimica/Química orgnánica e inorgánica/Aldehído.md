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
Este representa un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidrocarburo|hidrocarburo]] donde el [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Grupo funcional|grupo funcional]] es un [[Carbonilo|carbonilo]] $(\text{C} \text{O})$ donde el enlace es un [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^doble|enlace doble]]. A diferencia de los [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Cetona|cetonas]], el grupo funcional se encuentra enlazado (por medio del [[Carbono|carbono]]) a un carbono

## Nomenclatura
---
Se nombre el hidrocarburo y se agregar el sufijo "-al". Nunca es necesario aclarar la posición porque se sabe que siempre esta en una punta, y haría que los números sea lo más chico posible

## Ejemplo
---

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

	\coordinate (cadena_2) at (0, 0);
	\coordinate (cadena_1) at ($ (cadena_2) + (\sep, {-0.3 * \sep}) $);
	\coordinate (cadena_3) at ($ (cadena_2) + (-\sep, {-0.3 * \sep}) $);
	\coordinate (grupo_oxigeno) at ($ (cadena_1) + (\sep, {0.3 * \sep}) $);
	
	\def\elementos{{ 
		{"cadena_1", "CH"}, 
		{"cadena_2", "CH$_2$"},
		{"cadena_3", "CH$_3$"},
		{"grupo_oxigeno", "O"}
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_2", "cadena_3", 1}, 
		{"cadena_1", "grupo_oxigeno", 2}
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
^ejemplo

Tenemos una cadena principal de $3$ carbonos, por lo que se nombre propanal


