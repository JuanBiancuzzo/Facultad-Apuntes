---
dia: 2024-05-08
materia: circuitos
capitulo: 3
---
### Definición
---
Este [[Amplificador de tensión|amplificador de tensión]], al realimentarlo, podemos pensarlo como muestreo de [[Tensión|tensión]] y suma de tensión. Esto lo podemos ver con el siguiente modelo

```tikz
\usepackage[
	straightvoltages,
	americancurrents,
	americanresistors, 
	americaninductors, 
	americanports, 
	americangfsurgearrester
]{circuitikz} 

\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.1, transform shape, thick]
		\draw (-3, 1) rectangle (3, 3.5);
		\node (ampli_in_up) at (-3, {4 * 2.5 / 5 + 1}) {};
		\node (ampli_in_down) at (-3, {1 * 2.5 / 5 + 1}) {};
		\node (ampli_out_up) at (3, {4 * 2.5 / 5 + 1}) {};
		\node (ampli_out_down) at (3, {1 * 2.5 / 5 + 1}) {};
		\node (ampli_center) at (0, {2.5 / 2 + 1}) {};

		\draw (-2, -2) rectangle (2, 0);
		\node (reali_in_up) at (-2, {4 * 2 / 5 - 2}) {};
		\node (reali_in_down) at (-2, {1 * 2 / 5 - 2}) {};
		\node (reali_out_up) at (2, {4 * 2 / 5 - 2}) {};
		\node (reali_out_down) at (2, {1 * 2 / 5 - 2}) {};
		\node (reali_center) at (0, {2 / 2 - 2}) {};

		\draw (reali_in_down) to[short] ++(-4, 0)
				node (temp) {}
			to[sV, l^=$v_s$] ($ (temp |- 0, 0) + (ampli_in_up -| 0, 0) $)
			to[short, f^=$i_i$] (ampli_in_up);
			
		\draw (reali_in_up) to[short] ++(-2, 0)
				node (temp) {}
			to[short] ($ (temp |- 0, 0) + (ampli_in_down -| 0, 0) $)
			to[short] (ampli_in_down);
		
		\draw ($ (reali_in_down) + (-2, 0) $)
			to[open, v^=$v_f$] ($ (reali_in_up) + (-2, 0) $);
		\draw ($ (temp |- 0, 0) + (ampli_in_down -| 0, 0) $)
			to[open, v^=$v_i$] 
				($ (temp |- 0, 0) + (ampli_in_up -| 0, 0) $);

		\draw (ampli_out_down) to[short] ++({4 * (2 / 3)}, 0)
				node (muestreo_down) {}
			to[short] ++({4 * (1 / 3)}, 0)
				node (temp) {}
			to[R, v_=$v_0$, l^=$R_L$] 
				($ (temp |- 0, 0) + (ampli_out_up -| 0, 0) $)
			to[short, f_=$i_0$] ++({-4 * (2 / 3)}, 0)
				node (muestreo_up) {}
			to[short] ++({-4 * (1 / 3)}, 0);

		\draw (reali_out_down) to[short]
			($ (muestreo_down |- 0, 0) + (reali_out_down -| 0, 0) $)
			to[short, -*] (muestreo_down);
		\draw (reali_out_up) to[short]
			($ (muestreo_up |- 0, 0) + (reali_out_up -| 0, 0) $)
			to[short, -*] (muestreo_up);

		\path (ampli_center) node[scale=1.5] {$A_v = \frac{v_o}{v_i}$};
		\path (reali_center) node[scale=1.4] {$k = \frac{v_f}{v_o}$};
	\end{circuitikz}
\end{document}
```

Donde la [[Ganancia|ganancia]] del [[Amplificador|amplificador]] esta dada por $$ A = \frac{v_0}{v_s} $$
Podemos ver la realimentación como $$ \begin{matrix} 
	v_s = v_i + v_f \\
	\implies v_i = v_s - v_f = v_s - k ~ v_0 = v_s - k ~ A_v ~ v_i \\
	\boxed{ v_i ~ (1 + k ~ A_v) = v_s } 
\end{matrix} $$
#### Modelo ideal amplificador
---
$r_i \to \infty$
* Para que toda la [[Corriente eléctrica|corriente]] $i_i$ pase por la resistencia interna del amplificador

 $r_o \to 0$ 
 * Para que no existan caídas de tensión tal que toda la corriente pase por la resistencia de carga $R_L$

#### Modelo ideal realimentación
---
$r_i \to \infty$
* Para que se pueda medir exactamente toda la tensión $v_o$

 $r_o \to 0$ 
 * Para que no existan caídas de tensión sobre la resistencia de salida del amplificador
