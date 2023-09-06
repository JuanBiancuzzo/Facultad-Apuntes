---
dia: 2023-04-29
materia: estructura
capitulo: 6
---
### Definición
---
A diferencia de su versión [[Flip-Flop D asincrónico|asincrónica]] este nos permite tener un reloj o clock para activar su comportamiento. con ecuación característica $$ Q^{n + 1} = D \cdot C_k + Q^n \cdot \overline{C_k} $$
![[Flip-Flop D sincrónico.png|500]]

#### Tabla de estados
---

| $C_k$ | $Q^n$ | $D^n$ |     | $Q^{n+1}$ |
| ----- | ----- | ----- | --- | --------- |
| 0     | 0     | 0     |     | 0         |
| 0     | 0     | 1     |     | 0         |
| 0     | 1     | 0     |     | 1         |
| 0     | 1     | 1     |     | 1         |
| 1     | 0     | 0     |     | 0         |
| 1     | 0     | 1     |     | 1         |
| 1     | 1     | 0     |     | 0         |
| 1     | 1     | 1     |     | 1          |
