---
dia: 2024-12-24
etapa: empezado
referencias:
  - "700"
tags:
  - ingeniería-en-informática/algo-1/Punteros
  - ingeniería-electrónica/algo-1/Punteros
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - nota/facultad
  - curso/introduction-to-algorithms/Introduction
aliases:
  - Operador de Dirección#^operador-direccion
  - Operador de Indirección#^operador-indireccion
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En muchos [[Lenguaje de programación|lenguajes de programación]] existe un [[Tipo de dato|tipo de dato]] que almacena exclusivamente [[Dirección de memoria|direcciones de memoria]], este tipo de dato se denomina puntero. Cabe destacar que la utilización de punteros agrega un nivel de complejidad al programa que se está desarrollando, ya que el programador debe controlar su uso

## En C
---
Se puede declarar una variable tipo puntero de la siguiente forma

```c
tipo_de_dato* nombre_del_puntero;
```

Notemos que como el puntero en si es un tipo de dato, esta definición es recursiva y se puede apuntar a un puntero

```c
tipo_de_dato** nombre_del_puntero;
```

### Ejemplos
---
Veamos ejemplos de la declaración

```c
int* puntero_entero;
float* puntero_punto_flotante;
int** puntero_a_puntero_entero;
```

### Operador de direccionamiento
---
El operador de dirección es un operador unario en [[Lenguaje C|C]] que devuelve la dirección del operado, este corresponde a `&` ^operador-direccion

```c
int entero = 3;
int* puntero_entero = &entero;
```

El operador de indirección devuelve el valor del objeto hacia el cual su operado apunta, dicho operando debe ser un puntero ^operador-indireccion

```c
int entero = 3;
int* puntero_entero = &entero;

int otro_entero = *puntero_entero;
// Donde entero == otro_entero
```
