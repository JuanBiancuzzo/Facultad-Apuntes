---
dia: 2024-08-29
tags:
  - estructura/Compiladores-y-ensambladores
  - nota/facultad
  - embebidos/Diseño-desarrollo-y-depuración
---
# Definición
---
El compilador se encarga del proceso de compilación que se divide en diferentes faces
* Preprocesador: El preprocesador modifica el código de fuente original de un [[Programa|programa]], de acuerdo a las [[Directivas de ensamblador|directivas]]. El resultado de este [[Proceso|proceso]] es otro programa
* [[Compilador|Compilación]]: El [[Lenguaje|lenguaje]] de alto nivel compilado en [[Lenguaje assembler|código assembly]]
* [[Ensamblador|Ensamblador]]: Este código de alto nivel luego es traducido a [[Código de máquina|código de máquina]]
* [[Linker|Linker]]: El linker se encarga de unir los distintos módulos de nuestro [[Programa|programa]] ([[Biblioteca|Bibliotecas]])
* [[Loader|Loader]]: El programa se carga en [[Memoria|memoria]] para luego ejecutarse