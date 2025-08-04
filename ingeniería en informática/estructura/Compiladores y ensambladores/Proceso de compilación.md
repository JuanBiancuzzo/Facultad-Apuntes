---
dia: 2024-08-29
tags:
  - carrera/ingeniería-electrónica/embebidos/Diseño-desarrollo-y-depuración
  - carrera/ingeniería-electrónica/estructura/Compiladores-y-ensambladores
  - carrera/ingeniería-en-informática/estructura/Compiladores-y-ensambladores
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/embebidos/Diseño, desarrollo y depuración/Resumen.md]]"
  - "[[ingeniería en informática/estructura/Compiladores y ensambladores/Resumen.md]]"
---
# Definición
---
El compilador se encarga del proceso de compilación que se divide en diferentes faces
* Preprocesador: El preprocesador modifica el código de fuente original de un [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]], de acuerdo a las [[Directivas de ensamblador|directivas]]. El resultado de este [[Proceso|proceso]] es otro programa
* [[Compilador|Compilación]]: El [[Lenguaje|lenguaje]] de alto nivel compilado en [[Lenguaje assembler|código assembly]]
* [[Ensamblador|Ensamblador]]: Este código de alto nivel luego es traducido a [[Código de máquina|código de máquina]]
* [[Linker|Linker]]: El linker se encarga de unir los distintos módulos de nuestro [[ingeniería en informática/sisop/La abstracción de proceso/Programa|programa]] ([[Biblioteca|Bibliotecas]])
* [[Loader|Loader]]: El programa se carga en [[Memoria|memoria]] para luego ejecutarse