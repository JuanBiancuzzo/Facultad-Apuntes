---
dia: 2024-05-08
tags:
  - carrera/ingeniería-electrónica/circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
  - nota/facultad
aliases:
  - Realimentación por relación de corrientes
  - Shunt-Series feedback
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este [[Amplificador de corriente|amplificador de corriente]], al realimentarlo, podemos pensarlo como muestreo de [[Corriente eléctrica|corriente]] y suma de corriente. Esto lo podemos ver con el siguiente modelo

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

		\draw (ampli_in_down) to[short] ++({-4 * (2 / 3)}, 0)
				node (muestreo_down) {}
			to[short] ++({-4 * (1 / 3)}, 0)
				node (temp) {}
			to[sV, l^=$v_s$] (temp |- ampli_in_up)
			to[short, f^=$i_s$] ++({4 * (2 / 3)}, 0)
				node (muestreo_up) {}
			to[short, f^=$i_i$] ++({4 * (1 / 3)}, 0);

		\draw (reali_in_down) to[short] (muestreo_down |- reali_in_down)
			to[short, -*] (muestreo_down);
		\draw (reali_in_up) to[short] (muestreo_up |- reali_in_up)
			to[short, -*] (muestreo_up)
			to[open] ++(-0.2, 0)
			to[open, v_=$i_f$]
				($ (muestreo_up |- ampli_in_down) + (-0.2, 0) $);
		\draw ($ (ampli_in_down) + (-0.2, 0) $) 
			to[open, v^=$v_i$] ($ (ampli_in_up) + (-0.2, 0) $);

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
			to[american, isource, l_=$A_o i_i$] (temp |- ampli_out_up)
			to[short] (ampli_out_up);
		\draw (ampli_out_down) to[short] ++(-1.5, 0)
				node (temp) {}
			to[R, l_=$R_o$] (temp |- ampli_out_up)
			to[short] (ampli_out_up);

		\draw (reali_out_down) to[short] ++(-1, 0) 
				node (temp) {}
			to[R, l_=$R_{ri}$] (temp |- reali_out_up)
			to[short] (reali_out_up);
			
		\draw (reali_in_down) to[short] ++(2.5, 0)
				node (temp) {}
			to[isource, l^=$ki_o$] (temp |- reali_in_up)
			to[short] (reali_in_up);			
		\draw (reali_in_down) to[short] ++(1, 0)
				node (temp) {}
			to[R, l^=$R_{ro}$] (temp |- reali_in_up)
			to[short] (reali_in_up);

		\path (ampli_north) node[above=1pt, scale=1.3] {$A_{io} = \frac{i_o}{i_i}$};
		\path (reali_south) node[below=1pt, scale=1.2] {$k = \frac{i_f}{i_o}$};
	\end{circuitikz}
\end{document}
```

Donde la [[Ganancia|ganancia]] del [[Amplificador operacional|amplificador]] esta dada por $$ A_i = \frac{i_0}{i_s} $$
Podemos ver la realimentación como $$ \begin{matrix} 
	i_s = i_i + i_f \\
	\implies i_i = i_s - i_f = i_s - k ~ i_0 = i_s - k ~ A_{io} ~ i_i \\
	\boxed{ i_i ~ (1 + k ~ A_{io}) = i_s } 
\end{matrix} $$

### Modelo ideal amplificador
---
$R_i \to 0$
* Para que no exista una [[Impedancia|impedancia]] ante el paso de $i_i$

 $R_o \to \infty$ 
 * Para generar una impedancia mayor y que $i_o$ sea afectada

### Modelo ideal realimentación
---
$R_{ri} \to 0$
* Para no generar una impedancia que modifique $i_o$ pasando por la resistencia de carga $R_L$

 $R_{ro} \to \infty$ 
 * Para que la corriente saliente por el realimentador sea del generador

## Calculo de impedancias
---
Para calcular las impedancias, vamos a tomar $R_s \ll Z_i$ y que estamos en el caso ideal del realimentador donde $R_{ri} \to 0$ y $R_{ro} \to \infty$

### Impedancia de entrada