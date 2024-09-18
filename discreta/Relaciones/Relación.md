---
dia: 2024-08-07
tags:
  - discreta/Relaciones
  - nota/facultad
---
# Definición
---
Definimos $R$ como una relación en $A$ si $R \subseteq A \times A$, utilizando el [[Producto cartesiano|producto cartesiano]]. Por ejemplo, sea $A = \set{1,~2,~3}$. Podremos definir una relación $R_1 = \Set{ (1,~1),~ (1,~2),~ (3,~3) }$

Existen dos formas para denotar que un par de elementos pertenece a una relación $$ \begin{array}{c} (1,~2) \in R_1 \\ 1 R_1 2 \end{array} $$

## Representación matricial
---
Para representar una relación, también podremos utilizar una [[Matriz de adyacencia|matriz de adyacencia]], con la cantidad de elementos de $A$ como tamaño $$ A_{R_1} = \begin{pmatrix} 
	1 & 1 & 0 \\
	0 & 0 & 0 \\
	0 & 0 & 1 \\
\end{pmatrix} $$

### Operaciones
---
Sean $A,~B \in \mathbb{R}^{n \times m}$ entonces
* Orden $A \le B \iff A(i,~j) \le B(i,~j), ~~~ \forall i,j$
* Producto Hadamard $(A \odot B)(i,~j) = A(i,~j) ~ B(i,~j), ~~~ \forall i,j$

## Representación con grafos
---
Otra forma de representar la relación es graficando el [[Conjunto|conjunto]] y señalando con flechas las relaciones entre los objetos

La flecha parte del primer elemento del par, y llega al segundo elemento del par

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usetikzlibrary{automata, positioning}

\begin{document} 
	\begin{tikzpicture}[scale=1.5, transform shape, ultra thick, shorten >=3pt]
		\node[state] (q_1)                      {$1$};
		\node[state] (q_2) [above right=of q_1] {$2$};
		\node[state] (q_3) [right=of q_1]       {$3$};
		
		\path[->] (q_1) edge        node {} (q_2)
				  edge [loop left]  node {} ()
			(q_3) edge [loop right] node {} ();
	\end{tikzpicture}
\end{document}
```


## Propiedades
---
En una relación, se pueden presentar las siguientes propiedades independientes, siendo $R$ una relación en el conjunto $A$

* Reflexiva $\forall x \in A: ~ xRx$
* Irreflexiva $\forall x \in A: ~ xR'x$
* Simétrica $\forall x,~y \in A: ~ xRy \iff yRx$
* Antisimétrica $\forall x,~y \in A: ~ (xRy,~yRx) \implies x = y$
* Asimétrica $\forall x,~y \in A: ~ xRy \implies yR'x$
* [[Transitividad en relaciones de orden|Transitiva]] $\forall x,~y \in A: ~ (xRy,~yRz) \implies xRz$
* Anti transitiva $\forall x,~y \in A: ~ (xRy,~yRz) \implies xR'z$