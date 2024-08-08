---
dia: 2024-08-08
tags: 
 - discreta/Inducción
 - nota/facultad
---
### Definición
---
El principio de inducción fuerte se utiliza en situaciones donde la [[Principio de inducción|situación débil]] no es suficiente para una demostración Ambos son verdaderos, dado el [[Principio de inducción#Principio del Buen Orden|principio del buen orden]]

Sea $p(n)$ una proposición tal que para cada $n \in \mathbb{N}$ verifica:

- $\forall n:n_0 \leq n \leq n_0 +j,\  p(n)$ es verdadera
- $\forall k\geq  n_0 + j: p(i)$ es verdadera $\forall i \in [a, k] \to p(k+1)$ es verdadera

Entonces $p(n)$ es verdadera $\forall n \geq n_0$