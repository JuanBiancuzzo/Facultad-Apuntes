---
dia: 2022-09-13
tags:
  - analisis-3/Series
  - nota/facultad
---
# Definición 
---
$l \in \mathbb{C}$ es limite de la [[Sucesión]]  $$(\alpha(n))_{n = 1}^\infty \Leftrightarrow \lim_{n \to \infty} |\alpha(n) - l | = 0 \Leftrightarrow \forall \epsilon > 0 : \exists n_\epsilon \in \mathbb{N} : \forall n \geq n_\epsilon : | \alpha(n) - l | < \epsilon $$ 
# Propiedades
---
### Unicidad del limite (Cuando existe)
Sea $l$ y $l'$ limites de $(\alpha(n))_{n = 1}^\infty$ entonces
$$
\begin{matrix}
	0 < |l - l'| = |l - \alpha(n) + \alpha(n) - l'| \leq \underbrace{| l - \alpha(n)| + | \alpha(n) - l'|}_{\to 0 \text{ cuando } n \to \infty}  \\ 
	0 < |l - l'| \leq 0 \implies l = l'
\end{matrix}
$$

## Limites de componentes
Si $\alpha(n) = x(n) + i \cdot y(n)$, y $l = a + i \cdot b$ entonces
$$ \lim_{n \to \infty} (x(n) + i \cdot y(n)) = a + i \cdot b = 
\begin{cases}
	\displaystyle \lim_{n \to \infty} x(n) = a \\
	\displaystyle \lim_{n \to \infty} y(n) = b 
\end{cases}
$$
