---
dia: 2023-11-10
materia: dispo
capitulo: 6
---
### Definición
---
Teniendo un [[Transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|MOSFET]] con $V_{GS} > V_T$, $V_{GD} > V_T$ con $V_{DS} > 0$

![[Regimen triodo del MOSFET.png]]

Los [[Electrón|electrones]] fluyen del source al drain, por lo que hay [[Corriente eléctrica]]
* $V_{GS} \uparrow \implies |Q_n| \uparrow \implies I_D \uparrow$ 
* $V_{DS} \uparrow \implies |E_y| \uparrow \implies I_D \uparrow$ 

#### [[Corriente eléctrica]]
---
Donde la corriente esta dada por $$ I_D = \frac{W}{L} \mu_n C'_{ox} \left( V_{GS} - \frac{V_{DS}}{2} - V_T \right) V_{DS} ~ \left( 1 + \lambda ~ V_{DS} \right) $$

#### Calculo de la [[Corriente eléctrica|corriente]]
---
Geometría del problema:
![[Geometría de un MOSFET.png]]

La corriente es uniforme y fluye en la dirección $y$ $$ I_y = W Q'_n(y) ~ v_y(y) $$ y como la corriente de Drain es inversa a la corriente del canal $$ I_D = -W Q'_n(y) ~ v_y(y) $$
Reescribiendo en términos de la [[Tensión|tensión]] del canal $V_c(y)$
* Si el [[Campo eléctrico|campo eléctrico]] no es demasiado grande $$ v_y(y) \simeq -\mu_n ~ E_y(y) = \mu_n ~ \frac{dV_c(y)}{dy} $$
* Para $Q'_n(y)$ usamos la relación de control de [[Carga eléctrica|carga]] $$ Q'_n(y) = - C'_{ox} (V_{GS} - V_c(y) - V_T) $$ para $V_{GS} - V_c(y) \ge V_T$ donde $C'_{ox}$ es la [[Capacidad de óxido]]. 
 
Dándonos $$ I_D = W \mu_n C'_{ox} (V_{GS} - V_c(y) - V_T) ~ \frac{dV_c(y)}{dy} $$
Una simple [[Ecuación diferencial ordinaria|ecuación diferencial de primer orden]] con una sola incógnita, $V_c(y)$, que resolvemos mediante [[Método de separación de variables|separación de variables]], considerando régimen lineal integramos a lo largo del canal 
* para $y = 0$, $V_c(0) = 0$
* para $y = L$, $V_c(L) = V_{DS}$
Entonces $$ I_D = \frac{W}{L} \mu_n C'_{ox} \left( V_{GS} - \frac{V_{DS}}{2} - V_T \right) V_{DS} $$
La ecuación es válida si $V_{DS} \le V_{GS} - V_T$, dándonos una parábola de límite cuando $V_{DS} = V_{GS} - V_T$ donde la corriente es $$ I_D = \frac{W}{L} \mu_n C'_{ox} \frac{V_{DS}^2}{2} $$

##### Principales dependencias 
---
* $V_{DS} \uparrow \implies I_D \uparrow$ - elevado [[Campo eléctrico]] transversal
* $V_{GS} \uparrow \implies I_D \uparrow$ - elevada concentración de [[Electrón|electrones]]
* $L \uparrow \implies I_D \downarrow$ - menor campo eléctrico transversal
* $W \uparrow \implies I_D \uparrow$ - canal de conducción más ancho

##### Polarización del canal
---
Para entender por qué $I_D$ se curva debemos entender la despolarización del canal.

A lo largo del canal, desde source hasta drain $$ y \uparrow \implies V_c(y) \uparrow \implies |Q_n(y)| \downarrow \implies |E_y(y)| \uparrow $$
El "local channel overdrive" se reduce cerca del drain.

El impacto que tiene $V_{DS}$ sobre la corriente esta dado por

![[Impacto de Vds en la corriente de Drain en un MOSFET en régimen triodo.png]]

Cuando $V_{DS} \uparrow$, la despolarización del canal se hace más prominente, por lo tanto $I_D$ crece más lentamente con $V_{DS}$.

##### [[Efecto de modulación del largo del canal]]
---
Considerando el [[Efecto de modulación del largo del canal]], donde se utiliza una $L_{(efectiva)}$, produce una corriente $$ I_D = \frac{W}{L} \mu_n C'_{ox} \left( V_{GS} - \frac{V_{DS}}{2} - V_T \right) V_{DS} ~ \left( 1 + \lambda ~ V_{DS} \right) $$