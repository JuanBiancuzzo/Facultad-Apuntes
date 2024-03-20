---
dia: 2023-08-23
materia: dispo
capitulo: 5
---
### Definición
---
La estructura se componen de
* Metal
	* No soporta [[Carga eléctrica|carga]] de volumen $\implies$ la carga sólo puede existir en su superficie
* Óxido (Es aislante)
	* No soporta carga en volumen (no hay [[Portador de carga|portadores]], ni [[Dopaje|dopantes]])
* [[Semiconductor]]
	* Soporta carga en volumen

![[Estructura  MOS.png]]

* La condición de [[Equilibrio térmico en un semiconductor|equilibrio]] no puede establecerse a través del óxido, se requiere de un cable para permitir el intercambio de [[Carga eléctrica|carga]] entre la [[Juntura metal-semiconductor]]
* La estructura MOS es un sandwich de 3 materiales con [[Tensión|potenciales diferentes]], por lo que [[Campo eléctrico|campos eléctricos]] diferentes, por lo que hay un reacomodamiento de cargas  y por último produciendo una región de carga espacial
* La mayoría de los metales al ser colocados sobre p-Si, alcanzan el [[Equilibrio térmico|equilibrio térmico]] a partir de las [[Flujo de difusión|difusión]] de [[Electrón|electrones]] desde el metal hacia el [[Semiconductor]] y [[Hueco|huecos]] desde el semiconductor hacia el metal

#### Concentraciones de los [[Portador de carga|portadores]]
---
![[Concentración de portadores en la estructura MOS.png]]

Pocos [[Hueco|huecos]] cerca de la interfaz $Si$/$SiO_2$ entonces quedan expuestos [[Átomo|átomos]] [[Impureza aceptora|aceptores]] ionizados y se genera una zona de [[Carga eléctrica|carga]] espacial en volumen (SCR) o zona desierta de [[Portador de carga|portadores]].

#### Densidad de [[Carga eléctrica|carga]] espacial
---
Se puede dividir en cuatro zonas la estructura, la zona del metal sus cargas están acumuladas en la superficie, generando una [[Delta de dirac]] de [[Carga eléctrica|carga]] en la interfaz entre el metal y el oxido.

En el oxido al ser [[Aislado|aislante]] no acumula carga, dejándonos con las últimas dos zonas, dada la [[Aproximación de vaciamiento]], tenemos dividida en dos zonas el [[Semiconductor]], entre $0$ y $x_{d0}$ teniendo una densidad de carga por $$ \rho_0(x) = q \cdot \left( \underbrace{N_d(x)}_{= ~ 0} - N_a(x) + \underbrace{p_0(x) - n_0(x)}_{n_0;p_0 \ll N_d; N_a} \right) = - q ~ N_a $$
Por el metal, se genera una carga en la interfaz metal y el oxido, dándonos con la [[Neutralidad de carga|neutralidad global de carga eléctrica]] $$ \rho_0(x) = \begin{cases} 	
	Q_G' ~ \delta(x + t_{ox}),  &&            &&   x  &\le&  - t_{ox}  \\
	0,                          && - t_{ox}   &<&  x  &\le&  ~~~~0      \\
	-q~N_a,                     &&  ~~~~0     &<&  x  &\le&  ~~~x_{d0} \\
	0,                          && ~~~x_{d0}  &<&  x  &
\end{cases} $$

![[Densidad de carga en una estructura MOS.png]]

#### [[Campo eléctrico]]
---
Integrando $$ E(x_2) - E(x_1) = \frac{1}{\varepsilon} \int_{x_1}^{x_2} \rho(x) ~ dx $$
En la interfaz óxido-semiconductor, por el cambio de permitividad, produce un cambio en el campo eléctrico $$ \begin{align} 
	\varepsilon_{ox} E_{ox} &= \varepsilon_s E_s \\
	\frac{E_{ox}}{E_s} &= \frac{\varepsilon_s}{\varepsilon_{ox}} \approx 3
\end{align} $$
Produciendo el campo $$ E_0(x) = \begin{cases} 	
	0,                          &&            &&   x  &\le&  - t_{ox}  \\
	\frac{\varepsilon_s}{\varepsilon_{ox}} E_0(x = 0^+) = 
	\frac{qN_a x_{d0}}{\varepsilon_{ox}},    && - t_{ox}   &<&  x  &\le&  ~~~~0      \\
	-\frac{q~N_a}{\varepsilon_s}(x - x_{d0}), &&  ~~~~0     &<&  x  &\le&  ~~~x_{d0} \\
	0,                          && ~~~x_{d0}  &<&  x  &
\end{cases} $$
![[Campo eléctrico en una estructura MOS.png]]

Donde $$E_{ox} = \frac{qN_a x_{do}}{\varepsilon_{ox}}$$ y $$E_s = \frac{qN_a x_{do}}{\varepsilon_s}$$

#### [[Potencial eléctrico|Función Potencial]] 
---
Recordando la [[Relación de Boltzmann|relación de Boltzmann]], tenemos que $$ \phi(x) = \frac{kT}{q} \ln\left( \frac{n_0}{n_i} \right) = - \frac{kT}{q} \ln\left( \frac{p_0}{n_i} \right) $$ donde $n_i$ es la [[Semiconductor intrínseco|concentración de un semiconductor intrínseco]].

En las regiones QNR's conocemos $n_0$, $p_0$ entonces podemos determinar $\phi$. 
En el gate (polysilicio [[Dopaje|dopado]] [[Impureza donora#Cantidad de dopante|tipo n]]), el dopaje $N_d$ es tan elevado que el [[Semiconductor]] está degenerado, por lo que el potencial del gate esta saturado tomando su máximo valor $$ \implies \phi_{gate} = 550 ~ mV $$
En el semiconductor (sustrato), en la región QNR [[Impureza aceptora#Cantidad de dopante|tipo p]] $$ p_0 = N_a \implies \phi_p = \phi_{sust} = - \frac{kT}{q} \ln \left( \frac{N_a}{n_i} \right) $$
Por lo que el potencial de juntura esta dado por $$ \phi_B = \phi_{gate} - \phi_{sust} = 550 ~mV + \frac{kT}{q} \ln \left( \frac{N_a}{n_i} \right) $$
Ahora, integrando $$ \phi_0(x_2) - \phi_0(x_1) = - \int_{x_1}^{x_2} E(x) ~ dx $$
![[Potencial eléctrico en una estructura MOS.png]]

$$ \phi(x) = \begin{cases} 	
	\phi_{gate},                          
		&&            &&   x  &\le&  - t_{ox}  \\
	\phi_p + \frac{qN_a x_{d0}^2}{2\varepsilon_s} + \frac{qN_a x_{d0}}{\varepsilon_{ox}} (-x),
		&& - t_{ox}   &<&  x  &\le&  ~~~~0     \\
	\phi_p + \frac{q~N_a}{2\varepsilon_s}(x - x_{d0})^2, 
		&&  ~~~~0     &<&  x  &\le&  ~~~x_{d0} \\
	\phi_p,
		&& ~~~x_{d0}  &<&  x  &
\end{cases} $$
Donde $$ V_{B,0} = \frac{q N_a x_{d0}^2}{2 \varepsilon_s} $$ y $$ V_{ox, 0} = \frac{q N_a x_{d0} ~ t_{ox}}{\varepsilon_{ox}} $$

#### Límites de la región de carga espacial
---
Encontrando $x_{d0}$, recordando que la diferencia de potencial a lo largo de la estructura debe ser $\phi_B$ $$ \phi_B = V_{B, 0} + V_{ox, 0} = \frac{q N_a x_{d0}^2}{2 \varepsilon_s} + \frac{q N_a x_{d0} ~ t_{ox}}{\varepsilon_{ox}}$$
Resolviendo la ecuación cuadrática $$ x_{d0} = \frac{\varepsilon_s}{\varepsilon_{ox}} t_{ox} \left[ \sqrt{1 + \frac{2 \varepsilon_{ox}^2 ~ \phi_B}{\varepsilon_s q N_a ~ t_{ox}^2}} + 1 \right] $$
Utilizando la [[Capacitores en serie|capacidad por unidad de área de óxido]] y el [[Body factor coefficient|body factor coefficient]], nos queda $$ x_{d0} = \frac{\varepsilon_s}{C'_{ox}} \left[ \sqrt{1 + \frac{4 ~ \phi_B}{\gamma^2}} - 1 \right] $$
#### Distintas combinaciones poly-sustrato
---
Dependiendo de que tipo sea el poly-silicio y el sustrato cambiando las propiedades eléctricas de la estructura MOS

| Gate     | Subs | $\phi_{gate}$ | $\phi_{subs}$            | $V_{FB} = -\phi_B$ | $V_T$ |
| -------- | ---- | ------------- | ------------------------ | ------------------ | ----- |
| $N^{++}$ | P    | $550 ~ mV$    | $-550 ~ mV < \phi_p < 0$ | $< ~ 0$            | $> ~ V_{FB}$      |
| $P^{++}$ | N    | $-550 ~ mV$   | $550 ~ mV > \phi_n > 0$  | $> ~ 0$            | $< ~ V_{FB}$      |
| $P^{++}$ | P    | $-550 ~ mV$   | $-550 ~ mV < \phi_p < 0$ | $> ~ 0$            | $> ~ V_{FB} > 0$      |
| $N^{++}$ | N    | $550 ~ mV$    | $550 ~ mV > \phi_n > 0$  | $< ~ 0$            | $< ~ V_{FB} < 0$      |

Donde $V_{FB}$ es la [[Tensión de Flatband]] y $V_T$ es la [[Tensión umbral]]