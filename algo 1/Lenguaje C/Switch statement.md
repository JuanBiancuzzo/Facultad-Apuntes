---
dia: 2024-07-27
tags:
  - nota/facultad
  - algo-1/Lenguaje-C
aliases:
  - Sentencia switch
  - Sentencia match
  - Sentencia según caso
---
### Definición
---
Esta [[Estructura de control selectiva|estructura de control]] surge debido situaciones en las cuales se deben realizar un bloque de acciones, o al menos una acción diferente, para cada valor/es posible/s de una [[Variable|variable]]. Lógicamente se podría seguir utilizando un if else o un if else if, pero el código rápidamente perdería claridad al repetir múltiples veces siempre la misma expresión.

```c
switch (variable) {
	case valor1: accion1; break;
	case valor2: accion2; break;
	// ...
	default: accionDefault;
}
```

^0380b8