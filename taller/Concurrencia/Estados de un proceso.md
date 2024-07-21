---
dia: 2023-04-09
capitulo: 4
tags:
  - taller/Concurrencia
  - nota
---
### Definición
---
Dado un [[Proceso|proceso]] podemos describir su estado en el siguiente [[Grafo|grafo]]:

```tikz
\begin{document}
	\tikzset{ 
	    block/.style={
		    draw=black,
		    text=black,
			rounded corners, 
			align=center, 
			font=\bfseries,
			minimum width=2.3cm, 
			minimum height=1.2cm
	    },
	    texto/.style={
		    text=black,
		    align=center, 
		    font=\bfseries,
	    }
	}

	\begin{tikzpicture}[ultra thick]
		\node[block] at (-7,  3) (nuevo) {Nuevo};
		\node[block] at (-3,  0) (listo) {Listo};
		\node[block] at ( 0, -5) (espera) {En espera};
		\node[block] at ( 3,  0) (ejecucion) {En ejecución};
		\node[block] at ( 7,  3) (finalizado) {Finalizado};

		\draw[->] (nuevo.south) .. 
			controls ++(0, -1) and ++(-3, 0)
			.. (listo.west)
			node[texto, midway, above right=2pt] {Admitir};
		\draw[->] (ejecucion.east) .. 
			controls ++(3, 0) and ++(0, -1)
			.. (finalizado.south)
			node[texto, midway, above left=2pt] {Terminar};
			
		\draw[->] (listo.north) .. 
			controls ++(0, 3) and ++(0, 3)
			.. (ejecucion.north)
			node[texto, midway, above=2pt] {Seleccionar};
		\draw[->] (listo.south) .. 
			controls ++(0, -3) and ++(0, -3)
			.. (ejecucion.south)
			node[texto, midway, below=2pt] {Interrumpir};

		\draw[->] (ejecucion.south) .. 
			controls ++(0, -3) and ++(2, 0)
			.. (espera.east)
			node[texto, midway, right=2pt] {Finalizar\\Entrada-Salida};
		\draw[->] (espera.west) .. 
			controls ++(-2, 0) and ++(0, -3)
			.. (listo.south)
			node[texto, midway, left=2pt] {Solicitar\\Entrada-Salida};
	\end{tikzpicture}
\end{document}
```
#### Estados
---
En una visión simplificada (una versión más compleja sería la de [[Estados de un proceso en Linux|estados en linux]]), un [[Proceso|proceso]] puede encontrarse en los siguientes estados
#### Running
---
El [[Proceso|proceso]] se encuentra corriendo en un [[Procesador|procesador]]. Está ejecutando instrucciones

#### Ready
---
En este estado el [[Proceso|proceso]] está listo para correr pero por algún motivo el [[Sistema operativo|SO]] ha decidido no ejecutarlo por el momento

#### Blocked
---
En este estado el [[Proceso|proceso]] ha ejecutado algún tipo de operación que hace que éste no esté listo para ejecutarse hasta que algún evento suceda
