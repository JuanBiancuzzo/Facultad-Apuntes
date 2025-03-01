---
dia: 2023-04-08
tags:
  - ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - nota/facultad
  - ingeniería-en-informática/discreta/Álgebra-proposicional
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - ingeniería-en-informática/discreta/Álgebra-de-Boole
  - ingeniería-en-informática/discreta/Álgebra-de-conjuntos
  - carrera/ingeniería-electrónica/algebra-2/Espacios-Vectoriales
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
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
Sea $A$ un [[Conjunto]] en el cual se definió una operación binaria [[Ley de composición interna|interna]] $\circ$ tal que $$\begin{matrix} 
	\circ: A \times A \to A \\ 
	(a, b) \to c = a \circ b
\end{matrix}$$
Se dice que la operación $\circ$ es asociativa si cumple que $$ \forall a, b, c \in A : ~ a \circ (b \circ c) = (a \circ b) \circ c $$ ^2ac183
## Álgebra proposicional
---
Para el [[Álgebra de proposiciones|álgebra de proposiciones]] se entiende como 

$$ (p + q) + r = p + (r + q), ~~~~ (pq)r = p(qr) $$ ^ce342d

## Álgebra de conjuntos
---
Para el [[Álgebra de conjuntos|álgebra de conjuntos]] se entiende como 

$$ (P \cup Q) \cup R = P \cup (R \cap Q) , ~~~~ (P \cap Q) \cap R = P \cap (Q \cup R) $$ ^28e538

## Álgebra de Boole
---
Para el [[Álgebra de Boole|álgebra de Boole]] $(B,~+,~\cdot,~',~0_B,~1_B)$ se tiene 

$$ \forall x, y, z \in B: ~~~~~ (x + y) + z = x + (y + z), ~~~ (xy)z = x(yz) $$ ^19417d

## Números naturales
---
Sea $m,~ n,~ k \in \mathbb{N}$ se tiene

$$ (m + n) + k = m + (n + k) ~~ \text{y} ~~ (m \cdot n) \cdot k = m \cdot (n \cdot k) $$ ^00fd4d

## Números enteros
---
Sea $a,~ b,~ c \in \mathbb{Z}$ se tiene

$$ (a + b) + c = a + (b + c) $$ ^a74742

$$ (a \cdot b) \cdot c = a \cdot (b \cdot c) $$ ^502cc2

## Espacios vectoriales
---
Para un [[Espacio vectorial|espacio vectorial]] $V$, y la [[Ley de composición interna|operación suma]] $+$, se tiene

$$ (u + v) + w = u + (v + w), ~~~ \forall u, v, w \in\mathbb{V} $$ ^70b300

Para un [[Espacio vectorial|espacio vectorial]] $V$, un [[Cuerpo|cuerpo]] $\mathbb{K}$ y la operación [[Ley de composición externa|producto por escalar]] $\cdot$ respecto a los escalar, se tiene

$$ (\alpha \cdot \beta) \cdot u = \alpha \cdot ( \beta \cdot u ), ~~~ \forall u \in\mathbb{V}, ~~ \alpha, \beta \in\mathbb{K} $$ ^21d576


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```