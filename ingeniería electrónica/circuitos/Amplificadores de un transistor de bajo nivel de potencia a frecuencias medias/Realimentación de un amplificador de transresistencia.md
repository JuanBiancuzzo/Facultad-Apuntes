---
dia: 2024-05-08
tags:
  - carrera/ingeniería-electrónica/circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
  - nota/facultad
aliases:
  - Realimentación por transconductancia
  - Shunt-Shunt Feedback
referencias:
  - "1017"
etapa: ampliar
vinculoFacultad:
  - tema: Amplificadores de un transistor de bajo nivel de potencia a frecuencias medias
    capitulo: 3
    materia: Circuitos microelectrónicos
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este [[Amplificador de transresistencia|amplificador de transresistencia]], al realimentarlo, podemos pensarlo como muestreo de [[Tensión|tensión]] y suma de [[Corriente eléctrica|corriente]]. Esto lo podemos ver con el siguiente modelo

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
			to[isource, l^=$i_s$] (temp |- ampli_in_up)
			to[short] ++({4 * (2 / 3)}, 0)
				node (muestreo_up) {}
			to[short, f^=$i_e$] ++({4 * (1 / 3)}, 0);

		\draw (reali_in_down) to[short] (muestreo_down |- reali_in_down)
			to[short, -*] (muestreo_down);
		\draw (reali_in_up) to[short] (muestreo_up |- reali_in_up)
			to[short, -*] (muestreo_up)
			to[open] ++(-0.2, 0)
			to[open, v_=$i_f$]
				($ (muestreo_up |- ampli_in_down) + (-0.2, 0) $);
		\draw ($ (ampli_in_down) + (-0.2, 0) $) 
			to[open, v^=$v_s$] ($ (ampli_in_up) + (-0.2, 0) $);

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
			to[american, vsource, invert, l^=$R_{mo} i_e$] (temp |- ampli_out_up)
			to[R, l_=$R_0$] (ampli_out_up);

		\draw (reali_out_down) to[short] ++(-1, 0) 
				node (temp) {}
			to[R, l_=$R_{ri}$] (temp |- reali_out_up)
			to[short] (reali_out_up);
			
		\draw (reali_in_down) to[short] ++(2.5, 0)
				node (temp) {}
			to[isource, l^=$kv_o$] (temp |- reali_in_up)
			to[short] (reali_in_up);			
		\draw (reali_in_down) to[short] ++(1, 0)
				node (temp) {}
			to[R, l^=$R_{ro}$] (temp |- reali_in_up)
			to[short] (reali_in_up);

		\path (ampli_north) node[above=1pt, scale=1.3] {$R_{mo} = \frac{v_o}{i_e}$};
		\path (reali_south) node[below=1pt, scale=1.2] {$k = \frac{i_f}{v_o}$};
	\end{circuitikz}
\end{document}
```

Donde la [[Impedancia|transresistencia]] del [[Amplificador operacional|amplificador]] esta dada por $$ R_m = \frac{v_0}{i_s} $$
Podemos ver la realimentación como $$ \begin{align} 
    i_s &= i_e + i_f \\
    i_e &= i_s - i_f \\
     &= i_s - k ~ v_0 \\
    \frac{v_0}{R_{mo}} &= i_s - k ~ v_0 \\
    R_m &= \frac{R_{mo}}{1 + R_{mo} ~ k} \\
\end{align} $$ donde $R_{mo} ~ k$ es la [[Ganancia de lazo|ganancia de lazo]]

### Modelo ideal amplificador
---
$R_i \to 0$
* Para que la corriente de entrada tenga baja impedancia de paso

 $R_o \to 0$ 
 * Para que no afecte la caída de tensión al valor de la fuente

### Modelo ideal realimentación
---
$R_{ri} \to \infty$
* Para no afectar la caída de tensión $v_o$ sobre la resistencia de carga $R_L$

 $R_{ro} \to \infty$ 
 * Para no afectar la corriente generada por la fuente

## Calculo de impedancias
---
Para calcular las impedancias, vamos a tomar $R_s \ll Z_i$ y que estamos en el caso ideal del realimentador donde $R_{ri} \to \infty$ y $R_{ro} \to \infty$

### Impedancia de entrada
---
Por la condición establecida, tenemos las ecuaciones $$ \begin{align} 
    v_o &= R_{mo} ~ i_e \\
    R_m &= \frac{v_0}{i_s} 
\end{align} \implies \begin{cases} 
    \displaystyle i_e = \frac{i_s}{1 + R_{mo} ~ k} \\
    \displaystyle Z_i = \frac{v_s}{i_s}
\end{cases} $$
Usando ambas, podemos obtener resultando en la impedancia de entrada $Z_i$ dada por $$ \boxed{ Z_i = \frac{v_s}{i_e} \frac{1}{1 + R_{mo} ~ k} = \frac{R_i}{1 + T} } $$

### Impedancia de salida
---
%% Hacer las cuentas %%

El resultando en la impedancia de salida $Z_o$ dada por $$ \boxed{ Z_0 = \frac{R_0}{1 + T} } $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```