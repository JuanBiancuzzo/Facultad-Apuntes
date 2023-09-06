---
dia: 2023-09-06
materia: dispo
capitulo: 2
---
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

#### Concentración de [[Portador de carga|portadores]]
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

#### [[Densidad volumétrica de carga eléctrica|Densidad de carga]]
---
$$ \rho(x) = q ~ (N_d + p_0 - N_a - n_0) $$

![[Densidad de carga en escala lineal de una juntura PN en equilibrio térmico.png|600]]

$$ \rho(x) = \begin{cases} 
	~\sim 0,  &&            &&   x  &\le&  - x_{p_0}  \\
	-q~N_a,   && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	~~~q~N_d, && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	~\sim 0,  && ~~~x_{n_0} &<&  x  &
\end{cases} $$

#### [[Campo eléctrico]]
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
\end{cases} $$

Donde $\varepsilon_{sc}$ es la [[Permitividad eléctrica|permitividad eléctrica]] del semiconductor

#### [[Potencial eléctrico|Función de Potencial]] en [[Equilibrio térmico en un semiconductor|equilibrio térmico]]
---
Recordando la [[Relación de Boltzmann|relación de Boltzmann]], tenemos que $$ \phi(x) = \frac{kT}{q} \ln\left( \frac{n_0}{n_i} \right) = - \frac{kT}{q} \ln\left( \frac{p_0}{n_i} \right) $$ donde $n_i$ es la [[Semiconductor intrínseco|concentración de un semiconductor intrínseco]].

Esto nos sirve para encontrar el potencial en QNR-P y QNR-N $$ \begin{align} 
	\text{P - QNR}: && p_0 = N_a \implies \phi_p = - \frac{kT}{q} \ln\left( \frac{N_a}{n_i} \right) \\\\ 
	\text{N - QNR}: && n_0 = N_d \implies \phi_n = \frac{kT}{q} \ln\left( \frac{N_d}{n_i} \right)
\end{align} $$
![[Potencial eléctrico en escala lineal de una juntura PN en equilibrio térmico.png|600]]

$$ \phi(x) = \begin{cases} 
	\phi_p,   &&            &&   x  &\le&  - x_{p_0}  \\
	\displaystyle \phi_p ~+~ \frac{q~N_a}{2\varepsilon_{sc}} ~ (x + x_{p_0})^2, && -x_{p_0}   &<&  x  &\le&  ~~~~0      \\
	\displaystyle \phi_n ~-~ \frac{q~N_d}{2\varepsilon_{sc}} ~ (x - x_{n_0})^2, && ~~~~0       &<&  x  &\le&  ~~~x_{n_0} \\
	\phi_n, && ~~~x_{n_0} &<&  x  &
\end{cases} $$
