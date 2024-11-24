---
dia: 2024-10-15
estado: Sin empezar
tags:
  - índice
  - nota/investigacion
  - ingeniería-en-informática/sisop/Kernel
  - investigación/sistemas-operativos/kernel
orden: 324
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar como funciona y que elementos son importantes en un kernel

## Resumen
---
Viendo al sistema como un conjunto de capas, el [[Sistema operativo|sistema operativo]] se denomina comúnmente kernel del sistema, o simplemente kernel, lo que enfatiza su aislamiento de los [[Programa|programas]] de los usuarios. A pesar de esto, el kernel también es un programa.

Gracias a la existencia del kernel los programas son independientes del [[Hardware]] subyacente, es fácil moverlos entre sistemas [[Unix]] que se ejecutan en hardware diferentes dado que los programas no hacen suposiciones sobre el hardware subyacente, sino que se comunican con el kernel y no con el hardware directamente

```tikz
\usetikzlibrary{math}

\begin{document} 
	\tikzmath{
		\r1 = 1.3;
		\r2 = 2.6;
		\r3 = 4;
		\r4 = 5.5;
	}

	\tikzset{ 
	    texto/.style={
		    text=black, 
			align=center, 
			font=\bfseries,
			scale=0.9
	    }
	}

	\begin{tikzpicture}[scale=1, transform shape, ultra thick]
		\filldraw[black!95!white, draw=black] (0, 0) circle (\r4);
		\foreach \div in {7, 11} {
			\draw (0, 0) -- (
				{\r4 * sin(360 * (\div + 0.5) / 13)}, 
				{\r4 * cos(360 * (\div + 0.5) / 13)}	
			);
		}
		\path (0, 0) -- (0, \r4)
			node[texto, pos=0.85] {Otros programas};
		\path (0, 0) -- (-\r4, 0)
			node[texto, pos=0.85] {CC};
		\path (0, 0) -- (0, -\r4)
			node[texto, pos=0.85] {Otros programas};
		
		
		\filldraw[black!80!white, draw=black] (0, 0) circle (\r3);
		\foreach \div in {0, ..., 13} {
			\draw (0, 0) -- (
				{\r3 * sin(360 * (\div + 0.5) / 13)}, 
				{\r3 * cos(360 * (\div + 0.5) / 13)}				
			);
		}
		\foreach \div/\tag in {
			0/sh, 1/nroff, 2/{a.out}, 3/date, 4/wc, 5/grep, 6/ed, 
			7/vi, 8/ld, 9/as, 10/comp, 11/cpp, 12/cd} {
			\path (0, 0) -- (
				{\r3 * sin(360 * \div / 13)}, 
				{\r3 * cos(360 * \div / 13)}
			) node[texto, pos=0.8] {\tag};
		}

		\filldraw[black!65!white, draw=black] (0, 0) circle (\r2);
		\path (0, 0) -- ({\r2 * sin(0)}, {\r2 * cos(0)}) 
			node[texto, pos=0.7] {Kernel};

		\filldraw[black!50!white, draw=black] (0, 0) circle (\r1);
		\path (0, 0) node[texto, midway] {Hardware};

	\end{tikzpicture}
\end{document}
```


Este contiene por un lado una capa para la gestión de dispositivos específicos y por otro una serie de servicios para la gestión de dispositivos agnósticos del hardware que son utilizados por las aplicaciones.

Cuando el código fuente de esta capa es ejecutado, la [[Computadora]] pasa a un estado llamado modo supervisor.

### Tareas especificas del kernel
---
Este programa hace
* [[Scheduler|Planificar]] la ejecución de las aplicaciones
* Gestionar la [[Memoria|memoria]]
* Proveer un [[File system|sistema de archivos]]
* Creación y finalización de [[Proceso|procesos]]
* Acceder a los dispositivos
* Proveer un API

### Tipos de kernel
---
Existen básicamente dos tipos de estructuras del kernel
* [[Kernel monolítico|Kernel Monolítico]]
* [[Micro kernel|Micro Kernel]]

### Modos de operación
---
![[Modo de operación del kernel#Definición]]

### Transferencia entre modos
---
Una vez que el [[Hardware]] posee los mecanismos necesarios para que pueda ejecutarse un kernel, tiene que haber una o varias formas de alternar entre [[User mode|modo usuario]] y [[Kernel mode|modo kernel]]

Este tipo de transición no son eventos raros y por ende deben tener un mecanismo que sea seguro y rápido.

#### De Modo usuario a Modo kernel
---
Existen tres formas por las cuales se debería pasar de modo usuario a modo kernel
* [[Interrupción|Interrupciones]]
* [[Excepción del procesador|Excepciones del procesador]]
* Ejecución de [[System call|system calls]]

De hecho estas tres formas representan
* Evento externo (interrupciones)
* Evento interno inesperado (excepciones)
* Evento interno intencional (system calls)

#### De Modo kernel a Modo usuario
---
Así como hay varias formas de pasar de modo usuario a modo kernel, también hay varias formas de pasar de modo kernel a modo usuario
* Un [[Proceso#API's|nuevo proceso]]
	* Cuando se inicia un nuevo [[Proceso]] el [[Kernel]] copia el [[Programa]] en la [[Memoria|memoria]], setea el contador del programa apuntando a la primera instrucción del proceso setea el [[ingeniería en informática/sisop/Virtualización de memoria/Stack|stack]] pointer a la base del stack de usuario y switchea a modo usuario
* Continuar después de una [[Interrupción|interrupción]], una [[Excepción del procesador|excepción del procesador]] o de una [[System call|system call]]
	* Una vez que el kernel termino de manejar el pedido, este continua con la ejecución de procesos interrumpidos mediante la restauración de todos los [[Registro|registros]] y cambiando el modo a nivel usuario
* Cambio entre diferentes procesos
	* En algunos casos puede pasar que el kernel decida ejecutar otro proceso que no sea el que se estaba ejecutando, en este caso el kernel carga el [[Estados de un proceso|estado del proceso]] nuevo a través de la PCB y cambia a modo usuario

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarArchivos", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/investigacion/biblioIndice', { indice: dv.current() });
```

