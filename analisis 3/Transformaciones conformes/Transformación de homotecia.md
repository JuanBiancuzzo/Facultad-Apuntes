---
dia: 2022-09-29
tags:
  - analisis-3/Transformaciones-conformes
  - nota/facultad
---
### Definición
---
Es una [[Transformación conforme|transformación conforme]] donde se define como $h_p : \mathbb{C} \to \mathbb{C}$ tal que $$
\begin{align} 
	h_p(z) = p \cdot z && p \in \mathbb{R}
\end{align}$$
con la matriz asociada $$ A  = \begin{bmatrix} 
	p & 0 \\
	0 & p
\end{bmatrix}$$

### Observación
---
* Para todo complejo $z$ se cumple que $|h_p(z)| = p \cdot |z|$
* Para todo par de complejos $z$ y $w$ se cumple que $d(h_p(z), h_p(w)) = p\cdot d(z, w)$
* Para todo par de complejos $z$ y $w$ donde $z \ne 0$ se cumple que $angulo(h_p(z), h_p(w)) = angulo(z, w)$