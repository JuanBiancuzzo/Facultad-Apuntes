---
dia: 2026-03-29
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
Estos son [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Compuesto orgánico|compuestos orgánicos]] construidos por [[Carbono|carbono]] e [[Hidrógeno|hidrógeno]], donde tienen una cadena principal la cual esta dada por una cadena de carbonos

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.7, transform shape, thick]
	\tikzmath {
		\sep = 1.3; \eSep = 0.2; \eInterSep = 0.2; \alto = 0.01;
		\scale = 1; \radio = 0.7; \sepAngulo = 90;
	}
	
	\foreach \i in {1, ..., 5} {
		\coordinate (cadena_\i) at ({\i * \sep}, 0);
	}
	\coordinate (grupo_1) at ($ (cadena_3) + (0, \sep) $);
	\coordinate (grupo_2) at ($ (cadena_4) + (0, \sep) $);
	\coordinate (grupo_3) at ($ (cadena_4) + (0, -\sep) $);
	\coordinate (grupo_4) at ($ (cadena_4) + (\sep, 0) $);
	
	\def\elementos{{ 
		"cadena_1", "cadena_2", "cadena_3", "cadena_4", "cadena_5", 
		"grupo_1", "grupo_2", "grupo_3", "grupo_4"
	}}
	\def\nombres{{ 
		"CH$_3$", "CH$_2$", "CH", "C", "CH$_3$", 
		"CH$_3$", "CH$_3$", "CH$_3$", "CH$_3$" 
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2"}, 
		{"cadena_2", "cadena_3"},
		{"cadena_3", "cadena_4"},
		{"cadena_4", "cadena_5"},
		{"cadena_3", "grupo_1"},
		{"cadena_4", "grupo_2"},
		{"cadena_4", "grupo_3"},
		{"cadena_4", "grupo_4"}
	}}
	
	\tikzmath { \cantElementos = dim(\elementos); }
	\foreach \i [parse=true] in {0, ..., \cantElementos - 1} {
		\tikzmath {
			\coor = \elementos[\i];
			\label = \nombres[\i]; 
		}
		\path (\coor) node[scale=\scale] {\label};
	}

	\tikzmath { \cantUniones = dim(\uniones); }
	\foreach \i [parse=true] in {0, ..., \cantUniones - 1} {
		\tikzmath { 
			\desde = \uniones[\i][0]; \hasta = \uniones[\i][1]; 
		}
		\draw[shorten <=\radio cm, shorten >=\radio cm] 
			(\desde) -- (\hasta);
	}
	
\end{tikzpicture}
\end{document}
```

A cada carbono de la cadena principal, se lo puede clasificar dependiendo de la cantidad de [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente|uniones]] con otros carbonos, se lo llama
* Carbono primario, al que solo tiene una unión con otro carbono
* Carbono secundario, al que tiene $2$ uniones con otros carbonos de la cadena
* Carbono terciario, al que tiene $3$ uniones con otros carbonos de la cadena
* Carbono cuaternario, al que tiene $4$ uniones con otros carbonos de la cadena

## Clasificación
---
![[ingeniería electrónica/quimica/Química orgnánica e inorgánica/img/Clasificación hidrocarburos.png]]

### Alifáticos
---
En estos se pueden dividir en 
* Saturados
	* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Alcano|Alcanos]]
* No saturados
	* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Alqueno|Alquenos]]
	* [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Alquino|Alquinos]]

### Cíclicos
---


