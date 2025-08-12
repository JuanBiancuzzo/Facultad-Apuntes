---
dia: 2024-04-23
aliases:
  - Teorema de Miller de corrientes
tags:
  - carrera/ingeniería-electrónica/circuitos/Dispositivos-de-control-de-señal-y-en-conmutación
  - nota/facultad
vinculoFacultad:
  - tema: Dispositivos de control de señal y en conmutación
    capitulo: 2
    materia: Circuitos microelectrónicos
    carrera: Ingeniería electrónica
---
# Definición
---
Se puede obtener la reflexión de corrientes dado la siguiente situación


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
\usepackage{ifthen}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
	inductors/scale=0.7,
	cute inductors,
}

\begin{document} 
	\begin{circuitikz}[
		voltage shift=0.5, scale=1.3, transform shape, thick,
		loops/.style={circuitikz/inductors/coils=#1}
	]
    	\draw (0, 0) to[short, *-] ++(1.5, 0)
			to[R, l^=$R_1$, v_=$V_1$, i^=$I_1$] ++(0, 3)
			to ++(1.5, 0)
			to[R, l^=$R_2$, v_=$V_2$, i^=$I_2$] ++(0, 3)
			to[short, -*] ++(-3, 0);
		\draw[dashed] (3, 3) to[short, *-] ++(0, -3);
		\draw (0, 0) to[open, v^=$V_{12}$] ++(0, 6);
		
		\path (1.5, -0.25) node[below=2pt, align=center] 
    		{$V_{12}= I_1 ~ R_1 + I_2 ~ R_2$};
	\end{circuitikz}
\end{document}
```

 Donde se tiene que $$ I_1 = \alpha ~ I_2 $$
Si se quiere sacar de forma algebraica la [[Resistencia|resistencia]], usamos esta relación para sacar como factor común la [[Corriente eléctrica|corriente]] y de esa forma obtener la resistencia equivalente

El teorema de miller (reflexión por corrientes) propone mecanizar este razonamiento, notemos que tenemos que mantener las [[Tensión|tensiones]], modificando las corrientes y las resistencia, por lo que podemos tener

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
\usepackage{ifthen}

\ctikzset{
	resistors/scale=0.7,
	capacitors/scale=0.7,
	inductors/scale=0.7,
	cute inductors,
}

\begin{document} 
	\begin{circuitikz}[
		voltage shift=0.5, scale=1.3, transform shape, thick,
		loops/.style={circuitikz/inductors/coils=#1}
	]
    	\begin{scope}[cm={1, 0, 0, 1, (-3, 0)}]
        	\draw (0, 0) to[short, *-] ++(1.5, 0)
    			to[R, l^=$\alpha ~ R_1$, v_=$V_1$, i^=$I_2$] ++(0, 3)
    			to ++(1.5, 0)
    			to[R, l^=$R_2$, v_=$V_2$, i^=$I_2$] ++(0, 3)
    			to[short, -*] ++(-3, 0);
    		\draw[dashed] (3, 3) to[short, *-] ++(0, -3);
    		\draw (0, 0) to[open, v^=$V_{12}$] ++(0, 6);
        	
        	\path (1.5, -0.25) node[below=2pt, align=center] 
        		{$V_{12}= I_2 ~ (\alpha R_1 + R_2)$};
		\end{scope}
		
		\begin{scope}[cm={1, 0, 0, 1, (3, 0)}]
        	\draw (0, 0) to[short, *-] ++(1.5, 0)
    			to[R, l^=$R_1$, v_=$V_1$, i^=$I_1$] ++(0, 3)
    			to ++(1.5, 0)
    			to[R, l^=$\frac{1}{\alpha} R_2$, v_=$V_2$, i^=$I_1$] ++(0, 3)
    			to[short, -*] ++(-3, 0);
    		\draw[dashed] (3, 3) to[short, *-] ++(0, -3);
    		\draw (0, 0) to[open, v^=$V_{12}$] ++(0, 6);
        	
        	\path (1.5, -0.25) node[below=2pt, align=center] 
        		{$V_{12}= I_1 ~ (R_1 + \frac{1}{\alpha} R_2)$};
		\end{scope}
	\end{circuitikz}
\end{document}
```
