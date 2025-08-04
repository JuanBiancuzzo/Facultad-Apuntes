---
dia: 2023-11-12
tags:
  - carrera/ingeniería-en-informática/sisop/Concurrencia
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/sisop/Concurrencia/Resumen.md]]"
---
# Definición
---
El [[Thread]] [[Scheduler]] se encarga de hacer los cambios de thread de forma transparente, para que el programador no tenga que preocuparse de cuando éste debe ser suspendido o no.

Por ende, los threads proveen un [[Modelo]] de ejecución en el cual cada thread corre en un [[Procesador virtual]] dedicado con una velocidad variable e impredecible. Esto quiere decir que desde el punto de vista del thread cada instrucción se ejecuta inmediatamente una detrás de otra. Pero el que decide cuando se ejecuta es el thread scheduler.