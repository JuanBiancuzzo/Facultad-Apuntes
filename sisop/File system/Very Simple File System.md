---
dia: 2023-11-08
aliases:
  - VSFV
tags:
  - sisop/File-system
  - nota
---
### Definición
---
Este [[File system]] es una versión simplificada de un típico sistema de archivos [[Unix|unix-like]]. Existen diferentes sistemas de archivos y cada uno tiene ventajas y desventajas.

Para pensar en un file system hay que comprender dos conceptos fundamentales:
1. El primero es la estructura de datos de un sistema de archivos. En otras palabras como se guarda la información en el disco para organizar los datos y metadatos de los [[Archivo|archivos]]. El sistema de archivos VSFS emplea un simple estructura, que parece un arreglo de bloques.
2. El segundo aspecto es el método de acceso, como se machean las llamadas hechas por los [[Proceso|procesos]], como [[Open system call|open()]], [[Read system call|read()]], [[Write system call|write()]], etc. en la estructura del sistema de archivos

#### Organización general
---
Lo primero que se debe hacer es dividir al disco en bloques, los [[File system|sistemas de archivos]] simples, como este suelen tener bloques de un solo tamaño. Los bloques tienen un tamaño de $4~K$Bytes.

##### Datos
---
La versión del sistema de archivos debe ser la de una partición de $N$ bloques (de $0$ a $N-1$) de un tamaño de $N * 4 ~ KB$ bloques. Si suponemos en un disco muy pequeño, de unos $64$ bloques, este podría verse así

```tikz
\usetikzlibrary{math}

\begin{document} 
	\tikzmath {
		\sep = 0.25;
		\dim = 0.25;
		\lineas = 1;
		\dis = 2/3;
	}
	\begin{tikzpicture}[scale=2, transform shape]
		\foreach \y in {0, 1} {
			\foreach \x in {0, 1, 2, 3} {
				\foreach \i in {0, ..., 7} {
					\draw[very thick] (
						{\x * ( 2 + \sep ) + \i * \dim}, 
						{-\y * \lineas}
					) rectangle ++(\dim, \dim);
				}

				\tikzmath {
					\min = int((\y * 32) + (\x * 8));
					\max = int(\min + 7);
				}
				
				\path ({\x * ( 2 + \sep )}, {-\y * \lineas - \dis * \dim})
					-- ++({8 * \dim}, 0)
					node[pos=0.05, scale=0.5] {$\min$}
					node[pos=0.95, scale=0.5] {$\max$};
			}
		}
	\end{tikzpicture}
\end{document}
```

A la hora de armar un sistema de archivos una de las cosas que es necesario almacenar son los datos, de hecho la mayor cantidad de espacio ocupado en un file system es por los datos de usuarios. Esta región se llama por ende data region.

Otra vez en nuestro pequeño disco es ocupado por ejemplo por $56$ bloques de datos de los $64$

```tikz
\usetikzlibrary{math}

\begin{document} 
	\tikzmath {
		\sep = 0.25;
		\dim = 0.25;
		\lineas = 1.25;
		\dis = 2/3;
	}
	\begin{tikzpicture}[scale=2, transform shape]
		\foreach \y in {0, 1} {
			\foreach \x in {0, 1, 2, 3} {
				\foreach \i in {0, ..., 7} {
					\draw[very thick] (
						{\x * ( 2 + \sep ) + \i * \dim}, 
						{-\y * \lineas}
					) rectangle ++(\dim, \dim);
				}

				\tikzmath {
					\min = int((\y * 32) + (\x * 8));
					\max = int(\min + 7);
				}
				
				\path ({\x * ( 2 + \sep )}, {-\y * \lineas - \dis * \dim})
					-- ++({8 * \dim}, 0)
					node[pos=0.05, scale=0.5] {$\min$}
					node[pos=0.95, scale=0.5] {$\max$};
			}
		}

		\draw[very thick, |-|] ({2 + \sep}, {\dis * \dim + \dim})
			-- ++({2 * ( 2 + \sep ) + 8 * \dim}, 0)
				node[midway, above=2pt, scale=0.6] {Data Region};
		\draw[very thick, |-|] (0, {-\lineas + \dis * \dim + \dim})
			-- ++({3 * ( 2 + \sep ) + 8 * \dim}, 0)
				node[midway, above=2pt, scale=0.6] {Data Region};
		\foreach \x in {1, 2, 3} {
			\foreach \i in {0, ..., 7} {
				\path[very thick] ({\x * ( 2 + \sep ) + \i * \dim}, 0) 
					rectangle ++(\dim, \dim)
					node[midway, scale=0.5] {D};
			}
		}
		\foreach \x in {0, 1, 2, 3} {
			\foreach \i in {0, ..., 7} {
				\path[very thick] ({\x * ( 2 + \sep ) + \i * \dim}, -\lineas) 
					rectangle ++(\dim, \dim)
					node[midway, scale=0.5] {D};
			}
		}
	\end{tikzpicture}
\end{document}
```

##### Inodos
---
Como se ha visto anteriormente el sistema de archivos debe mantener información sobre cada uno de estos archivos. Esta información es la [[Archivo|metadata]] y es de vital importancia ya que mantiene información como que bloque da datos pertenece a un determinado archivo, el tamaño del archivo, etc. Para guardar esta información en los [[Sistema operativo|sistemas operativos]] [[Unix|unix-like]], se almacena en una estructura llamada [[Inodo]].

Los inodos también deben ser guardarse en el disco, para ello se los guarda en una tabla llamada inode table que simplemente es un array de inodos almacenados en el disco.

```tikz
\usetikzlibrary{math}

\begin{document} 
	\tikzmath {
		\sep = 0.25;
		\dim = 0.25;
		\lineas = 1.25;
		\dis = 2/3;
	}
	\begin{tikzpicture}[scale=2, transform shape]
		\foreach \y in {0, 1} {
			\foreach \x in {0, 1, 2, 3} {
				\foreach \i in {0, ..., 7} {
					\draw[very thick] (
						{\x * ( 2 + \sep ) + \i * \dim}, 
						{-\y * \lineas}
					) rectangle ++(\dim, \dim);
				}

				\tikzmath {
					\min = int((\y * 32) + (\x * 8));
					\max = int(\min + 7);
				}
				
				\path ({\x * ( 2 + \sep )}, {-\y * \lineas - \dis * \dim})
					-- ++({8 * \dim}, 0)
					node[pos=0.05, scale=0.5] {$\min$}
					node[pos=0.95, scale=0.5] {$\max$};
			}
		}

		\draw[very thick, |-|] ({2 + \sep}, {\dis * \dim + \dim})
			-- ++({2 * ( 2 + \sep ) + 8 * \dim}, 0)
				node[midway, above=2pt, scale=0.6] {Data Region};
		\draw[very thick, |-|] (0, {-\lineas + \dis * \dim + \dim})
			-- ++({3 * ( 2 + \sep ) + 8 * \dim}, 0)
				node[midway, above=2pt, scale=0.6] {Data Region};
		\foreach \x in {1, 2, 3} {
			\foreach \i in {0, ..., 7} {
				\path[very thick] ({\x * ( 2 + \sep ) + \i * \dim}, 0) 
					rectangle ++(\dim, \dim)
					node[midway, scale=0.5] {D};
			}
		}
		\foreach \x in {0, 1, 2, 3} {
			\foreach \i in {0, ..., 7} {
				\path[very thick] ({\x * ( 2 + \sep ) + \i * \dim}, -\lineas) 
					rectangle ++(\dim, \dim)
					node[midway, scale=0.5] {D};
			}
		}

		\draw[very thick, |-|] ({3 * \dim}, {\dis * \dim + \dim})
			-- ++({5 * \dim}, 0)
				node[midway, above=2pt, scale=0.6] {Inodes};
		\foreach \i in {3, ..., 7} {
			\filldraw[very thick, fill=darkgray] ({\i * \dim}, 0) 
				rectangle ++(\dim, \dim)
				node[midway, scale=0.5] {I};
		}
	\end{tikzpicture}
\end{document}
```

Cabe destacar que los inodos no son estructuras muy grandes, normalmente ocupan unos $128$ o $256$ bytes. Suponiendo que los inodos ocupan $256$ bytes, un bloque de $4 ~ KB$ puede guardar $16$ inodos por ende nuestro sistema de archivos tendrá como máximo $80$ inodos. Esto representa también la cantidad máxima de archivos que podrá contener nuestro sistema de archivos.

##### Alocación
---
El sistema de archivos tiene los datos (D) y los inodos (I) pero todavía nos falta. Una de las cosas que faltan es saber cuales inodos y cuales bloques están siendo utilizados o está libres. Esta estructura de alocación es fundamental en cualquier sistema de archivos. Existen muchos métodos para llevar este [[Registro|registro]] pero en este caso se utilizará una estructura muy popular llamada bitmap. Una para los datos `data bitmap` otra para los inodos `inode bitmap`.

Un bitmap es una estructura bastante sencilla en la que se mapea $0$ si un objeto está libre y $1$ si el objeto está ocupado. En este caso cada (i) sería el bitmap de inodos y (d) sería el bitmap de datos

```tikz
\usetikzlibrary{math}

\begin{document} 
	\tikzmath {
		\sep = 0.25;
		\dim = 0.25;
		\lineas = 1.25;
		\dis = 2/3;
	}
	\begin{tikzpicture}[scale=2, transform shape]
		\foreach \y in {0, 1} {
			\foreach \x in {0, 1, 2, 3} {
				\foreach \i in {0, ..., 7} {
					\draw[very thick] (
						{\x * ( 2 + \sep ) + \i * \dim}, 
						{-\y * \lineas}
					) rectangle ++(\dim, \dim);
				}

				\tikzmath {
					\min = int((\y * 32) + (\x * 8));
					\max = int(\min + 7);
				}
				
				\path ({\x * ( 2 + \sep )}, {-\y * \lineas - \dis * \dim})
					-- ++({8 * \dim}, 0)
					node[pos=0.05, scale=0.5] {$\min$}
					node[pos=0.95, scale=0.5] {$\max$};
			}
		}

		\draw[very thick, |-|] ({2 + \sep}, {\dis * \dim + \dim})
			-- ++({2 * ( 2 + \sep ) + 8 * \dim}, 0)
				node[midway, above=2pt, scale=0.6] {Data Region};
		\draw[very thick, |-|] (0, {-\lineas + \dis * \dim + \dim})
			-- ++({3 * ( 2 + \sep ) + 8 * \dim}, 0)
				node[midway, above=2pt, scale=0.6] {Data Region};
		\foreach \x in {1, 2, 3} {
			\foreach \i in {0, ..., 7} {
				\path[very thick] ({\x * ( 2 + \sep ) + \i * \dim}, 0) 
					rectangle ++(\dim, \dim)
					node[midway, scale=0.5] {D};
			}
		}
		\foreach \x in {0, 1, 2, 3} {
			\foreach \i in {0, ..., 7} {
				\path[very thick] ({\x * ( 2 + \sep ) + \i * \dim}, -\lineas) 
					rectangle ++(\dim, \dim)
					node[midway, scale=0.5] {D};
			}
		}

		\draw[very thick, |-|] ({3 * \dim}, {\dis * \dim + \dim})
			-- ++({5 * \dim}, 0)
				node[midway, above=2pt, scale=0.6] {Inodes};
		\foreach \i in {3, ..., 7} {
			\filldraw[very thick, fill=darkgray] ({\i * \dim}, 0) 
				rectangle ++(\dim, \dim)
				node[midway, scale=0.5] {I};
		}
		
		\foreach \i/\tag in {1/i, 2/d} {
			\filldraw[very thick, fill=black] ({\i * \dim}, 0) 
				rectangle ++(\dim, \dim)
				node[midway, scale=0.5, white] {\tag};
		}
	\end{tikzpicture}
\end{document}
```

Obviamente cada bitmap ocupa menos de $4 ~KB$, pero se utiliza un bloque por cada uno indefectiblemente. 

##### Super bloque
---
Se podrá observar que queda un único bloque libre en todo el disco. Este bloque es llamada Super bloque (S). El superbloque contiene la información de todo el [[File system|file system]], incluyendo:
* Cantidad [[Inodo|inodos]]
* Cantidad de bloques
* Donde comienza la tabla de inodos
* Donde comienzan los bitmaps

```tikz
\usetikzlibrary{math}

\begin{document} 
	\tikzmath {
		\sep = 0.25;
		\dim = 0.25;
		\lineas = 1.25;
		\dis = 2/3;
	}
	\begin{tikzpicture}[scale=2, transform shape]
		\foreach \y in {0, 1} {
			\foreach \x in {0, 1, 2, 3} {
				\foreach \i in {0, ..., 7} {
					\draw[very thick] (
						{\x * ( 2 + \sep ) + \i * \dim}, 
						{-\y * \lineas}
					) rectangle ++(\dim, \dim);
				}

				\tikzmath {
					\min = int((\y * 32) + (\x * 8));
					\max = int(\min + 7);
				}
				
				\path ({\x * ( 2 + \sep )}, {-\y * \lineas - \dis * \dim})
					-- ++({8 * \dim}, 0)
					node[pos=0.05, scale=0.5] {$\min$}
					node[pos=0.95, scale=0.5] {$\max$};
			}
		}

		\draw[very thick, |-|] ({2 + \sep}, {\dis * \dim + \dim})
			-- ++({2 * ( 2 + \sep ) + 8 * \dim}, 0)
				node[midway, above=2pt, scale=0.6] {Data Region};
		\draw[very thick, |-|] (0, {-\lineas + \dis * \dim + \dim})
			-- ++({3 * ( 2 + \sep ) + 8 * \dim}, 0)
				node[midway, above=2pt, scale=0.6] {Data Region};
		\foreach \x in {1, 2, 3} {
			\foreach \i in {0, ..., 7} {
				\path[very thick] ({\x * ( 2 + \sep ) + \i * \dim}, 0) 
					rectangle ++(\dim, \dim)
					node[midway, scale=0.5] {D};
			}
		}
		\foreach \x in {0, 1, 2, 3} {
			\foreach \i in {0, ..., 7} {
				\path[very thick] ({\x * ( 2 + \sep ) + \i * \dim}, -\lineas) 
					rectangle ++(\dim, \dim)
					node[midway, scale=0.5] {D};
			}
		}

		\draw[very thick, |-|] ({3 * \dim}, {\dis * \dim + \dim})
			-- ++({5 * \dim}, 0)
				node[midway, above=2pt, scale=0.6] {Inodes};
		\foreach \i in {3, ..., 7} {
			\filldraw[very thick, fill=darkgray] ({\i * \dim}, 0) 
				rectangle ++(\dim, \dim)
				node[midway, scale=0.5] {I};
		}
		
		\foreach \i/\tag in {1/i, 2/d} {
			\filldraw[very thick, fill=black] ({\i * \dim}, 0) 
				rectangle ++(\dim, \dim)
				node[midway, scale=0.5, white] {\tag};
		}
		
		\path[very thick] (0, 0) rectangle ++(\dim, \dim)
				node[midway, scale=0.5] {S};
	\end{tikzpicture}
\end{document}
```

