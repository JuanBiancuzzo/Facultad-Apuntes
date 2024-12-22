---
dia: 2024-03-21
tags:
  - ingeniería-en-informática/bdd/SQL
  - nota/facultad
  - ingeniería-en-informática/discreta/Álgebra-de-conjuntos
  - ingeniería-en-informática/discreta/Álgebra-proposicional
  - ingeniería-en-informática/analisis-2/Nomenclatura
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - ingeniería-electrónica/analisis-2/Nomenclatura
  - licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-SQL
aliases:
  - Conjunción
  - Intersección de conjuntos
referencias:
  - "411"
etapa: sin-empezar
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este [[Operación lógica|operador lógico]] tiene varias representaciones 

## Álgebra de proposiciones
---
Considerando las [[Función#Álgebra proposicional|funciones proposicionales]] correspondientes $pq$ dada por la [[Tabla de verdad|tabla de verdad]] $$ \begin{array}{|c:c|c|}
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
Sean $A$, $B$ [[Subconjunto|subconjuntos]] de un [[Conjunto|conjunto]] referencial $U$. La intersección de $A$ y $B$ es el conjunto $A \cap B$ de los elementos de $U$ que pertenecen tanto a $A$ como a $B$. Es decir $$ A \cap B = \set{ x \in U : x \in A ~~\land~~ x \in B } $$

Definimos la conjunción $A \cap B$ como el [[Conjunto|conjunto]] de elementos que se encuentran en $A$ y en $B$

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


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```