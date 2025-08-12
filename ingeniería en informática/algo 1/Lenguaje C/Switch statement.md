---
dia: 2024-07-27
tags:
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - carrera/ingeniería-en-informática/algo-1/Lenguaje-C
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - nota/facultad
  - nota/investigacion
aliases:
  - Sentencia switch
  - Sentencia match
  - Sentencia según caso
vinculoFacultad:
  - tema: Lenguaje C
    capitulo: 2
    materia: Algoritmos y programación 1
    carrera: Ingeniería en informática
---
# Definición
---
Esta [[Estructura de control selectiva|estructura de control]] surge debido situaciones en las cuales se deben realizar un bloque de acciones, o al menos una acción diferente, para cada valor/es posible/s de una [[Variable|variable]]. Lógicamente se podría seguir utilizando un if else o un if else if, pero el código rápidamente perdería claridad al repetir múltiples veces siempre la misma expresión.

## En C
---
```c
switch (variable) {
	case valor1: accion1; break;
	case valor2: accion2; break;
	// ...
	default: accionDefault;
}
```

^0380b8
