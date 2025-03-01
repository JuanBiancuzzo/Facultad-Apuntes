---
dia: 2024-05-08
tags:
  - carrera/ingeniería-electrónica/circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
  - nota/facultad
aliases:
  - Realimentación por transimpedancia
  - Realimentación por transresistencia
---
# Definición
---
Este [[Amplificador de transconductancia|amplificador de transconductancia]], al realimentarlo, podemos pensarlo como muestreo de [[Corriente eléctrica|corriente]] y suma de [[Tensión|tensión]]. Esto lo podemos ver con el siguiente modelo

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
		\node (ampli_north) at (0, 3.5) {};

		\draw (-2.5, -2) rectangle (2.5, 0);
		\node (reali_in_up)    at (-2.5, {4 * 2 / 5 - 2}) {};
		\node (reali_in_down)  at (-2.5, {1 * 2 / 5 - 2}) {};
		\node (reali_out_up)   at (2.5, {4 * 2 / 5 - 2}) {};
		\node (reali_out_down) at (2.5, {1 * 2 / 5 - 2}) {};
		\node (reali_center)   at (0, {2 / 2 - 2}) {};
		\node (reali_south)    at (0, -2) {};

		\draw (reali_in_down) to[short] ++(-3.5, 0)
				node (temp) {}
			to[sV, l^=$v_s$] ($ (temp |- 0, 0) + (ampli_in_up -| 0, 0) $)
			to[short, f^=$i_i$] (ampli_in_up);
			
		\draw (reali_in_up) to[short] ++(-1.5, 0)
				node (temp) {}
			to[short] ($ (temp |- 0, 0) + (ampli_in_down -| 0, 0) $)
			to[short] (ampli_in_down);
		
		\draw ($ (reali_in_down) + (-1.5, 0) $)
			to[open, v^=$v_f$] ($ (reali_in_up) + (-1.5, 0) $);
		\draw (temp |- ampli_in_down)
			to[open, v^=$v_i$] (temp |- ampli_in_up);

		\draw (ampli_out_down) to[short] ++({4 * (1 / 3)}, 0)
				node(muestreo_left) {}
			to[short] (muestreo_left |- reali_out_up)
			to[short] (reali_out_up);

		\draw (reali_out_down) to[short]
			($ (muestreo_left |- reali_out_down) + ({4 / 3}, 0) $)
				node (temp) {}
			to[short] (temp |- ampli_out_down)
			to[short] ++({4 / 3}, 0)
				node (temp) {}
			to[R, v_=$v_0$, l^=$R_L$] (temp |- ampli_out_up)
			to[short, f_=$i_0$] (ampli_out_up);

		\draw (ampli_in_down) to[short] ++(1, 0)
				node (temp) {}
			to[R, l_=$R_i$] (temp |- ampli_in_up)
			to[short] (ampli_in_up);
		\draw (ampli_out_down) to[short] ++(-3, 0)
				node (temp) {}
			to[american, isource, l_=$G_m v_i$] (temp |- ampli_out_up)
			to[short] (ampli_out_up);
		\draw (ampli_out_down) to[short] ++(-1, 0)
				node (temp) {}
			to[R, l_=$R_o$] (temp |- ampli_out_up)
			to[short] (ampli_out_up);
		

		\draw (reali_out_down) to[short] ++(-1, 0) 
				node (temp) {}
			to[R, l_=$R_{ri}$] (temp |- reali_out_up)
			to[short] (reali_out_up);
		\draw (reali_in_down) to[short] ++(2, 0)
				node (temp) {}
			to[american, vsource, invert, l_=$ki_o$] (temp |- reali_in_up)
			to[R, l^=$R_{ro}$] (reali_in_up);

		\path (ampli_north) node[above=1pt, scale=1.3] {$G_{mo} = \frac{i_o}{v_i}$};
		\path (reali_south) node[below=1pt, scale=1.2] {$k = \frac{v_f}{i_o}$};
	\end{circuitikz}
\end{document}
```

Donde la [[Admitancia|transconductancia]] del [[Amplificador operacional|amplificador]] esta dada por $$ G_m = \frac{i_0}{v_s} $$
Podemos ver la realimentación como $$ \begin{matrix} 
	v_s = v_i + v_f \\
	\implies v_i = v_s - v_f = v_s - k ~ i_0 = v_s - k ~ G_{mo} ~ v_i \\
	\boxed{ v_i ~ (1 + k ~ G_{mo}) = v_s } 
\end{matrix} $$
## Modelo ideal amplificador
---
$R_i \to \infty$
* Para que toda la corriente $i_i$ pase por la resistencia interna del amplificador

 $R_o \to \infty$ 
 * Para que la corriente generada por la fuente no afecte la corriente $i_o$

## Modelo ideal realimentación
---
$R_{ri} \to 0$
* Para generar baja impedancia al paso de la corriente $i_o$

 $R_{ro} \to 0$ 
 * Para que no existan caídas de tensión luego del generador