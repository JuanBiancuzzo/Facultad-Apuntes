---
dia: 2023-09-06
materia: dispo
capitulo: 2
---
### Definición
---
Aplicando una variación de [[Tensión]] que se suma a la polarización de una [[Juntura PN con polarización]], vemos que cambia la [[Densidad volumétrica de carga eléctrica|densidad de carga]].

Si aplicamos la [[Aproximación de vaciamiento#Polarización aplicada|aproximación de vaciamiento aplicando polarización]], vemos que $$ x_n(V_{PN}) = x_{n_0} ~ \sqrt{1 - \frac{V_{PN}}{\phi_B}} ~~~~~ x_p(V_{PN}) = x_{p_0} ~ \sqrt{1 - \frac{V_{PN}}{\phi_B}} $$
Recordando como era la [[Densidad volumétrica de carga eléctrica|densidad de carga]] es $$ \rho(x) = \begin{cases} 
	~\sim 0,  &&            &&   x  &\le&  - x_{p}  \\
	-q~N_a,   && -x_{p}   &<&  x  &\le&  ~~~~0      \\
	~~~q~N_d, && ~~~~0       &<&  x  &\le&  ~~~x_{n} \\
	~\sim 0,  && ~~~x_{n} &<&  x  &
\end{cases} $$
Las cargas son $Q_j = -q N_a (x_p \cdot A)$ para el [[Impureza aceptora#Cantidad de dopante|lado p]] y $Q_j = q N_d (x_n \cdot A)$ para el [[Impureza donora#Cantidad de dopante|lado n]]

Por lo tanto produciendo un cambio en la tensión $\Delta V$ entre los lados de la juntura 
* Cambio de $\Delta Q_j$ en $-x_p$
* Cambio de $-\Delta Q_j$ en $x_n$

![[Densidad de carga con variación de tensión en una juntura PN.png]]

Se parece a un [[Capacitor de placas planas paralelas]] donde podemos calcular su [[Capacitancia]] por unidad de área $$ C_j'(V_{PN}) = \frac{\varepsilon_{sc}}{x_d(V_{PN})} = \sqrt\frac{q \varepsilon_{sc} N_a N_d}{2 (\phi_B - V_{PN}) (N_a + N_d)} $$
También lo podemos pensar como que $$ C_{j_0}' = C_j'(V_{PN} = 0) $$
Entonces podemos plantear $$ C_j'(V_{PN}) = \frac{C_{j_0}'}{\sqrt{1 - \frac{V_{PN}}{\phi_B}}} $$
La principal dependencia de $C_j'$ es la [[Tensión]] de polarización aplicada 

![[Dependencia de la capacitancia con respecto a la tensión aplicada.png]]

También lo podemos plantear con el calculo de la [[Capacitancia]] $$ C_J(V_{PN}) = \frac{\partial Q_{SCR}}{\partial v_d} \bigg|_{v_d = V_{PN}} = A \cdot C_J'(V_{PN})$$

Notemos que para [[Convención de signos para la tensión de polarización#Polarización directa|polarización directa fuerte]] es decir aproximadamente $>5~V_{th}$, $C_J$ diverge, por lo que conceptualmente decimos que se considera que $C_J$ satura para $v_D \approx \frac{1}{2} \phi_B$ 
$\implies$ $C_{J, max} = \sqrt{2} ~ C_{J0}$