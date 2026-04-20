---
dia: 2026-04-20
etapa: empezado
referencias:
  - "1150"
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
Es un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidrocarburo|hidrocarburo]] que se forma a partir de $2$ [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Alcohol|alcoholes]] por pérdida de [[ingeniería electrónica/seguridad/Prevención de incendios/Agua|agua]] (condensación). Son aquellas sustancias que contienen un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Grupo funcional|grupo funcional]] del tipo R-O-R', donde R y R' son grupos [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Alquino|alquino]] o [[Arilo|arilo]]

## Nomenclatura
---
Se nombran los grupos alquilo por orden alfabético, y se agrega la palara "éter"

## Ejemplo
---

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
		\coordinate (cadena_fenil_\i) at 
			({\sep * cos(\i * \minAngulo)}, {\sep * sin(\i * \minAngulo)});
	}
	
	\coordinate (grupo_oxigeno) at ($ (cadena_fenil_6) + ({0.75 * \sep}, 0) $);
	
	\foreach \pos [count = \i] in {1, 2} {
		\coordinate (cadena_etil_\i) at 
			($ (grupo_oxigeno) + ({1.5 * \i * \sep}, 0) $);
	}
	
	\def\elementos{{ 
		{"grupo_oxigeno", "O"}, 
		{"cadena_etil_1", "CH$_2$"}, 
		{"cadena_etil_2", "CH$_3$"}
	}}
	
	\def\uniones{{
		{"cadena_fenil_1", "cadena_fenil_2", 1}, 
		{"cadena_fenil_2", "cadena_fenil_3", 1}, 
		{"cadena_fenil_3", "cadena_fenil_4", 1}, 
		{"cadena_fenil_4", "cadena_fenil_5", 1}, 
		{"cadena_fenil_5", "cadena_fenil_6", 1}, 
		{"cadena_fenil_6", "cadena_fenil_1", 1},
		{"cadena_fenil_6", "grupo_oxigeno", 1},
		{"grupo_oxigeno", "cadena_etil_1", 1},
		{"cadena_etil_1", "cadena_etil_2", 1}
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
	
\end{tikzpicture}
\end{document}
```

Tenemos un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Aromático|aromático]] que se conoce como fenil, y por otro lado tenemos una cadena de $2$ [[Carbono|carbonos]] por lo que sería un etano, finalmente este éter se llama etil-fenil-éter


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```