---
dia: 2023-11-15
aliases:
  - Política de planificación FIFO
tags:
  - sisop/Scheduling
  - nota
---
### Definición
---
El algoritmo más básico para implementar como política de planificación es el First In, First Out. Ventajas:
1. Es simple
2. Es fácil de implementar
3. Funciona bárbaro para las [[Suposiciones en la planificación|suposiciones]]

#### Usando [[Métrica Turn Around de planificación|Turn around]]
---
Por ejemplo se tiene tres procesos A, B y C con $T_\text{arribo} = 0$ . Si bien llegan todos al mismo tiempo llegaron con un insignificante retraso de forma tal que llegó A, B y C. Si se asume que todos tardan $10$ segundos en ejecutarse
$$ T_\text{around} = \frac{10 + 20 + 30}{3} = 20 $$
Y si no suponemos que todas duran el mismo tiempo, donde A dura $100$ segundo $$ T_\text{around} = \frac{100 + 110 + 120}{3} = 110 $$
Dando el efecto convoy.

