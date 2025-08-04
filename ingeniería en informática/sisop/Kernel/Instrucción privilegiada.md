---
dia: 2023-09-04
tags:
  - carrera/ingeniería-en-informática/sisop/Kernel
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/sisop/Kernel/Resumen.md]]"
---
# Definición
---
Al tener [[Modo de operación del kernel|modos de operación]], y darle la capacidad de ejecutar instrucciones a un [[Subconjunto|subconjunto]] de los modos, hace que algunas instrucciones tengan privilegio.

Este conjunto de instrucciones sólo puede ser ejecutado en [[Modo de operación del kernel#Modo kernel|modo kernel]]

 * `LGDT`: Carga la [[Espacio de direcciones|dirección]] del GDT en GDTR
 * `LLDT`: Carga la dirección del LDT en LDTR
 * `LTR`: Carga el [[Registro de tarea|registro de tarea]] en TR
 * `MOVCR`: Copia la [[Información|información]] y la guarda en el [[Registro de control]]
 * `LMSW`: Carga un nuevo [[Estado de máquina|estado de máquina]] en WORD
 * `CLTS`: Limpia el [[Cambio de tarea|cambio de tarea]] en el [[Registro|registro]] de control CR0
 * `MOV`: Copiar y guardar [[Registro debug|registro debug]] en el registro de debug
 * `INVD`: Invalida el [[ingeniería en informática/sisop/Scheduling/Cache]] sin writeback
 * `INVLPG`: Invalida la entrada de TLB
 * `WBINVD`: Invalida el [[ingeniería en informática/sisop/Scheduling/Cache|cache]] con writeback
 * `HLT`: Para el [[Proceso|proceso]]
 * `RDMSR`: Leer el [[Registro de modelo especifico|registro de modelo especifico]]
 * `WRMSR`: Escribir el registro de modelo especifico
 * `RDPMC`: Leer el [[Contador|contador]] de rendimiento
 * `RDTSC`: Leer el contador de time stamp