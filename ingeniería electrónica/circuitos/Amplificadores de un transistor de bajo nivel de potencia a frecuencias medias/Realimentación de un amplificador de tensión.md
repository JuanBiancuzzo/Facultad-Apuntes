---
dia: 2024-05-08
tags:
  - carrera/ingeniería-electrónica/circuitos/Amplificadores-de-un-transistor-de-bajo-nivel-de-potencia-a-frecuencias-medias
  - nota/facultad
referencias:
  - "431"
  - "1017"
etapa: ampliar
aliases:
  - Realimentación por relación de tensiones
  - Series-Shunt Feedback
  - MVSV
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este [[Amplificador de tensión|amplificador de tensión]], al [[Controlador closed-loop#En circuitos de amplificador|realimentarlo]], podemos pensarlo como muestreo de [[Tensión|tensión]] y suma de tensión. Esto lo podemos ver con el siguiente modelo

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
		\coordinate (ampli_in_up)    at (-3, {4 * 2.5 / 5 + 1}) {};
		\coordinate (ampli_in_down)  at (-3, {1 * 2.5 / 5 + 1}) {};
		\coordinate (ampli_out_up)   at (3, {4 * 2.5 / 5 + 1}) {};
		\coordinate (ampli_out_down) at (3, {1 * 2.5 / 5 + 1}) {};
		\coordinate (ampli_center)   at (0, {2.5 / 2 + 1}) {};
		\coordinate (ampli_north)    at (0, 3.5) {};

		\draw (-2.5, -2) rectangle (2.5, 0);
		\coordinate (reali_in_up)    at (-2.5, {4 * 2 / 5 - 2}) {};
		\coordinate (reali_in_down)  at (-2.5, {1 * 2 / 5 - 2}) {};
		\coordinate (reali_out_up)   at (2.5, {4 * 2 / 5 - 2}) {};
		\coordinate (reali_out_down) at (2.5, {1 * 2 / 5 - 2}) {};
		\coordinate (reali_center)   at (0, {2 / 2 - 2}) {};
		\coordinate (reali_south)    at (0, -2) {};

		\draw (reali_in_down) to[short] ++(-4.5, 0)
				node (temp) {}
			to[sV, l^=$v_s$] (temp |- ampli_in_up)
			to[R, l=$R_s$] ++(2, 0)
    			node (tension_entrada) {}
			to[short, f^=$i_i$](ampli_in_up);
		\draw (tension_entrada |- reali_in_down) to[open, v^=$v_i$]
    		(tension_entrada);
			
		\draw (reali_in_up) to[short] ++(-1.5, 0)
				node (temp) {}
			to[short] (temp |- ampli_in_down)
			to[short] (ampli_in_down);
		
		\draw ($ (reali_in_down) + (-1.5, 0) $)
			to[open, v^=$v_f$] ($ (reali_in_up) + (-1.5, 0) $);
		\draw (temp |- ampli_in_down) 
			to[open, v^=$v_e$] (temp |- ampli_in_up);

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
			to[american, vsource, invert, l^=$A_{vo} v_e$] (temp |- ampli_out_up)
			to[R, l_=$R_0$] (ampli_out_up);

		\draw (reali_out_down) to[short] ++(-1, 0) 
				node (temp) {}
			to[R, l_=$R_{ri}$] (temp |- reali_out_up)
			to[short] (reali_out_up);
		\draw (reali_in_down) to[short] ++(2, 0)
				node (temp) {}
			to[american, vsource, invert, l_=$kv_o$] (temp |- reali_in_up)
			to[R, l^=$R_{ro}$] (reali_in_up);

		\path (ampli_north) node[above=1pt, scale=1.3] 
    		{$A_{vo} = \frac{v_o}{v_e}$};
		\path (reali_south) node[below=1pt, scale=1.2] 
    		{$k = \frac{v_f}{v_o}$};
	\end{circuitikz}
\end{document}
```

Donde la [[Ganancia|ganancia]] del [[Amplificador operacional|amplificador]] esta dada por $$ A_v = \frac{v_0}{v_s} $$
Podemos ver la realimentación (con $R_s = 0$ por simplicidad) como $$ \begin{matrix} 
	v_s = v_e + v_f \\
	\implies v_e = v_s - v_f = v_s - k ~ v_0 = v_s - k ~ A_{vo} ~ v_e \\
	v_e ~ (1 + k ~ A_{vo}) = v_s \\
	\boxed{ A_v = \frac{A_v}{1 + k ~ A_{vo}} = \frac{A_v}{1 + T}} 
\end{matrix} $$ donde $T$ es la [[Ganancia de lazo|ganancia de lazo]]

Para valores de $R_s \ne 0$, notemos que podemos hacer el mismo calculo anterior, pero teniendo en cuenta que $$ v_i = \frac{Z_i}{Z_i + R_s} ~ v_s $$ donde $Z_i$ es la [[Impedancia|impedancia]] de entrada del amplificador realimentado

Para valores de $R_s \ll Z_i$ esto produce que la tensión de entrada $v_i$ no sea afectada por las variaciones que puede introducir la $Z_i$, ya que depende de los componentes internos del bloque amplificador. Para cuando $R_s$ es comparable a $Z_i$, los efectos previamente mencionados produciendo así que la ganancia $\frac{v_o}{v_s}$ no sea estabilizada

Por lo tanto, los beneficios de esta configuración se presentan cuando $R_s \ll Z_i$

Como veremos en el calculo de impedancias, podemos ver que el amplificador realimentado, con un valor de $T \to \infty$, este se comporta cada vez más como un [[Amplificador de tensión|amplificador de tensión ideal]]

### Modelo ideal amplificador
---
$R_i \to \infty$
* Para que toda la [[Corriente eléctrica|corriente]] $i_i$ pase por la resistencia interna del amplificador
* Para que el bloque realimentador no cargue al bloque amplificador

 $R_o \to 0$ 
 * Para que no existan caídas de tensión tal que toda la corriente pase por la resistencia de carga $R_L$

### Modelo ideal realimentación
---
El bloque realimentador $k$ posee una [[Impedancia|impedancia]] de entrada tal que "no carga" al amplificador básico, al ser conectado a la salida de éste para formar el lazo de realimentación, es decir, no toma potencia de $A_{vo}$

Esto significa que el bloque realimentador presentará una impedancia de entrada infinita, por lo que el amplificador $A_{vo}$ "verá" la misma carga $R_L$ con o sin el bloque $k$ conectado $$ R_{ri} \to \infty $$

Análogamente la salida de la red $k$ conectada a la entrada del amplificador en serie con el generador de excitación $v_s$, tendrá una impedancia de salida nula, de modo de no agregar una caída de tensión adicional a la entrada que afectaría el valor de la tensión realimentada $v_f$, en el caso de existir corriente por la malla de entrada $$ R_{ro} \to 0 $$
## Calculo de impedancias
---
Para calcular las impedancias, vamos a tomar $R_s \ll Z_i$ y que estamos en el caso ideal del realimentador donde $R_{ri} \to \infty$ y $R_{ro} \to 0$

### Impedancia de entrada
---
Por la condición establecida, tenemos las ecuaciones $$ \begin{align} 
    v_o &= A_{vo} ~ v_e \\
    v_i &= v_e + k ~ v_o
\end{align} \implies \begin{cases} 
    v_i = v_e + A_{vo} ~ k ~ v_e = v_e ~ (1 + T) \\
    \displaystyle i_i = \frac{v_e}{R_i}
\end{cases} $$
Usando ambas, podemos obtener $$ i_i = \frac{v_i}{R_i} ~ \frac{1}{1 + T} $$ y resultando en la impedancia de entrada $Z_i$ dada por $$ \boxed{ Z_i = \frac{v_i}{i_i} = (1 + T) ~ R_i } $$
## Impedancia de salida
---
Por la condición establecida, tenemos las ecuaciones $$ \begin{align} 
    v_e + k ~ v_o &= 0 \\
    i_o &= \frac{v_o - A_{vo} ~ v_e}{R_o}
\end{align} \implies i_0 = \frac{v_o + T ~ v_o}{R_o} $$
Usando ambas, podemos obtener $$ i_0 = v_o ~ \frac{1 + T}{R_o} $$ y resultando en la impedancia de salida $Z_o$ dada por $$ \boxed{ Z_0 = \frac{v_o}{i_o} = \frac{R_0}{1 + T} } $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```