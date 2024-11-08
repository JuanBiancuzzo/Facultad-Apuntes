---
dia: 2024-08-29
tags:
  - ingeniería-en-informática/estructura/Compiladores-y-ensambladores
  - nota/facultad
  - ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - ingeniería-electrónica/estructura/Compiladores-y-ensambladores
---
# Definición
---
Traduce el código Assembly, creado por el [[Compilador|compilador]], en [[Código de máquina|código de máquina]]

Es mucho más simple, ya que a cada [[Lenguaje assembler|instrucción de Assembly]], hay una relación $1$ a $1$ con el código de máquina. Simplemente traduce el código. A esta [[Función|función]] se la considera como transcodificación

También se ocupa de la representación simbólica para direcciones y constantes, También nos permite definir la ubicación del código. Además, provee cierto grado de aritmética en tiempo de ensamblado. Puedo utilizar variables declaradas en otros módulos y declarar macros

Muchas de las funciones del ensamblador se realizan a partir de las directivas del ensamblador. Indican al ensamblador como procesar una sección del [[Programa|programa]], son específicas del programa ensamblador

Algunas de estas directivas generan información en [[Memoria|memoria]]

## Proceso en dos pasadas
---
Consiste de tres pasos
1. Pre proceso
    * Expande las [[Instruction Set Architecture#Macros|macros]], registra las definiciones y las remplaza por el código correspondiente
2. Primera Pasada
    * Detecta identificadores y les asigna una posición de memoria, genera la tabla de símbolos
3. Segunda Pasada
    * Cada instrucción es convertida a código de máquina, los identificadores son remplazados por su ubicación en memoria, cada línea es procesada por completo antes de avanzar a la siguiente lineal. Genera el [[Archivo objeto|código objeto]] (código de máquina) y el listado (archivo de texto interpretado para ser interpretado por el programador)

El archivo objetó incluye un encabezamiento que contiene
* La dirección de la primera instrucción a ejecutar, si corresponde (`main`)
- Las bibliotecas externas que son utilizadas
- La tabla de símbolos externos y globales
- Además, incluye información sobre la relocalización del código

A la hora de incluir módulos externos, estos pueden se relocalizados para poder ser cargados en memoria correctamente. Es el ensamblador el encargado de marcar que direcciones son relocalizables y cuáles son absolutas. Esta información es necesaria para el [[Linker|linker]]

## Tabla de símbolos
---
Para generarla, el ensamblador recorre el archivo línea por línea, Incluye su nombre en la tabla. Al encontrarlos, les asigna un valor correspondiente.

Es una tabla que contiene el nombre de los símbolos, su dirección, si son extern o global, o si son relocalizables

No todos los símbolos son relocalizables, por ejemplo
* Direcciones de [[General Purpose Input Output|entrada/salida]]
* Rutinas del sistema