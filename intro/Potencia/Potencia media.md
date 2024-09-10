---
dia: 2023-01-23
tags:
  - intro/Potencia
  - nota/facultad
---
### Definición
---
Al igual que en la [[Tensión promedio|tension promedio]], la potencia promedio ($P_m$) es el cociente entre el periodo y el area bajo la curva de la función $p(t)$. Es decir, 
$$
\begin{align}
P_m= \frac{1}{T} \cdot \int_{0}^{T} p(t) \cdot dt
\end{align}
$$
La potencia promedio, es el promedio de la [[Potencia instantánea|potencia instantánea]] a lo largo de un [[Función periódica#^periodo|periodo]]
$$ P_m= \frac{1}{T} \cdot \int_{0}^{T} v(t) ~ i(t) ~ dt $$

Tomando estas como funciones [[Función senoidal|senoidales]] $$ \begin{align} 
	v(t) &= V_m cos(\omega t + \theta_v) \\
	i(t) &= I_m cos(\omega t + \theta_i)
\end{align} $$
y usando [[Propiedades trigonométricas|propiedades trigonométricas]] nos queda la potencia instantánea $$ p(t) = \frac{1}{2} V_m I_m cos(\theta_v - \theta_i) + \frac{1}{2} V_m I_m cos(2 \omega t + \theta_v + \theta_i) $$
Por lo que la potencia media es $$ P_m = \frac{1}{2} V_m I_m cos(\theta_v - \theta_i) $$
Con [[Fasor|fasores]] $$ P_m = \frac{1}{2} Re\left(V ~ I^* \right) $$ donde $I^*$ es el [[Valor conjutado|conjugada]] de la corriente.