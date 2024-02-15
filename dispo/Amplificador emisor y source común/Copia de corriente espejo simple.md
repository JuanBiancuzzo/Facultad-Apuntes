---
dia: 2024-02-15
materia: dispo
capitulo: 7
---
### Definición
---
![[Copia de corriente espejo simple.png]]

Despreciando el [[Efecto de modulación del largo del canal|efecto de modulación del largo del canal]] $$ I_{REF} = i_{D1} = \frac{1}{2} \mu_n C'_{ox} \left( \frac{W}{L} \right)_1 (V_{REF} - V_T)^2 $$ $$ i_{out} = i_{D2} = \frac{1}{2} \mu_n C'_{ox} \left( \frac{W}{L} \right)_2 (V_{REF} - V_T)^2 $$
$$ \implies i_{out} = I_{REF} ~ \frac{\left( \frac{W}{L} \right)_2}{\left( \frac{W}{L} \right)_1} $$
$i_{out}$ se ajusta con $I_{REF}$ según la relación $\frac{W}{L}$ de los [[Transistor de efecto de campo metal-óxido-semiconductor (MOSFET)|MOSFETs]]

Es importante contar con transistores "bien apareados": 
* Proporción $\frac{W}{L}$ muy controlada
* Mismo $V_T$
* Mismo $t_{ox}$
* etc.

#### Fuente espejo con P-MOSFET
---
