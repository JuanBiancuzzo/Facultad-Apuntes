---
dia: 2024-08-07
tags:
  - carrera/ingeniería-en-informática/discreta/Relaciones
  - nota/facultad
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
aliases:
  - Relación en un conjunto#Relación en un conjunto
---
# Definición
---
Sean $A$ y $B$ [[Conjunto|conjuntos]]. Una relación $\mathcal{R}$ de $A$ en $B$ es un [[Subconjunto|subconjunto]] cualquiera $\mathcal{R}$ del [[Producto cartesiano|producto cartesiano]] $A \times B$. Es decir $\mathcal{R}$ es una relación de $A$ en $B$ si $\mathcal{R} \in \mathcal{P}(A \times B)$, siendo $\mathcal{P}$ es el [[Conjunto de partes|conjunto de partes]]

Dados $x \in A$, $y \in B$ y una relación $\mathcal{R}$ de $A$ en $B$, se dice que $x$ está relacionado con $y$  (por la relación $\mathcal{R}$) si $(x,~y) \in \mathcal{R}$. Es ese caso se escribe $x \mathcal{R} y$. Si $x$ no está relacionado con $y$, es decir $(x,~y) \notin \mathcal{R}$, se escribe $x \not \mathcal{R} y$ 

Existen dos formas para denotar que un par de elementos pertenece a una relación $$ \begin{array}{c} (1,~2) \in R_1 \\ 1 R_1 2 \end{array} $$

### Representación matricial
---
Para representar una relación, también podremos utilizar una [[Matriz de adyacencia|matriz de adyacencia]], con la cantidad de elementos de $A$ como tamaño $$ A_{R_1} = \begin{pmatrix} 
	1 & 1 & 0 \\
	0 & 0 & 0 \\
	0 & 0 & 1 \\
\end{pmatrix} $$

#### Operaciones
---
Sean $A,~B \in \mathbb{R}^{n \times m}$ entonces
* Orden $A \le B \iff A(i,~j) \le B(i,~j), ~~~ \forall i,j$
* Producto Hadamard $(A \odot B)(i,~j) = A(i,~j) ~ B(i,~j), ~~~ \forall i,j$

### Representación con grafos
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


## Relación en un conjunto
---
Sea $A$ un [[Conjunto|conjunto]]. Se dice que $\mathcal{R}$ es una relación en $A$ cuando $\mathcal{R} \subseteq A \times A$

## Propiedades
---
En una relación, se pueden presentar las siguientes propiedades independientes, siendo $R$ una relación en el conjunto $A$

* [[Relación reflexiva|Reflexiva]]
* Irreflexiva $\forall x \in A: ~ xR'x$
* [[Relación simétrica|Simétrica]]
* [[Relación antisimétrica|Antisimétrica]]
* Asimétrica $\forall x,~y \in A: ~ xRy \implies yR'x$
* [[Relación transitiva|Transitiva]]
* Anti transitiva $\forall x,~y \in A: ~ (xRy,~yRz) \implies xR'z$