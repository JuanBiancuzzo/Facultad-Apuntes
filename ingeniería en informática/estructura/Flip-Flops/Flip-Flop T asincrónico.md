---
dia: 2023-04-29
tags:
  - carrera/ingeniería-electrónica/estructura/Flip-Flops
  - carrera/ingeniería-en-informática/estructura/Flip-Flops
  - nota/facultad
---
# Definición
---
El [[Circuito secuencial]] con ecuación característica $$ Q^{n + 1} = T \oplus Q^n $$
## Tabla de estados
---

| $Q_t$ | $T_t$ |     | $Q_{t+1}$ |
| ----- | ----- | --- | --------- |
| 0     | 0     |     | 0         |
| 0     | 1     |     | 1         |
| 1     | 0     |     | 1         |
| 1     | 1     |     | 0          |

Notemos que es como el [[Flip-Flop RS asincrónico]] donde $J = K$.