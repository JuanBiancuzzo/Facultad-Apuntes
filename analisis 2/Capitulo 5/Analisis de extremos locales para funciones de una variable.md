---
dia: 2023-01-22
tags:
  - analisis-2/Capitulo-5
  - nota
---
### Definición
---
Veremos como analizar los [[Máximo y mínimo local|máximos y mínimos locales]] para funciones de una variable

```tikz
\usepackage{pgfplots}

\begin{document} 
	\begin{tikzpicture}
		\begin{axis}[
			scale=1.2, transform shape,
			xmin=-0.4, xmax=4.5,
			ymin=-0.6, ymax=2.2, 
			samples=50,
			axis lines=middle,
			xlabel = $x$, ylabel = $y$,
			xtick={0.55, 1.98, 3.4},
			xticklabels={$x_1$, \smash{\raisebox{3\height}{$x_2$}}, $x_3$},
			yticklabels={},
		]

			\addplot[orange, ultra thick, domain=-0.4:1.98] 
			  {-1 * x^2 + 1.1 * x + 1.4};
			
			\addplot[orange, ultra thick, domain=1.98:4.3] 
			  {0.54 * (x - 3.4)^3 + 0.1 * (x - 3.4)^2 + 1 };
			
			\addplot[gray, thin, dashed] coordinates { (0.55, 0) (0.55, 1.7) };
			\addplot[cyan, ultra thick] coordinates { (-0.15, 1.7) (1.25, 1.7) }
				node[pos=0.5, above=2pt] {$A_1$};
			
			\addplot[gray, thin, dashed] coordinates { (1.98, 0) (1.98, -0.34) };
			\addplot[cyan, ultra thick] coordinates { (1.98, -0.34) }
				node[pos=1, below=2pt] {$A_2$};
			
			\addplot[gray, thin, dashed] coordinates { (3.4 , 0) (3.4 , 1) };
			\addplot[cyan, ultra thick] coordinates { (2.7, 1) (4.1, 1) }
				node[pos=0.5, above=2pt] {$A_3$};
			
		\end{axis}
		
	\end{tikzpicture}
\end{document}
```

Comencemos observando el grafico, donde en rojo se representa $y =f(x)$ en un cierto dominio $D$

Vemos que:

 * $f(x_1)$ es máximo local con $f'(x_1) = 0$, recta tangente horizontal en $A_1$
 * $f(x_2)$ es mínimo local, pero $f$ no es derivable en $x_2$
 * $f(x_3)$ no es extremo local, pero $f'(x_3) = 0$. Recta tangente horizontal en $A_3$

Es decir $f'(x_0) = 0$ no asegura que $f(x_0)$ sea extremo local. Tambien que un extremo local puede ser un punto que no sea derivable, como el caso de $x_2$

Entonces para analizar seguimos los siguientes pasos
 1. Se determinan los punto críticos, estos son los $x_0$ tales que 
	 * $f$ no es derivable en $x_0$
	 * $f$ es derivable en $x_0$ y $f'(x_0) = 0$. En este caso $x_0$ se denomina punto estacionario
 2. Siendo $x_0$ un punto critico, el analisis es como sigue
	 * Debe aplicarse la definición de [[Máximo y mínimo local|máximo y mínimo local]]
	 * En esta situacion tenemos alternativas
		 1. Se aplica la definicion de extremo local
		 2. Se analizar en un $E(x_0)$ el signo de la derivada a ambos lados de dicho punto 
		 3. Si la función admite [[Derivada parcial de orden superior]], suponga que con $k > 1$ la derivada la derivada de menor orden que no se anula es $f^{(k)}(x_0) \ne 0$:
			  * Si $k$ es impar, $f(x_0)$ no es extremo local
			  * Si $k$ es par: cuando $f^{(k)}(x_0) > 0$ es minimo, si $f^{(k)}(x_0) < 0$ es maximo