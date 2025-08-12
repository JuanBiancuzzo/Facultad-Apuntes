---
dia: 2023-09-04
tags:
  - carrera/ingeniería-en-informática/sisop/Kernel
  - nota/facultad
vinculoFacultad:
  - tema: Kernel
    capitulo: 1
    materia: Sistemas operativos
    carrera: Ingeniería en informática
---
# Definición
---
Es un mecanismo que proveen todos los [[Microprocesadores|procesadores]] y algunos microprocesadores modernos. Es una forma para separar las acciones que puede hacerse a nivel del metal. 

Dado que este mecanismo es proveído por el hardware cada instrucción a ser ejecutada el mismo chequea en que modo de operación se encuentra. Por lo que podemos diferenciar entre [[Instrucción privilegiada|instrucciones privilegiadas]]

Por lo que se protege la [[Protección de memoria|memoria]], los [[General Purpose Input Output|purtos de I/O]] y las posibilidad de ejecutar ciertas instrucciones.

Los modos más utilizados por los kernels son
* [[Kernel mode|Modo kernel]]
* [[User mode|Modo usuario]]