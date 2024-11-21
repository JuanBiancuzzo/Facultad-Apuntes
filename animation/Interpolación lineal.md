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

* [[EaseSine|EaseSine]] ![[EaseSine#^representacion]]
* [[EaseQuad|EaseQuad]] ![[EaseQuad#^representacion]]
* [[EaseCubic|EaseCubic]] ![[EaseCubic#^representacion]]
* [[EaseQuart|EaseQuart]] ![[EaseQuart#^representacion]]
* [[EaseQuint|EaseQuint]] ![[EaseQuint#^representacion]]
* [[EaseExpo|EaseExpo]] ![[EaseExpo#^representacion]]
* [[EaseCirc|EaseCirc]] ![[EaseCirc#^representacion]]
* [[EaseBack|EaseBack]] ![[EaseBack#^representacion]]
* [[EaseElastic|EaseElastic]] ![[EaseElastic#^representacion]]
* [[EaseBounce|EaseBounce]] ![[EaseBounce#^representacion]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```