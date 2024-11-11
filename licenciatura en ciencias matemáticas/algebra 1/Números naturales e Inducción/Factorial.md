---
dia: 2024-11-07
etapa: ampliar
referencias: 
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $n \in \mathbb{N}$. El factorial de $n$, que se nota $n!$, es el [[Números Naturales|número natural]] definido como $$ n! = n \cdot (n - 1) \cdots 2 \cdot 1 = \prod_{i = 1}^{n} i $$
Esta definición se extiende a $\mathbb{N_0}$ definido $0! = 1$

## Representación recursiva
---
Esta se puede expresar de forma [[Recursividad|recursiva]] de la siguiente forma de la siguiente forma

$$ n! = \begin{cases} 
    1 & \text{si} ~ n = 0 \\
    (n - 1)! ~ n & \text{si} ~ n > 0
\end{cases} $$

^5daa79

## Observación
---
Se puede probar por [[Principio de inducción|inducción]] que se tiene $$ \left( \frac{n}{3} \right)^n \le n! \le \left( \frac{n}{2} \right)^n, ~~~~ \forall n \ge 6 $$ una forma bastante precisa de ubicar el factorial entre dos potencias