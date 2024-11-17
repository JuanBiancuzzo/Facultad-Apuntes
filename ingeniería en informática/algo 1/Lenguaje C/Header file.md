---
dia: 2024-10-09
tags:
  - ingeniería-en-informática/algo-1/Lenguaje-C
  - nota/facultad
  - lenguajes-de-programación/lenguaje-c
  - ingeniería-electrónica/algo-1/Lenguaje-C
aliases:
  - Archivo de cabecera
---
# Definición
---
Se denomina archivo de cabecera o header file, en el ámbito de los [[Lenguaje C|lenguaje de programación C]] y C++, al archivo, normalmente en forma de código fuente, que el compilador incluye de forma automática al procesar algún otro archivo fuente. Es típico y muy común que los programadores especifiquen la inclusión de los header files por medio de pragmas al comienzo de otro archivo fuente

Un header file contiene, normalmente, una declaración directa de subrutinas, variables, u otros identificadores. Aquellos programadores que desean declarar identificadores estándares en más de un archivo fuente pueden colocar esos identificadores en un único header file, que se incluirá cuando el código que contiene sea requerido pro otros archivos

## Ejemplo
---
Tenemos un archivo `main.c` donde queremos hacer operaciones aritméticas, pero como queremos que estén disponibles para otros archivos vamos a crear un header file (también referido como `.h`)  que llamaremos `aritmetica.h`, que tenga [[Función#Expresión en C|firma de funciones]] para sumar dos [[Representación de enteros|enteros]] 

```c
#ifndef ARITMETICA_H
#define ARITMETICA_H

int sumar(int numero_uno, int numero_dos);

#endif /* ARITMETICA_H */
```

Usamos las [[Macro|macros]] `#ifndef ARITMETICA_H` y `#define ARITMETICA_H` para no incluir este archivo más de una vez en el proceso de [[Linker|linkeo]] 

En la implementación, vamos a crear un archivo llamado `aritmetcia.c` (cabe aclarar que no necesariamente tiene que tener el mismo nombre que el `.h` pero es una buena convención) 

```c
#include "aritmetcia.h"

int sumar(int primero, int segundo) {
    return primero + segundo;
}
```

Notemos que la función tiene otros nombres para los parámetros, eso no afecta al funcionamiento ya que la firma de la función solo le importa los [[Tipo de dato|tipos de datos]]

Por último, veamos el `main.c` donde lo vamos a usar

```c
#include <stdio.h>
#include "aritmetica.h"

int main() {
    int suma = sumar(2, 3);
    printf("La suma es: %d\n", suma);

    return 0;
}
```

Notemos que incluimos el `.h` y no la implementación, ya la implementación se vincula en el proceso de linkeo