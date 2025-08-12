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
aliases:
  - fwrite
vinculoFacultad:
  - tema: Manejo de archivos
    capitulo: 4
    materia: Algoritmos y programación 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Esta [[Función#Expresión en C|función]] de la [[ingeniería en informática/algo 1/Lenguaje C/Biblioteca|librería]] estándar de [[Lenguaje C|C]], con la [[Prototipo de función|firma]]

```c
/* Permite escribir en un archivo de texto
 * 
 * ptr: De dónde sale lo que va a escribir
 * size: El tamaño de una unidad de eso que va a escribir
 * nmemb: Cuántos elementos de esos va a escribir
 * stream: El archivo donde debe escribir
 * 
 * Devuelve cuántos elementos pudo escribir
 */
size_t fwrite(const void* ptr, size_t size, size_t nmemb, FILE* stream);
```
