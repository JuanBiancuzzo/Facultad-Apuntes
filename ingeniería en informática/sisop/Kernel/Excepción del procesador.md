---
dia: 2023-11-15
tags:
  - carrera/ingeniería-en-informática/sisop/Kernel
  - nota/facultad
---
# Definición
---
Una forma de [[Kernel#De Modo usuario a Modo kernel|pasar de modo usuario a modo kernel]] es por un evento de [[Hardware]] causado por un [[ingeniería en informática/sisop/La abstracción de proceso/Programa]] de usuario. El funcionamiento es igual al de una [[Interrupción]]. 

Algunas excepciones son
* Acceder fuera de la [[Memoria]] del [[Proceso]]
* Intentar ejecutar una [[Instrucción privilegiada]] en [[User mode|modo usuario]]
* Intentar escribir en memoria de solo lectura
* Dividir por $0$