---
dia: 2024-07-27
tags:
  - nota/facultad
  - ingeniería-en-informática/algo-1/Lenguaje-C
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - ingeniería-electrónica/algo-1/Lenguaje-C
aliases:
  - Sentencia si sino
  - Sentencia if else
---
# Definición
---
Esta [[Estructura de control selectiva|estructura de control selectiva]] alterar el flujo normal del [[Programa|programa]] según se cumpla o no una determinada condición, esta dada por

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