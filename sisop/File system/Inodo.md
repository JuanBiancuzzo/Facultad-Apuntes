---
dia: 2023-11-08
tags:
  - sisop/File-system
  - nota/facultad
---
### Definición
---
Esta es una de las estructuras almacenadas en el disco más importantes. Casi todos los [[File system|sistemas de archivos]] [[Unix|unix-like]] son así. Su nombre, probablemente provenga de los viejos sistemas [[Unix]] en los que estos se almacenaban en un arreglo, y este arreglo estaba indexado de forma de como acceder a un inodo en particular.

Un inodo simplemente es referido por un número llamado `inumbre` que sería lo que hemos llamado el nombre subyacente en el disco de un archivo. En este sistema de archivos y en varios otros, dado un `inumber` se puede saber directamente en que parte del disco se encuentra el inodo correspondiente

```tikz
\usetikzlibrary{math}

\begin{document} 
	\begin{tikzpicture}[scale=2, transform shape]
		\foreach \x in {0, ..., 7} {
			\draw[very thick] (\x, 0) rectangle ++(1, 1);
		}	
		\foreach \x in {0, 4, ..., 32} {
			\path ({\x / 4}, 0) 
				node[below=2pt, scale=0.6] {$\x$KB};
			\draw[dashed] ({\x / 4}, 1) -- ++(0, 0.5);
		}

		\foreach \x/\tag in {0/Super, 1/{i-bmap}, 2/{d-bmap}} {
			\path (\x, 0) rectangle ++(1, 1)
				node[midway, scale=0.6] {\tag};
		}
		\foreach \x in {0, ..., 4} {
			\path ({\x + 3}, 1.25) -- ++(1, 0)
				node[midway, scale=0.6] {iblock $\x$};
		}


		\foreach \x in {0, ..., 4} {
			\foreach \i in {0, ..., 3} {
				\foreach \j in {0, ..., 3} {
					\tikzmath{ 
						\iblock = int((\x * 16) + (\j * 4) + \i); 
					}
					\draw (
						{(\x + 3) + (\i * 0.25)}, 
						{(1 - \j * 0.25)}
					) rectangle ++(0.25, -0.25)
						node[midway, scale=0.5] {$\iblock$};
				}	
			}
		}
	\end{tikzpicture}
\end{document}
```

Para leer el inodo número $32$, el sistema de archivos debe
1. Calcular el offset en la región de inodos `32 * sizeof(inode) = 81922` 
2. Sumarlo a la dirección inicial de las inode table en el disco o sea $12 ~ Kb + 8192 ~ b$
3. Llegar a la dirección en el disco deseada que es la $20 ~ Kb$