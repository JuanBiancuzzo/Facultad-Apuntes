---
dia: 2023-01-22
tags:
  - analisis-2/Capitulo-4
  - nota/facultad
---
### Definición
---
Dado un campo escalar $f : D \subset \mathbb{R}^n \to \mathbb{R}$ con $n > 1$ con $f \in C^k(E(\vec{A}))$, para todo $\vec{A} + \vec{H} \in E(\vec{A})$ puede expresarse 

$$ f(\vec{A} + \vec{H}) \approx f(\vec{A}) + \bigg[ \sum_{i = 1}^k \frac{d^if(\vec{A}, \vec{H})}{i!} \bigg] \text{ con } \vec{H} \in E(\vec{0}) $$

Donde interpretamos $\vec{H}$ cerca de $\vec{0}$, pero si reemplazamos:

$$ \vec{X} = \vec{A} + \vec{H} \to \vec{H} = \vec{X} - \vec{A},  \text{ con } \vec{X} \text{ cercano a } \vec{A} $$

Esto hace que lo escribamos como

$$ f(\vec{X}) \approx f(\vec{A}) + \bigg[ \sum_{i = 1}^k \frac{d^if(\vec{A}, \vec{X} - \vec{A})}{i!} \bigg] \text{ con } \vec{X} \in E(\vec{A}) $$

Donde $d^if(\vec{A}, \vec{X} - \vec{A})$, con $\vec{A} = (a_1, \cdots, a_n)$, $\vec{X} = (x_1, \cdots, x_n)$, se calcula 

$$ d^if(\vec{A}, \vec{X} - \vec{A}) = \bigg[ \frac{\partial}{\partial x_1} (x_1 - a_1) + \cdots + \frac{\partial}{\partial x_n} (x_n - a_n) \bigg]_{f(\vec{A})}^{(i)} \text{ con } i = 1, \cdots, k $$

## Caso especifico
#### Polinomio de Taylor de 2º orden
![[Formula de Taylor de segundo orden#Caso especifico]]


#### Propiedad 
El polinomio $p_j(\vec{X})$ que permite expresar $f(\vec{X}) \approx p_j(\vec{X})$ con $\vec{X} \in E(\vec{A})$ 

 * $p_j(\vec{A}) = f(\vec{A})$
 * Hasta el orden $j$ inclusive, las [[Derivada parcial]] de $p_j$ en $\vec{A}$ son iguales a las correspondientes derivadas parciales de $f$ en dicho punto