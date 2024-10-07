---
dia: 2024-10-05
etapa: sin-empezar
referencias:
  - "23"
tags:
  - animation
  - nota/investigacion
aliases:
  - Curvas de interpolación entre keyframes
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---


## Curvas de interpolación
---
Esta representa como se mueve de un keyframe a otro, permitiéndonos controlar la velocidad y aceleración del objeto controlado por el keyframe

En general es una [[Función|función]] $f:~ [0,~1] \to \mathbb{R}$ donde tiene la condición que $f(0) = 0$ y $f(1) = 1$, donde si la función es $0$ representa el keyframe inicial, y $1$ el keyframe final, por lo que estas condiciones imponen que empecemos en el keyframe inicial y terminemos en el keyframe final


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```