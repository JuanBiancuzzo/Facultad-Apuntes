---
dia: 2024-08-28
tags: 
 - estructura/Sistema-ARC
 - nota/facultad
---
### Definición
---
Se tiene $34$ [[Registro|registros]], los primeros $32$ son registros de uso general, nombrados como %r$n$, donde $n$ va desde $0$ a $31$

Algunos de estos registros tienen una funcionalidad especial
* %r$0$ siempre se setea a $0$
* %r$14$ tiene la [[Dirección de memoria|dirección de memoria]] del [[Stack|stack]] pointer
* %r$14$ tiene la dirección de memoria de retorno de procedimiento

Los últimos dos registros son el registro [[Set instrucciones ARC|PSR]] y el registro PC, el cual guarda la dirección de la instrucción siendo ejecutada