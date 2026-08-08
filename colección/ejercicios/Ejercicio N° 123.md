---
etapa: terminado
dia: 2026-06-27
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 123
---
# Enunciado
---
Preprocesar el siguiente conjunto de datos, para iniciar el entrenamiento de una [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Regresión polinómica|regresión polinómica]] de orden $2$. ¿Qué cantidad de parámetros tendrá el modelo? $$ \begin{array}{c : c} 
	x_1 & x_2 \\\hline
	1.2 & 2.3 \\\hline
	0.8 & 1.3 \\\hline
	1.0 & 1.6 
\end{array} $$
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\begin{tikzpicture}[scale=1.9, transform shape, thick]
	\tikzmath {
		\alto = 2.75; \ancho = 1.75; \radio = 0.07;
		\scale = 0.65; \scaleTick = 0.6; \desfase = 1.01; 
		\diff = 0.2; \lenTick = 0.1;
	}
	
	\coordinate (v_1) at (1.2, 2.3); 
	\coordinate (v_2) at (0.8, 1.3); 
	\coordinate (v_3) at (1.0, 1.6); 
	
	\draw[->] (0, -\diff) -- (0, \alto) 
		node[pos=\desfase, above=2pt, scale=\scale] {$x_2$};
	\draw[->] (-\diff, 0) -- (\ancho, 0) 
		node[pos=\desfase, right=2pt, scale=\scale] {$x_1$};
		
    \foreach \tick in {1} {
        \draw (\tick, {-\lenTick / 2}) 
                node[below=2pt, scale=\scaleTick] {$\tick$}
            -- (\tick, {\lenTick / 2});
    }
    \foreach \tick in {0.5, 1.5} {
        \draw (\tick, {-\lenTick / 3}) -- (\tick, {\lenTick / 3});
    }
    \foreach \tick in {1, 2} {
        \draw ({-\lenTick / 2}, \tick) 
                node[left=2pt, scale=\scaleTick] {$\tick$}
            -- ({\lenTick / 2}, \tick);
    }
    \foreach \tick in {0.5, 1.5, 2.5} {
        \draw ({-\lenTick / 3}, \tick) -- ({\lenTick / 3}, \tick);
    }
		
	\foreach \coor in {v_1, v_2, v_3} {
		\filldraw[draw=azul, ultra thick] (\coor) circle (\radio);	
	}
	
\end{tikzpicture}
\end{document}
```

# Resolución
---
La cantidad de parámetros está dado por $\binom{d + \nu}{\nu}$ con $d$ siendo la cantidad de predictores, en nuestro caso $d = 2$, y $\nu$ el orden del polinómio, por lo tanto se tiene $6$ parámetros, siendo estos el [[ingeniería en informática/proba/Inferencia estadística/Sesgo|bias]] $x_1$, $x_2$, $x_1 x_2$, $x_1^2$ y $x_2^2$

Como las mediciones no comparable, es necesario [[ingeniería en informática/orga/NLP/Normalización|normalizarlos]], y calcularemos la [[ingeniería en informática/proba/Representación de variables aleatorias/Esperanza|media]] $\mu_k$ y la [[ingeniería en informática/proba/Representación de variables aleatorias/Varianza|varianza]] $\sigma_k$, utilizando la [[ingeniería electrónica/estoca/Análisis de datos/Media muestral|media muestral]] $$ \mu_k = \frac{1}{n} \sum_{i = 1}^{n} (x_i)_k,~~~~~ \sigma_k = \sqrt{\frac{1}{n} \sum_{i = 1}^{n} [(x_i)_k - \mu_k]^2 } $$ con $n = 3$ por la cantidad de datos que se tienen 

Por lo tanto se tiene $$ \begin{array}{c | c : c} 
	& x_1 & x_2 & x_1 x_2 & x_1^2 & x_2^2 \\\hline
	& 1.2 & 2.3 & 2.76 & 1.44 & 5.29 \\\hline
	& 0.8 & 1.3 & 1.04 & 0.64 & 1.69 \\\hline
	& 1.0 & 1.6 & 1.6 & 1 & 2.56 \\ \hline 
	\mu_k & 1 & 1.73 & 1.8 & 1.03 & 3.18 \\\hline
	\sigma_k & 0.16 & 0.42 & 0.72 & 0.33 & 1.53 
\end{array} $$
Finalmente, se obtiene la matriz de datos, normalizando usando $x_k = \displaystyle \frac{x_k - \mu_k}{\sigma_k}$, obteniendo la tabla $$ \begin{array}{c : c} 
	b	&   x_1 &   x_2 & x_1 x_2 & x_1^2 & x_2^2 \\\hline
	1 &  1.22 &  1.25 &    1.34 &  1.26 &  1.38 \\\hline
	1 & -1.22 & -1.03 &   -1.06 & -0.18 & -0.97 \\\hline
	1 &  0    & -0.32 &   -0.28 & -0.08 & -0.4 
\end{array} $$