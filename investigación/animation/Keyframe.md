---
dia: 2024-10-05
etapa: terminado
referencias:
  - "23"
  - "342"
tags:
  - nota/investigacion
  - investigación/animation
  - investigación/game-engine/Animation-Engine
aliases:
  - Curvas de interpolación entre keyframes
  - Fotograma clave
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Durante la compresión de un vídeo, el Key Frame (en español: "fotograma clave"), es aquel fotograma que se toma como referencia con el fin de solo almacenar dicho fotograma y a partir de ese almacenar los cambios de los siguientes fotogramas en referencia al primero. De ese modo, se ahorra mucho espacio de almacenaje<sup><a href="#ref-342" style="color: inherit; text-decoration: none;">[342]</a></sup> 

## Curvas de interpolación
---
Esta representa como se mueve de un keyframe a otro, permitiéndonos controlar la velocidad y aceleración del objeto controlado por el keyframe

En general es una [[Función|función]] $f:~ [0,~1] \to \mathbb{R}$ donde tiene la condición que $f(0) = 0$ y $f(1) = 1$, donde si la función es $0$ representa el keyframe inicial, y $1$ el keyframe final, por lo que estas condiciones imponen que empecemos en el keyframe inicial y terminemos en el keyframe final


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```