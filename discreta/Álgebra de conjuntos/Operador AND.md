---
dia: 2024-03-21
tags:
  - bdd/SQL
  - nota/facultad
  - discreta/Álgebra-de-conjuntos
  - discreta/Álgebra-proposicional
  - analisis-2/Nomenclatura
  - lenguajes-de-programación/lenguaje-c
aliases:
  - Conjunción
  - Intersección de conjuntos
---
# Definición
---
Este [[Operación lógica|operador lógico]] tiene varias representaciones 

## Álgebra de proposiciones
---
Considerando las [[Función proposicional|funciones proposicionales]] correspondientes $pq$ dada por la [[Tabla de verdad|tabla de verdad]] $$ \begin{array}{|c:c|c|}
\hline
p & q & pq\\
\hline
0 & 0 & 0 \\
0 & 1 & 0 \\
1 & 0 & 0 \\
1 & 1 & 1 \\
\hline
\end{array} $$ ^39ff30
## Álgebra de conjunto
---
$A \cap B$ se lee "A intersección B" y es el conjunto que contiene los elementos comunes a ambos 

Definimos la conjunción $P \cap Q$ como el [[Conjunto|conjunto]] de elementos que se encuentran en $P$ y en $Q$

```tikz
\begin{document} 
	\begin{tikzpicture}
		\path[fill=black, even odd rule] (-1.25, 0) circle (2.08)
			(-1.25, 0) circle (1.92);
		\path[fill=black, even odd rule] ( 1.25, 0) circle (2.08)
			( 1.25, 0) circle (1.92);
		
		\begin{scope}
			\clip (-1.25, 0) circle (2);
			\clip ( 1.25, 0) circle (2);
	
			\fill[ultra thick, green!35!darkgray] (-1.25, 0) circle (2);
			\fill[ultra thick, green!35!darkgray] ( 1.25, 0) circle (2);
		\end{scope}
		
		\draw[ultra thick, darkgray] (-1.25, 0) circle (2)
			node[font=\bfseries, black, scale=1.75, left=2pt] (a) {$A$};	
		\draw[ultra thick, darkgray] ( 1.25, 0) circle (2)
			node[font=\bfseries, black, scale=1.75, right=2pt] (b) {$B$};

		\path (a) -- (b) node[midway] (ab) {};
		\path (ab) -- ++(0, 2.4) 
			node[font=\bfseries, black, scale=1.75] {$A \cap B$};
	\end{tikzpicture}
\end{document}
```

^c09f24

## En SQL
---
En [[Structured Query Language|SQL]] se usa en la cláusula [[Sentencia WHERE|WHERE]], y se usa para filtrar [[Registro SQL|registros]] con más de una condición, donde todas tiene que cumplir

```SQL
SELECT columna1, columna2, ...
FROM nombre_tabla
WHERE condicion1 AND condicion2 AND condicion3 ...;
```

## En C
---
La operación `and` hace la distinción entre una álgebra booleana donde se ve de la siguiente forma 

```c
#include <stdbool.h>

bool es_verdarero = true;
bool es_falso = false;

bool resultado = es_verdadero && es_falso; // false
```

La siguiente distinción es que permite manipular los [[Información#Bit|bits]] de un [[Representación de enteros#Representación en C|número]], donde se ve de esta forma 

```c
size_t numero = 22;
size_t mascara = 0b11110000;

size_t resultado = numero & mascara; // 16
```