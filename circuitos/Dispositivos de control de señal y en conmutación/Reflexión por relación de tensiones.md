---
dia: 2024-04-23
aliases:
  - Teorema de Miller de tensiones
tags:
  - circuitos/Dispositivos-de-control-de-señal-y-en-conmutación
  - nota/facultad
---
### Definición
---
Esta técnica permite simplificar el calculo de [[Circuito eléctrico|circuitos]]

![[Circuito genérico de reflexión por relación de tensiones.png]]

Donde queremos reflejar la [[Impedancia|impedancia]] $Z_f$ por la que pasa $i_f$ donde en sus bornes tiene $v_i$ y $v_o$ de [[Tensión|tensión]], recordando que la relación dada por las tensiones es $A_v = \frac{v_o}{v_i}$ 

Manteniendo la misma [[Corriente eléctrica|corriente]] tenemos que $$ i_f = \frac{v_i - v_o}{Z_f} = \frac{v_i - A_v ~ v_i}{Z_f} = v_i \frac{1 - A_v}{Z_f} \implies \frac{v_i}{i_f} = \frac{Z_f}{1 - A_v} = Z_{f}^* $$
![[Circuito reflejado por relación de tensiones.png]]

#### Notas
---
Podemos notar que $|A_v| \gg 1$ y $A_v < 0$, entonces tenemos que para un [[Resistor|resistor]] $$ Z_f^* \approx \frac{R_f}{|A_v|} $$ es decir que disminuye $|A_v|$ veces.

Para [[Inductor|inductores]] y [[Capacitor|capacitores]] $$ \begin{align} 
	z_f^* &\approx \frac{j \omega L}{|A_v|} \\
	z_f^* &\approx \frac{1}{j \omega \omega |A_v|} \\
\end{align} $$ donde disminuye o aumenta $|A_v|$ veces, respectivamente

También en el caso de que $A_v > 0$, entonces $$ Z_f^* \approx -\frac{Z_f}{A_v - 1} $$ por lo que tenemos una impedancia negativa, que tiene sentido al ser a partir de un dispositivo activo

#### Ejemplo
---
Tomemos como ejemplo el siguiente circuito

![[Circuito ejemplo reflexión por relación de tensión.png]]

Donde vemos que la [[Resistor|resistor]] $R_G$ complica el circuito ya que al querer la [[Corriente eléctrica|corriente]] $i_d$ involucra más partes del circuito. Por lo tanto es un buen caso para aplicar la reflexión 

Sabemos que la corriente $i_i$ pasa completamente por $R_G$ y queremos que se mantenga esa corriente, por lo tanto tenemos que $$ i_i = \frac{v_i - v_o}{R_G} $$
Por la [[Ganancia|ganancia]] del [[Amplificador|amplificador]] que es $A_v = \frac{v_o}{v_i}$, podemos reescribirlo como $$ i_i = \frac{v_i - A_v ~v_i}{R_G} = v_i \frac{1 - A_v}{R_G} \implies \frac{v_i}{i_i} = R_G^* = \frac{R_G}{1 - A_v} $$
Este resistor en una caída de tensión de $v_i$ su corriente va a ser $i_i$, por lo tanto podemos reescribir el circuito como

![[Resistencia reflejada por tensión.png]]

