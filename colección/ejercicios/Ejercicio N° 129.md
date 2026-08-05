---
etapa: sin-empezar
dia: 2026-06-27
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 129
---
# Enunciado
---
Se da una tabla de datos de entrenamiento compuesta por $(X,~ Y)$, donde $X \in \mathbb{R}^d$ e $Y \in \set{0,~ 1}$ $$ \begin{array}{c|c} 
	X & 1.2 & 0.2 & 2.3 & 0.4 & 2.0 & 1.6 & 1.0 & 2.5 & 2.7 \\\hline 
	Y & 0 & 1 & 0 & 0 & 0 & 1 & 1 & 1 & 1
\end{array} $$

1. Construya el clasificador [[ingeniería en informática/orga/Machine learning/K-Nearest Neighbours|2NN]] ^punto-1
2. Clasifique dos nuevos puntos $x_1 = 2.2$ y $x_2 = 2.6$ ^punto-2
3. Justifique la decisión tomada ^punto-3

# Resolución
---
[[colección/ejercicios/Ejercicio N° 129#^punto-1|1.]] Sabemos que como $k = 2$, puede haber $3$ posibles valores para la probabilidad $$ \hat{P}(1 \mid x) \in \Set{0,~ \frac{1}{2},~ 1} $$ donde obtenemos lo siguiente
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{decorations.pathreplacing}

\begin{document} 
\definecolor{azul}{RGB}{0, 127, 204}
\definecolor{rojo}{RGB}{255, 0, 127} 
\begin{tikzpicture}[scale=2.3, transform shape, thick]
	\tikzmath {
		\ancho = 3; \alto = 1.3;  \radio = 0.07; \escalaX = 2.2;
		\scale = 0.55; \scaleTick = 0.5; \desfase = 1.005; 
		\diff = 0.2; \lenTick = 0.1; \diffAltura = 0.05;
	}
	
	\draw[->] (-\diff, 0) -- ({(\escalaX * \ancho) + \diff}, 0) 
		node[pos=\desfase, right=2pt, scale=\scale] {$x$};
	\draw[->] (0, -\diff) -- (0, \alto) 
		node[pos=\desfase, above=2pt, scale=\scale] {$\hat{P}(1 \mid x)$};

	\pgfkeys{/pgf/number format/.cd,fixed relative,precision=2}
	
    \foreach \tick in {0.2, 0.4, ..., \ancho} {
        \draw ({\escalaX * \tick}, {-\lenTick / 2}) 
                node[below=2pt, scale=\scaleTick] {$\pgfmathprintnumber{\tick}$}
            -- ++(0, \lenTick);
    }
    \foreach \tick in {0.1, 0.2, ..., \ancho} {
        \draw ({\escalaX * \tick}, {-\lenTick / 3}) 
	        -- ++(0, {2 * \lenTick / 3});
    }
	
    \foreach \tick in {0.5, 1} {
        \draw ({-\lenTick / 2}, \tick) 
                node[above left=2pt, scale=\scaleTick] {$\tick$}
            -- ++(\lenTick, 0);
    }
	
	\foreach \coor in {0.4, 1.2, 2, 2.3} {
	 	\filldraw[draw=azul, ultra thick] 
		 	({\coor * \escalaX - \radio}, {-\radio}) 
			 	rectangle ++({2 * \radio}, {2 * \radio});	
	}
	
	\foreach \coor in {0.2, 1, 1.6, 2.5, 2.7} {
	 	\filldraw[draw=rojo, ultra thick] 
		 	({\coor * \escalaX}, 0) circle (\radio);	
	}
	
	\foreach \inicio/\final/\altura [count=\num] in 
		{-0.1/0.2/0.5, 2.7/3.1/1, 2.5/2.7/1, 2.3/2.5/0.5,
		2/2.3/0.5, 1.6/2/0.5, 1.2/1.6/0.5, 0.2/1.2/0.5} 
	{
		\draw[decorate, decoration = {brace}] 
			({\inicio * \escalaX + 0.02}, {\altura + \diffAltura})
				-- ({\final * \escalaX - 0.02}, {\altura + \diffAltura})
			node[circle, draw, midway, above=3pt, scale=\scaleTick] {$\num$};
	}

	\draw[ultra thick] ({-0.1 * \escalaX}, 0.5) -- ({1.95 * \escalaX}, 0.5);
	\draw[ultra thick] ({1.95 * \escalaX}, 0) -- ({2.25 * \escalaX}, 0);
	\draw[ultra thick] ({2.25 * \escalaX}, 0.5) -- ({2.5 * \escalaX}, 0.5);
	\draw[ultra thick] ({2.5 * \escalaX}, 1) -- ({3.1 * \escalaX}, 1);

	\foreach \x in {1.95, 2.25, 2.5} {
		\draw[dashed] ({\x * \escalaX}, {-\diff/2}) -- ++(0, 1.3);
	}
	
\end{tikzpicture}
\end{document}
```
Vamos a tomar el circulo rojo como $1$, y  el cuadrado azul como $0$

1. Podemos ver como para  $x \le 0.2$ los $2$ valores más cercanos son con etiquetas distintas por lo que $\hat{P}(1 \mid x) |_{x \le 0.2} = 0.5$ 
2. Podemos ver como para  $x \ge 2.7$ los $2$ valores más cercanos tienen la misma etiqueta de $1$ por lo que $\hat{P}(1 \mid x) |_{x \ge 2.7} = 1$ 
3. Para el intervalo $x \in (2.5;~ 2.7)$, las etiquetas son iguales a $1$
4. Para el intervalo $x \in (2.3;~ 2.5)$, vemos que los valores son distintos
5. Para el intervalo $x \in (2;~ 2.3)$, existe un punto que cambia por el punto $x = 2.5$, con etiqueta $1$, y $x = 2$ y $x = 2.3$ con etiqueta $0$, se puede plantear la [[inecuación|inecuación]] $$ |2 - x| < |2.5 - x| $$ considerando que $x \in (2;~ 2.3)$ entonces $2 - x < 0$, por lo tanto $|2 - x| = x - 2$, de igual forma $|2.5 - x| = 2.5 - x$, reescribiendola resulta en $$ \begin{align} 
		x - 2 &< 2.5 - x \\ 
		2x &< 4.5 \\ 
		x &< 2.25 \\ 
   \end{align} $$
6. Para el intervalo $x \in (1.6;~ 2)$, de forma similar se tiene $$ \begin{align} 
		|1.6 - x| &< |2.3 - x| \\ 
		x - 1.6 &< 2.3 - x \\ 
		2x &< 3.9 \\ 
		x &< 1.95 \\ 
   \end{align} $$
7. Para el intervalo $x \in (1.2;~ 1.6)$, el único punto interesante es $x = 1.6$ pero a distancia $2$ los $2$ datos tienen etiqueta $0$ entonces en todo el intervalo $\hat{P}(1 \mid x) = 0.5$
8. Para el intervalo $x \in (0.2;~ 1.2)$, todos los puntos tiene $2$ datos más cercanos con etiquetas distintas

[[colección/ejercicios/Ejercicio N° 129#^punto-2|2.]] y [[colección/ejercicios/Ejercicio N° 129#^punto-3|3.]], Para $x_1 = 2.2$ vemos que $\hat{P}(1 \mid x = 2.2) = 0$, por lo que la etiqueta sería $y = 0$
Para $x_2 = 2.6$ vemos que $\hat{P}(1 \mid x = 2.6) = 1$, por lo que la etiqueta sería $y = 1$