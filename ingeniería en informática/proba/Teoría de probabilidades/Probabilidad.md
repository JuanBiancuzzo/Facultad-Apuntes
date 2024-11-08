---
dia: 2024-01-13
tags:
  - ingeniería-en-informática/proba/Teoría-de-probabilidades
  - nota/facultad
  - ingeniería-electrónica/proba/Teoría-de-probabilidades
---
# Definición
---
La probabilidad de un [[Evento|evento]] $A$ es un número positivo (o nulo) que se le asigna a cada suceso o evento del [[Espacio muestral|espacio muestra]]

Una probabilidad (o medida de probabilidad) es una función $P: \mathscr{A} \to [0, 1]$ que a cada evento $A$ le hace corresponder un número real $\mathbb{P}(A)$ con las siguientes propiedades
1. $0 \ge \mathbb{P}(A) \ge 1$, $\forall A \in \mathscr{A}$
2. $\mathbb{P}(\Omega) = 1$
3. Si $A \cap B = \emptyset$ entonces $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B)$
4. ![[Axioma de continuidad#Definición]]
## Laplace
---
La probabilidad de un [[Evento|evento]] es $$ \mathbb{P}(A) = \frac{\#\text{Casos favorables de} ~ A}{\#\text{Casos posibles del experimento}} $$

## Teoremas
---
Sea $(A_n)_{n \ge 1}$ una [[Sucesión|sucesión]] de [[Evento|eventos]] tales que $A_n \subset A_{n+1}, \forall n$ y $A = \displaystyle \bigcup^{\infty}_{i=1} A_i$, luego $$ \mathbb{P} = \lim_{n \to \infty} \mathbb{P}(A_n) $$

Sea $(A_n)_{n \ge 1}$ una [[Sucesión|sucesión]] de [[Evento|eventos]] tales que $A_{n+1} \subset A_n, \forall n$ y $A = \displaystyle \bigcap^{\infty}_{i=1} A_i$, luego $$ \mathbb{P} = \lim_{n \to \infty} \mathbb{P}(A_n) $$
### Teorema ($\sigma$-aditividad)
---
Sea $A = \displaystyle \bigcup^{\infty}_{i = 1} A_i \in \mathscr{A}$ con los [[Evento|eventos]] $A_i$ mutuamente excluyentes $2$ a $2$, entonces $$ \mathbb{P}(A) = \mathbb{P}\left( \bigcup^{\infty}_{i = 1} A_i \right) = \sum^{\infty}_{i = 1} \mathbb{P}(A_i) $$