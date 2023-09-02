---
dia: 2023-08-25
materia: dispo
capitulo: 1
---
### Definición
---
Partículas cargadas que tienen velocidad neta debido a la presencia de un [[Campo eléctrico]], es decir, una [[Corriente|corriente eléctrica]]. La [[Densidad de corriente|densidad corriente]] arrastre es proporcional a
* La [[Velocidad de arrastre]] de [[Portador de carga|portadores]] ($v_a$)
* La [[Modelo de enlace de Silicio|concentración de portadores]] ($n$ o $p$)
* La [[Carga eléctrica]] de los portadores ($\pm q$)

La densidad de corriente de arrastre se calcula $$ \begin{matrix} 
	J_n^{arr} = -q \cdot n \cdot v_{a_n} = q \cdot n \cdot \mu_n E \\
	J_p^{arr} = q \cdot p \cdot v_{a_p} = q \cdot p \cdot \mu_p E
\end{matrix} $$
Por lo tanto la corriente total es $$ J^{arr} = J_n^{arr} + J_p^{arr} = q \left( n \cdot \mu_n + p \cdot \mu_p \right) E $$ donde podemos ver la relación con la [[Ley de Ohm]] $$ J = \sigma E = \frac{E}{\rho} $$ donde $\sigma$ es la conductividad con unidades $\left[ \left( \Omega cm \right)^{-1} \right]$ y $\rho$ es la resistividad $\left[\Omega cm \right]$, por lo tanto $$ \sigma = \frac{1}{\rho} = q(n \cdot \mu_n + p \cdot \mu_p) $$
Para un [[Semiconductor intrínseco]] donde $n = p = n_i$, esta expresión se reduce a $$ \sigma = q~n_i(\mu_n + \mu_p) $$ y para un [[Impureza donora|semiconductor tipo n]] $$ \sigma_n \simeq q~N_d~\mu_n $$ y para un [[Impureza aceptora|semiconductor tipo p]] $$ \sigma_p \simeq q~N_a~\mu_p $$