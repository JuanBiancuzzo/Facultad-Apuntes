---
dia: 2024-01-13
tags:
  - carrera/ingeniería-electrónica/estoca/Repaso
  - carrera/ingeniería-electrónica/proba/Teoría-de-probabilidades
  - carrera/ingeniería-en-informática/proba/Teoría-de-probabilidades
  - nota/facultad
aliases:
  - Fórmula de Bayes
---
# Definición
---
Se trata de analizar cómo afecta la [[Información|información]] de que "un [[Evento|evento]] $B$ ha ocurrido" a la [[Probabilidad|probabilidad]] asignada de $A$.

Sea $(\Omega, \mathscr{A}, \mathbb{P})$ un [[Espacio de probabilidad|e. p.]], $A$ y $B \in \mathscr{A}$ con $\mathbb{P}(B) \ne 0$, la probabilidad condicional de $A$ dado que $B$ ha ocurrido está definida por $$ \mathbb{P}(A \mid B) = \frac{\mathbb{P}(A \cap B)}{\mathbb{P}(B)} $$
También lo podemos pensar como que estamos redefiniendo el [[Espacio muestral|espacio muestral]] para que sea $B$

## Propiedades
---
La $\mathbb{P}(A \mid B)$ para un $B$ fijo satisface todos los axiomas de probabilidad
1. $0 \le \mathbb{P}(A \mid B) \le 1$, $\forall A \in \mathscr{A}$
2. $\mathbb{P}(\Omega \mid B) = 1$
3. Si $A \cap C = \emptyset \implies \mathbb{P}(A \cup C \mid B) = \mathbb{P}(A \mid B) + \mathbb{P}(C \mid B)$

Si $\mathbb{P}(B) \ne 0$
1. $\displaystyle \mathbb{P}(A \cap B) = \mathbb{P}(A \mid B) \cdot \mathbb{P}(B) = \mathbb{P}(B \mid A) \cdot \mathbb{P}(A)$
2. $\displaystyle \mathbb{P}(A \cap B \cap C) = \mathbb{P}(A \mid B \cap C) \cdot \underbrace{\mathbb{P}(B \mid C) \cdot \mathbb{P}(C)}_{\mathbb{P}(B \cap C)}$