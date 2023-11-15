---
dia: 2023-11-10
materia: dispo
capitulo: 6
---
### Definición
---
Teniendo un [[Transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|MOSFET]] con $V_{GS} > V_T$, $V_{GD} < V_T$ con $V_{DS} > 0$

![[Regimen de saturación del MOSFET.png]]

La [[Corriente eléctrica|corriente]] $I_D$ es independiente de $V_{DS}$: $I_D = I_{D ~ sat}$

![[Curva de salida del MOSFET sin efecto de modulación del largo del canal.png]]

#### [[Corriente eléctrica]]
---
Donde la corriente esta dada por $$ I_D = \frac{1}{2} \frac{W}{L} \mu_n C'_{ox} (V_{GS} - V_T)^2 ~ \left( 1 + \lambda ~ V_{DS} \right) $$
#### Calculo de la [[Corriente eléctrica|corriente]]
---
Geometría del problema:
![[Geometría de un MOSFET.png]]

La condición de saturación es $$ V_{GD} = V_T = V_{GS} - V_{DS} \implies V_{DS ~ (sat)} = V_{GS} - V_T $$
La corriente de Drain en esta situación puede calcularse como $$ I_{D ~ (sat)} = I_D(V_{DS} = V_{DS ~ (sat)} = V_{GS} - V_T) $$
Donde la corriente esta dada por la [[Triodo del transistor de efecto de campo metal-óxido-semiconductor (MOSFET)#Corriente eléctrica|corriente en triodo]] dándonos $$ I_{D ~ (sat)} = \frac{1}{2} \frac{W}{L} \mu_n C'_{ox} V_{DS ~ (sat)}^2 $$

##### Curva de salida ($I_D$ vs. $V_{DS}$)
---
![[Curva de salida del MOSFET sin efecto de modulación del largo del canal.png]]

##### Curva de transferencia en saturación ($I_D$ vs. $V_{GS}$)
---
![[Curva de transferencia del MOSFET sin efecto de modulación del largo del canal.png]]

##### Pinch-off ($V_{DS} = V_{GS} - V_T$)
---
La [[Carga eléctrica|carga]] del canal en el  extremo del Drain $$ Q'_n(L) = -C'_{ox} (V_{GS} - V_{DS} - V_T) = 0 $$
![[Pinch-off en el MOSFET.png]]

Por lo que no hay una capa de [[Inversión de la estructura Metal-Óxido-Semiconductor (MOS)|inversión]] en el extremo del Drain. A esta situación se la suele conocer como pinch-off
* La ecuación de control de carga es inexacta en el entorno de $V_T$
* La concentración de [[Electrón|electrones]] es pequeña, pero no es cero
* Los electrones se mueven rápido debido a que el [[Campo eléctrico|campo eléctrico]] es muy elevado
* No hay ningún impedimento para el movimiento de los [[Portador de carga|portadores]].

##### [[Tensión|Tensiones]] $V_{DS} > V_{GS} - V_T$
---
* En el canal ya no cambia su distribución de [[Carga eléctrica|carga]] $Q'_n(y)$ ya que este queda determinado por $V_{DS ~ (sat)}$
* El [[Campo eléctrico]] en el canal tampoco cambia porque la distribución de [[Carga eléctrica|carga]] se mantiene. Entonces $E_y(y)$ queda determinado por $V_{DS ~ (sat)}$
* La [[Corriente eléctrica|corriente]] en el canal es una [[Corriente de arrastre|corriente de arrastre]]. Si la carga y el campo se mantienen entonces $I_D$ es constante

Considerando el [[Efecto de modulación del largo del canal]], donde se utiliza una $L_{(efectiva)}$, produce una corriente $$ I_D = \underbrace{\frac{1}{2} \frac{W}{L} \mu_n C'_{ox} (V_{GS} - V_T)^2}_{I_{D ~ (sat)}} ~ \left( 1 + \lambda ~ V_{DS} \right) $$