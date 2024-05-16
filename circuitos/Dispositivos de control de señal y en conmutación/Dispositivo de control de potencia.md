---
dia: 2024-03-11
materia: circuitos
capitulo: 2
---
### Definición
---
Se pueden identificar por tener tres bornes donde uno va a común (a tierra) y otras dos no

```tikz
\usepackage{circuitikz} 

\begin{document} 
	\begin{circuitikz}[american, scale=1.3, transform shape, thick]
		\draw (0.25, 0) rectangle (1.75, 3);

		\draw (1, 0) to[short, -*] ++(0, -0.5)
				node[left=2pt, font=\bfseries] (dosp) {$2'$}
			to ++(0, -0.5)
			to ++(3, 0)
			to[vsource, invert, l_=$V_A$] ++(0, 2.5)
			to[R, l_=$R_c$] ++(0, 2.5)
			to[short, f_=$I_0$] ++(-3, 0)
			to[short, -*] ++(0, -0.5)
				node[left=2pt, font=\bfseries] (dos) {$2$}
			to ++(0, -0.5);
		\draw ($ (dos) + (1.3, 0) $) 
			to[open, v^=$V_0$] ($ (dosp) + (1.3, 0) $);
		
		\draw[dashed] (1, 0) to (1, 0.7) to (0.25, 0.7);
		\draw (0.25, 2.3) to[short, -*] ++(-1.5, 0)
				node[above=2pt, font=\bfseries] {$1$}
			to[short, -o] ++(-1, 0)
			to[open, v=$V_i$] ++(0, -1.6)
			to[short, o-*] ++(1, 0)
				node[below=2pt, font=\bfseries] {$1'$}
			to ++(1.5, 0);
	\end{circuitikz}
\end{document}
```

Donde $R_c$ es la carga y $V_A$ es la alimentación, es la que entregue la [[Potencia|potencia]] total. El dispositivo de control de potencia se va a encargar de dosificar esa potencia para que se disipe más o menos sobre la carga

Entre la tierra y el borne controlado vamos a posicionar la carga, y va a estar controlada por la tierra y el otro borne, es decir que tendríamos $$ I_0 = f(V_i) $$

Estas están caracterizadas por dos curvas
* [[Curva de transferencia|Curva de transferencia]]
* [[Curva de salida|Curva de salida]]

#### Transistores como dispositivos de control de potencia
---
Tenemos 3 tipos de [[Transistor|transistores]] que nos vamos a analizar
* [[Transistor bipolar de juntura|TBJ]]
* [[Transistor de efecto de campo de unión (JFET)|JFET]]
* [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]]