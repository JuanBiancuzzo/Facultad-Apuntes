---
dia: 2023-11-15
capitulo: 4
aliases:
  - Política de planificación SJF
tags:
  - sisop/Scheduling
  - nota
---
### Definición
---
Para resolver el problema que se presenta en la [[Política de planificación First In, First Out|política FIFO]], se modifica la política para que se ejecute el [[Proceso|proceso]] de duración mínima, una vez finalizado esto se ejecuta el proceso de duración mínima, y así sucesivamente.

#### Usando [[Métrica Turn Around de planificación|Turn around]]
---
Suponiendo que A dura $100$, y B, C duran $10$, esta política ordena los procesos en B, C y finalmente A
$$ T_\text{around} = \frac{10 + 20 + 120}{3} = 50 < 110 = T_\text{around}^\text{FIFO} $$
Utilizando SJF se obtuvo una mejora significativa, pero con las [[Suposiciones en la planificación|suposiciones]] que son muy poco realistas. Si no necesariamente todos los procesos llegan al mismo tiempo, haciendo que A llegue primero, que B y C llegan $10$ segundo después, entonces volvemos a tener el mismo problema $$ T_\text{around} = \frac{(100 - 0) + (110 - 10) + (120 - 10)}{3} = 103.33 $$Esta política es [[Preemptive|non-preemptive]]