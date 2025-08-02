---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
  - carrera/ingeniería-electrónica/intro/Circuitos-con-resistencias
  - carrera/ingeniería-en-informática/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
  - nota/facultad
aliases:
  - Resistencias en serie#En serie
  - Resistencias en paralelo#En paralelo
---
# Definición:
---
La resistencia eléctrica de un componente es una magnitud que representa la oposición a la circulación de [[Corriente eléctrica|corriente]] de dicho componente

### Unidad
---
$$ [R] = Ohm \space (\Omega) $$

## Equivalencias
---
Las equivalencias equivalentes que puede sustituir a otras resistencias que se encuentran un determinado circuitos son

### En serie
---
Son aquellas resistencias atravesados por la misma [[Corriente eléctrica|corriente]] ([[Elementos en serie|elementos en serie]]) y comparten la misma [[Malla|malla]]

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, 5) to[V=$V_0$] (0, 0)
			to (3, 0)
			to[R=$R_2$] (3, 2.5)
			to[R=$R_1$] (3, 5)
			to (0, 5);

		\draw[loosely dashed, gray, rounded corners=10pt] (1.5, -0.25) rectangle (3.5, 5.25);
		\path (1.5, -0.25) -- (3.5, -0.25)
			node[pos=0.5, below=2pt] {$R_{eq}$};
	\end{circuitikz}
\end{document}
```

Por lo que el equivalente es $$ R_{eq} = R_1 + R_2 $$ que es igual a los [[Inductor#En serie|inductores en serie]] y los [[Capacitor#En paralelo|capacitores en paralelo]]

### En paralelo
---
Son aquellas resistencias que comparten la misma [[Tensión|tensión]] entre los mismos [[Nodo|nodo]] ([[Elementos en paralelo|elementos en paralelo]])

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
		\draw (0, 3) to[V_=$V_0$] (0, 0)
			to (2, 0)
			to[R=$R_1$] (2, 3)
			to (0, 3);
		\draw (2, 0) to[short, *-] (4, 0)
			to[R=$R_2$] (4, 3)
			to[short, -*] (2, 3);

		\draw[loosely dashed, gray, rounded corners=10pt] (1, -0.25) rectangle (4.5, 3.25);
		\path (1, -0.25) -- (4.5, -0.25)
			node[pos=0.5, below=2pt] {$R_{eq}$};
	\end{circuitikz}
\end{document}
```

Por lo que el equivalente es $$ \begin{CD} 
	R_{eq} = \left( \sum_i^N R_i^{-1} \right)^{-1} @>{N~=~2}>> \frac{R_1 \cdot R_2}{R_1 + R_2}
\end{CD} $$ que es igual a los [[Inductor#En paralelo|inductores en paralelo]] y los [[Capacitor#En serie|capacitores en serie]]