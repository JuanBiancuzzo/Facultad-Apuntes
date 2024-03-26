---
dia: 2023-09-06
materia: dispo
capitulo: 2
---
### Definición
---
Partiendo del análisis con la [[Aproximación de vaciamiento|aproximación de vaciamiento]] donde asumimos que no hay una tensión aplicada y que se encuentra el [[Semiconductor|semiconductor]] en [[Equilibrio térmico en un semiconductor|equilibrio térmico]].

Siguiendo la [[Convención de signos para la tensión de polarización|convención de signos]], veamos que pasa cuando se le aplica una [[Tensión]] $V_{PN}$ 

Sabemos que en las regiones de p-QNR y n-QNR, no puede modificarse el [[Potencial eléctrico|potencial]] ya que se mantiene la [[Aproximación de cuasi-neutralidad|aproximación de cuasi-neutralidad]] en esas regiones, ya que la [[Densidad volumétrica de carga eléctrica|carga]] sigue siendo $0$ $$ \begin{align} 
	\rho(x) = 0 \implies \Delta V_\text{p-QNR} \simeq 0 \\
	\rho(x) = 0 \implies \Delta V_\text{n-QNR} \simeq 0
\end{align} $$
Entonces nos queda que la tensión tiene efecto en la región de carga espacial, y ya no estamos en una situación de equilibrio térmico

Se modifica la [[Tensión|diferencia de potencial]] entre los bordes de la zona desierta (SCR)
* Para $V_{PN} > 0$, se eleva la tensión del lado p respecto del n $$ \implies \phi_n - (\phi_p + |V_{PN}|) = \phi_B - |V_{PN}| < \phi_B $$
* Para $V_{PN} < 0$, se eleva la tensión del lado p respecto del n $$ \implies \phi_n - (\phi_p - |V_{PN}|) = \phi_B + |V_{PN}| > \phi_B $$
Por lo tanto tenemos los 3 casos
* En equilibrio, como lo visto en la [[Juntura PN en equilibrio térmico]]
* En [[Convención de signos para la tensión de polarización#Polarización directa|polarización directa]]: $\phi_B - V_{PN} < \phi_B$ 
* En [[Convención de signos para la tensión de polarización#Polarización inversa|polarización inversa]]: $\phi_B - V_{PN} > \phi_B$ 

Como la [[Densidad volumétrica de carga eléctrica|densidad de carga]] ($\rho(x)$) es constante de cada lado de la juntura porque la densidad de impurezas ([[Impureza donora]] $N_d(x)$, e [[Impureza aceptora]] $N_a(x)$) no cambian. Por lo tanto cambian los límites de la zona de vaciamiento cambiando $\rho(x)$, $E(x)$ y $\phi(x)$.

Veamos la aproximación de vaciamiento con esta tensión aplicada

#### Polarización aplicada
---
Teniendo en cuenta la [[Tensión de contacto]], y viendo el análisis en la [[Juntura PN con polarización]], vemos que cambian los límites de la zona de vaciamiento (SCR) ($x_{n_0}$ y $x_{p_o}$), y notamos que 
* en [[Convención de signos para la tensión de polarización#Polarización directa|directa]]: $\Delta V_{SCR} \downarrow \Rightarrow |E| \downarrow \Rightarrow x_d \downarrow$ 
* en [[Convención de signos para la tensión de polarización#Polarización inversa|inversa]]: $\Delta V_{SCR} \uparrow \Rightarrow |E| \uparrow \Rightarrow x_d \uparrow$ 

Esencialmente
* El comportamiento de la [[Juntura PN con polarización|juntura PN polarizada]] no se modifica cualitativamente respecto al [[Equilibrio térmico en un semiconductor|equilibrio térmico]]
* Se modifica el [[Dipolo de carga]] en la zona desierta (SCR) de modo de compensar el [[Tensión|potencial]] forzado externamente

Por lo tanto la formulación analítica de la [[Juntura PN con polarización|juntura PN polarizada]] es idéntica a la del [[Equilibrio térmico en un semiconductor|equilibrio térmico]], pero considerando $$ \phi_B \to \phi_B - V_{PN} $$
Haciendo que $$ x_n(V_{PN}) = \sqrt\frac{2\varepsilon_{sc} (\phi_B - V_{PN}) N_a}{q(N_a + N_d) N_d} = x_{n_0} ~ \sqrt{1 - \frac{V_{PN}}{\phi_B}} $$
$$ x_p(V_{PN}) = \sqrt\frac{2\varepsilon_{sc} (\phi_B - V_{PN}) N_d}{q(N_a + N_d) N_a} = x_{p_0} ~ \sqrt{1 - \frac{V_{PN}}{\phi_B}} $$
$$ x_d(V_{PN}) = \sqrt\frac{2\varepsilon_{sc} (\phi_B - V_{PN}) (N_a + N_d)}{q N_a  N_d) N_d} = x_{d_0} ~ \sqrt{1 - \frac{V_{PN}}{\phi_B}} $$
$$ |E(V_{PN})| = \sqrt\frac{2q (\phi_B - V_{PN}) N_a N_d}{\varepsilon_{sc}(N_a + N_d)} = |E_0| ~  \sqrt{1 - \frac{V_{PN}}{\phi_B}} $$
Esto produce que la [[Potencial eléctrico|función de potencial]], el [[Campo eléctrico]] y la [[Densidad volumétrica de carga eléctrica|densidad de carga]] se modifique de la siguiente forma

![[Función de potencial, campo eléctrico y densidad de carga para una juntura PN polarizada.webp|600]]

