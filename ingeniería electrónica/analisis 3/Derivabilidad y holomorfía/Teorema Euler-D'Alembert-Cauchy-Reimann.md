---
dia: 2022-09-12
tags:
  - carrera/ingeniería-electrónica/analisis-3/Derivabilidad-y-holomorfía
  - carrera/ingeniería-en-informática/analisis-3/Derivabilidad-y-holomorfía
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Derivabilidad y holomorfía/Resumen.md]]"
---
# Definición
---
Sea $f : D \to \mathbb{C}$ una [[Función|función]] definida en un [[Conjunto abierto|conjunto abierto]] $D \subseteq \mathbb{C}$, y sean $u : D \to \mathbb{R}$ y $v : D \to \mathbb{R}$ sus componentes real e imaginaria respectivamente. Entonces, $f$ es [[Derivable|derivable]] en un punto $z_0 = x_0 + i \cdot y_0 \in D$ sii se verifican las dos siguientes condiciones
1) $u$ y $v$ son [[Diferenciable|diferenciables]] en $(x_0, y_0)$
2) $$ \begin{cases} 
	\displaystyle\frac{\partial u}{\partial x} (x_0, y_0) = \frac{\partial v}{\partial y} (x_0, y_0) \\
	-\displaystyle\frac{\partial u}{\partial y} (x_0, y_0) = \frac{\partial v}{\partial x} (x_0, y_0)
\end{cases} $$
En ese caso, $f'(x_0, i \cdot y_0) = \frac{\partial u}{\partial x} (x_0, y_0) + i \cdot \frac{\partial v}{\partial x} (x_0, y_0)$ 