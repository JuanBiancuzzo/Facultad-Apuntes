---
dia: 2024-03-25
tags:
  - señales/Serie-de-Fourier
  - nota/facultad
---
# Definición
---
Un [[Conjunto ortogonal|conjunto ortogonal]] $\set{p_k(t)}_{k = 0}^{\infty} \in \mathcal{H}$ se conoce como conjunto ortogonal completo si no existe ninguna función $q(t) \in \mathcal{H}$ fuera del conjunto que satisfaga la condición de ortogonalidad con respecto a las señales $p_n(t), ~ n \in \mathbb{N} \bigcup \set{0}$. Es decir, $\nexists q(t) \in \mathcal{H}$ tal que $$ \int_{t_1}^{t_2} q(t) ~ p_n^* (t) ~ dt = 0, ~ \forall n \in \mathbb{N}_0 $$

Si un conjunto ortogonal es completo en $\mathcal{H}$, un espacio vectorial de funciones con el [[Producto interno|producto interno]] $\langle p(t), q(t) \rangle = \int_{t_1}^{t_2} p(t) ~ q^*(t) ~ dt$ y con [[Dominio de una función|dominio]] en $[t_1, ~ t_2]$, entonces cualquier función arbitrario $x(t) \in \mathcal{H}$ puede ser expresado dentro del intervalo $t \in [t_1, ~ t_2]$ como $$ x(t) = \sum_{n = 0}^{\infty} c_n ~ p_n(t) $$ donde los coeficientes $c_n$, se obtienen como $$ c_n = \frac{\int_{t_1}^{t_2} x(t) ~ p_n^*(t) ~ dt}{\int_{t_1}^{t_2} p_n(t) ~ p_n^*(t) ~ dt} = \frac{\langle x(t), p_n(t) \rangle}{\langle p_n(t), p_n(t) \rangle} = \frac{\langle x(t), p_n(t) \rangle}{\lVert p_n(t) \rVert^2} $$