---
dia: 2023-11-09
materia: dispo
capitulo: 5
---
### Definición
---
Existe un $V_{GB}$, en una [[Estructura Metal-Óxido-Semiconductor (MOS) con polarización|estructura MOS polarizada]], tal que la densidad de minoritarios crece lo suficiente como para ser comparable con la densidad de [[Impureza aceptora|impurezas]].

Al no poder despreciar su aporte de carga, no vale la [[Aproximación de vaciamiento|aproximación de vaciamiento]] en un entorno a $x = 0$ $$ \rho(x = 0) = q \left( \underbrace{p(x)}_{\ll N_a} + \underbrace{N_d}_{= ~ 0} - N_a - \underbrace{n(x = 0)}_{\approx N_a} \right) $$

Se define la situación umbral cuando $n(0) = N_a$. Por lo que superando el umbral, no se puede despreciar la contribución de los [[Electrón|electrones]] a la [[Electrostática]].

![[Concentración de portadores en una estructura metal óxido semiconductor (MOS) en situación umbral.png]]

#### Cálculo de la tensión umbral
---
Calculemos la tensión umbral ($V_T$), es decir, la tensión de compuerta que produce $n(0) = N_a$

Usaremos la siguiente hipótesis:
* Utilizar la [[Electrostática]] de vaciamiento (despreciar la concentración de [[Electrón|electrones]] para tensión umbral)

Primero, calculamos $\phi(0)$ para $V_{GB} = V_T$ con la [[Relación de Boltzmann]] $$ \phi(0) \biggm|_{V_T} = \frac{kT}{q} \ln \left( \frac{n(0) \biggm|_{V_T}}{n_i} \right) = \frac{kT}{q} \ln \left( \frac{N_a}{n_i} \right) = - \phi_p $$
![[Función de potencial en una estructura metal óxido semiconductor (MOS) en situación umbral.png]]

Resultando en $$ V_B(V_T) = - 2 \phi_p $$
Segundo, calculamos la caída de [[Potencial eléctrico|potencial]] en el óxido para la tensión umbral $$ V_{ox}(V_T) = E_{ox}(V_T) ~ t_{ox} = \frac{q ~ N_a ~ x_d(V_T)}{\varepsilon_{ox}} ~ t_{ox} $$
Obtenemos $x_d(V_T)$ usando la relación entre $V_B$ y $x_d$ en [[Vaciamiento de la estructura Metal-Óxido-Semiconductor (MOS)|vaciamiento]] $$ V_B(V_T) = \frac{q ~ N_a ~ x_d^2(V_T)}{2 ~ \varepsilon_{s}} = -2 \phi_p $$
Despejamos $x_d(V_T)$ nos queda $$ x_d(V_T) = x_{d ~ max} = \sqrt{\frac{2 ~ \varepsilon_s (-2 \phi_p)}{q ~ N_a}} $$
Ahora encontrando la caída de potencial en el óxido queda $$ V_{ox}(V_T) = \frac{q ~ N_a ~ x_d(V_T)}{\varepsilon_{ox}} ~ t_{ox} = \gamma \sqrt{-2 \phi_o} $$
Finalmente, sumamos las caídas de potencial en toda la estructura $$ V_T + \phi_B = V_B(V_T) + V_{ox}(V_T) = -2\phi_p + \gamma \sqrt{-2 \phi_p} $$
Siendo $\phi_B = -V_{FV}$ ([[Tensión de Flatband]]), se despeja $V_T$: $$ V_T = V_{FB} - 2\phi_p + \gamma \sqrt{-2 \phi_p} $$
