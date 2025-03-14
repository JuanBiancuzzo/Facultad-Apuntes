---
dia: 2022-09-29
tags:
  - carrera/ingeniería-electrónica/analisis-3/Transformaciones-conformes
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-3/Transformaciones-conformes
---
# Definición
---
Es una [[Transformación conforme]] donde se define como $$
\begin{align} 
	R_\alpha(z) = e^{i\alpha} \cdot z && \alpha \in [0, 2\pi]
\end{align}$$
con la matriz asociada $$ A  = \begin{bmatrix} 
	cos(\alpha) & -sen(\alpha) \\
	sen(\alpha) & cos(\alpha)
\end{bmatrix}$$

# Observación
---
* Para todo complejo $z$ se cumple que $|R_{\alpha}(z)| = |z|$
* Para todo par de complejos $z$ y $w$ se cumple que $d(R_\alpha(z), R_\alpha(w)) = d(z, w)$
* Para todo par de complejos $z$ y $w$ donde $z \ne 0$ se cumple que $angulo(R_\alpha(z), R_\alpha(w)) = angulo(z, w)$
