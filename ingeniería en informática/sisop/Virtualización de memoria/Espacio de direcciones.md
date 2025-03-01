---
dia: 2023-11-19
tags:
  - ingeniería-en-informática/sisop/Virtualización-de-memoria
  - nota/facultad
  - ingeniería-en-informática/estructura/Sistema-ARC
  - carrera/ingeniería-electrónica/embebidos/Memorias
  - carrera/ingeniería-electrónica/estructura/Sistema-ARC
aliases:
  - Address space
---
# Definición
---
El espacio de direcciones o address space es la abstracción fundamental sobre la [[Memoria|memoria]] de una [[Computadora|computadora]]

Crear un mecanismo que permite que la [[Memoria|memoria]] física de una [[Computadora|computadora]] sea utilizada de forma fácil y eficiente llevo paulatinamente a concebir el concepto de espacio de direcciones, la abstracción para la [[Memoria|memoria]]

El address space de un [[Proceso|proceso]] contiene todo el estado de la memoria del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] en ejecución

Por ejemplo
* El código del programa tiene que estar alojado en la memoria en algún lugar
* El programa mientras se está ejecutado usa el [[ingeniería en informática/sisop/Virtualización de memoria/Stack|stack]] para mantener registro de donde se encuentra en la cadena de llamadas a funciones o procedimientos para reservar espacios para las variables locales, para pasar parámetros y a su vez devolver valores de y hacia una rutina.
* Finalmente se utiliza el [[Heap|heap]] para reservar memoria de forma dinámica
* Existen otras cosas de la memoria, como variables estáticas, constantes, etc.

## Ejemplo
---
Se presenta un pequeño espacio de direcciones de $16 ~ KB$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[scale=1.4, transform shape, ultra thick]
		\tikzmath {
			\ancho = 5;
			\alto = 1;
			\dist = 0.7;
		}

		\begin{scope}
			\clip (0, \alto) rectangle ++(\ancho, {5 * \alto});

			\tikzmath {
				\maxlargo = 5 * \alto + \ancho;
				\step = 0.25;
			}
			\coordinate (inicio) at (\ancho, \alto);

			\foreach \x in {0, \step, ..., \maxlargo} {
				\draw[gray, opacity=0.6] ($ (inicio) + (-\x, 0) $)
					-- ++(\maxlargo, \maxlargo);
			}

		\end{scope}

		\draw (0, 0) rectangle ++(\ancho, \alto)
			node[midway, scale=1] {Stack};
		\draw (0, \alto) rectangle ++(\ancho, {5 * \alto})
			node[midway, font=\bfseries] (free) {(free)};
		\draw (0, {6 * \alto}) rectangle ++(\ancho, \alto)
			node[midway, scale=1] {Heap};
		\draw (0, {7 * \alto}) rectangle ++(\ancho, \alto)
			node[midway, scale=1] {Program Code};
		
		\draw[->] ({\ancho / 2}, \alto) -- ($ (free) + (0, -0.5) $);
		\draw[->] ({\ancho / 2}, {6 * \alto}) -- ($ (free) + (0, 0.5) $);

		\path (-\dist, {0 * \alto}) node[scale=0.9] {$ 16 ~ KB $};
		\path (-\dist, {1 * \alto}) node[scale=0.9] {$ 15 ~ KB $};
		\path (-\dist, {6 * \alto}) node[scale=0.9] {$ 2 ~ KB $};
		\path (-\dist, {7 * \alto}) node[scale=0.9] {$ 1 ~ KB $};
		\path (-\dist, {8 * \alto}) node[scale=0.9] {$ 0 ~ KB $};

	\end{tikzpicture}
\end{document}
```

El código fuente del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] vive en lo alto del espacio de direcciones empezando de $0$ en este ejemplo y esta empaquetado en la primer $1 ~ kb$ del espacio de direcciones. El código fuente es estático por ende se puede poner al principio del espacio de direcciones y no necesitará más espacio mientras que el programa se ejecute

Por otro lado hay dos regiones del espacio de direcciones que pueden crecer o achicarse mientras el programa se esta ejecutando. Como ya se sabe son el [[Heap|heap]] y el [[ingeniería en informática/sisop/Virtualización de memoria/Stack|stack]], debido a que ambas en algún momento van a querer crecer siempre se ponen en los extremos del espacio de direcciones enfrentadas entre sí

De esta forma se permite tal crecimiento solamente que el mismo se dirige a direcciones opuestas
* El heap empieza justo después del código fuente y crece hacia abajo
* El stack empieza al final del espacio de direcciones y crece hacia arriba

Por supuesto que cuando se describe de esta forma el espacio de direcciones lo que se esta describiendo es la abstracción que el [[Sistema operativo|sistema operativo]] provee para ejecutar un programa

En realidad el programa no se encuentra en el rango de las direcciones de [[Memoria|memoria]] física entre $0 ~ b$ y $16 ~ kb$. Cuando el sistema operativo realiza esto, se dice que esta [[Virtualización de memoria|virtualizando memoria]]

Por ejemplo, cuando un [[Proceso|proceso]] trata de cargar el contenido de la dirección $0$, que a partir de ahora llamaremos la dirección virtual $0$, de alguna forma el sistema operativo con ayuda de [[Memory Management Unit|MMU]] se asegura que no se cargue la [[Media Access Control Address|dirección física]] $0$ real más bien que se cargue la dirección física en la cual el espacio de direcciones de ese proceso se encuentre