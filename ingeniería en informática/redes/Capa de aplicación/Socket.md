---
dia: 2024-04-19
aliases:
  - Puerto
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-aplicación
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - carrera/ingeniería-en-informática/redes/Capa-de-aplicación
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-c/System-call/Intercomunicación-entre-procesos-system-call
  - nota/facultad
  - nota/investigacion
etapa: ampliar
---
# Definición
---
Cualquier [[Paquete|mensaje]] enviado de un [[Proceso|proceso]] a otro tiene que ir por medio de una [[Red|red]]. Un proceso que envía un mensaje a, o recibe un mensaje de, la interfaz de red que se llama socket. También se refiere una como una [[Aplicación Programming Interface|API]] a la interfaz entre una aplicación y la red

Se puede definir cada puerto con un número de $16$ bits, donde los primeros $1024$, es decir que desde $0$ a $1023$, son conocidos y ya utilizados. Esto se usa para implementar el [[Multiplexación y demultiplexación|servicio de multiplexing]]

## Primitivas
---
* [[Función socket del módulo Socket de System en C|Socket]]
* [[Función bind del módulo Socket de System en C|Bind]]
* [[Función listen del módulo Socket de System en C|Listen]]
* [[Función accept del módulo Socket de System en C|Accept]]
* [[Función connect del módulo Socket de System en C|Connect]]
* [[Función send del módulo Socket de System en C|Send]]
* [[Función receive del módulo Socket de System en C|Receive]]
* [[Función close del módulo Socket de System en C|Close]]

## Puertos conocidos
---
* 21: [[File Transfer Protocol|FTP]] 
* 22 [[Secure Shell|SSH]]
* 25 [[Protocolo para transferencia simple de correo|SMTP]]
* 80 [[Hypertext Transfer Protocol|HTTP]]
* 113 ident
* $123$ [[Network Time Protocol|NTP]]
* 143 [[Protocolo de acceso a mensajes de Internet|imap]] segura
* 443 [[Hypertext Transfer Protocol|HTTPS]]
* 587 submission