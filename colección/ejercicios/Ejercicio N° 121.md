---
etapa: sin-empezar
dia: 2026-06-27
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 121
---
# Enunciado
---
Sea $(X,~ Y)$ un vector [[colección/distribuciones/continua/Distribución uniforme|uniforme]] en el triángulo de vértices $(0,~0)$, $(1,~1)$ y $(2,~0)$. Analizar posibles regresores para este problema

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{rellenoAzul}{RGB}{204, 204, 255} 
\begin{tikzpicture}[scale=2.1, transform shape, thick]
	\tikzmath {
		\alto = 1.75; \ancho = 2.75; \radio = 0.07;
		\scale = 0.65; \scaleTick = 0.6; \desfase = 1.01; 
		\diff = 0.2; \lenTick = 0.1;
	}
	
	\coordinate (v_1) at (0, 0); 
	\coordinate (v_2) at (1, 1); 
	\coordinate (v_3) at (2, 0); 
	
	\filldraw[draw=azul, fill=rellenoAzul, ultra thick] (v_1) 
		-- (v_2) -- (v_3) -- (v_1);
	
	\draw[->] (0, -\diff) -- (0, \alto) 
		node[pos=\desfase, above=2pt, scale=\scale] {$y$};
	\draw[->] (-\diff, 0) -- (\ancho, 0) 
		node[pos=\desfase, right=2pt, scale=\scale] {$x$};
		
    \foreach \tick in {1, 2} {
        \draw (\tick, {-\lenTick / 2}) 
                node[below=2pt, scale=\scaleTick] {$\tick$}
            -- (\tick, {\lenTick / 2});
    }
    \foreach \tick in {0.5, 1.5, 2.5} {
        \draw (\tick, {-\lenTick / 3}) -- (\tick, {\lenTick / 3});
    }
    \foreach \tick in {1} {
        \draw ({-\lenTick / 2}, \tick) 
                node[left=2pt, scale=\scaleTick] {$\tick$}
            -- ({\lenTick / 2}, \tick);
    }
    \foreach \tick in {0.5, 1.5} {
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
Se puede empezar analizando la solución óptima, para eso buscamos plantear la [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de distribución#Para vector aleatorio|distribución conjunta]] $$ p_{X,~Y}(x,~y) = \mathbb{1}\Set{ 0 < y < x,~ 0 < x < 1 } + \mathbb{1}\Set{ 0 < y < 2 - x,~ 1 < x < 2 } $$
Se puede factorizar la conjunta en la [[ingeniería en informática/proba/Teoría de probabilidades/Probabilidad condicional|probabilidad condicional]],  y la [[ingeniería en informática/proba/Variables y vectores aleatorios/Función de masa de probabilidad marginal|marginal]]  $$ \begin{align} 
	p_{X,~Y}(x,~y) =& p_{Y \mid X = x}(y) \cdot p_{X}(x) \\
	 =& \mathbb{1}\Set{ 0 < y < x,~ 0 < x < 1 } + \mathbb{1}\Set{ 0 < y < 2 - x,~ 1 < x < 2 } \\
	 =& \frac{1}{x} ~ \mathbb{1}\Set{ 0 < y < x } \cdot x ~ \mathbb{1}\Set{ 0 < x < 1 } \\
	  &+ \frac{1}{2 - x} ~ \mathbb{1}\Set{ 0 < y < 2 - x } \cdot (2 - x) ~\mathbb{1}\Set{ 1 < x < 2 } \\
\end{align} $$

Por lo que podemos decir lo siguiente $$ Y \mid X = x \sim \begin{cases}
	\mathcal{U}(0,~ x),& 0 < x < 1 \\
	\mathcal{U}(0,~ 2 - x),& 1 < x < 2 \\
\end{cases} $$ y para la función de densidad de $X$ es $$ p_{X}(x) = \begin{cases}
	x,& 0 < x < 1 \\
	2 - x,& 1 < x < 2 \\
\end{cases} $$
Ahora que tenemos toda esta información, el [[ingeniería en informática/proba/Representación de variables aleatorias/Predicción#Mejor predictor|regresor óptimo]] esta dado por $$ \varphi(x) = \mathbb{E}[Y \mid X = x] $$ por lo tanto este es $$ \varphi(x) = \begin{cases}
	\displaystyle \frac{x}{2} ,& 0 < x < 1 \\
	\displaystyle 1 - \frac{x}{2} ,& 1 < x < 2 \\
\end{cases} $$
Donde su [[ingeniería en informática/orga/Machine learning/Aprendizaje supervisado#^error-bayesiano|error bayesiano]] esta dada por $$ \mathbb{E}[Var(Y \mid X = x)] $$ por lo que si calculamos la [[ingeniería en informática/proba/Representación de variables aleatorias/Varianza|varianza]] de la uniforme, se tiene $$ Var(Y \mid X = x) = \begin{cases}
	\displaystyle \frac{x^2}{12} ,& 0 < x < 1 \\
	\displaystyle \frac{(2 - x)^2}{12} ,& 1 < x < 2 \\
\end{cases} $$se puede finalmente encontrar el error $$ \begin{align} 
	\mathbb{E}[Var(Y \mid X = x)] &= \int_0^1 \frac{x^2}{12} ~ p_X(x) ~ dx + \int_1^2 \frac{(2 - x)^2}{12} ~ p_X(x) ~ dx \\
	 &= \int_0^1 \frac{x^2}{12} ~ x ~ dx + \int_1^2 \frac{(2 - x)^2}{12} ~ (2 - x) ~ dx \\
	 &= \frac{1}{12} \left[ \frac{x^4}{4} \right]^{1}_{0} + \frac{1}{12} \left[ \frac{(2 - x)^4}{4} \right]^{1}_{2} \\
	\mathbb{E}[Var(Y \mid X = x)] &= \frac{1}{24}
\end{align} $$