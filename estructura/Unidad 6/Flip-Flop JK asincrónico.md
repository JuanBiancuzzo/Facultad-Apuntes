---
dia: 2023-04-29
materia: estructura
capitulo: 6
---
### Definición
---
El [[Circuito secuencial]] con ecuación característica $$ Q^{n + 1} = J \cdot \overline{Q^n} + \overline{K} \cdot Q^n $$
y tiene el circuito

![[Flip-Flot JK asincrónico.png|500]]

#### Tabla de estados
---
| $Q_t$ | $S_t$ | $R_t$ |     | $Q_{t+1}$ |
| ----- | ----- | ----- | --- | --------- |
| 0     | 0     | 0     |     | 0         |
| 0     | 0     | 1     |     | 0         |
| 0     | 1     | 0     |     | 1         |
| 0     | 1     | 1     |     | 0         |
| 1     | 0     | 0     |     | 1         |
| 1     | 0     | 1     |     | 0         |
| 1     | 1     | 0     |     | 1         |
| 1     | 1     | 1     |     | 0         |

Notemos que es como un [[Flip-Flop RS asincrónico]] pero donde los casos prohibidos se reemplazan por el opuesto.