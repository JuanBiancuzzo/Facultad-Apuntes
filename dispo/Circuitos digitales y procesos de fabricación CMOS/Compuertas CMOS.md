---
dia: 2024-03-27
tags:
  - dispo/Circuitos-digitales-y-procesos-de-fabricación-CMOS
  - nota/facultad
---
### Definición
---
Para generar cualquier [[Compuerta|compuerta]] o cualquier [[Función lógica|función lógica]] a partir de una estructura CMOS, es decir tecnología [[Estructura Metal-Óxido-Semiconductor (MOS)|MOS]] complementaria con la siguiente estructura

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]

	\node[ground] (g) at (0, -0.5) {};

	\draw (-1.5, 0) rectangle (1.5, 1.7)
		node[midway] {PDN};
	\draw (-1.5, 2.7) rectangle (1.5, 4.4)
		node[midway] {PUN};

	\draw (g.center) -- (0, 0);
	\draw (0, 1.7) -- (0, 2.7);
	\draw (0, 4.4) -- (0, 4.9);
	\draw[ultra thick] (-0.5, 4.9) -- (0.5, 4.9)
		node[midway, above=2pt] {$V_{DD}$};

	\draw (0, 2.2) -- ++(3, 0)
		node[right=2pt] {$F(In_1, In_2, \cdots, In_n)$};
	\path (1.5, 0) -- (1.5, 1.7) 
		node[midway, right=4pt] {NMOS only};
	\path (1.5, 2.7) -- (1.5, 4.4) 
		node[midway, right=4pt] {PMOS only};

	\foreach \x in {1.7, 4.4} {
		\draw (-1.5, {\x - 0.2}) -- ++(-0.5, 0)
			node[left=2pt] {$In_1$};
		\draw (-1.5, {\x - 0.6}) -- ++(-0.5, 0)
			node[left=2pt] {$In_2$}
			node[midway, below] {$\vdots$};
		\draw (-1.5, {\x - 1.5}) -- ++(-0.5, 0)
			node[left=2pt] {$In_n$};
	}

	\end{circuitikz}
\end{document}
```

#### Complementariedad
---
Para evitar que exista un camino de conducción entre $V_{DD}$ y  $GND$ se definen dos grupos de complementariedad

##### Producto
---
```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]	
		\draw (0, 0) node[left=2pt] {$X$}
			to[Tnmos, n=na] ++(1.5, 0)
			to[Tnmos, n=nb] ++(1.5, 0)
				node[right=2pt] {$Y$};
		\path (na.G) node[above=2pt] {$A$};
		\path (nb.G) node[above=2pt] {$B$};
	\end{circuitikz}
\end{document}
```
$$ Y = X, ~ \text{if} ~ A ~ \text{and} ~ B $$

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]	
		\draw (0, 0) node[left=2pt] {$X$}
			to ++(0.5, 0)
			to ++(0, -1)
			to[Tpmos, n=pa] ++(1.5, 0)
			to ++(0, 1)
			to ++(0.5, 0) node[right=2pt] {$Y$};
		
		\draw (0.5, 0) 
			to ++(0, 1)
			to[Tpmos, n=pb] ++(1.5, 0)
			to ++(0, -1);		
		
		\path (pa.G) node[above=2pt] {$A$};
		\path (pb.G) node[above=2pt] {$B$};
	\end{circuitikz}
\end{document}
```
$$ Y = X, ~ \text{if} \overline{A} ~ \text{or} ~ \overline{B} = \overline{AB} $$

##### Suma
---
```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]	
		\draw (0, 0) node[left=2pt] {$X$}
			to ++(0.5, 0)
			to ++(0, -1)
			to[Tnmos, n=na] ++(1.5, 0)
			to ++(0, 1)
			to ++(0.5, 0) node[right=2pt] {$Y$};
		
		\draw (0.5, 0) 
			to ++(0, 1)
			to[Tnmos, n=nb] ++(1.5, 0)
			to ++(0, -1);		
		
		\path (na.G) node[above=2pt] {$A$};
		\path (nb.G) node[above=2pt] {$B$};
	\end{circuitikz}
\end{document}
```
$$ Y = X, ~ \text{if} ~ A ~ \text{or} ~ B $$

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]	
		\draw (0, 0) node[left=2pt] {$X$}
			to[Tpmos, n=pa] ++(1.5, 0)
			to[Tpmos, n=pb] ++(1.5, 0)
				node[right=2pt] {$Y$};
		\path (pa.G) node[above=2pt] {$A$};
		\path (pb.G) node[above=2pt] {$B$};
	\end{circuitikz}
\end{document}
```
$$ Y = X, ~ \text{if} ~ \overline{A} ~ \text{and} ~ \overline{B} = \overline{A + B} $$

##### Inversión
---
![[Inversor Metal-Óxido-Semiconductor  Complementaria#Definición]]