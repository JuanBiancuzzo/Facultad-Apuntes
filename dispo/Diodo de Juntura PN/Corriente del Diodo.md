---
dia: 2023-09-06
capitulo: 3
tags:
  - dispo/Diodo-de-Juntura-PN
---
### Definición
---
Al aplicar una [[Tensión]] sobre la [[Juntura PN]] circula una [[Corriente eléctrica|corriente]]

![[Corriente eléctrica al aplicar una tensión sobre una juntura PN.webp|600]]

* Para tensiones negativas ([[Convención de signos para la tensión de polarización#Polarización inversa|inversa]]) la corriente es muy pequeña
* Para tensiones positivas ([[Convención de signos para la tensión de polarización#Polarización directa|directa]]) la corriente crece exponencialmente

Esta es la propiedad eléctrica más importante del [[Diodo]].

La expresión de la corriente en función de la tensión aplicada $$ i_D = f(v_D) $$ notemos como esta no depende de la posición de la juntura.

Donde esta nos da $$ i_D(v_D) = I_0 \left( \exp\left( \frac{q~v_D}{kT} \right) - 1 \right) $$

### Calculo de la corriente
---
Como no depende de la posición podemos calcularla al corriente en QNR, donde la [[Corriente eléctrica|corriente]]
##### En la zona p-QNR
* [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|Concentración de electrones]] ($n(x)$) son los minoritarios
* El [[Campo eléctrico]] es aproximadamente $0$

Esto implica que la [[Corriente de arrastre|densidad de corriente de arrastre]] de [[Electrón|electrones]] es baja $$ J_{arr}^{e^-} \propto E \simeq 0 $$
y si conozco $n(x)$ puedo calcular la [[Corriente de difusión|densidad de corriente de difusión]] de electrones, por lo tanto sabemos la [[Densidad de corriente eléctrica|densidad de corriente]] de electrones $J^{e^-}$

##### En la zona n-QNR
* [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|Concentración de huecos]] ($p(x)$) son los minoritarios
* El [[Campo eléctrico]] es aproximadamente $0$

Esto implica que la [[Corriente de arrastre|densidad de corriente de arrastre]] de [[Hueco|huecos]] es baja $$ J_{arr}^{h^+} \propto E \simeq 0 $$
y si conozco $p(x)$ puedo calcular la [[Corriente de difusión|densidad de corriente de difusión]] de huecos, por lo tanto sabemos la [[Densidad de corriente eléctrica|densidad de corriente]] de huecos $J^{h^+}$

##### En la zona SCR
Sabemos que las [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|Concentraciones]] de [[Hueco|huecos]] y [[Electrón|electrones]] es "baja" por la [[Aproximación de vaciamiento]], por lo que no hay [[Recombinación]], y podemos decir que $$ \begin{align}
	i_p(-x_p) = i_p(x_n) \\
	i_n(-x_p) = i_n(x_n)
\end{align} $$
La [[Corriente eléctrica|corriente]] de mayoritarios del [[Impureza aceptora#Cantidad de dopante|lado p]] es igual a la corriente de minoritarios del [[Impureza donora#Cantidad de dopante|lado n]]. De igual forma, la [[Corriente eléctrica|corriente]] de mayoritarios del [[Impureza donora#Cantidad de dopante|lado n]] es igual a la corriente de minoritarios del [[Impureza aceptora#Cantidad de dopante|lado p]]

Para que esto se mantenga, se tiene que cumplir la [[Hipótesis de bajo nivel de inyección]].

#### Concentraciones de los [[Portador de carga|portadores]] minoritarios
---
Sabiendo que por la [[Relación de Boltzmann]] estando en [[Equilibrio térmico en un semiconductor|equilibrio térmico]], tenemos que la concentración es $$ \begin{align} 
	\frac{n_0(x_1)}{n_0(x_2)} &= \exp\left( \frac{q ~ (\phi(x_1) - \phi(x_2))}{kT} \right) \\ \\
	\frac{p_0(x_1)}{p_0(x_2)} &= \exp\left(- \frac{q ~ (\phi(x_1) - \phi(x_2))}{kT} \right)
\end{align} $$
Pero por la polarización, no podemos esperar el equilibrio ya que $|J_{arr}| \ne |J_{dif}|$ pero si la diferencia entre ambos es pequeño respecto a la magnitud de las corrientes. 
$$ |J_{arr} - J_{dif}| \ll |J_{arr}| ~~~ \text{y} ~~~ |J_{arr} - J_{dif}| \ll |J_{dif}| $$
Entonces podemos decir que esta en un estado de cuasi-equilibrio $$ 
\begin{align}
	\frac{n(x_1)}{n(x_2)} &\simeq \exp\left( \frac{q ~ (\phi(x_1) - \phi(x_2))}{kT} \right) \\ \\
	\frac{p(x_1)}{p(x_2)} &\simeq \exp\left(- \frac{q ~ (\phi(x_1) - \phi(x_2))}{kT} \right)
\end{align} $$
Suponiendo [[Aproximación de cuasi-neutralidad|cuasi-netralidad]], no cae tensión en la p-QNR entonces $$ \Delta V_{SCR} = \phi(x_n) - \phi(-x_p) = \phi_B - v_D $$ donde $\phi_B$ es el [[Potencial de built-in]].

Por lo que en los bordes de la región SCR, se tiene $$ \begin{align} 
	\frac{n(x_n)}{n(-x_p)} & \simeq \exp\left( \frac{q ~ (\phi_B - v_D)}{kT} \right) \\ \\ 
	\frac{p(x_n)}{p(-x_p)} & \simeq \exp\left(- \frac{q ~ (\phi_B - v_D)}{kT} \right)
\end{align} $$
Siguiendo la aproximación de cuasi-neutralidad, sabemos que $n(x_n) \simeq N_d$ y que $p(-x_p) \simeq N_a$ por lo que nos queda que $$ \begin{align} 
	n(-x_p) &\simeq N_d \exp\left( \frac{q ~ (v_D - \phi_B)}{kT} \right) \\ \\
	p(x_n) &\simeq N_a \exp\left( \frac{q ~ (v_D - \phi_B)}{kT} \right)
\end{align} $$
Recordando que la tensión de juntura es $\displaystyle\phi_B = \frac{kT}{q} \ln\left( \frac{N_d ~ N_a}{n_i^2} \right)$ donde $n_i$ es la [[Semiconductor intrínseco|concentración de un semiconductor intrínseco]], dejándonos la expresión $$ \begin{align} 
	n(-x_p) &\simeq \frac{n_i^2}{N_a} \exp\left( \frac{q ~ v_D}{kT} \right) \\ \\
	p(x_n) &\simeq \frac{n_i^2}{N_d} \exp\left( \frac{q ~ v_D}{kT} \right) 
\end{align} $$
#### [[Corriente de difusión|Densidad de corriente de difusión]] en las regiones QNR
---
La ecuación de difusión para [[Electrón|electrones]] en la región p-QNR $$ J_n = q D_N^{(p)} \frac{dn(x)}{dx} $$
Por la [[Aproximación de diodo corto]], podemos decir que la [[Modelo de enlace de Silicio#Concentración de Portador de carga portadores|concentración]] de [[Electrón|electrones]], $n(x)$, suponemos lineal. También por [[Condición de borde en una juntura PN|condiciones de borde]] sabemos que $$ n(x = -W_p) = n_0 = \frac{n_i^2}{N_a} ~~~~~ n(-x_p) = \frac{n_i^2}{N_a} \exp\left( \frac{q~v_D}{kT} \right) $$ donde $W_p$ es el ancho del [[Semiconductor]] del, en este caso, lado p

![[Concentración lineal de electrones en la región p-QNR con polarización.webp]]

Por lo que la derivada de la concentración de electrones queda $$ \frac{dn}{dx} = \frac{n_p(-x_p) - n_p(-W_p)}{-x_p + W_p} $$
Dándonos una [[Densidad de corriente eléctrica|densidad de corriente de electrones]] $$ \begin{align} 
	J_n &= qD_n^{(p)}~\frac{dn}{dx} = qD_n^{(p)} ~ \frac{n_p(-x_p) - n_p(-W_p)}{W_p -x_p} \\
	&= qD_n^{(p)} \frac{1}{W_p -x_p} ~ \left( \frac{n_i^2}{N_a} \exp\left( \frac{q~v_D}{kT} \right) - \frac{n_i^2}{N_a} \right) \\
	J_n &= q \frac{n_i^2}{N_a} \frac{D_n^{(p)}}{W_p -x_p} ~ \left( \exp\left( \frac{q~v_D}{kT} \right) - 1 \right)
\end{align} $$
De forma similar para los [[Hueco|huecos]] $$ J_p = q \frac{n_i^2}{N_d} \frac{D_p^{(n)}}{W_n -x_n} ~ \left( \exp\left( \frac{q~v_D}{kT} \right) - 1 \right) $$

#### Corriente total
---
Sabemos que la [[Densidad de corriente eléctrica|densidad de corriente]] total sabemos que es $J = J_n + J_p$ por lo tanto $$ J(v_D) = q ~ n_i^2  \left( \frac{1}{N_a} \frac{D_n^{(p)}}{W_p -x_p} + \frac{1}{N_d} \frac{D_p^{(n)}}{W_n -x_n} \right) \left( \exp\left( \frac{q~v_D}{kT} \right) - 1 \right) $$
Por lo que la corriente total es $$ i(v_D) = q ~ A ~ n_i^2  \left( \frac{1}{N_a} \frac{D_n^{(p)}}{W_p -x_p} + \frac{1}{N_d} \frac{D_p^{(n)}}{W_n -x_n} \right) \left( \exp\left( \frac{q~v_D}{kT} \right) - 1 \right) $$
Que podemos reducir a $$ i_D(v_D) = I_0 \left( \exp\left( \frac{q~v_D}{kT} \right) - 1 \right) $$ donde $I_0$ reemplaza a la "constante" que lleva la corriente, llamada corriente de saturación inversa.

La [[Condición de borde en una juntura PN|condición de contorno]] usada, es valida tanto para [[Convención de signos para la tensión de polarización#Polarización directa|polarización directa]] como para [[Convención de signos para la tensión de polarización#Polarización inversa|polarización inversa]] por lo que la ecuación es válida en directa y en inversa.

Notemos que podemos aproximarlo como $$ i_D(v_D) \approx \begin{cases} 
	-I_0, && ~ && v_D &<& -V_0 & \text{Inversa} \\
	I_0 \left( \exp\left( \frac{q~v_D}{kT} \right) - 1 \right), && -V_0 &<& v_D &<& V_0 & \text{Directa débil}\\
	I_0 ~ \exp\left( \frac{q~v_D}{kT} \right), && ~~~V_0 &<& v_D && & \text{Directa} \\
\end{cases}$$ donde $V_0 \approx 5 \cdot V_{th}$. Recordando que $V_{th}$ es el [[Relación de Einstein|potencial térmico]].