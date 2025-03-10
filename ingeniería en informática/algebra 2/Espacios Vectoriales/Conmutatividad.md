---
dia: 2023-04-08
tags:
  - carrera/ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - nota/facultad
  - carrera/ingeniería-en-informática/discreta/Álgebra-proposicional
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - carrera/ingeniería-en-informática/discreta/Álgebra-de-Boole
  - carrera/ingeniería-en-informática/discreta/Álgebra-de-conjuntos
  - carrera/ingeniería-electrónica/algebra-2/Espacios-Vectoriales
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
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
Sea $A$ un [[Conjunto|conjunto]] dado en el que se han definido la operación binaria $\circ$. Dado dos elementos $a, b \in A$ estos se dicen que conmutan cuando $$ a \circ b = b \circ a $$
Por lo tanto, una operación es conmutativa cuando dos elementos cualquiera conmutan. ^c6b142

## Álgebra proposicional
---
Para el [[Álgebra de proposiciones|álgebra de proposiciones]] se entiende como 

$$ p + q = q + p, ~~~~ pq = qp $$ ^370681

## Álgebra de conjuntos
---
Para el [[Álgebra de conjuntos|álgebra de conjuntos]] se entiende como 

$$ P \cup Q = Q \cup P, ~~~~ P \cap Q = Q \cap P $$ ^90c16b

## Álgebra de Boole
---
Para el [[Álgebra de Boole|álgebra de Boole]] $(B,~+,~\cdot,~',~0_B,~1_B)$ se tiene 

$$ \forall x, y \in B: ~~~~~ x + y = y + x, ~~~ xy = yx $$ ^1913c6

## Números naturales
---
Sea $m,~ n \in \mathbb{N}$ se tiene

$$ m + n = n + m ~~ \text{y} ~~ m \cdot n = n \cdot m $$ ^4544c3

## Números enteros
---
Para todo $a,~ b \in \mathbb{Z}$

$$ a + b = b + a $$ ^c795df

$$ a \cdot b = b \cdot a $$

## Espacios vectoriales
---
Para un [[Espacio vectorial|espacio vectorial]] $V$, y la [[Ley de composición interna|operación suma]] $+$, se tiene

$$ u + v = v + u, ~~~ \forall u, v \in\mathbb{V} $$ ^67ee7b



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```