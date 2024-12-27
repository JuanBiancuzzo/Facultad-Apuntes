---
dia: 2024-10-07
etapa: ampliar
referencias:
  - "24"
  - "320"
tags:
  - nota/investigacion
  - investigación/animation
  - investigación/game-engine/Animation-Engine
aliases:
  - Cinemáticas inversas
  - IK
  - Algoritmos de cinemáticas inversas#Algoritmos
  - Inverse kinematics algorithm#Algoritmos
  - IK algorithm#Algoritmos
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En [[investigación/animation/Animación|animación]] y en [[investigación/robótica/Robótica|robótica]], IK es un proceso matemático para calcular los parámetros de una unión entre huesos de un [[Skeleton for animation (Esquelo para animar)|esqueleto]] para que la cadena de huesos termine en el lugar deseado. Esto puede ser manipular un robot o el esqueleto de un personaje

Dado una posición, y orientación inicial, IK determina la posición y la orientación final para un punto especifico

## Soluciones analíticas
---
Una solución analítica a este problema es una expresión en forma cerrada que dado la pose final, devuelve la configuración para llegar a esa posición. Esta existe si los [[Grado de libertad|grados de libertad]] de la posición final, es menor a los grados de libertad que da la configuración

Como ejemplo, si se tiene un robot con $6$ grados de libertad, donde si se mueve en $3$ dimensiones, esto sería 3 grados de libertad por las $3$ [[Rotación|rotaciones]] y 3 grados de libertad por las $3$ [[Translación|traslaciones]], se podría encontrar una solución analítica. En el caso que el robot tenga $7$ grados de libertad, esta tendría infinitas soluciones y por lo tanto no existiría una solución analítica

## Algoritmos
---
Para el momento donde resolver el problema de forma analítica no es posible, se pueden resolver de forma iterativa. Cabe mencionar que en general, las soluciones dadas por estos [[Algoritmo|algoritmos]] no necesariamente van a dar soluciones localmente suaves entre dos posibles posiciones finales, es decir, la [[Función continua|función dada por el algoritmo no es continua]]  

Veamos algunos algoritmos para resolver el problema de IK
* [[FABRIK, A fast, iterative solver for the Inverse Kinematics problem de FABRIK, A fast, iterative solver for the Inverse Kinematics problem de Andreas Aristidou, Joan Lasenby|FABRIK]]
* [[Jacobian inverse technique|Jacobian inverse technique]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```