---
dia: 2022-09-12
materia: analisis 3
capitulo: 3
---
### Definición
---
Una sucesión de números complejos es una función $\alpha : \mathbb{N} \to \mathbb{C}$


Notacion:
	* $\forall n \in \mathbb{N} : \alpha (n) = \alpha_n$
	* $\alpha = (\alpha_n)_{n = 1}^\infty = (\alpha_1, \alpha_2, ...)$

#### Caracterización
---
Dada una sucesión $\alpha : \mathbb{N} \to \mathbb{K}$:
1) Con $\mathbb{K} = \mathbb{R}$: $$ \begin{matrix}
	\exists b \in \mathbb{R}: \forall n \in \mathbb{N} : \alpha_n \leq b \Leftrightarrow \alpha \text{ es acotada superiormente} \\
	\exists a \in \mathbb{R}: \forall n \in \mathbb{N} : \alpha_n \geq a \Leftrightarrow \alpha \text{ es acotada interiormente} \\
\end{matrix}
$$ Si $\alpha$ es acotada tanto superior como interiormente, entonces es una acotada. $$
	\exists c \in \mathbb{R} : \forall n \in \mathbb{N} : |\alpha_n | \leq b
	$$
2) Con $\mathbb{K} = \mathbb{R}$: 
	* $\alpha$ es _creciente_ sii $\forall n \in \mathbb{N} : \alpha_n \leq \alpha_{n +1}$
	* $\alpha$ es estrictamente creciente sii $\forall n \in \mathbb{N} : \alpha_n < \alpha_{n +1}$
	* $\alpha$ es decreciente sii $\forall n \in \mathbb{N} : \alpha_n \geq \alpha_{n +1}$
	* $\alpha$ es estrictamente decreciente sii $\forall n \in \mathbb{N} : \alpha_n > \alpha_{n +1}$

3) Con $\mathbb{K} \in \{ \mathbb{R}, \mathbb{C} \}$ 
	![[Subsucesión#Definición]] 

4) Con $\mathbb{K} \in \{ \mathbb{R}, \mathbb{C} \}$ 
	![[Serie#Definicion]]


![[Operación entre sucesiones]]


![[Teoremas de completitud y de continuidad secuencial]]

### Convergencia
---
![[Sucesión convergente#Consecuencias]]

![[Semana 3/Criterios de convergencia]]