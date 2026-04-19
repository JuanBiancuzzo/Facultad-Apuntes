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
Este representa un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidrocarburo|hidrocarburo]] donde el [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Grupo funcional|grupo funcional]] es un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidróxido#^grupo-hidroxilo|grupo hidroxilo]] $(\text{O} \text{H})$. Se lo puede clasificar en 
* Alcohol primario, si el grupo hidroxilo se une a un [[Carbono|carbono]] primario
* Alcohol segundario, si el grupo hidroxilo se une a un carbono secundario 
* Alcohol terciario, si el grupo hidroxilo se une a un carbono terciario

En el caso que tenga más de un grupo hidroxilo, se los llama polialcohol, y en el caso de tener $2$ o $3$ grupos hidroxilos, se los llama dioles y trioles, respectivamente, que son muy importante para la industria

## Nomenclatura
---
Se nombre el hidrocarburo y se agregar el sufijo "-ol". En el caso que no sea evidente, se agrega el número del carbono que está enlazado

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
	
	\foreach \i in {1, 2} {
		\coordinate (cadena_\i) at ({\i * \sep}, 0);
	}
	\coordinate (grupo_hidroxilo) at ($ (cadena_2) + (\sep, 0) $);
	
	\def\elementos{{ 
		{"cadena_1", "CH$_3$"}, 
		{"cadena_2", "CH$_2$"},
		{"grupo_hidroxilo", "OH"}
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_2", "grupo_hidroxilo", 1}
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

Como vemos, la cadena principal es de $2$ carbonos, con enlaces simples (por lo que es un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Alqueno|alqueno]]), entonces sería un etano, pero como esta el grupo hidroxilo, agregamos el "-ol", y por lo tanto lo llamamos "etanol". Podemos ver que como está enlazado a un carbono primario, este sería un alcohol primario 

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
	
	\foreach \i in {1, ..., 4} {
		\coordinate (cadena_\i) at ({\i * \sep}, 0);
	}
	\coordinate (grupo_hidroxilo) at ($ (cadena_3) + (0, \sep) $);
	
	\def\elementos{{ 
		{"cadena_1", "CH$_3$"}, 
		{"cadena_2", "CH$_2$"},
		{"cadena_3", "CH"},
		{"cadena_4", "CH$_3$"}, 
		{"grupo_hidroxilo", "OH"}
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_2", "cadena_3", 1}, 
		{"cadena_3", "cadena_4", 1}, 
		{"cadena_3", "grupo_hidroxilo", 1}
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

La cadena principal tiene $4$ carbonos, con enlaces simples (por lo que es un alqueno), entonces sería un butano, pero al ser un alcohol y el grupo hidroxilo está en el $2$ carbono, se lo llama "2-butanol". Podemos ver que como está enlazado a un carbono secundario, este sería un alcohol secundario

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
	
	\foreach \i in {1, ..., 3} {
		\coordinate (cadena_\i) at ({\i * \sep}, 0);
		\coordinate (grupo_hidroxilo_\i) at ($ (cadena_\i) + (0, -\sep) $);
	}
	
	\def\elementos{{ 
		{"cadena_1", "CH$_2$"}, 
		{"cadena_2", "CH"},
		{"cadena_3", "CH$_2$"},
		{"grupo_hidroxilo_1", "OH"},
		{"grupo_hidroxilo_2", "OH"},
		{"grupo_hidroxilo_3", "OH"}
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_2", "cadena_3", 1}, 
		{"cadena_1", "grupo_hidroxilo_1", 1},
		{"cadena_2", "grupo_hidroxilo_2", 1},
		{"cadena_3", "grupo_hidroxilo_3", 1}
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

Como la cadena principal es de $3$ carbonos, con enlaces simples, los grupos hidroxilos están enlazados en el carbono $1$, $2$ y $3$, se lo llama 1,2,3-propanetrioles. También conocido como Glycerol o Glycerin