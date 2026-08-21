---
dia: 2026-08-20
etapa: empezado
referencias: []
aliases: 
  - Locomoción terrestre por ruedas#Ruedas
  - Rueda fija#^fija
  - Rueda direccional#^direccional
  - Rueda giratoria#^giratoria
  - Rueda omnidireccional#^omni
  - Rueda mecanum#^macanum
tags:
  - carrera/ingeniería-electrónica/robótica-móvil/Locomoción
  - nota/facultad
vinculoFacultad:
  - tema: Locomoción
    capitulo: 2
    materia: Robótica móvil
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El tipo de [[ingeniería electrónica/robótica móvil/Locomoción/Locomoción|locomoción]] depende del tipo de entorno de operación, objetivo de la misión y las limitaciones del diseño

Donde las ruedas pueden dar poca eficiencia en terrenos blandos, y tienen menos fuerza de control, pero necesitan una menor cantidad de [[investigación/animation/Grado de libertad|DOF]] y una mayor eficiencia energética

Por otro lado, utilizar patas, tiene una mayor robustez a tipos de terreno y una mayor fuerza de control, pero requieren mayor cantidad de DOF y son peores energéticamente

## Ruedas
---
Existen distintos tipos de rueda
* Fija ^fija
	* Esta rueda permite el movimiento en la dirección fijada
* Direccional ^direccional
	* Similar a la rueda fija, pero con la posibilidad de giral la dirección
* Giratoria ^giratoria
	* A diferencia de la direccional, donde en general se controla el movimiento de la rueda, esta sigue el movimiento sin imponer resistencia a la rotación
* Omnidireccional ^omni
	* Permite transladarse en cualquier direccion, donde impone una menor resistencia paralelo u ortogonal a la misma
* Mecanum ^macanum
	* Permite transladarse en cualquier dirección, sin poner resistencia a ninguna dirección

![[ingeniería electrónica/robótica móvil/Locomoción/img/Tipos de ruedas.png|600]]

También existen distintas configuraciones
* [[Robot diferencial|Diferencial]]
* [[Robot skid-steer|Skid-steer]]
* [[Robot triciclo|Triciclo]]
* [[Robot Ackermann|Ackermann]]
* [[Robot omni-wheel|Omni-wheel]]
* [[Robot mecanum|Mecanum]]