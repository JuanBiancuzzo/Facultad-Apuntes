---
dia: 2023-09-23
materia: dispo
capitulo: 3
---
### Definición
---
El diodo es un componente electrónico de dos terminales que permite la circulación de la [[Corriente eléctrica|corriente]] a través de él en un solo sentido.

Se establece un [[Convención de signos para la tensión de polarización|convención se sentido de orientación]] donde el [[Impureza aceptora#Cantidad de dopante|lado p]] esta en el ánodo y el [[Impureza donora#Cantidad de dopante|lado n]] esta en el cátodo.

#### [[Corriente eléctrica|Corriente]]
---
Comparemos la corriente que fluye por un diodo real en comparación al [[Corriente del Diodo|diodo ideal]], dándonos la [[Curva característica de un componente|curva característica]]

![[El diodo ideal vs. el diodo real.webp|500]]

Al medir la características de la [[Corriente eléctrica|corriente]]-[[Tensión|tensión]] de un diodo real se observa que es necesario introducir factores empíricos en la [[Corriente del Diodo|ecuación teórica]] para que la misma ajuste correctamente la curva experimental

En la figura se puede ver como afectan a la características del diodo las diferentes no idealidades

#### [[Convención de signos para la tensión de polarización#Polarización directa|Polarización directa]]
---
##### [[Corriente eléctrica|Corriente]] de [[Recombinación]]
---
En la directa débil (es decir entre $0~V$ y $\approx 5~V_{th}$ que es [[Relación de Einstein|potencial térmico]]), la corriente (ideal) es muy baja, por lo que cualquier aporte de [[Carga eléctrica|carga]] que atraviesa la juntura de manera ideal.

En directa, la [[Portador de carga|concentración de portadores]] en la SCR aumenta respecto de [[Equilibrio térmico en un semiconductor|equilibrio térmico]] por lo que la [[Recombinación|recombinación]] supera a la [[Generación|generación]].

Si un par de portadores se recombina, no están disponible para formar parte de la corriente ideal, entonces se debe compensar esa pérdida de portadores a través de una nueva componente de corriente, una corriente de recombinación.

La corriente de recombinación suele ser mucho mayor a la corriente ideal para [[Tensión|tensiones]] bajas ($I_r \gg I_{D(\text{ideal})}$) $$ I_D = I_{D(\text{ideal})} + I_r \approx I_r \approx qA \frac{x_d(V_D)~n_i}{2\tau_r} \exp \left( \frac{V_D}{2V_{th}} \right) $$ donde $x_d$ es proporcional a $\sqrt{V_D}$, $\tau_r$ es el tiempo medio de recombinación, y por ser proporcional con $n_i$ depende fuertemente de la [[Temperatura]]

##### La [[Juntura PN|juntura]] [[Aproximación de vaciamiento|no es abrupta]], cuasi-equilibrio y [[Hipótesis de bajo nivel de inyección|alto nivel de inyección]]
---
Al plantear la [[Aproximación de vaciamiento|aproximación de vaciamiento]], planteamos que la juntura es abrupta. Sin embargo esto no puede lograrse en la fabricación real del dispositivo y existe una zona de transición entre la región [[Impureza aceptora#Cantidad de dopante|dopante tipo P]] y la [[Impureza donora#Cantidad de dopante|tipo N]]

Al seguir aumentando la [[Corriente eléctrica|corriente]] del [[Diodo|diodo]], otras hipótesis comienzan a perder validez
* La corriente que atraviesa la SCR puede ser comparable con la corriente de equilibrio
  $\implies$ Deja de ser válida la aproximación de cuasi-equilibrio
  $\implies$ La concentración de minoritarios en el borde de la SCR ya no responde a la [[Relación de Boltzmann|relación de Boltzmann]].
* Los minoritarios en el borde de la SCR aumentan considerablemente
  $\implies$ Ya no es válida la [[Hipótesis de bajo nivel de inyección|hipótesis de bajo nivel de inyección]]

Normalmente se modela $n$ (el [[Coeficiente de emisión o Factor de idealidad|coeficiente de emisión]]) con un único valor constante, sin embargo, se observa que una mejor forma de modelar los efectos mencionados es utilizar distintos valores de $n$ según el rango de corrientes.
##### [[Aproximación de cuasi-neutralidad|Cuasi neutralidad]]
---
El semiconductor presenta una [[Resistencia|resistividad]] ($\rho$) que depende del nivel de [[Dopaje]]

Se incrementa la [[Corriente eléctrica|corriente]]
$\implies$ hay caída de [[Tensión]] en las QNR
$\implies$ la tensión aplicada en los terminales del diodo $V_D$ difiere de la [[Tensión|diferencia de potencial]] en los bordes de la SCR

Los contactos [[Juntura metal-semiconductor|metal-semiconductor]] también presentan un efecto resistivo adicional.

Ambos fenómenos suelen modelarse considerando una [[Resistor|resistencia]] ($R_x$) conectada en [[Elementos en serie|serie]] con el diodo, por lo que $$ \begin{align}
	I_D &\approx I_0 \exp \left( \frac{V'_D}{n ~ V_{th}} \right) \\
	V'_D &= V_D - V_{R_x}
\end{align} $$
#### [[Convención de signos para la tensión de polarización#Polarización inversa|Polarización inversa]]
---
##### [[Corriente eléctrica|Corriente]] de [[Generación|generación]]
---
En inversa, la corriente (ideal) es menor a la [[Corriente del Diodo|corriente de saturación inversa]] ($|I_D < I_0|$)

Al igual que en [[Convención de signos para la tensión de polarización#Polarización directa|directa]], cualquier aporte de [[Carga eléctrica|carga]] adicional a la estructura, será comparable o superior a la carga que atraviesa la [[Juntura PN|juntura]] de manera ideal.

En inversa, la [[Portador de carga|concentración de portadores]] en la SCR disminuye respecto del [[Equilibrio térmico en un semiconductor|equilibrio térmico]]
$\implies$ la [[Generación|generación]] supera a la [[Recombinación|recombinación]]

Si se genera un par de portadores, son separados por el [[Campo eléctrico]]
$\implies$ esos nuevos portadores son [[Corriente de arrastre|arrastrados]] en dirección opuesta
$\implies$ forman parte de un nuevo componente de corriente: Corriente de generación

En inversa, la corriente de generación suele ser mucho mayor a la corriente ideal ($I_g \ll |I_{D(\text{ideal})}|$) $$ I_D = I_{D(\text{ideal})} - I_g \approx -I_g \approx - \frac{qA~n_i~x_i(V_D)}{\tau_g} $$ donde $x_i$ es proporcional a $\sqrt{V_D}$, $\tau_g$ es el tiempo medio de generación, y por ser proporcional con $n_i$ depende fuertemente de la [[Temperatura]].

##### Efecto de ruptura de la [[Juntura PN|juntura]]
---
Al polarizar el diodo en [[Convención de signos para la tensión de polarización#Polarización inversa|inversa]] 
* Aumenta la [[Tensión|diferencia de potencial]] en la [[Juntura PN|juntura]] respecto del [[Equilibrio térmico en un semiconductor|equilibrio]], por lo que aumenta el [[Campo eléctrico|campo eléctrico]] interno $$ |E(x = 0, V_D)| = \sqrt{\frac{2q~(\phi_B-V_D)}{\varepsilon_{sc}}\frac{N_a ~ N_d}{N_a + N_d}} $$
* [[Campo eléctrico|Campos eléctricos]] elevados en la juntura pueden producir la [[Ruptura inversa|ruptura en inversa]] de la [[Juntura PN|juntura]]
* Este efecto puede o no destruir el dispositivo

Existen dos fenómenos físicos asociados con la [[Ruptura inversa|ruptura en inversa]] de la juntura, son:
* El efecto avalancha (ocurre en junturas levemente [[Dopaje|dopadas]])
* El [[Efecto túnel|efecto túnel]] (ocurre en juntura fuertemente [[Dopaje|dopadas]])

El [[Diodo Zener|diodo Zener]] es un ejemplo de aplicación de la ruptura inversa