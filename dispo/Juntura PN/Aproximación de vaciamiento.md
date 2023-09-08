---
dia: 2023-09-06
materia: dispo
capitulo: 2
---
### Hipótesis
---
1. La región espacial de carga tiene límites abruptos
2. No existen [[Portador de carga|portadores]] en la región espacial de carga, estos sólo la atraviesan. Por tanto, se supondrá que esta región consta únicamente de impurezas tanto [[Impureza donora|donoras]] como [[Impureza aceptora|aceptoras]] ionizadas
3. Fuera de los límites de la región espacial de carga, el [[Semiconductor]] es neutro
4. El funcionamiento es a una temperatura tal que todos los [[Átomo|átomos]] de impurezas están ionizados
5. Las [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|concentraciones de portadores]] en los límites de la región espacial de carga vienen dados en función del [[Potencial eléctrico|potencial electrostático]] de contacto
6. Los contactos al final de la [[Impureza donora#Cantidad de dopante|región n]] y la [[Impureza aceptora#Cantidad de dopante|región p]] son [[Contacto óhmico|contactos perfectamente óhmicos]]. Por lo que la caída de [[Tensión]] entre sus extremos es cero
### Definición
---
Teniendo una [[Juntura PN en equilibrio térmico|juntura PN en equilibrio]], tenemos las regiones de cuasi neutralidad (QNR's) tienen [[Neutralidad de carga]] por lo que 
$$ \begin{align} 
	\text{P - QNR}: && \rho(x) &= q(N_d + p_0 - N_a - n_0) \simeq 0 \\\\
	&&& \Rightarrow p_0 = N_a - \underbrace{N_d}_{=~0} + \underbrace{n_0}_{\ll N_a} \\
	&&& \Rightarrow p_0 \simeq N_a
\end{align} $$
$$ \begin{align} 
	\text{N - QNR}: && \rho(x) &= q(N_d + p_0 - N_a - n_0) \simeq 0 \\\\
	&&& \Rightarrow n_0 = N_d - \underbrace{N_a}_{=~0} + \underbrace{p_0}_{\ll N_d} \\
	&&& \Rightarrow n_0 \simeq N_d
\end{align} $$

Donde suponemos que las SCR están "vacías"  de [[Portador de carga|portadores]] y esta es la "región de vaciamiento" $$ \begin{align}
	\text{P-SCR}: \Set{n_0, ~p_0} \ll N_a \\
	\text{N-SCR}: \Set{n_0, ~p_0} \ll N_d \\
\end{align}$$
La transición entre SCR y QNR's es abrupta.

##### Concentración de [[Portador de carga|portadores]]
---
![[Concentración de portadores en escala lineal de una juntura PN en equilibrio térmico.png|600]]
$$ n_0(x) = \begin{cases} 
	\sim 0, &&            &&   x  &\le&  - x_{p_0}  \\
	\sim 0, && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	\sim 0, && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	~N_d,   && ~~~x_{n_0} &<&  x  &
\end{cases} $$
$$ p_0(x) = \begin{cases} 
	~N_a,   &&            &&   x  &\le&  - x_{p_0}  \\
	\sim 0, && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	\sim 0, && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	\sim 0, && ~~~x_{n_0} &<&  x  &
\end{cases} $$

##### [[Densidad volumétrica de carga eléctrica|Densidad de carga]]
---
$$ \rho(x) = q ~ (N_d + p_0 - N_a - n_0) $$

![[Densidad de carga en escala lineal de una juntura PN en equilibrio térmico.png|600]]

$$ \rho(x) = \begin{cases} 
	~\sim 0,  &&            &&   x  &\le&  - x_{p_0}  \\
	-q~N_a,   && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	~~~q~N_d, && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	~\sim 0,  && ~~~x_{n_0} &<&  x  &
\end{cases} $$

##### [[Campo eléctrico]]
---
$$ E(x_2) - E(x_1) = \frac{1}{\varepsilon_{sc}} \int_{x_1}^{x_2} \rho(x) ~ dx $$

![[Campo eléctrico en escala lineal de una juntura PN en equilibrio térmico.png|600]]

En particular para $-x_{p_0} < x \le 0$
$$ E(x) - \underbrace{E(-x_{p_0})}_{= ~ 0} = \frac{1}{\varepsilon_{sc}} \int_{-x_{p_0}}^x -qN_a ~ dx = -\frac{q~N_a}{\varepsilon_{sc}} ~~ x \bigg\vert_{-x_{p_0}}^x = - \frac{q ~ N_a}{\varepsilon_{sc}} ~ (x + x_{p_0}) $$
$$ E(x) = \begin{cases} 
	~\sim 0,  &&                                       &&   x  &\le&  - x_{p_0}  \\
	-\frac{q~N_a}{\varepsilon_{sc}} ~ (x + x_{p_0}),   && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	~~~\frac{q~N_d}{\varepsilon_{sc}} ~ (x - x_{n_0})  && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	~\sim 0,                                           && ~~~x_{n_0} &<&  x  &
\end{cases} $$ donde $\varepsilon_{sc}$ es la [[Permitividad eléctrica|permitividad eléctrica]] del semiconductor

Notemos que el campo eléctrico en la juntura metalúrgica es $$ |E_0| = \sqrt\frac{2q ~ \phi_B N_a N_d}{\varepsilon_{sc} (N_a + N_d)} $$ donde $\phi_B$ es el [[Potencial de built-in]] y podemos encontrar esta relación con los [[Aproximación de vaciamiento#Límites de la región de carga espacial|límites de la región de carga espacial]] $x_{n_0}$ y $x_{p_0}$

##### [[Potencial eléctrico|Función de Potencial]] en [[Equilibrio térmico en un semiconductor|equilibrio térmico]]
---
Recordando la [[Relación de Boltzmann|relación de Boltzmann]], tenemos que $$ \phi(x) = \frac{kT}{q} \ln\left( \frac{n_0}{n_i} \right) = - \frac{kT}{q} \ln\left( \frac{p_0}{n_i} \right) $$ donde $n_i$ es la [[Semiconductor intrínseco|concentración de un semiconductor intrínseco]].

Esto nos sirve para encontrar el potencial en QNR-P y QNR-N $$ \begin{align} 
	\text{P - QNR}: && p_0 = N_a \implies \phi_p = - \frac{kT}{q} \ln\left( \frac{N_a}{n_i} \right) \\\\ 
	\text{N - QNR}: && n_0 = N_d \implies \phi_n = \frac{kT}{q} \ln\left( \frac{N_d}{n_i} \right)
\end{align} $$
![[Potencial eléctrico en escala lineal de una juntura PN.png|600]]

$$ \phi(x) = \begin{cases} 
	\phi_p,   &&            &&   x  &\le&  - x_{p_0}  \\
	\displaystyle \phi_p ~+~ \frac{q~N_a}{2\varepsilon_{sc}} ~ (x + x_{p_0})^2, && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	\displaystyle \phi_n ~-~ \frac{q~N_d}{2\varepsilon_{sc}} ~ (x - x_{n_0})^2, && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	\phi_n, && ~~~x_{n_0} &<&  x  &
\end{cases} $$

##### Límites de la región de carga espacial
---
Aún no conocemos $x_{n_0}$ y $x_{p_0}$, y para encontrarlos necesitamos las condiciones de
1. [[Neutralidad de carga|Neutralidad de cargas]] de forma global $$ qN_a ~x_{p_0} = qN_d ~x_{pn0} $$
2. Pedimos que el [[Potencial eléctrico|potencial]] $\phi(x)$ sea [[Función continua|continua]] en $x = 0$ $$ \phi_p + \frac{qN_a}{2 \varepsilon_{sc}} ~ x^2_{p_0} = \phi_n - \frac{qN_d}{2 \varepsilon_{sc}} ~ x^2_{n_0} $$
Por lo tanto tenemos que $$ x_{n_0} = \sqrt\frac{2 \varepsilon_{sc} ~ \phi_B ~ N_a}{q~(N_a + N_d) ~ N_d} ~~~~ x_{p_0} = \sqrt\frac{2 \varepsilon_{sc} ~ \phi_B ~ N_d}{q~(N_a + N_d) ~ N_a} $$ donde $\phi_B$ es el [[Potencial de built-in]]

El ancho total de la región de carga espacial esta dada por $$ x_{d_0} = x_{p_0} + x_{p_0} = \sqrt\frac{2\varepsilon_{sc} ~ \phi_B ~ (N_a + N_d)}{qN_aN_d} $$

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

![[Función de potencial, campo eléctrico y densidad de carga para una juntura PN polarizada.png|600]]