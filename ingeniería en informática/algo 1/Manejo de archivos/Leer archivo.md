---
dia: 2025-02-10
etapa: ampliar
referencias: 
tags:
  - ingeniería-en-informática/algo-1/Manejo-de-archivos
  - ingeniería-electrónica/algo-1/Manejo-de-archivos
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c
  - nota/facultad
aliases:
  - fread
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta [[Función#Expresión en C|función]] de la [[Biblioteca|librería]] estándar de [[Lenguaje C|C]], con la [[Prototipo de función|firma]]

```c
/* Permite leer en un archivo de texto
 * 
 * ptr: Dónde debe guardar lo que va a leer
 * size: El tamaño de una unidad de eso que va a leer
 * nmemb: Cuántos elementos de esos va a leer
 * stream: El archivo donde debe leer
 * 
 * Devuelve cuántos elementos pudo leer
 */
size_t fread(void* ptr, size_t size, size_t nmemb, FILE* stream);
```


