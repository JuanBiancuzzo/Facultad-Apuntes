---
dia: 2025-02-10
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/algo-1/Manejo-de-archivos
  - carrera/ingeniería-en-informática/algo-1/Manejo-de-archivos
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - nota/facultad
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta [[Función#Expresión en C|función]] de la [[Biblioteca|librería]] estándar de [[Lenguaje C|C]], con la [[Prototipo de función|firma]]

```c
/* Permite moverse en un archivo
 * 
 * stream: El archivo donde debe leer
 * offset: El tamaño en bytes de nuestro movimiento
 * whence: Desde donde hacemos el movimiento
 * 
 * Devuelve 0 si pudo realizar el desplazamiento
 */
int fseek(FILE* stream, long offset, int whence);
```

