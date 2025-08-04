---
dia: 2024-10-07
tags:
  - carrera/ingeniería-electrónica/algo-1/Lenguaje-C
  - carrera/ingeniería-en-informática/algo-1/Lenguaje-C
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - nota/facultad
  - nota/investigacion
aliases:
  - Estándar input
  - Std input
  - Scanf#^scanf
vinculoFacultad:
  - "[[ingeniería en informática/algo 1/Lenguaje C/Resumen.md]]"
---
# Definición
---
El [[Sistema operativo|SO]] realizará otras operaciones, varias de ellas relacionadas con operaciones de entrada de datos

## En C
---
Esta [[Función|función]] se utiliza para realizar operaciones de entrada. La misma recibe una cadena que determina el formato y una lista de variables o expresiones 

```c
int scanf(const char *format, ...);
```

^scanf

La cadena control o formato provee una descripción del formato de entrada de los datos. A este formato serán convertidos los datos ingresados en el dispositivo de entrada. Estos caracteres de especificación de formato se obtienen con marcadores determinados por caracteres de escape `%`

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

Otra forma de leer el stdin, es usando la siguiente función

```c
int getchar(void);
```

^getchar