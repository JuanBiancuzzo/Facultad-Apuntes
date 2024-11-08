---
dia: 2023-01-22
tags:
  - ingeniería-en-informática/algebra-2/Espacios-euclídeos
  - nota/facultad
  - ingeniería-electrónica/algebra-2/Espacios-euclídeos
---
# Definición
---
Sea $A \subseteq \mathbb{V}$ un [[Conjunto|conjunto]] no vacío de $\mathbb{V}$, el subespacio ortogonal a $A$ denotado por $A^\perp$, se define por

$$ A^\perp := \{x \in \mathbb{V} : \langle x, a \rangle = 0, \forall a \in A \} $$

## Propiedades
---
 * $A^\perp$ es un subespacio de $\mathbb{V}$
 * $A \cap A^\perp = \{0_\mathbb{V}\}$
 * Si $B \subseteq \mathbb{V}$ es un conjunto no vacío tal que $B \subseteq A$ entonces $A^\perp \subseteq B^\perp$
 * Si un vector $w$ es [[Ortogonalidad|ortogonalidad]] a todos los vectores generadores de $A$ entonces $w \in A^\perp$
 * $\mathbb{V} = A \oplus A^\perp$
 * $dim(A^\perp) + dim(S) = dim(\mathbb{V})$ aca podemos aplicar el [[Teorema de la dimension de la suma de subespacios|teorema de la dimension de la suma de subespacios]]
 * $(S^\perp)^\perp = S$