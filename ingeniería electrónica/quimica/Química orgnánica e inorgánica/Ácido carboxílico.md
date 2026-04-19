---
dia: 2026-04-19
etapa: empezado
referencias: []
aliases:
  - Ácido dicarboxílico
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
Este representa un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Hidrocarburo|hidrocarburo]] donde el [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Grupo funcional|grupo funcional]] es un [[Carboxilo|carboxilo]] $(\text{C} \text{O}_2 \text{H})$ (que parece un [[ingeniería electrónica/quimica/Química orgnánica e inorgánica/Oxoácido|oxoácido]]) donde el enlace hay un [[ingeniería electrónica/quimica/Enlaces químicos/Unión covalente#^doble|enlace doble]] entre el [[Carbono|carbono]] y el [[Oxígeno|oxígeno]]. Este grupo siempre se encuentra en un extremo de la cadena, ya que el carbono tiene $3$ enlaces formados

En el caso de tener dos grupo carboxílicos, se los conoce como ácidos dicarboxílicos, y no puede haber más ya que se agregan a los extremos de la cadena

## Nomenclatura
---
Se nombre el hidrocarburo y se agregar el prefijo "ácido-" y el sufijo "-oico". Nunca es necesario aclarar la posición porque se sabe que siempre esta en una punta, y haría que los números sea lo más chico posible

En el caso de ser un ácido dicarboxílico, el sufijo es "-dioico"

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
	\coordinate (cadena_1) at ($ (cadena_2) + (\sep, 0) $);
	\coordinate (grupo_oxigeno) at ($ (cadena_1) + (\sep, 0) $);
	\coordinate (grupo_hidroxilo) at ($ (cadena_1) + (0, \sep) $);
	
	\def\elementos{{ 
		{"cadena_1", "C"}, 
		{"cadena_2", "CH$_3$"},
		{"grupo_oxigeno", "O"},
		{"grupo_hidroxilo", "OH"}
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_1", "grupo_oxigeno", 2},
		{"cadena_1", "grupo_hidroxilo", 1}
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

Tenemos una cadena principal de $2$ carbonos, por lo que se nombra ácido etanoico


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
	
	\foreach \dir/\union [count=\i] in {-1/1, 1/4} {
		\coordinate (grupo_oxigeno_\i) at 
			($ (cadena_\union) + ({\dir * \sep}, {0.3 * \sep}) $);
		\coordinate (grupo_hidroxilo_\i) at 
			($ (cadena_\union) + ({\dir * \sep}, {-0.3 * \sep}) $);
	}
	
	\def\elementos{{ 
		{"cadena_1", "C"}, 
		{"cadena_2", "CH$_2$"},
		{"cadena_3", "CH$_2$"},
		{"cadena_4", "C"}, 
		{"grupo_oxigeno_1", "O"},
		{"grupo_oxigeno_2", "O"},
		{"grupo_hidroxilo_1", "OH"},
		{"grupo_hidroxilo_2", "OH"}
	}}
	\def\uniones{{
		{"cadena_1", "cadena_2", 1}, 
		{"cadena_2", "cadena_3", 1}, 
		{"cadena_3", "cadena_4", 1}, 
		{"cadena_1", "grupo_oxigeno_1", 2},
		{"cadena_1", "grupo_hidroxilo_1", 1},
		{"cadena_4", "grupo_oxigeno_2", 2},
		{"cadena_4", "grupo_hidroxilo_2", 1}
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

La cadena principal tiene $4$ carbonos, y tiene dos grupos carboxilos, por lo que se nombra ácido butanodioico