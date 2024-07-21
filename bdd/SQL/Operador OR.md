---
dia: 2024-03-21
capitulo: 2
tags:
  - bdd/SQL
---
### Definición
---
Este [[Operación lógica|operador lógico]] aplica la lógica de [[Operador lógico OR|operador lógico OR]]

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