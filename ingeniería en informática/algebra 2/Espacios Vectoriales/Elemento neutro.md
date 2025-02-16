---
dia: 2023-04-08
tags:
  - ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - nota/facultad
  - ingeniería-en-informática/discreta/Álgebra-proposicional
  - ingeniería-electrónica/algebra-2/Espacios-Vectoriales
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
aliases:
  - Elemento de identidad
referencias:
  - "412"
  - "414"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $A$ un [[Conjunto|conjunto]] en el cual se definió una operación binaria [[Ley de composición interna|interna]] $\circ$ tal que $$\begin{matrix} 
	\circ: A \times A \to A \\ 
	(a, b) \to c = a \circ b
\end{matrix}$$
es un elemento $e$ del conjunto $A$, tal que para cualquier otro elemento $a$ de $A$, se cumple: $$ a \circ e = e \circ a = a $$ ^37ef3f

## Álgebra proposicional
---
Para el [[Álgebra de proposiciones|álgebra de proposiciones]] se entiende como 

$$ p + F = p, ~~~~ pT = p $$ ^d06bfa

## Álgebra de conjuntos
---
Para el [[Álgebra de conjuntos|álgebra de conjuntos]] se entiende como 

$$ P \cup \emptyset = P, ~~~~ P \cap \mathbb{U} = P $$ ^7e8bad

donde $\mathbb{U}$ es el conjunto universal

## Álgebra de Boole
---
Para el [[Álgebra de Boole|álgebra de Boole]] $(B,~+,~\cdot,~',~0_B,~1_B)$ se tiene 

$$ \forall x \in B: ~~~~~ x + 0_B = x, ~~~ x ~ 1_B = x $$ ^bd2780

## Números enteros
---
Existe un elemento en $\mathbb{Z}$, que satisface que para todo $a \in \mathbb{Z}$ 

$$ a + 0 = a $$ ^319ab6

$$ a \cdot 1 = a $$ ^d3b9e8

## Espacios vectoriales
---
Para un [[Espacio vectorial|espacio vectorial]] $V$, y la [[Ley de composición interna|operación suma]] $+$ se tiene

$$ u + 0_\mathbb{V} = u, ~~~ \forall u \in\mathbb{V} $$ ^a984dd

Para un [[Espacio vectorial|espacio vectorial]] $V$, un [[Cuerpo|cuerpo]] $\mathbb{K}$ y la operación [[Ley de composición externa|producto por escalar]] $\cdot$ , se tiene

$$ 1 \cdot u = u, ~~~ \forall u \in\mathbb{V}, ~~ 1 \in\mathbb{K} $$ ^025eea


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```