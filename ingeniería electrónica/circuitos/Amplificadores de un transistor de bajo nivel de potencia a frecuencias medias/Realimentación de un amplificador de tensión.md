---
dia: 2024-05-08
tags:
  - ingeniería-electrónica/circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
  - nota/facultad
---
# Definición
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
		\node (ampli_in_up)    at (-3, {4 * 2.5 / 5 + 1}) {};
		\node (ampli_in_down)  at (-3, {1 * 2.5 / 5 + 1}) {};
		\node (ampli_out_up)   at (3, {4 * 2.5 / 5 + 1}) {};
		\node (ampli_out_down) at (3, {1 * 2.5 / 5 + 1}) {};
		\node (ampli_center)   at (0, {2.5 / 2 + 1}) {};
		\node (ampli_north)    at (0, 3.5) {};

		\draw (-2.5, -2) rectangle (2.5, 0);
		\node (reali_in_up)    at (-2.5, {4 * 2 / 5 - 2}) {};
		\node (reali_in_down)  at (-2.5, {1 * 2 / 5 - 2}) {};
		\node (reali_out_up)   at (2.5, {4 * 2 / 5 - 2}) {};
		\node (reali_out_down) at (2.5, {1 * 2 / 5 - 2}) {};
		\node (reali_center)   at (0, {2 / 2 - 2}) {};
		\node (reali_south)    at (0, -2) {};

		\draw (reali_in_down) to[short] ++(-3.5, 0)
				node (temp) {}
			to[sV, l^=$v_s$] (temp |- ampli_in_up)
			to[short, f^=$i_i$] (ampli_in_up);
			
		\draw (reali_in_up) to[short] ++(-1.5, 0)
				node (temp) {}
			to[short] (temp |- ampli_in_down)
			to[short] (ampli_in_down);
		
		\draw ($ (reali_in_down) + (-1.5, 0) $)
			to[open, v^=$v_f$] ($ (reali_in_up) + (-1.5, 0) $);
		\draw (temp |- ampli_in_down) 
			to[open, v^=$v_i$] (temp |- ampli_in_up);

		\draw (ampli_out_down) to[short] ++({4 * (2 / 3)}, 0)
				node (muestreo_down) {}
			to[short] ++({4 * (1 / 3)}, 0)
				node (temp) {}
			to[R, v_=$v_0$, l^=$R_L$] (temp |- ampli_out_up)
			to[short, f_=$i_0$] ++({-4 * (2 / 3)}, 0)
				node (muestreo_up) {}
			to[short] ++({-4 * (1 / 3)}, 0);

		\draw (reali_out_down) to[short] (muestreo_down |- reali_out_down)
			to[short, -*] (muestreo_down);
		\draw (reali_out_up) to[short] (muestreo_up |- reali_out_up)
			to[short, -*] (muestreo_up);

		\draw (ampli_in_down) to[short] ++(1, 0)
				node (temp) {}
			to[R, l_=$R_i$] (temp |- ampli_in_up)
			to[short] (ampli_in_up);
		\draw (ampli_out_down) to[short] ++(-2, 0)
				node (temp) {}
			to[american, vsource, invert, l^=$A_v v_i$] (temp |- ampli_out_up)
			to[R, l_=$R_0$] (ampli_out_up);

		\draw (reali_out_down) to[short] ++(-1, 0) 
				node (temp) {}
			to[R, l_=$R_{ri}$] (temp |- reali_out_up)
			to[short] (reali_out_up);
		\draw (reali_in_down) to[short] ++(2, 0)
				node (temp) {}
			to[american, vsource, invert, l_=$kv_o$] (temp |- reali_in_up)
			to[R, l^=$R_{ro}$] (reali_in_up);

		\path (ampli_north) node[above=1pt, scale=1.3] {$A_{vo} = \frac{v_o}{v_i}$};
		\path (reali_south) node[below=1pt, scale=1.2] {$k = \frac{v_f}{v_o}$};
	\end{circuitikz}
\end{document}
```

Donde la [[Ganancia|ganancia]] del [[Amplificador operacional|amplificador]] esta dada por $$ A_v = \frac{v_0}{v_s} $$
Podemos ver la realimentación como $$ \begin{matrix} 
	v_s = v_i + v_f \\
	\implies v_i = v_s - v_f = v_s - k ~ v_0 = v_s - k ~ A_{vo} ~ v_i \\
	v_i ~ (1 + k ~ A_{vo}) = v_s \\
	\boxed{ A_v = \frac{A_v}{1 + k ~ A_{vo}} = \frac{A_v}{1 + T}} 
\end{matrix} $$ donde $T$ es la [[Ganancia de lazo|ganancia de lazo]]
## Modelo ideal amplificador
---
$R_i \to \infty$
* Para que toda la [[Corriente eléctrica|corriente]] $i_i$ pase por la resistencia interna del amplificador

 $R_o \to 0$ 
 * Para que no existan caídas de tensión tal que toda la corriente pase por la resistencia de carga $R_L$

## Modelo ideal realimentación
---
$R_{ri} \to \infty$
* Para que se pueda medir exactamente toda la tensión $v_o$

 $R_{ro} \to 0$ 
 * Para que no existan caídas de tensión sobre la resistencia de salida del amplificador
