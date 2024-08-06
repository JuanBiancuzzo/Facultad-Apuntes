---
dia: 2024-03-21
tags:
  - bdd/SQL
  - nota/facultad
  - discreta/Álgebra-de-conjuntos
  - discreta/Álgebra-proposicional
  - analisis-2/Nomenclatura
aliases:
  - Disyunción
  - Unión de conjuntos
---
### Definición
---
Este [[Operación lógica|operador lógico]] tiene varias representaciones 

#### Álgebra de proposiciones
---
Considerando las [[Función proposicional|funciones proposicionales]] correspondientes $p + q$ dada por la [[Tabla de verdad|tabla de verdad]] $$ \begin{array}{|c:c|c|}
\hline
p & q & p + q\\
\hline
0 & 0 & 0 \\
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 1 \\
\hline
\end{array} $$
#### Álgebra de conjunto
---
$A \cup B$ se lee "A unión B" y es el conjunto que contiene los elementos de ambos $$ \forall a, b : a \in A \cup B, ~\text{y} ~ b \in A \cup B, ~\text{donde} a \in A, b \in B $$

Definimos la disyunción $P \cup Q$ como el [[Conjunto|conjunto]] de elementos que se encuentran o en $P$, o en $Q$

```tikz
\begin{document} 
	\begin{tikzpicture}
		\path[fill=black, even odd rule] (-1.25, 0) circle (2.08)
			(-1.25, 0) circle (1.92);
		\path[fill=black, even odd rule] ( 1.25, 0) circle (2.08)
			( 1.25, 0) circle (1.92);

		\fill[ultra thick, green!35!darkgray] (-1.25, 0) circle (2)
			node[font=\bfseries, black, scale=1.75, left=2pt] {$A$};
		\fill[ultra thick, green!35!darkgray] ( 1.25, 0) circle (2)
			node[font=\bfseries, black, scale=1.75, right=2pt] {$B$};
	
		\draw[ultra thick, darkgray] (-1.25, 0) circle (2);		
		\draw[ultra thick, darkgray] ( 1.25, 0) circle (2);

		\path (0, 2.75) node[font=\bfseries, black, scale=1.75]
				{$A \cup B$};
	\end{tikzpicture}
\end{document}
```

^fccd72

#### En SQL
---
En [[Structured Query Language|SQL]] se usa en la cláusula [[Sentencia WHERE|WHERE]], y se usa para filtrar [[Registro SQL|registros]] con más de una condición, donde alguna tiene que cumplir

```SQL
SELECT columna1, columna2, ...
FROM nombre_tabla
WHERE condicion1 OR condicion2 OR condicion3 ...;
```

##### Combinarlo con el operador AND
---
Se puede combinar el [[Operador AND#En SQL|operador AND]] con el operador OR, donde el operador AND tiene precedencia ante el OR, pero se puede especificar esta usando paréntesis 

```SQL
WHERE Pais = 'España' AND NombrePais LIKE 'G%' OR NombrePais LIKE 'R%'
```

```tikz
\begin{document} 
	\begin{tikzpicture}[ultra thick]
		\draw (0, 0) rectangle (5, 1)
			node[midway] {Pais = 'España'};
		\draw (6, 0) rectangle (11, 1)
			node[midway] {NombrePais LIKE 'G\%'};
		\draw (2.5, 1) -- (5, 3.5);
		\draw (8.5, 1) -- (6, 3.5);
			
		\draw (5, 3) rectangle (6, 4) 
			node[midway] {AND};
		\draw (10, 3) rectangle (15, 4) 
			node[midway] {NombrePais LIKE 'R\%'};
		\draw (5.5, 4) -- (8.5, 6.5);
		\draw (12.5, 4) -- (9.5, 6.5);
			
		\draw (8.5, 6) rectangle (9.5, 7) 
			node[midway] {OR};
	\end{tikzpicture}
\end{document}
```

```SQL
WHERE Pais = 'España' AND (NombrePais LIKE 'G%' OR NombrePais LIKE 'R%')
```

```tikz
\begin{document} 
	\begin{tikzpicture}[ultra thick]
		\draw (0, 0) rectangle (5, 1)
			node[midway] {NombrePais LIKE 'G\%'};
		\draw (6, 0) rectangle (11, 1)
			node[midway] {NombrePais LIKE 'R\%'};
		\draw (2.5, 1) -- (5, 3.5);
		\draw (8.5, 1) -- (6, 3.5);
			
		\draw (5, 3) rectangle (6, 4) 
			node[midway] {OR};
		\draw (-4, 3) rectangle (1, 4) 
			node[midway] {Pais = 'España'};
		\draw (5.5, 4) -- (3, 6.5);
		\draw (-1.5, 4) -- (2, 6.5);
			
		\draw (2, 6) rectangle (3, 7) 
			node[midway] {AND};
	\end{tikzpicture}
\end{document}
```