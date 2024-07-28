---
dia: 2023-09-05
tags:
  - intro/Reducción-de-circuitos
  - nota
---
### Definición
---
Se establece que un [[Circuito lineal]] de dos terminales puede reemplazarse por un circuito equivalente que consta de una [[Fuente de corriente]] $I_n$ en [[Elementos en paralelo|paralelo]] con un [[Resistor]] $R_n$ donde $I_n$ es la [[Corriente eléctrica|corriente]] de cortocircuito a través de las terminales y $R_n$ es la resistencia de entrada o resistencia equivalente en las terminales cuando las fuentes independientes están desactivadas

#### Aplicación
---
1. Se elige un [[Resistor|resistor]] "de carga" (puede ser también una [[Fuente de tensión|fuente de tensión]] o una [[Fuente de corriente|fuente de corriente]]), que es en el que nos interesa saber que sucede.
2. Todo el circuito, salvo el resistor de carga, se podrá simplificar en un circuito equivalente con $I_n$ y $R_n$.
3. Para sacar $R_n$, se pasivan las fuentes del [[Circuito eléctrico|circuito]] y solo se tienen en cuenta los resistores.
4. Para sacar $I_n$, observo cuál es la diferencia de potencial entre los terminales donde se conectó la carga. Para ello, tengo en cuenta todo el circuito y lo resuelvo con el método que considere optimo.
5. Ahora tengo un [[Circuito eléctrico|circuito]] equivalente con $I_n$, $R_n$ y el resistor de carga. Por lo que, sera mas fácil calcular lo que me pidan en el resistor de carga.

#### Esquematizando
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
	\begin{circuitikz}[voltage shift=0.5, scale=1.2, transform shape, thick]
		\coordinate (centro) at (0, 0);

		\draw ($ (centro) + (5, 0) $) 
				node[below=2pt] {$b$}
			to[short, o-] ++(-5, 0)	
			(centro) to[american, V, l_=$V_{th}$, invert] ++(0, 3)
			to[R, l^=$R_{th}$] ++(3, 0)
			to[short, v^=$I$, -o] ++(2, 0)
				node[above=2pt] {$a$};
		\draw ($ (centro) + (5, 0) $) to[open, v^=$V$] ($ (centro) + (5, 3) $);
			
		\draw[<->, ultra thick] ($ (centro) + (5.5, 1.5) $) 
			-- ++(1.75, 0);

		\coordinate (centro) at (8, 0);

		\draw ($ (centro) + (5, 0) $) 
				node[below=2pt] {$b$}
			to[short, o-] ++(-5, 0)
			(centro) to[american, isource, l_=$I_N$] ++(0, 3)
			to[short, -o] ++(5, 0)
				node[above=2pt] {$a$};
		\draw ($ (centro) + (2, 0) $) to[R, l_=$R_N$] ++(0, 3);
		\draw ($ (centro) + (5, 0) $) to[open, v^=$V$] ($ (centro) + (5, 3) $);
	\end{circuitikz}
\end{document}
```


