---
dia: 2024-10-07
tags:
  - ingeniería-en-informática/algo-1/Lenguaje-C
  - nota/facultad
  - lenguajes-de-programación/lenguaje-c
aliases:
  - Estándar output
  - Std output
  - Printf
---
# Definición
---
El [[Sistema operativo|SO]] realizará otras operaciones, varias de ellas relacionadas con operaciones de salida de datos

## En C
---
Esta [[Función|función]] se utiliza para realizar operaciones de salida. La misma recibe una cadena que determina el formato y una lista de variables o expresiones 

```c
int printf(const char *format, ...);
```

La cadena de formato provee una descripción de la salida. Dicha cadena posee dos tipos de caracteres, los caracteres comunes, que serán impresos tal cual en el dispositivo de salida, y los caracteres de especificación de formato con marcadores determinados por caracteres de escape `%`

Estos especificadores de formato se asignan según la localización relativa y el tipo de salida que la función debe producir. La lisa de variables o expresiones proporcionan los valores a escribir, teniendo en cuenta su orden relativo

| Formateador | Salida                                      |
| ----------- | ------------------------------------------- |
| `%d` ó `%i` | Entero en base $10$ con signo               |
| `%u`        | Entero en base $10$ sin signo               |
| `%o`        | Entero en base $8$ sin signo                |
| `%x`        | Entero en base $16$ sin signo, en minúscula |
| `%X`        | Entero en base $16$ sin signo, en mayúscula |
| `%f`        | Coma flotante decimal de precisión simple   |
| `%lf`       | Coma flotante decimal de precisión doble    |
| `%e`        | La notación científica                      |
| `%E`        | La notación científica                      |
| `%c`        | Caracter                                    |
| `%s`        | Cadena de caracteres (String)               |
