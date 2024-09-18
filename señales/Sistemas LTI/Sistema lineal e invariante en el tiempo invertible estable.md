---
dia: 2024-03-20
aliases:
  - Sistema LTI estable
tags:
  - señales/Sistemas-LTI
  - nota/facultad
---
# Definición
---
Sea $\mathcal{T}$ un [[Sistema lineal e invariante en el tiempo|sistema LTI]] en tiempo continuo tal que $\mathcal{T}[\delta(t)] = h(t)$. Dicho sistema será estable en el sentido [[Bounded Input-Bounded Output|BIBO]] sí y sólo sí $$ \int_{-\infty}^{\infty} |h(t)| ~ dt < \infty $$ o lo que es lo mismo $h(t) \in L_1(\mathbb{R})$

## Demostración
---
Supongamos primero que se satisface la condición $\int_{-\infty}^{\infty} |h(t)| ~ dt < \infty$ y que la entrada $x(t)$ cumple con $|x(t)| \le B_1$ para todo $t \in \mathbb{R}$. Entonces $$ |y(t)| \le \int_{-\infty}^{\infty} |x(\tau)| ~ |h(t - \tau)| ~ d\tau \le B_1 \int_{-\infty}^{\infty} |h(t - \tau)| ~ d\tau \le \infty $$