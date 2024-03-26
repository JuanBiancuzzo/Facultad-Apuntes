---
dia: 2024-03-11
materia: señales
capitulo: 3
---
### Definición
---
Sea $\mathcal{H}$ un [[Espacio vectorial|espacio vectorial]] de funciones con [[Producto interno|producto interno]] $\langle p(t), q(t) \rangle = \int_{t_1}^{t_2} p(t) ~ q^*(t) ~ dt$ y con [[Dominio|dominio]] en $t \in [t_1, t_2]$. Un [[Conjunto|conjunto]] de funciones $\set{p_k(t)}_{k = 0}^{\infty}$ es mutuamente ortogonal sobre el intervalo $[t_1, ~ t_2]$ si $$ \int_{t_1}^{t_2} p_m(t) ~ p_n^*(t) ~ dt = \begin{cases} 
	E_n \ne 0 & \text{si} ~ m = n \\
	0 & \text{en otro caso}
\end{cases} $$
En el caso de un [[Base ortonormal|conjunto ortonormal]] $E_n = 1, \forall n$