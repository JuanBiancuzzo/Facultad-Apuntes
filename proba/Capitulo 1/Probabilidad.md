---
dia: 2024-01-13
materia: proba
capitulo: 1
---
### Definición
---
La probabilidad de un [[Evento|evento]] $A$ es un número positivo (o nulo) que se le asigna a cada suceso o evento del [[Espacio muestral|espacio muestra]]

Una probabilidad (o medida de probabilidad) es una función $P: \mathscr{A} \to [0, 1]$ que a cada evento $A$ le hace corresponder un número real $\mathbb{P}(A)$ con las siguientes propiedades
1. $0 \ge \mathbb{P}(A) \ge 1$, $\forall A \in \mathscr{A}$
2. $\mathbb{P}(\Omega) = 1$
3. Si $A \cap B = \emptyset$ entonces $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B)$
4. ![[Axioma de continuidad#Definición]]
#### Laplace
---
La probabilidad de un [[Evento|evento]] es $$ \mathbb{P}(A) = \frac{\#\text{Casos favorables de} ~ A}{\#\text{Casos posibles del experimento}} $$