---
dia: 2024-07-31
estado: Sin empezar
tags:
  - investigación/índice
  - investigación/ciencias-de-la-computación/compilador
  - nota/investigacion
aliases:
  - Compilador de una sola pasada#^compilador-pasadas
  - Compilador de múltiples pasadas#^compilador-pasadas
  - Compilador incremental#^interprete
  - Cross-Compilador#^cross-compilador
  - Interprete#^interprete
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a explorar como funciona un compilador, y nos vamos a basar en la serie 
* [Compiler Design](https://youtube.com/playlist?list=PLBlnK6fEyqRjT3oJxFXRgjPNzeS-LFY-q&si=cC-_dVkp4bY_VGsi)

## Resumen
---
#ingeniería-en-informática/sisop/La-abstracción-de-proceso #ingeniería-en-informática/algo-1/Introducción-a-la-programación #ingeniería-electrónica/algo-1/Introducción-a-la-programación
#ingeniería-en-informática/estructura/Compiladores-y-ensambladores #ingeniería-electrónica/estructura/Compiladores-y-ensambladores #ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración 
Hay distintos tipos de compiladores
* Compiladores de una sola pasada o múltiples pasadas  ^compilador-pasadas
    * Completa el procesa en uno o varios recorridos del programa fuente
* Compilador incremental o interpretes ^interprete
    * Compila línea por línea, no todo el programa
* Cross-Compilador ^cross-compilador
    * Compila para un sistema distinto al que se utiliza para compilar

## Proceso de compilación
---
1. Análisis léxico
    * Identifica palabras clave o identificadores y crea una tabla de símbolos
2. Análisis sintáctico
    * Interpreta que significa las instrucciones
3. Análisis semántico
    * Se analizan los atributos de los identificadores (tipo de símbolo)
4. Mapeo de acciones
    * Traduce las líneas de código en [[Lenguaje assembler|código assembly]]
5. Generación de código
    * Genera una archivo con el código assembly

Todos los pasos del proceso alteran y actualizan la tabla de símbolos

### Mapeo de acciones
---
Hay tres tipos de instrucciones
- Operaciones Aritmética-Lógicas
- Control de flujo del programa
- Movimiento de datos

Cuando es excedida la cantidad de registros, se utiliza el [[ingeniería en informática/sisop/Virtualización de memoria/Stack|stack]]. El compilador debe decidir que registros deben ser guardados en el stack. Esto afecta la eficiencia del código que genera

Las variables globales permanecen a lo largo del tiempo de ejecución del programa y se guardan en [[Memoria|memoria]]. Las variables locales se guardan en el stack

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarTemaInvestigacion", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/investigacion/biblioIndice', { indice: dv.current() });
```