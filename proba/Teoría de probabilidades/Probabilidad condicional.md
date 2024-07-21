---
dia: 2024-01-13
capitulo: 1
tags:
  - proba/Teoría-de-probabilidades
  - nota
---
### Definición
---
Se trata de analizar cómo afecta la [[Información|información]] de que "un [[Evento|evento]] $B$ ha ocurrido" a la [[Probabilidad|probabilidad]] asignada de $A$.

Sea $(\Omega, \mathscr{A}, \mathbb{P})$ un [[Espacio de probabilidad|e. p.]], $A$ y $B \in \mathscr{A}$ con $\mathbb{P}(B) > 0$, la probabilidad condicional de $A$ dado que $B$ ha ocurrido está definida por $$ \mathbb{P}(A|B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} $$
#### Propiedades
---
La $\mathbb{P}(A|B)$ para un $B$ fijo satisface todos los axiomas de probabilidad
1. $0 \ge \mathbb{P}(A|B) \ge 1$, $\forall A \in \mathscr{A}$
2. $\mathbb{P}(\Omega|B) = 1$
3. Si $A \cap C = \emptyset \implies \mathbb{P}(A \cup C | B) = \mathbb{P}(A|B) + \mathbb{P}(C|B)$

Si $\mathbb{P}(B) > 0$
1. $\displaystyle \mathbb{P}(A \cap B) = \mathbb{P}(A | B) \cdot \mathbb{P}(B) = \mathbb{P}(B | A) \cdot \mathbb{P}(A)$
2. $\displaystyle \mathbb{P}(A \cap B \cap C) = \mathbb{P}(A | B \cap C) \cdot \underbrace{\mathbb{P}(B | C) \cdot \mathbb{P}(C)}_{\mathbb{P}(B \cap C)}$