---
dia: 2023-01-22
tags:
  - algebra-2/Transformaciones-lineales
  - nota/facultad
---
### Definición
---
Dados $a_0, a_1, \cdots, a_{n-1} \in \mathbb{K}$ y partiendo del [[Operador derivación|operación derivador]] se define como $L: C^\infty(\mathbb{R}, \mathbb{K}) \to C^\infty(\mathbb{R}, \mathbb{K})$ , como:

$$ L = D^n + a_{n-1} D^{n-1} + \cdots + a_1 D + a_0 I$$

Donde usamos [[Operador derivador de orden n|operador derivador de orden n]]

#### Proposición
---
Partiendo de un polinomio, tal que

$$ p(x) = (x-\lambda_1)(x-\lambda_2)\cdots(x-\lambda_n) $$

donde $\lambda_1, \lambda_2, \cdots, \lambda_n \in \mathbb{C}$ son las $n$ raices de $p$, entonces podemos escribir el operador $L$ tal que 

$$ L = (D-\lambda_1 I) \circ (D-\lambda_2 I) \circ \cdots \circ (D-\lambda_n I)$$