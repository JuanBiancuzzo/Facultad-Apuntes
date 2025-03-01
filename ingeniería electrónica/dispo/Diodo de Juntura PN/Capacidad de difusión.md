---
dia: 2023-09-16
tags:
  - carrera/ingeniería-electrónica/dispo/Diodo-de-Juntura-PN
  - nota/facultad
---
# Definición
---
Considerando la [[Juntura PN]] en [[Convención de signos para la tensión de polarización#Polarización directa|directa]], la situación de los [[Carga eléctrica|portadores]] mayoritarios es

![[Concentración de portadores en escala logarítmica en directa.webp|600]]

En la QNR aumenta la concentración de minoritarios, si la concentración de mayoritarios no cambia entonces no cumpliría la condición de [[Aproximación de cuasi-neutralidad|cuasi-neutralidad]] eléctrica, la cual exige que el exceso de minoritarios sea igual al exceso de mayoritarios $$ p'(x) = p(x) - p_0 \simeq n(x) - n_0 = n'(x) $$
![[Condición de causi-neutralidad eléctrica aplicada a un exceso de portadores.webp]]

Integramos la [[Carga eléctrica|carga]] acumulada por los [[Carga eléctrica|portadores]] en exceso, que al ser un triangulo podemos calcularlo como $$ Q_{p_n} = qA ~ \frac{(p(x_n) - p_0) ~ (W_n - x_n)}{2}$$
Como es la n-QNR, podemos calcular $p_0$ por la [[Ley de acción de masas]] donde $p_0 = \frac{n_i^2}{N_d}$ y por la [[Relación de Boltzmann]] nos queda que $$ Q_{p_n} = qA ~ \frac{W_n - x_n}{2} \frac{n_i^2}{N_d} \left( \exp \left( \frac{v_D}{V_{th}} \right) - 1 \right) = - Q_{n_n} $$
Ahora veamos que sucede si se produce un incremento [[Modelo de pequeña señal para diodo|pequeño]] en $v_D$ 

![[Distribución de portadores al aplicando una pequeña señal.webp]]

Con un pequeño incremento en $v_D$
$\implies$ pequeño incremento en $q_{p_n}$
$\implies$ pequeño incremento en $|q_{n_n}|$

Se comporta como un [[Capacitor]] de [[Capacitancia]] $$ C_{dn} = \frac{dq_{p_n}}{d v_D} \biggm|_{v_D}$$
Podemos escribir $q_{p_n}$ en términos de la $I_p$ ([[Corriente del Diodo#Corriente de difusión Densidad de corriente de difusión en las regiones QNR|fracción de la corriente del diodo debido a los huecos del lado N-QNR]]) $$ \begin{align} 
	q_{p_n} &= \frac{(W_n - x_n)^2}{2D_p}  ~ qA ~ \frac{n_i^2}{N_d} \frac{D_p}{W_n - x_n} \left( \exp \left( \frac{v_D}{V_{th}} \right) - 1 \right) \\
	        &= \frac{(W_n - x_n)^2}{2D_p} ~ I_p \\
	q_{p_n} &= \tau_{T_p} ~ I_p
\end{align} $$ donde $D_p$ es el [[Coeficiente de difusión]] para los huecos, y $\tau_{T_p}$ es el [[Tiempo de tránsito#Hueco Huecos|tiempo de tránsito de huecos]] por lo que la capacitancia en la región N-QNR es $$ C_{dn} \simeq \frac{\tau_{T_p}}{V_{th}} I_p $$
Análogamente, en la región P-QNR es $$ C_{dp} \simeq \frac{\tau_{T_n}}{V_{th}} I_n $$
Ambas capacitancias están en [[Elementos en paralelo|paralelo]] por lo que la capacitancia total de difusión $$ C_d = C_{dn} + C_{dp} = \frac{\tau_{T_n} ~ I_n + \tau_{T_p} ~ I_p}{V_{th}} = \frac{\tau_{T}}{V_{th}} I_D $$
