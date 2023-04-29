---
dia: 2023-04-29
materia: estructura
capitulo: 6
---
### Definición
---
A diferencia de su versión [[Flip-Flop JK asincrónico|asincrónica]] este nos permite tener un reloj o clock para activar su comportamiento. Con ecuación característica $$ Q^{n + 1} = \left( J \cdot \overline{Q^n} + \overline{K} \cdot Q^n \right) \cdot C_k + Q^n \cdot \overline{C_k} $$
En este caso tenemos dos circuitos que lo representan:
![[Flip-Flop JK sincrónico.png|500]]
Donde este se lo puede ver representado por el mismo circuito que el asincrónico, pero con la integración de un reloj.

![[Flip-Flop JK sincrónico maestro-esclavo.png|500]]
Donde podemos crearlo a partir de dos [[Flip-Flop RS sincrónico|Flip-Flop RS sincrónicos]]. Este tipo se lo conoce como maestro-esclavo, por la utilización de dos [[Circuito secuencial|circuitos secuenciales]] controlados a destiempo uno del otro.