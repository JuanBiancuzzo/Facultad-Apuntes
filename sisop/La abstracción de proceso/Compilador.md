---
dia: 2023-11-12
tags:
  - sisop/La-abstracción-de-proceso
  - nota/facultad
  - algo-1/Introducción-a-la-programación
  - estructura/Compiladores-y-ensambladores
  - embebidos/Diseño-desarrollo-y-depuración
aliases:
  - Compilador de una sola pasada#^compilador-pasadas
  - Compilador de múltiples pasadas#^compilador-pasadas
  - Compilador incremental#^interprete
  - Cross-Compilador#^cross-compilador
  - Interprete#^interprete
---
### Definición
---
Hay distintos tipos de compiladores
* Compiladores de una sola pasada o múltiples pasadas  ^compilador-pasadas
    * Completa el procesa en uno o varios recorridos del programa fuente
* Compilador incremental o interpretes ^interprete
    * Compila línea por línea, no todo el programa
* Cross-Compilador ^cross-compilador
    * Compila para un sistema distinto al que se utiliza para compilar

#### Proceso de compilación
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

##### Mapeo de acciones
---
Hay tres tipos de instrucciones
- Operaciones Aritmética-Lógicas
- Control de flujo del programa
- Movimiento de datos

Cuando es excedida la cantidad de registros, se utiliza el [[Stack|stack]]. El compilador debe decidir que registros deben ser guardados en el stack. Esto afecta la eficiencia del código que genera

Las variables globales permanecen a lo largo del tiempo de ejecución del programa y se guardan en [[Memoria|memoria]]. Las variables locales se guardan en el stack