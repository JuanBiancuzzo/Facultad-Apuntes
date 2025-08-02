---
dia: 2024-03-21
tags:
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
  - carrera/ingeniería-en-informática/analisis-2/Nomenclatura
  - carrera/ingeniería-en-informática/bdd/SQL
  - carrera/ingeniería-en-informática/discreta/Álgebra-de-conjuntos
  - carrera/ingeniería-en-informática/discreta/Álgebra-proposicional
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - nota/facultad
  - nota/investigacion
aliases:
  - Disyunción
  - Unión de conjuntos
referencias:
  - "411"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este [[Operación lógica|operador lógico]] tiene varias representaciones 

## Álgebra de proposiciones
---
Considerando las [[Función#Álgebra proposicional|funciones proposicionales]] correspondientes $p + q$ dada por la [[Tabla de verdad|tabla de verdad]] $$ \begin{array}{|c:c|c|}
\hline
p & q & p + q\\
\hline
0 & 0 & 0 \\
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 1 \\
\hline
\end{array} $$
## Álgebra de conjunto
---
Sean $A$, $B$ [[Subconjunto|subconjuntos]] de un [[Conjunto|conjunto]] referencial $U$. La unción de $A$ y $B$ es el conjunto $A \cup B$ de los elementos de $U$ que pertenecen a $A$ o a $B$. Es decir $$ A \cup B = \set{x \in U : x \in A ~~\lor~~ x \in B } $$
Notemos que este "o" involucrado en la definición de la unión es no excluyente, es decir si un elemento está en $A$ y en $B$, está en la unión por estar en al menos alguno de los dos

Definimos la disyunción $A \cup B$ como el [[Conjunto|conjunto]] de elementos que se encuentran o en $A$, o en $B$

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

## En SQL
---
En [[Structured Query Language|SQL]] se usa en la cláusula [[Sentencia WHERE|WHERE]], y se usa para filtrar [[Registro SQL|registros]] con más de una condición, donde alguna tiene que cumplir

```SQL
SELECT columna1, columna2, ...
FROM nombre_tabla
WHERE condicion1 OR condicion2 OR condicion3 ...;
```

### Combinarlo con el operador AND
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

## En C
---
La operación `and` hace la distinción entre una álgebra booleana donde se ve de la siguiente forma 

```c
#include <stdbool.h>

bool es_verdarero = true;
bool es_falso = false;

bool resultado = es_verdadero || es_falso; // true
```

La siguiente distinción es que permite manipular los [[Información#Bit|bits]] de un [[Representación de enteros#Representación en C|número]], donde se ve de esta forma 

```c
size_t flag1 = 0b01000000;
size_t flag2 = 0b00000010;

size_t resultado = flag1 | flag2; // 0b01000010
```


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```