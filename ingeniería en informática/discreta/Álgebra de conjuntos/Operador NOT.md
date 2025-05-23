---
dia: 2024-03-21
tags:
  - carrera/ingeniería-en-informática/discreta/Álgebra-de-conjuntos
  - nota/facultad
  - carrera/ingeniería-en-informática/bdd/SQL
  - carrera/ingeniería-electrónica/dispo/Circuitos-digitales-y-procesos-de-fabricación-CMOS
  - carrera/ingeniería-en-informática/discreta/Álgebra-proposicional
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
aliases:
  - Inversor
  - Negación
  - Complemento de un conjunto
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
Considerando las [[Función#Álgebra proposicional|funciones proposicionales]] correspondientes $p'$ dada por la [[Tabla de verdad|tabla de verdad]] $$ \begin{array}{|c|c|}
\hline
p & p'\\
\hline
0 & 1 \\
1 & 0 \\
\hline
\end{array} $$
## Álgebra de conjunto
---
Sea $A$ [[Subconjunto|subconjunto]] de un [[Conjunto|conjunto]] referencial $U$. El complemento de $A$ (en $U$) es el conjunto de los elementos de $U$ que no pertenecen a $A$, que suele notar con $A'$ o $A^c$ <sup><a href="#ref-411" style="color: inherit; text-decoration: none;">[411]</a></sup>  $$ A^c = \set{ x \in U : x \notin A } $$
```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}
\usepackage{ifthen}

\begin{document} 
	\begin{tikzpicture}[scale=1, transform shape, thick]

        \filldraw[draw=black, fill=green!35!darkgray] (-4.5, -3) 
            rectangle (4.5, 3);
        \path (4.5, 3) rectangle ++(-1, -1)
            node[midway, font=\bfseries, scale=1.75] {$U$};
        \path (3.5, -2) rectangle ++(-1, 1)
            node[midway, font=\bfseries, scale=1.75] {$A'$};

        \filldraw[ultra thick, draw=black, fill=white] (-0.5, 0) circle (2)
			node[font=\bfseries, black, scale=1.75] {$A$};

	\end{tikzpicture}
\end{document}
```

## En SQL
---
En [[Structured Query Language|SQL]] se usa en la cláusula [[Sentencia WHERE|WHERE]], y se usa en combinación de otros [[SQL Keywords#Operadores|operadores]] para dar el resultado opuesto 

```SQL
SELECT columna1, columna2, ...
FROM nombre_tabla
WHERE NOT condicion;
```

## En C
---
Para aplicarlo se usa de la siguiente forma

```c
#include <stdbool.h>

bool toggle = true;

toggle = !toggle; // false
```

Recordemos que [[Lenguaje C|C]] no hace distinción entre números y booleanos, por lo que se puede verificar si un [[Puntero|puntero]] es [[NULL|NULL]] de la siguiente forma

```c
int *puntero_invalido = NULL;

if (!puntero_invalido) {
    // Es invalido
}
```

## Electronica
---
En la electrónica digital la [[Información|información]] se representa mediante dos rangos distintos de [[Tensión|tensión]]

```tikz
\begin{document} 
	\begin{tikzpicture}[scale=1.2, transform shape, ultra thick]
		\draw[->] (0, -0.2) --
			(0, 0) -- (0, 4)
			node[pos=0, left=2pt] {$V_{MIN}$}
			node[pos=0.25, left=2pt] {$V_{OL}$}
			node[pos=0.5, left=2pt] {$V_{OH}$}
			node[pos=0.75, left=2pt] {$V_{MAX}$}
			node[pos=1, above left=2pt] {$V$};
		\draw (0, 0) rectangle (3, 1)
			node[midway] {$0$ lógico};
		\draw (0, 1) rectangle (3, 2)
			node[midway] {región indefinida};
		\draw (0, 2) rectangle (3, 3)
			node[midway] {$1$ lógico};
	\end{tikzpicture}
\end{document}
```

* El $0$ lógico: $V_{MIN} \le V < V_{OL}$
* El $1$ lógico: $V_{OH} < V \le V_{MAX}$
* Valor lógico indefinido: $V_{OL} \le V \le V_{OH}$

Una de las operaciones sería la inversión

```tikz
\usepackage{circuitikz}

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
	\node[not port, scale = 0.7] (not) at (1, 1.25) {};
	
	\draw ($ (not.in 1) + (-0.5, 0) $) node[left=2pt] {$IN$} 
		to (not.in 1);
	\draw (not.out) 
		to ($ (not.out) + (0.5, 0) $)
			node[right=2pt] {$OUT = \overline{IN}$};

	\path (5, 1.5) rectangle (6, 2.25)
		node[midway] {$IN$};
	\path (5, 0.75) rectangle (6, 1.5)
		node[midway] {$0$};
	\path (5, 0) rectangle (6, 0.75)
		node[midway] {$1$};

	\path (6, 1.5) rectangle (7, 2.25)
		node[midway] {$OUT$};
	\path (6, 0.75) rectangle (7, 1.5)
		node[midway] {$1$};
	\path (6, 0) rectangle (7, 0.75)
		node[midway] {$0$};

	\draw (5, 1.5) -- (7, 1.5);
	\draw[dashed] (5, 0.75) -- (7, 0.75);
	\draw (6, 0) -- (6, 2.25);

	\end{circuitikz}
\end{document}
```
 
Representación circuital y función ideal de [[Transferencia del sistema|transferencia]] 

```tikz
\usepackage{circuitikz}

\begin{document} 
	\begin{circuitikz}[american, voltage shift=0.5, scale=1.3, transform shape, thick]
	\node[not port, scale = 0.7] (not) at (1, 1.25) {};
	
	\draw ($ (not.in 1) + (-1, 0) $) to[short, *-] (not.in 1);
	\draw (not.out) to[short, -*] ($ (not.out) + (1, 0) $);

	\draw ($ (not.in 1) + (-1, -1.25) $)
		to[short, *-*] ($ (not.out) + (1, -1.25) $);

	\draw ($ (not.in 1) + (-1, 0) $) to[open, v_=$V_{IN}$] 
		($ (not.in 1) + (-1, -1.25) $);
	\draw ($ (not.out) + (1, 0) $) to[open, v^=$V_{OUT}$] 
		($ (not.out) + (1, -1.25) $);

	\coordinate (O) at (5, -0.75);

	\draw[->] (O) -- ++(3, 0)
		node[below=2pt] {$V_{IN}$};
	\draw[->] (O) -- ++(0, 3)
		node[left=2pt] {$V_{OUT}$};

	\draw[ultra thick] ($(O) + (0, 2)$) 
		-- ($(O) + (1, 2)$)
		-- ($(O) + (1, 0)$)
		-- ($(O) + (2, 0)$);
	\draw[dashed] (O) 
		-- ($(O) + (1.5, 1.5)$) 
			node[above right=2pt] {$V_{OUT} = V_{IN}$};
	\draw[dashed] ($(O) + (0, 1)$)
		-- ($(O) + (1, 1)$);
	\filldraw[blue] ($(O) + (1, 1)$) circle (0.05);
		
	\path ($(O) + (0, 2)$) node[left=2pt] {$V^+$};
	\path ($(O) + (0, 1)$) node[left=2pt] {$\frac{V}{2}^+$};
	\path ($(O) + (0, 0)$) node[left=2pt] {$0$};

	\path ($(O) + (2, 0)$) node[below=2pt] {$V^+$};
	\path ($(O) + (1, 0)$) node[below=2pt] {$\frac{V}{2}^+$};
	\path ($(O) + (0, 0)$) node[below=2pt] {$0$};

	\end{circuitikz}
\end{document}
```

Definimos punto de conmutación o umbral lógico $$ V_M \equiv \text{tensión de entrada para la cual} ~ V_{OUT} = V_{IN} $$
* Para $0 \le V_{IN} < V_M ~~ \implies V_{OUT} = V^+$
* Para $V_M < V_{IN} \le V^+ ~~ \implies V_{OUT} = 0$

### Propiedad fundamental: Regeneración de la señal
---
Un inversor tiene dos estados lógicos de salida bien definidos ($0$ o $V^+$) incluso con ruido en $V_{IN}$
* Regeneración de nivel
* Supresión de ruido
* Perfeccionamiento del borde de un pulso

### Implementación
---
Partiendo de la una representación [[Inversor real|real]] del inversor, con la siguiente curva 

![[Inversor real#^51a100]]

Donde se puede implementar con [[Inversor Metal-Óxido-Semiconductor Complementaria|tecnología CMOS]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```