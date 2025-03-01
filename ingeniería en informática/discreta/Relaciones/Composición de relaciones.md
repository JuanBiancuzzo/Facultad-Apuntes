---
dia: 2024-08-07
tags:
  - carrera/ingeniería-en-informática/discreta/Relaciones
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-2/Propiedades-de-funciones
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/ingeniería-electrónica/analisis-2/Propiedades-de-funciones
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
aliases:
  - Composición de funciones#Funciones
referencias:
  - "411"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $S$, $T$ dos [[Relación|relaciones]] del [[Conjunto|conjunto]] $A$. Entonces definiremos la relación $R = S \circ T$ para la cual $$ xRy \iff \exists z: ~~ xSz,~ zTy $$

```tikz
\usepackage{amssymb}
\usetikzlibrary{math}
\usetikzlibrary{calc}

\begin{document} 
	\begin{tikzpicture}[ultra thick]
		\coordinate (a) at (0, 0) {};
		\coordinate (b) at (6, 0) {};
		\coordinate (c) at (12, 0) {};

		\tikzmath { 
			\radio = 1.7;
			\radioMenor = 0.7;
			\radioSep = \radio cm + 5pt; 
		}
	
		\foreach \coor/\conj/\el in { (a)/A/x, (b)/B/z, (c)/C/y } {
			\draw \coor circle (\radio);
			\draw \coor circle (\radioMenor)
				node[scale=1.5] {\el};
			\path \coor -- ++(0, \radioMenor)
				node[above=2pt, scale=1.5] {\conj};
		}		

		\draw [->, shorten >=\radioSep, shorten <=\radioSep] (a) 
			.. controls +(2, 2) and +(-2, 2) .. (b)
			node[midway, above=1em, scale=1.5] {$S$};
		\draw [->, shorten >=\radioSep, shorten <=\radioSep] (b) 
			.. controls +(2, 2) and +(-2, 2) .. (c)
			node[midway, above=1em, scale=1.5] {$T$};
		\draw [->, shorten >=\radioSep, shorten <=\radioSep] (a) 
			.. controls +(2, -3.8) and +(-2, -3.8) .. (c)
			node[midway, below=2em, scale=1.5] {$R$};
			
	\end{tikzpicture}
\end{document}
```

## Funciones
---
Sean $A$, $B$, $C$ [[Conjunto|conjuntos]], y $f : A \to B$, $g : B \to C$ [[Función|funciones]]. Entonces la composición de $f$ con $g$, que se nota $g \circ f$ , definida por $$ (g \circ f)(x) = g(f(x)), ~~~ \forall x \in A $$ resulta ser una función de $A$ en $C$

La idea de componer funciones, significa "sustituir una función en otra", donde teniendo dos funciones de una variable. Cuando tenemos funciones, tenemos que tener en cuenta que se corresponda el [[Codominio|codominio]] de una con el [[Dominio de una función|dominio]] de otra

### Ejemplo
---
Supongamos que tenemos la función $z = f(x, y)$ entonces como necesito dos funciones (su dominio perteneciendo a $\mathbb{R}^2$), una para cada variable, digamos $g_1$ y $g_2$,

$$ x = g_1(u, v), y = g_2(u, v) $$

Entonces ahora si podemos hacer la composición

$$ z = f(g_1(u, v), g_2(u, v)) $$

Que también podríamos expresar una sola función $g$ tal que $g : U \subseteq \mathbb{R}^2 \to \mathbb{R}^2$, haciendo que la composición sea

$$ z = f(g(u, v)) $$

De cualquier forma, esto se vería, gráficamente como

```tikz
\begin{document} 
	\begin{tikzpicture}[ultra thick]
		\coordinate (u) at (0, 0) {};
		\coordinate (x) at (6, 0) {};
		\coordinate (y) at (12, 0) {};
	
		\foreach \coor/\letra/\dir in {
			(u)/u/above left, (x)/x/below, (y)/y/above right,
		} {
			\draw \coor circle (1.5);
			\filldraw \coor circle (0.1);
			\path \coor node[\dir=2pt, scale=1.5] {$\letra$};
		}		

		\draw [->, shorten >=20pt, shorten <=10pt] (u) 
			.. controls +(2, 2) and +(-2, 2) .. (x)
			node[midway, above=2pt, scale=1.5] {$g$};
		\draw [->, shorten >=20pt, shorten <=10pt] (x) 
			.. controls +(2, 2) and +(-2, 2) .. (y)
			node[midway, above=2pt, scale=1.5] {$f$};
		\draw [->, shorten >=10pt, shorten <=10pt] (u) 
			.. controls +(2, -3.8) and +(-2, -3.8) .. (y)
			node[midway, above=1pt, scale=1.5] {$f \circ g$};
			
	\end{tikzpicture}
\end{document}
```

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```