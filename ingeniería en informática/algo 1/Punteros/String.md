---
dia: 2025-01-09
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/algo-1/Punteros
  - carrera/ingeniería-en-informática/algo-1/Punteros
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - nota/facultad
  - nota/investigacion
vinculoFacultad:
  - tema: Punteros
    capitulo: 3
    materia: Algoritmos y programación 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un string es un [[Array|array]] de caracteres, usada para representar texto

## En C
---
En el caso especifico de [[Lenguaje C|C]], se usa los [[Representación de un caracter|carácter]] dado por la [[Tabla ASCII|tabla ASCII]], y se lo dice [[NULL|null]] terminated ya que el vector define cuando termina con el carácter null (`'\0'`) 

Podemos construirlo como cualquier vector, teniendo en cuenta que muchas funciones de la [[ingeniería en informática/algo 1/Lenguaje C/Biblioteca|librería]] estándar espera que el string termine con ese carácter

```c
char string[5] = { 'H', 'o', 'l', 'a', '\0' };
```

Ahora C tiene formas más simples de crearlo, como la siguiente

```c
char string[5] = "Hola";
```

Notemos que sigue siendo de tamaño $5$ ya que se incluye el `'\0'` 

### Biblioteca estándar para strings
---
* `size_t strlen(const char* str)`
* `int strcmp(const char* str_left, const char* str_right)`
* `int strncmp(const char* str_left, const char* str_right, size_t n)`
    * Permite tener la seguridad que no se va a sobrepasar de la cantidad `n` 
* `char* strcpy(char* dest, const char* src)`
* `char* strncpy(char* dest, const char* src, size_t n)`
    * Permite tener la seguridad que no se va a sobrepasar de la cantidad `n` 