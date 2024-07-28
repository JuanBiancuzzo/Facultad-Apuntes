---
dia: 2023-08-23
tags:
  - sisop/File-system
  - nota
---
### Definición
---
Permite al usuario organizar sus datos para que se persistan a través de un largo período de tiempo.

#### Capa de abstracción
---
Es un tipo genérico de interfaz para cualquier tipo de filesystem que es posible sólo porque el [[Kernel]] implementa una capa de abstracción que rodea esta interface para con el [[Sistema]] de [[Archivo]] de bajo nivel.

Esta capa de abstracción habilita a [[Linux]] a soportar el sistemas de archivos diferentes, incluso si estos difieren en características y comportamiento.

Esto es posible porque [[Virtual File System|VFS]] provee un [[Modelo]] común de archivos que pueda representar cualquier característica y comportamiento general de cualquier sistema de archivos.

Esta capa de abstracción trabaja mediante la definición de interfaces conceptuales básicas y de estructuras que cualquier sistema de archivos soporta.

Los filesystems amoldan su visión de conceptos como "esta es la forma de como abro un archivo" para matchear las expectativa del VFS, todos estos sistemas de archivos soportan nociones tales como [[Archivo|archivos]], [[Directorio|directorios]] y además todos soportan un conjunto de operaciones básicas sobre estos.

El resultado es una capa de abstracción general que le permite al kernel manejar muchos tipos de sistemas de archivos de forma fácil y limpia.

```tikz
\begin{document} 

	\tikzset{ 
	    block/.style={ 
		    draw,
			rounded corners, 
			align=center, 
			font=\bfseries,
			minimum width=2.2cm, 
			minimum height=1.2cm,
			scale=0.9
	    },
	    texto/.style={
		    text=black, 
			align=center, 
			font=\bfseries,
			scale=0.9
	    }
	}

	\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
		\node[block] (write) at (-5.5, 0) {write()};
		\node[block] (sys_write) at (-1.75, 0) {sys write()};
		\node[block] (filesystem) at ( 1.75, 0) {filesystem's\\write method};
		\node[block] (physical) at ( 5.5, 0) {};

		\draw[->] (write) -- (sys_write)
			node[midway] (mid_write_sys) {};
		\draw[->] (sys_write) -- (filesystem)
			node[midway] (mid_sys_file) {};
		\draw[->] (filesystem) -- (physical)
			node[midway] (mid_file_phy) {};

		\draw[thin] (mid_write_sys) -- ++(0, 1.5) -- ++(0, -3);
		\draw[thin] (mid_sys_file) -- ++(0, 1.5) -- ++(0, -3);
		\draw[thin] (mid_file_phy) -- ++(0, 1.5) -- ++(0, -3);

		\path (write.south) -- ++(0, -1)
			node[texto, below=2pt] {user-space};
		\path (sys_write.south) -- ++(0, -1)
			node[texto, below=2pt] {VFS};
		\path (filesystem.south) -- ++(0, -1)
			node[texto, below=2pt] {filesystem};
		\path (physical.south) -- ++(0, -1)
			node[texto, below=2pt] {physical media};
	\end{tikzpicture}
\end{document}
```

#### Definiciones
---
Veamos algunas definiciones

#### Path
---
Es el string que identifica unívocamente a un [[Directorio]] o [[Archivo]] dentro de un dispositivo

#### Root [[Directorio|directory]]
---
Es el [[Directorio]] de que cuelgan todos los demás

#### Absolute path
---
Es la [[File system#Path|ruta]] desde el [[File system#Root Directorio directory|directorio raíz]]

#### Relative path
---
Es la [[File system#Path|ruta]] relativa que se interpreta a partir del [[Directorio]] actual.

#### Current [[Directorio|directory]]
---
Es el [[Directorio]] actual en el cual se está ejecutando el [[Proceso|proceso]]

#### Hard link
---
Es el mapeo entre el nombre y el [[Archivo]] subyacente, esto implica que la estructura de un file system que permite múltiples hard links ya no es de [[Árbol]] invertido. Aquellos [[Sistema operativo]] que lo permiten se cuidan de no crear ciclos asegurándose que la estructura sea un grafo dirigido acíclico.

#### Soft link
---
Se da cuando un archivo puede ser llamado por distintos nombres.

#### Volumen
---
Es una abstracción que corresponde a un disco lógico. En el caso más simple un disco corresponde a un disco físico. Es una colección de recursos físicos de almacenamiento.

#### Mount point
---
Es un punto en el cual el [[File system#Root Directorio directory|root]] de un volumen se engancha dentro de la estructura existente de otro file system.