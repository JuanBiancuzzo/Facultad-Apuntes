---
dia: 2023-04-28
materia: estructura
capitulo: 6
---
### Definición
---
El [[Circuito secuencial]] con ecuación característica $$ Q^{n + 1} = S + \overline{R} \cdot Q^n $$
y tiene el circuito

![[Flip-Flop RS asincrónico.png|500]]

#### Tabla de estados
---
| $Q_t$ | $S_t$ | $R_t$ |     | $Q_{t+1}$ |
| ----- | ----- | ----- | --- | --------- |
| 0     | 0     | 0     |     | 0         |
| 0     | 0     | 1     |     | 0         |
| 0     | 1     | 0     |     | 1         |
| 0     | 1     | 1     |     | Prohibido |
| 1     | 0     | 0     |     | 1          |
| 1     | 0     | 1     |     | 0          |
| 1     | 1     | 0     |     | 1          |
| 1     | 1     | 1     |     | Prohibido          |

Los caso que esta prohibido es en el cual su comportamiento que oscila a la velocidad de respuesta de los componentes.