---
dia: 2024-10-11
etapa: terminado
referencias:
  - "343"
tags:
  - nota/investigacion
  - investigación/animation
  - investigación/game-engine/Animation-Engine
aliases:
  - Degrees of freedom
  - DOF
orden: 24
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un cuerpo aislado puede desplazarse libremente en un movimiento que se puede descomponer en 3 [[Rotación|rotaciones]] y 3 [[Translación|traslaciones]] geométricas independientes (traslaciones y rotaciones respecto de ejes fijos en las 3 direcciones de una base referida a nuestro espacio de tres dimensiones)

Para un cuerpo unido mecánicamente a otros cuerpos (mediante pares cinemáticos), algunos de estos movimientos elementales desaparecen. Se conocen como grados de libertad los movimientos independientes que permanecen

Más concretamente. los grados de libertad son el número [[Mínimo|mínimo]] de velocidades generalizadas independientes necesarias para definir el estado cinemático de un mecanismo o [[Sistema|sistema]] mecánico. El número de grados de libertad coincide con el número de ecuaciones necesarias para describir el movimiento

En mecánica clásica y [[Mecánica Lagrangiana|lagrangiana]], la dimensión d del espacio de configuración es igual a dos veces el número de grados de libertad $GL$, $d = 2 ~ GL$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```