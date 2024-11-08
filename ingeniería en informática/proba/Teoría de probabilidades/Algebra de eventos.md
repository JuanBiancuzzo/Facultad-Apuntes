---
dia: 2024-01-13
tags:
  - ingeniería-en-informática/proba/Teoría-de-probabilidades
  - nota/facultad
  - ingeniería-electrónica/proba/Teoría-de-probabilidades
---
# Definición
---
Dado un [[Espacio muestral|espacio muestral]] $\Omega$, sea $\mathscr{A}$ una familia de [[Subconjunto|subconjuntos]] de $\Omega$, diremos que $\mathscr{A}$ es un [[Algebra|algebra]] de [[Evento|eventos]] si
1. $\Omega \in \mathscr{A}$
2. Si $B \in \mathscr{A}$ entonces $\overline{B} \in \mathscr{A}$ 
3. Si $B, ~ C \in \mathscr{A}$ entonces $B \cup C \in \mathscr{A}$
4. ($\sigma$-Algebra) si $\left(A_n\right)_{n \ge 1}$ es una [[Sucesión|sucesión]] en $\mathscr{A}$ entonces $$ \bigcup^{\infty}_{i=1} A_i \in \mathscr{A} $$
## Propiedades
---
1. $\emptyset \in \mathscr{A}$ 
2. Si $A_1, \cdots, A_n \in \mathscr{A}$ entonces $\displaystyle\bigcup^{\infty}_{i=1} A_i \in \mathscr{A}$
3.  Si $A_1, \cdots, A_n \in \mathscr{A}$ entonces $\displaystyle\bigcap^{\infty}_{i=1} A_i \in \mathscr{A}$