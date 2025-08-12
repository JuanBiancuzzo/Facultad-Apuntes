---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/intro/Reducción-de-circuitos
  - nota/facultad
vinculoFacultad:
  - tema: Reducción de circuitos
    capitulo: 2
    materia: Introducción a la ingeniería electronica
    carrera: Ingeniería electrónica
---
# Definición
---
Se establece que un [[Circuito lineal]] de dos terminales puede reemplazarse por un circuito equivalente que consta de una [[Fuente de tensión]] $V_{th}$ en [[Elementos en serie|serie]] con un [[Resistor]] $R_{th}$, donde $V_{th}$ es la [[Tensión]] de [[Circuito eléctrico|circuito]] abierto en las terminales y $R_{th}$ es la entrada o resistencia equivalente en las terminales cuando las fuentes independientes se apagan

## Aplicación
---
1. Se elige un [[Resistor]] "de carga" (puede ser también una [[Fuente de tensión]] o una [[Fuente de corriente]]), que es en el que nos interesa saber que sucede.
2. Todo el circuito, salvo el resistor de carga, se podrá simplificar en un circuito equivalente con $V_{th}$ y $R_{th}$.
3. Para sacar $R_{th}$, se pasivan las fuentes del circuito y solo se tienen en cuenta los resistores.
4. Para sacar $V_{th}$, observo cuál es la diferencia de potencial entre los terminales donde se conectó la carga. Para ello, tengo en cuenta todo el circuito y lo resuelvo con el método que considere optimo.
5. Ahora tengo un circuito equivalente con $V_{th}$, $R_{th}$ y el resistor de carga. Por lo que, sera mas fácil calcular lo que me pidan en el resistor de carga.

## Esquematizando
---

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
	capacitors/scale=0.7
}

\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=1.1, transform shape, thick]
		\coordinate (centro) at (0, 0);

		\draw (centro) to[american, V, invert, l^=$V_1$] ++(0, 3)
			to[R, l^=$R_1$] ++(3, 0)
			to[R, l^=$R_3$] ++(0, -3)
			to[short] ++(-3, 0);
			
		\draw ($ (centro) + (3, 0) $) to[short, *-o] ++(1, 0)
				node[below=2pt] {$b$}
			to[short] ++(2, 0)
			to[american, V, invert, l^=$V_2$] ++(0, 3)
			to[R, l^=$R_2$] ++(-2, 0)
				node[above=2pt] {$a$}
			to[short, o-*] ++(-1, 0);
			
		\draw[<->, ultra thick] ($ (centro) + (6.75, 1.5) $) 
			-- ++(1.75, 0);

		\coordinate (centro) at (9.5, 0);

		\draw ($ (centro) + (3, 0) $) 
				node[below right=2pt] {$b$}
			to[short, o-] ++(-3, 0)	
			(centro) to[american, V, l_=$V_{th}$, invert] ++(0, 3)
			to[R, l^=$R_{th}$, -o] ++(3, 0)
				node[above right=2pt] {$a$};
		
		\draw ($ (centro) + (3, 0) $) to[short] ++(1, 0)
			to[R, l^=$R_L$] ++(0, 3)
			to[short] ++(-1, 0);

		\draw[dashed] ($ (centro) + (-0.75, -0.75) $)
			rectangle ($ (centro) + (3, 3.75) $);
	\end{circuitikz}
\end{document}
```