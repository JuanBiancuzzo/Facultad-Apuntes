---
dia: 2026-04-18
etapa: empezado
referencias: []
aliases: 
  - Dieno#Dienos
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
Estos son los [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidrocarburo|hidrocarburos]] donde su estructura esta dada por una cadena de [[Carbono|carbonos]] unidos por [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^simple|enlaces covalentes simples]] y al menos un [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^doble|enlace doble]], el resto de los enlaces necesarios se cubren con los [[Hidrógeno|hidrógenos]]. Cabe aclarar que la cadena principal debe incluir el doble enlace

Se los llama hidrocarburos insaturados, porque el doble enlace se puede abrir para completar con otros [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Grupo funcional|grupos funcionales]]. Todos los carbonos que participan del enlace doble presentan [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hibridación#Hibridación sp2|hibridación sp2]]

### Dienos
---
Existe el subgrupo, dentro de los alquenos, que se llaman dienos, los cuales presentan $2$ dobles enlaces separados por un enlace simple, y se los refiere como enlaces conjugados

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\begin{tikzpicture}[scale=1.7, transform shape, thick]
	\tikzmath {
		\sep = 1.0; \eSep = 0.2; \eInterSep = 0.08; \alto = 0.01;
		\scale = 1; \radio = 0.5; \sepAngulo = 90;
	}
	
	\foreach \i in {1, ..., 4} {
		\coordinate (cadena_\i) at ({\i * \sep}, 0);
	}
	
	\def\elementos{{ 
		{"cadena_1", "C"}, 
		{"cadena_2", "C"}, 
		{"cadena_3", "C"}, 
		{"cadena_4", "C"}
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2", 2}, 
		{"cadena_2", "cadena_3", 1}, 
		{"cadena_3", "cadena_4", 2}
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
			\distancia = sqrt(\diffx^2 + \diffy^2);
			
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

Estos $4$ carbonos, presentan hibridación sp2, y esta característica es importante para la industria de polímeros, ya que los dobles enlaces son más fáciles de abrir, formando un enlace doble en el medio y permitiendo extender la cadena

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
	
	\def\elementos{{ 
		{"cadena_1", "CH$_2$"}, 
		{"cadena_2", "CH"}, 
		{"cadena_3", "CH"}, 
		{"cadena_4", "CH$_2$"}
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_2", "cadena_3", 2}, 
		{"cadena_3", "cadena_4", 1}
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
			\distancia = sqrt(\diffx^2 + \diffy^2);
			
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
	
	\begin{scope}[shorten <=\radio cm, shorten >=\radio cm] 
		\draw (cadena_1) -- ++(-\sep, 0);
		\draw (cadena_4) -- ++(\sep, 0);
	\end{scope}
	
\end{tikzpicture}
\end{document}
```


## Nomenclatura
---
Siempre tiene el sufijo "-eno", y dependiendo de la cantidad de carbonos que tenga la cadena principal, se usa los siguientes prefijos

| Cantidad de C | Prefijo   |
| ------------- | --------- |
| $1$           | met-      |
| $2$           | et-       |
| $3$           | prop-     |
| $4$           | but-      |
| $5$           | pent-     |
| $6$           | hex-      |
| $7$           | hept-     |
| $8$           | oct-      |
| $9$           | non-      |
| $10$          | dec-      |
| $11$          | undex-    |
| $12$          | dodec-    |
| $13$          | tridec-   |
| $14$          | tetradec- |

Para los grupos funcionales, se nombran primero, con un número indicando el carbono de la cadena al que están unidos. Se agrega la posición del/los doble enlaces, en el caso que existan multiples posibilidades. Los números en el nombre deben ser los más pequeños

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
	
	\def\elementos{{ 
		{"cadena_1", "CH$_2$"}, 
		{"cadena_2", "CH$_2$"}
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2", 2}
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
			\distancia = sqrt(\diffx^2 + \diffy^2);
			
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

Como tiene $2$ carbonos, y tiene un enlace doble en el único lugar posible, se lo llama etano o etileno, siendo este el alqueno más chico


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
	
	\foreach \i in {1, ..., 5} {
		\coordinate (cadena_\i) at ({\i * \sep}, 0);
	}
	
	\def\elementos{{ 
		{"cadena_1", "CH$_3$"}, 
		{"cadena_2", "CH"}, 
		{"cadena_3", "CH"}, 
		{"cadena_4", "CH$_2$"}, 
		{"cadena_5", "CH$_3$"}
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_2", "cadena_3", 2}, 
		{"cadena_3", "cadena_4", 1}, 
		{"cadena_4", "cadena_5", 1}
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
			\distancia = sqrt(\diffx^2 + \diffy^2);
			
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

Este como solo existe los elementos de la cadena, son $5$ carbonos, y el enlace doble esta entre el carbono $2$ y el carbono $3$, se llama 2-penteno