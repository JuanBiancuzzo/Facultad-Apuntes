---
etapa: terminado
dia: 2026-06-27
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 130
---
# Enunciado
---
Para un conjunto de datos de $2$ clases de proporciones $p$ y $1 - p$, gráficar los diferentes impurezas ([[Impureza de Gini|impureza de Gini]] y [[ingeniería en informática/orga/Compresión/Entropía|entropía]]) en función de $p$

# Resolución
---
La impureza de Gini, genéricamente, esta dada por $$ H(Q) = \sum_{k} p_k ~ (1 - p_k) $$
La entropía, genéricamente, esta dada por $$ H(Q) = \sum_{k} -p_k ~ \log_2(p_k) $$
Como es un conjunto binario, se puede expresar reescribir ambas utilizando $p_1 = 1 - p_0$, dando para la impureza de Gini $$ \begin{align}
	H(Q) &= p_0 ~ (1 - p_0) + p_1 ~ (1 - p_1) \\
	 &= p_0 ~ (1 - p_0) + (1 - p_0) ~ (1 - 1 + p_0) \\
	H(p_0) &= 2 p_0 ~ (1 - p_0)
\end{align} $$
Para la entropía no necesariamente es una simplificación $$ \begin{align}
	H(Q) &= -p_0 ~ \log_2(p_0) - p_1 ~ \log_2(p_1) \\
	H(p_0) &= -p_0 ~ \log_2(p_0) - (1 - p_0) ~ \log_2(1 - p_0)
\end{align} $$
Gráficamente se ven de la siguiente forma
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{rojo}{RGB}{255, 0, 127} 
\begin{tikzpicture}[scale=2.1, transform shape, thick]
	\tikzmath {
        function gini(\x) {
			return 2 * \x * (1 - \x);
        };
        function entropia(\x) {
			return -\x * log2(\x) - (1 - \x) * log2(1 - \x);
        };
		
		\ancho = 1; \esX = 3; \altoGini = 0.8; \altoEntropia = 1.3;
		\esYGini = \esX; \esYEntropia = \esYGini * \altoGini / \altoEntropia;
		\scale = 0.65; \scaleTick = 0.6; \desfase = 1.01; 
		\diff = 0.2; \lenTick = 0.1;
	}
	
	\coordinate (pos_gini) at (0, 0);
	\coordinate (pos_entropia) at (4.5, 0);
	
	\foreach \coor/\texto/\alto/\esY [parse=true] in {
		pos_gini/Impureza de Gini/\altoGini/\esYGini, 
		pos_entropia/Entropía/\altoEntropia/\esYEntropia} { 
	\begin{scope}[cm={1, 0, 0, 1, (\coor)}]
	
	\draw[->] (-\diff, 0) -- ({\esX * \ancho + \diff}, 0) 
		node[pos=\desfase, right=2pt, scale=\scale] {$p$};
	\draw[->] (0, -\diff) -- (0, {\esY * \alto + \diff}) 
		node[pos=\desfase, above=2pt, scale=\scale] {$H(p)$};
		
	\path (0, {-2 * \diff}) -- ++({\esX * \ancho}, 0) 
		node[midway, below=2pt, scale=\scale] {\texto};
		
    \foreach \tick [parse=true] in {0.25, 0.5, ..., \ancho} {
		\draw ({\esX * \tick}, {-\lenTick / 2}) 
				node[below=2pt, scale=\scaleTick] {$\tick$}
			-- ++ (0, \lenTick);
			
		\draw[thin] ({\esX * \tick}, 0) -- ++(0, {\esY * \alto + \diff});
    }
    \foreach \tick [parse=true] in {0, 0.25 * 0.25, ..., \ancho} {
        \draw ({\esX * \tick}, {-\lenTick / 3}) -- ++(0, {2 * \lenTick / 3});
    }
		
    \foreach \tick [parse=true] in {0.25, 0.5, ..., \alto} {
		\draw ({-\lenTick / 2}, {\esY * \tick}) 
				node[left=2pt, scale=\scaleTick] {$\tick$}
			-- ++ (\lenTick, 0);
		\draw[thin] (0, {\esY * \tick}) -- ++({\esX * \ancho + \diff}, 0);
    }
	
    \foreach \tick [parse=true] in {0, 0.25 * 0.25, ..., \alto} {
        \draw ({-\lenTick / 3}, {\esY * \tick}) -- ++({2 * \lenTick / 3}, 0);
	}
	
	\end{scope}
	}
	
	\begin{scope}[cm={1, 0, 0, 1, (pos_gini)}]
		\draw[rojo] (0, 0) \foreach \x in {0.05, 0.1, ..., \ancho} {
			-- ({\esX * \x}, {\esYGini * gini(\x)})
		} -- ({\esX * \ancho}, 0);
	\end{scope}
	
	\begin{scope}[cm={1, 0, 0, 1, (pos_entropia)}]
		\draw[azul] (0, 0) \foreach \x in {0.05, 0.1, ..., \ancho} {
			-- ({\esX * \x}, {\esYEntropia * entropia(\x)})
		} -- ({\esX * \ancho}, 0);
	\end{scope}
	
\end{tikzpicture}
\end{document}
```
