---
dia: 2023-09-04
tags:
  - sisop/Kernel
  - nota/facultad
---
# Definición
---
El indicador IOPL se encuentra en todas las [[Procesador|Procesador]] x86. Ocupa los bits 12 y 13 en el [[Registro]] FLAGS. En modo protegido y modo largo, muestra el nivel de [[Instrucción privilegiada|privilegio]] del [[Programa]] o [[Tarea]] actual.

El nivel de privilegio actual de la tarea o programa debe ser menor o igual que el IOPL para que la tarea o el programa acceda a los puertos.

El IOPL se puede cambiar usando POPF e IRET solo cuando el nivel de privilegio actual es [[Modo de operación#Modo kernel|Ring 0]]