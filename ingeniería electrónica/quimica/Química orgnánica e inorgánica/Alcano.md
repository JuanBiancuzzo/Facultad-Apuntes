---
dia: 2026-04-18
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
Estos son los [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidrocarburo|hidrocarburos]] más simples, su estructura esta dada por una cadena de [[Carbono|carbonos]] unidos por [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^simple|enlaces covalentes simples]], el resto de los enlaces necesarios se cubren con los [[Hidrógeno|hidrógenos]]

Se los llama hidrocarburos saturados, ya que tienen todos sus enlaces ocupados. Todos los carbonos de la cadena presentan [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hibridación#Hibridación sp3|hibridación sp3]]

## Nomenclatura
---
Siempre tiene el sufijo "-ano", y dependiendo de la cantidad de carbonos que tenga la cadena principal, se usa los siguientes prefijos

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
Para los [[Grupo funcional|grupos funcionales]], se nombran primero, con un número indicando el carbono de la cadena al que están unidos. Los números en el nombre deben ser los más pequeños

## Ejemplo
---
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
	
	\foreach \i in {1, ..., 4} {
		\coordinate (cadena_\i) at ({\i * \sep}, 0);
	}
	\coordinate (grupo_mutano) at ($ (cadena_2) + (0, \sep) $);
	\coordinate (grupo_cloro) at ($ (cadena_4) + (0, \sep) $);
	
	\def\elementos{{ 
		"cadena_1", "cadena_2", "cadena_3", "cadena_4", 
		"grupo_mutano", "grupo_cloro"
	}}
	\def\nombres{{ 
		"CH$_3$", "CH", "CH$_2$", "CH$_2$", 
		"CH$_3$", "Cl"
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2"}, 
		{"cadena_2", "cadena_3"},
		{"cadena_3", "cadena_4"},
		{"cadena_2", "grupo_mutano"},
		{"cadena_4", "grupo_cloro"}
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

La cadena principal tiene $4$ carbonos, por lo que el prefijo tiene que ser "but-". También vemos que la cadena principal tiene dos grupos funcionales, el [[Cloro|cloro]] y un metano. Al ser un grupo funcional el metano, se le cambia el sufijo por "-il"

Seríamos capaces de nombrarlo de dos formas
* 2-metil-4-cloro-butano
* 3-metil-1-cloro-butano

Donde nos quedamos en la segunda opción porque tiene los valores más chicos posibles

Como aclaración, se nombra primero al grupo funcional menos importante, químicamente hablando. En este caso es el metano el menos importante ya que las características del cloro son más relevantes para las reacciones de un alcano

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
	
	\foreach \i in {1, 2} {
		\coordinate (cadena_\i) at ({\i * \sep}, 0);
	}
	\coordinate (grupo_fluor_1) at ($ (cadena_1) + (0, \sep) $);
	\coordinate (grupo_fluor_2) at ($ (cadena_2) + (0, \sep) $);
	
	\def\elementos{{ 
		"cadena_1", "cadena_2", 
		"grupo_fluor_1", "grupo_fluor_2" 
	}}
	\def\nombres{{ 
		"CH$_2$", "CH$_2$", 
		"F", "F"
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2"}, 
		{"cadena_1", "grupo_fluor_1"},
		{"cadena_2", "grupo_fluor_2"}
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

La cadena principal tiene dos carbonos, por lo que el prefijo es "-et", tiene dos grupos funcionales, donde ambos son [[Flúor|flúores]] uno en el primer carbono y otro en el segundo, por lo tanto se nombre 1,2-difluoro-etano 

Como aclaración, notemos que se menciona igual como "difluoro" a pesar que estamos marcando dos ubicaciones, es decir, no solo falta decir que hay dos flúores por su ubicación, sino que también en el nombre del flúor

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
	
	\foreach \i in {1, 2} {
		\coordinate (cadena_\i) at ({\i * \sep}, 0);
	}
	\coordinate (grupo_fluor_1) at ($ (cadena_2) + (0, \sep) $);
	\coordinate (grupo_fluor_2) at ($ (cadena_2) + (0, -\sep) $);
	
	\def\elementos{{ 
		"cadena_1", "cadena_2", 
		"grupo_fluor_1", "grupo_fluor_2" 
	}}
	\def\nombres{{ 
		"CH$_3$", "CH", 
		"F", "F"
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2"}, 
		{"cadena_2", "grupo_fluor_1"},
		{"cadena_2", "grupo_fluor_2"}
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
			\cantEnlaces = \uniones[\i][2];
		}
		\draw[shorten <=\radio cm, shorten >=\radio cm] 
			(\desde) -- (\hasta);
	}
	
\end{tikzpicture}
\end{document}
```

La cadena principal tiene dos carbonos, por lo que el prefijo es "-et", tiene dos grupos funcionales, donde ambos son flúores, pero ahora ambos en el primer carbono (es el primero porque queremos el número más chico), por lo tanto se nombre 1,1-difluoro-etano 
