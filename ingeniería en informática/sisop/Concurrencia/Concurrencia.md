---
dia: 2023-03-29
tags:
  - carrera/ingeniería-electrónica/taller/Concurrencia
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - carrera/ingeniería-en-informática/concurrentes/Introducción
  - carrera/ingeniería-en-informática/taller/Concurrencia
  - nota/facultad
  - carrera/ingeniería-en-informática/concurrentes/Introducción
referencias:
  - "787"
etapa: empezado
vinculoFacultad:
  - tema: Introducción
    capitulo: 1
    materia: Programación Concurrente
    carrera: Ingeniería en informática
  - tema: Introduccion
    capitulo: "0"
    materia: Sistemas Distribuidos 1
    carrera: Ingeniería en informática
  - tema: Sincronización
    capitulo: 4
    materia: Programación Concurrente
    carrera: Ingeniería en informática
  - tema: Concurrencia
    capitulo: 5
    materia: Sistemas operativos
    carrera: Ingeniería en informática
  - tema: Concurrencia
    capitulo: 4
    materia: Taller de programación 1
    carrera: Ingeniería en informática
aliases:
  - Programación concurrente
  - Modelo de concurrencia#Modelos
  - Corrección de un programa asincrónico#Corrección
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un programa concurrente, las diferentes partes de un programa se ejecutan independientemente. No necesariamente al mismo tiempo

Este programa consiste de un conjunto finito de procesos secuenciales. Y estos [[Proceso|procesos]] están compuestos por un conjunto finito de [[ingeniería en informática/sisop/Concurrencia/Operación atómica|instrucciones atómicas]]

El proceso concurrente, es intercalar estas instrucciones atómicas del conjunto de procesos secuenciales. Como ejemplo, dado el siguiente orden causal

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{verde}{RGB}{130, 153, 120} 
\definecolor{azul}{RGB}{129, 153, 191} 

\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
    \tikzmath { \ancho = 1.2; \alto = 0.7; \sep = 1.2; \porcen = 0.6; }    
	
	\coordinate (cenIa) at (0, 0);
	\coordinate (cenIb) at ($ (cenIa) + ({\sep + \ancho}, 0) $);
	\coordinate (cenIc) at ($ (cenIb) + ({\sep + \ancho}, 0) $);
	
	\coordinate (cenI1) at ($ (cenIa) + ({1.5 * \sep + \ancho}, {2 * \alto}) $);
	\coordinate (cenI2) at ($ (cenI1) + ({\sep + \ancho}, 0) $);
	
	\foreach \nombre/\color in {Ia/verde, Ib/verde, Ic/verde, I1/azul, I2/azul} {
	    \filldraw[fill=\color] ($ (cen\nombre) + ({-\ancho / 2}, {-\alto / 2}) $) 
		    rectangle ++(\ancho, \alto)
		        node[midway, white, scale=0.8] {\nombre};
	    \path ($ (cen\nombre) + ({-\ancho / 2}, 0) $) -- ++(\ancho, 0)
			node[pos = 0] (ini\nombre) {}
			node[pos = 1] (fin\nombre) {};
	}
	
	\foreach \partida/\llegada in {Ia/Ib, Ib/Ic, Ia/I1, I1/I2} {
        \draw[->, shorten <=0.1cm, shorten >=0.1cm] (fin\partida.center) 
			.. controls ($ (fin\partida) + ({\porcen * \sep}, 0) $) and
				($ (ini\llegada) + ({-\porcen * \sep}, 0) $)
	        .. (ini\llegada.center);
	}
	\path (finIc.center) node[right=2pt, scale=0.8] {T1};
	\path (finI2.center) node[right=2pt, scale=0.8] {T2};
    
\end{tikzpicture}
\end{document}
```

Se podría tener las siguientes posibles ordenamiento de ejecución

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{verde}{RGB}{130, 153, 120} 
\definecolor{azul}{RGB}{129, 153, 191} 

\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
    \def\nombres {{ "Ia", "Ib", "Ic", "I1", "I2" }}
    \def\colores {{ "verde", "verde", "verde", "azul", "azul" }}
    \tikzmath { \ancho = 1.2; \alto = 0.7; \sep = 1.2; \cant = dim(\nombres); } 
	
	\foreach \corrida [count=\j from 0] in {{0, 3, 4, 1, 2}, 
		{0, 3, 1, 4, 2},
		{0, 1, 3, 4, 2},
		{0, 1, 3, 2, 4}} {
		\begin{scope}[cm={1, 0, 0, 1, (0, {-2 * \j * \alto})}]
			\foreach \indice [count=\i from 0] in \corrida {
				\tikzmath {
				    \nombre = \nombres[\indice];
				    \color = \colores[\indice];
				    \prevI = int(\i - 1);
				}
				
				\coordinate (cen) at ({\i * (\sep + \ancho)}, 0);
			    \filldraw[fill=\color] ($ (cen) + ({-\ancho / 2}, {-\alto / 2}) $) 
				    rectangle ++(\ancho, \alto)
				        node[midway, white, scale=0.8] {\nombre};
			    \path ($ (cen) + ({-\ancho / 2}, 0) $) -- ++(\ancho, 0)
					node[pos = 0] (ini\prevI) {}
					node[pos = 1] (fin\i) {};
			}
			
			\foreach \i [parse=true] in {0, ..., \cant-2} {
		        \draw[->, shorten <=0.1cm, shorten >=0.1cm] (fin\i) 
			        -- (ini\i);
			}
		\end{scope}
	}
    
\end{tikzpicture}
\end{document}
```


Este también es un desafío para un [[Sistema operativo|sistema operativo]], al tener que manejar los procesos de manera de [[Mínimo|minimizar]] el tiempo sin hacer nada

## Modelos
---
* [[Estado mutable compartido|Estado mutable compartido]]
* [[Fork-join|Paralelismo fork-join]]
* [[Concurrencia por canales|Canales/mensajes]]
* [[Programación asincrónica|Programación asincrónica]]
* [[Concurrencia por actores|Actores]]

## Desafíos
---
Se necesita sincronizar y comunicar entre procesos diferentes
* Sincronización
	* Coordinación temporal entre distintos procesos
* Comunicación
	* Datos que necesitan compartir los procesos para cumplir la función del programa

## Problemas
---
Al programar de forma concurrente, aparecen problemas que en un programa secuencia no ocurriría
*  [[Race condition#Definición|Condiciones de carrera]]
* Atomicity violation
	* El deseo de la serialización entre múltiples accesos a memoria es violado
* Order violation
	* El orden deseado entre accesos a memoria se ha cambiado
* [[ingeniería en informática/sisop/Concurrencia/Deadlock|Deadlocks]]

## Corrección
---
Mientras que en programas secuenciales es suficiene con debuggear para encontrar errores, ya que ante una misma entrada se obtiene siempre la misma salida. En programas concurrentes, la salida puede depender del escenario que resultó en la ejecución

La corrección ó correctness de un programa concurrente tiene las propiedades de 
* Safety, que implica que siempre es correcto el resultado
	* Exclusión mutua, $2$ procesos no deben intercalar ciertas subcuencias de instruccióones
	* Ausencia de [[ingeniería en informática/sisop/Concurrencia/Deadlock|deadlock]], un [[ingeniería electrónica/señales/Señales y sistemas/Sistema|sistema]] que aún no finalizo debe poder continuar realizando su tarea, es decir, avanzar productivamente
* Liveness, que implica que se vuelve correcto el resultado
	* Ausencia de starvation, todo proceso que esté listo para utilizar un recurso debe recibir dicho recurso eventualmente
	* Fairness, un escenario es (débilmente) fair, si en algún estado en el escenario, una instrucción que está continuamente habilitada, eventualmente aparece en el escenario


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```