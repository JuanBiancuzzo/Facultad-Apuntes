---
dia: 2024-10-07
etapa: sin-empezar
referencias:
  - "24"
  - "320"
tags:
  - animation
  - nota/investigacion
aliases:
  - Cinemáticas inversas
  - IK
  - Algoritmos de cinemáticas inversas#Algoritmos
  - Inverse kinematics algorithm#Algoritmos
  - IK algorithm#Algoritmos
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
En [[animation/Índice|animación]] y en [[Robótica|robótica]], IK es un proceso matemático para calcular los parámetros de una unión entre huesos de un [[Skeleton for animation (Esquelo para animar)|esqueleto]] para que la cadena de huesos termine en el lugar deseado. Esto puede ser manipular un robot o el esqueleto de un personaje

Dado una posición, y orientación inicial, IK determina la posición y la orientación final para un punto especifico

## Algoritmos
---
Para resolver este problema se implementaron distintos algoritmos para resolverlo, algunos son 
* [[FABRIK, A fast, iterative solver for the Inverse Kinematics problem de FABRIK, A fast, iterative solver for the Inverse Kinematics problem de Andreas Aristidou, Joan Lasenby|FABRIK]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```