---
dia: 2024-09-10
tags:
  - embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
  - embebidos/Microcontroladores-de-32-bits
aliases:
  - Controlador de interrupción vectorial anidado#Para ARM Cortex-M
  - NVIC#Para ARM Cortex-M
  - Non Maskable Interrupt#^NMI
  - Interrupción no enmascarable#^NMI
  - NMI#^NMI
---
### Definición
---
Un controlador de interrupciones es una unidad que recibe [[Interrupción|interrupciones]] externas y genera una [[Solicitud de interrupción|IRQ]] al [[Procesador|procesador]] 

![[Controlador de interrupciones.png]]

Esta conexión simplificada entre un controlador de interrupciones y el procesador. En el caso de interrupciones de [[Hardware|hardware]], se pueden generar $n$ solicitudes de interrupción externas

El controlador de interrupciones está asociado con un mecanismo que permite descubrir la solicitud de mayor prioridad, en forma de ID o identificador de solicitud de interrupción. Esta información a menudo se denomina vector. A veces, el [[Contador|contador]] de interrupciones se trata como un elemento interno del propio procesador; en otras [[Arquitectura del microprocesador|arquitecturas]] puede ser una interfaz programable bajo el control del procesador

#### Para ARM Cortex-M
---
En un [[ARM's Cortex-M|ARM Cortex-M]] se lo conoce como controlador de interrupción vectorial anidado (NVIC) cuyo propósito es gestionar excepciones 

![[NVIC.png]]

Una sola línea etiquetada como NMI significa interrupción no enmascarable y se utiliza para permitir que un periférico indique al NVCI que inicie incondicionalmente el proceso de interrupción ^NMI

El otro tipo de interrupción es el [[Solicitud de interrupción|IRQ]]. Por lo general, solo hay un NMI, pero hay muchas líneas IRQ que dependen de la capacidad del modelo NVIC específico