---
dia: 2024-07-27
tags:
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - carrera/ingeniería-en-informática/algo-1/Lenguaje-C
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - nota/facultad
  - nota/investigacion
aliases:
  - Sentencia si sino
  - Sentencia if else
vinculoFacultad:
  - tema: Lenguaje C
    capitulo: 2
    materia: Algoritmos y programación 1
    carrera: Ingeniería en informática
---
# Definición
---
Esta [[Estructura de control selectiva|estructura de control selectiva]] alterar el flujo normal del [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] según se cumpla o no una determinada condición, esta dada por

```c
if (expresion) 
	accion1;
else
	accion2;
```

^e913a3

En su defecto utilizando un [[Bloque de acción|bloque de acciones]] 

```c
if (expresion) {
	accion1;
	accion2;
	// ...
} else {
	accion3;
	accion4;
	// ...
}
```