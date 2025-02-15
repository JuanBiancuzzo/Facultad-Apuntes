---
dia: 2024-07-28
tags:
  - ingeniería-en-informática/algo-1/Lenguaje-C
  - nota/facultad
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - ingeniería-electrónica/algo-1/Lenguaje-C
  - ingeniería-en-informática/algo-1/Punteros
  - ingeniería-electrónica/algo-1/Punteros
aliases:
  - Estructura
  - Registro
  - Typedef#Typedef
etapa: empezado
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Una estructura o un struct en [[Lenguaje C|C]] es un [[Tipo de dato compuesto|tipo de dato estructurado]], que define una lista de variables agrupadas físicamente bajo un mismo nombre en un bloque de [[Memoria|memoria]], permitiendo de esta forma que estas sean accedidas mediante la utilización de un único nombre

Un struct puede contener ya sea a otro tipos de datos estructurados como a [[Tipo de dato primitivo|tipos de datos primitivos]]. Se debe tener en cuenta que los structs permiten, al contrario de los [[Array|vectores]], agrupar variables de tipos de datos disimilares que guardan alguna relación entre sí

```c
struct un_nombre {
    tipo_1 campo_1;
    tipo_2 campo_2;
    tipo_3 campo_3;
    tipo_4 campo_4;
    // ...
};
```

Para inicializarlo existen dos formas de hacerlo

```c
struct punto {
    float x;
    float y;
};

// Donde se utiliza el orden para definir que valor se asigna a que variable
struct punto p = {1.1f, 2.3f}; 

// Donde se especifica a que variable va asignada
// Esto permite declararlas en distinto orden y ser más claro
struct punto q = {.y = 2.3f, .x = 1.1f};
```

Para usar y asignar a los campos del struct se logra de la siguiente manera
```c
#include <stdio.h>

struct punto {
    float x;
    float y;
};

int main() {
    struct punto p = {.x = 1.1f, .y = 2.3f};
    
    // Accediendo al campo "y" y usandolo para imprimirlo
    printf("%.1f", p.y);
    
    // Dando un nuevo valor al campo "x"
    p.x = 4.2f;
    
    return 0;
}
```

Estoy usando la [[Standard output#^printf|función Printf]] para imprimir el valor

## Typedef 
---
También es posible utilizar y declarar una estructura utilizando la [[Palabras reservadas del lenguaje#En C|palabra reservada de C]] `typedef`. Su función es asignar un nombre alternativo a tipos existentes

```c
// Declaración de una estructura
typedef struct fecha {
    unsigned short dia;
    unsigned short mes;
    unsigned int anio;
} fecha_t;

// Declaración de un dato ya existente
typedef char[9] documento_t;

// Declaración anticipada
typedef struct punto punto_t;

struct punto {
    float x;
    float y;
};
```

Por convención, se suele agregar el `_t` al nombre para decir que es un nombre modificado

## Uso de punteros
---
Cabe mencionar que en el lenguaje C, tiene una sintaxis especifica para el acceso de los campos de un [[Puntero|puntero]] a una estructura. Veamos un ejemplo para ilustrarlo y compararlo en como se haría de la forma sin esta sintaxis especial

```c
typedef struct punto {
    int x;
    int y;
} punto_t;

punto_t punto = { .x = 1, .y = 3 };
punto_t* ptr_punto = &punto;

// Forma sin sintaxis especial
(*ptr_punto).x = 8;

// Usando la sintaxis especifica
ptr_punto->x = 8;
```

Esto nos permite ser un poco más prolijos, evitando paréntesis innecesarios