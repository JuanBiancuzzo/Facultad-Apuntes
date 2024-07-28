---
dia: 2023-11-20
tags:
  - dispo/Transistor-MOSFET
  - nota
---
### Definición
---
Con un [[Transistor de efecto de campo metal-óxido-semiconductor#Canal-N|MOSFET de canal-N]] en [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|régimen de saturación]] $$ i_D = \frac{1}{2} \frac{W}{L} (v_{GS} - V_T)^2 (1 + \lambda v_{DS}) $$
Entonces 

$$ g_0 = \frac{\partial i_D}{\partial v_{DS}} \biggm|_{Q} = \frac{1}{2} \frac{W}{L} (v_{GS} - V_T)^2 \lambda = I_{D ~ (sat)} \lambda \propto \frac{I_{D ~ (sat)}}{L} $$ ^479383
#### Validez
---
Es válido mientras $$ v_{ds} < V_{DSQ} - V_{DS ~ (sat)} $$
es decir, mientras el [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]] esté polarizado en el [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|régimen de saturación]]