---
dia: 2024-03-13
tags:
  - carrera/ingeniería-electrónica/señales/Señales-y-sistemas
  - nota/facultad
vinculoFacultad:
  - tema: Señales y sistemas
    capitulo: 1
    materia: Señales y sistemas
    carrera: Ingeniería electrónica
---
# Definición
---
Un [[Sistema|sistema]] cuya entradas son [[Señal|señales]] en el [[Espacio vectorial|espacio vectorial]] $\mathcal{H}_1$ y sus salidas son señales en el espacio vectorial $\mathcal{H}_2$ se puede representar en forma matemática por un [[Operador|operador]] $\mathcal{T} : \mathcal{H}_1 \to \mathcal{H}_2$. En forma compacta la acción del sistema representado por $\mathcal{T}$ se puede escribir como $$ y(t) = \mathcal{T} \left[ x(t) \right] $$ donde $x(t) \in \mathcal{H}_1$ es la señal de entrada y $y(t) \in \mathcal{H}_2$ es la señal de salida

```tikz
\usepackage{amssymb}
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (-2.5, 0) -- (-1, 0)
			node[midway, above=2pt] {$x(t)$};
		\draw (-1, -0.5) rectangle (1, 0.5)
			node[midway] {$\mathcal{T}$};
		\draw[->] (1, 0) -- (2.5, 0)
			node[midway, above=2pt] {$y(t)$};
	\end{tikzpicture}
\end{document}
```

Esto también aplica para funciones en tiempo discreto

## Análisis
---
Estudiar la respuesta de un [[Sistema|sistema]] específico a diversas entradas, como la calibración de un equipo 

```tikz
\usepackage{amssymb}
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (-2.5, 0) node[left=2pt] {$x(t)$}
			-- (-1, 0);
		\draw (-1, -0.5) rectangle (1, 0.5)
			node[midway] {$\mathcal{T}$};
		\draw[->] (1, 0) -- (2.5, 0)
			node[right=2pt] {$?$};
	\end{tikzpicture}
\end{document}
```

## Diseño o identificación 
---
Diseñar sistemas para procesar señales de determinada forma, como la conversión de energía

```tikz
\usepackage{amssymb}
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (-2.5, 0) node[left=2pt] {$x(t)$}
			-- (-1, 0);
		\draw (-1, -0.5) rectangle (1, 0.5)
			node[midway] {$?$};
		\draw[->] (1, 0) -- (2.5, 0)
			node[right=2pt] {$y(t)$};
	\end{tikzpicture}
\end{document}
```

## Invertir
---
Obtener entrada para un sistema dado a partir de su salida, como un sistema de comunicaciones

```tikz
\usepackage{amssymb}
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (-2.5, 0) node[left=2pt] {$?$}
			-- (-1, 0);
		\draw (-1, -0.5) rectangle (1, 0.5)
			node[midway] {$\mathcal{T}$};
		\draw[->] (1, 0) -- (2.5, 0)
			node[right=2pt] {$y(t)$};
	\end{tikzpicture}
\end{document}
```

## Filtrado
---
Obtener el sistema y la señal de salida que permite modificar una señal de entrada de determinada forma, como un ecualizador de audio

```tikz
\usepackage{amssymb}
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (-2.5, 0) node[left=2pt] {$x(t)$}
			-- (-1, 0);
		\draw (-1, -0.5) rectangle (1, 0.5)
			node[midway] {$?$};
		\draw[->] (1, 0) -- (2.5, 0)
			node[right=2pt] {$?$};
	\end{tikzpicture}
\end{document}
```

## Modelado
---
[[Modelar|Diseñar]] un sistema y la señal de salida que permite modificar una señal de entrada de determinada forma, como un radar

```tikz
\usepackage{amssymb}
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (-2.5, 0) node[left=2pt] {$?$}
			-- (-1, 0);
		\draw (-1, -0.5) rectangle (1, 0.5)
			node[midway] {$?$};
		\draw[->] (1, 0) -- (2.5, 0)
			node[right=2pt] {$y(t)$};
	\end{tikzpicture}
\end{document}
```

## Control
---
Diseñar un sistema que controle a otro a partir de su salida, como el piloto automático

```tikz
\usepackage{amssymb}
\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick]
		\draw[->] (-2.5, 0) node[left=2pt] {$x(t)$}
			-- (-1, 0);
		\draw (-1, -0.5) rectangle (1, 0.5)
			node[midway] {$\mathcal{T}$};
		\draw[->] (1, 0) -- (2.5, 0)
			node[right=2pt] {$y(t)$};

		\draw (-1, -2.5) rectangle (1, -1.5)
			node[midway] {$?$};
		\draw[->] (0, -1.5) -- (0, -0.5);
		\draw[->] (2, 0) -- (2, -2)
			-- (1, -2);
	\end{tikzpicture}
\end{document}
```