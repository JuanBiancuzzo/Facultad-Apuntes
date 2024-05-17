---
dia: 2023-11-11
materia: dispo
capitulo: 6
---
### Definición
---
Estando en el [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|regimen de saturación]] del [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]]. El [[Modelo]] planteado hasta el momento $I_D$ no debería incrementarse. Experimentalmente se observa que la [[Corriente eléctrica|corriente]] aumenta ligeramente

![[Curva de salida del MOSFET con efecto de modulación del largo del canal.webp]]

La [[Carga eléctrica|carga]] se reduce en un entorno a $y = L$

![[Carga en el canal de un MOSFET con efecto de modulación del largo del canal.webp]]

Entonces la longitud efectiva del canal se reduce, aumentando $V_{DS}$ y por consecuente aumentando la [[Corriente eléctrica|corriente]] $I_D$

Este fenómeno puede [[Modelar|modelizarse]] considerando $$I_D \propto \frac{1}{L_{(efectivo)}} = \frac{1}{L - \Delta L} \simeq \frac{1}{L} \left( 1 + \frac{\Delta L}{L} \right) $$
De forma experimental se encuentra que $$ \left( 1 + \frac{\Delta L}{L} \right) = \left( 1 + \lambda ~ V_{DS} \right) $$