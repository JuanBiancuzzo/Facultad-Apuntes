---
dia: 2024-11-21
etapa: sin-empezar
orden: 520
referencias:
  - "608"
  - "611"
tags:
  - animation
  - nota/investigacion
aliases:
  - Linear Interpolation
  - Funciones de suavizado#Funciones de suavizado
  - Easing functions#Funciones de suavizado
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---


## Funciones de suavizado
---
Ver [easings.net](https://easings.net)

* [[EaseSine|EaseSine]]
* [[EaseQuad|EaseQuad]]
* [[EaseCubic|EaseCubic]]
* [[EaseQuart|EaseQuart]]
* [[EaseQuint|EaseQuint]]
* [[EaseCirc|EaseCirc]]
* [[EaseBack|EaseBack]]
* [[EaseElastic|EaseElastic]]
* [[EaseBounce|EaseBounce]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```