---
dia: 2024-08-07
tags: 
 - ingeniería-en-informática/discreta/Relaciones
 - nota/facultad
---
# Definición
---
Definimos $R^{-1}$ como el [[Conjunto|conjunto]] de las [[Relación|relaciones]] de $R$ invertidas. Entonces $$ \begin{array}{c}
	R^{-1} = \Set{(x,~y) \in A^2 : yRx} \\
	xRy \iff yR^{-1}x
\end{array} $$

El opuesto de $R$, define aquellas relaciones que no pertenecen a $R$. Podemos definirla como $$ R' = A^2 - R $$
Analizando las representaciones matriciales, tendremos $$ \begin{align} 
	A_{R'} &= J - A_R \\
	A_R^T = A_{R^{-1}}
\end{align} $$