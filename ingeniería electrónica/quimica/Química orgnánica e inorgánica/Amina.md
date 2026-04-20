---
dia: 2026-04-20
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
Este representa un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidrocarburo|hidrocarburo]] donde el [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Grupo funcional|grupo funcional]] es un [[Nitrógeno|nitrógeno]]. Se pueden clasificar como 
* Amina primería si el nitrógeno está unido a un único grupo [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Alquino|alquino]] 
* Amina secundaria si el nitrógeno está unido a $2$ grupos alquinos
* Amina secundaria si el nitrógeno está unido a $3$ grupos alquinos

El nitrógeno en estas cadenas, siempre tiene un par de [[ingeniería electrónica/dispo/Física de semiconductores/Electrón|electrones]] libres, haciendo que esta cadena sea débil, y en [[Solución|soluciones]] acuosas es donde los electrones atraen un [[Hidrógeno|hidrógeno]] del [[ingeniería electrónica/seguridad/Prevención de incendios/Agua|agua]], liberando un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidróxido#^grupo-hidroxilo|grupo oxhidrilo]]

## Nomenclatura
---
Se nombran usando el nombre del grupo alquino, con la forma "R-il-amina", donde R es el grupo alquino. En caso de tener que nombrar varios, se nombran en orden alfabético

## Ejemplo
---

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.7, transform shape, thick]
	\tikzmath {
		\sep = 1.6; \eSep = 0.2; \eInterSep = 0.08; \alto = 0.01;
		\scale = 1; \radio = 0.05; \sepAngulo = 90;
		\largoChar = 0.4;
	}
	
	\foreach \i in {1, ..., 4} {
		\coordinate (cadena_\i) at ({\i * \sep}, 0);
	}
	\coordinate (grupo_amina) at (cadena_2);
	
	\def\elementos{{ 
		{"cadena_1", "CH$_3$"}, 
		{"cadena_2", "NH"}, 
		{"cadena_3", "CH$_2$"}, 
		{"cadena_4", "CH$_3$"}
	}}
	
	\def\uniones{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_2", "cadena_3", 1}, 
		{"cadena_3", "cadena_4", 1}
	}}
	
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
	
	\tikzmath { \cantElementos = dim(\elementos); }
	\foreach \i [parse=true] in {0, ..., \cantElementos - 1} {
		\tikzmath {
			\coor = \elementos[\i][0]; \label = \elementos[\i][1]; 
		}
		\path (\coor) node[fill=white, scale=\scale] {\label};
	}

	\foreach \porcen in {0, 0.3} {
		\fill ($ (grupo_amina) + ({(\porcen - 0.5) * \largoChar}, {0.8 * \largoChar}) $) 
			circle (\radio);
	}
	
\end{tikzpicture}
\end{document}
```

Podemos ver que tenemos dos cadenas, un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Alcano|metano]] y un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Alcano|etano]], por lo tanto se llama etilmetilamina. Podemos ver que este sería un caso de una amina secundaria

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.7, transform shape, thick]
	\tikzmath {
		\sep = 1.0; \eSep = 0.2; \eInterSep = 0.08; \alto = 0.01;
		\scale = 1; \radio = 0.05; \sepAngulo = 90;
		\largoChar = 0.4;
	}

	\tikzmath { \cant = 6; \minAngulo = 360 / \cant; }
	\foreach \pos [parse=true, count=\i] in {0, ..., \cant - 1} {
		\coordinate (cadena_fenil_\i) at 
			({\sep * cos(\i * \minAngulo)}, {\sep * sin(\i * \minAngulo)});
	}
	
	\coordinate (grupo_amina) at ($ (cadena_fenil_6) + ({0.75 * \sep}, 0) $);
	
	\def\elementos{{ 
		{"grupo_amina", "NH$_2$"}
	}}
	
	\def\uniones{{
		{"cadena_fenil_1", "cadena_fenil_2", 1}, 
		{"cadena_fenil_2", "cadena_fenil_3", 1}, 
		{"cadena_fenil_3", "cadena_fenil_4", 1}, 
		{"cadena_fenil_4", "cadena_fenil_5", 1}, 
		{"cadena_fenil_5", "cadena_fenil_6", 1}, 
		{"cadena_fenil_6", "cadena_fenil_1", 1},
		{"cadena_fenil_6", "grupo_amina", 1}
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
	
	\tikzmath { \cantElementos = dim(\elementos); }
	\foreach \i [parse=true] in {0, ..., \cantElementos - 1} {
		\tikzmath {
			\coor = \elementos[\i][0]; \label = \elementos[\i][1]; 
		}
		\path (\coor) node[fill=white, scale=\scale] {\label};
	}
	
	\foreach \porcen in {-0.2, 0.1} {
		\fill ($ (grupo_amina) + ({(\porcen - 0.5) * \largoChar}, {0.8 * \largoChar}) $) 
			circle (\radio);
	}
	
\end{tikzpicture}
\end{document}
```

Como tenemos un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Aromático|fenil]], termina llamándose fenilamina. Notemos que este sería un caso de amina primario