---
dia: 2024-11-28
etapa: ampliar
referencias:
  - "431"
  - "1017"
tags:
  - carrera/ingeniería-electrónica/circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
  - nota/facultad
  - carrera/ingeniería-electrónica/circuitos-2/Realimentación-negativa
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se define ganancia de lazo, al producto de la [[Ganancia|ganancia]] del [[Amplificador operacional|amplificador]] en la trayectoria directa, por la ganancia del amplificador en la trayectoria de realimentación. Esta esta denotada con la letra $T$ 

## Ejemplo
---
Tomando un [[Amplificador de tensión|amplificador de tensión]] $A_0$ y un bloque de realimentación $k$ se tiene una ganancia de lazo $$ T = A_0 ~ k $$ donde su diagrama de bloque es el siguiente

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

		\path (ampli_center) node[scale=1.3] {$A_{vo} = \frac{v_o}{v_i}$};
		\path (reali_center) node[scale=1.3] {$k = \frac{v_f}{v_o}$};
		
		\draw[->] ($ (ampli_in_up) + (-1, 1) $) -- ($ (ampli_out_up) + (1, 1) $)
    		node[midway, above=2pt, scale=1.2] {Trayectoria directa};
    	
    	\draw[->] ($ (muestreo_down) + (0.75, -0.75) $) node (temp) {}
        	-- ($ (temp |- reali_out_down) + (0, -0.75) $)
            	node[midway, right=2pt, align=center] 
                	{Trayectoria de\\realimentación}
        	-- ($ (reali_out_down) + (0.75, -0.75) $);
        	
	\end{circuitikz}
\end{document}
```

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```