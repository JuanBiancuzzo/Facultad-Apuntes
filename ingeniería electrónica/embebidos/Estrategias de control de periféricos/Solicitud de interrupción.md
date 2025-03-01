---
dia: 2024-09-10
tags:
  - carrera/ingeniería-electrónica/embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
aliases:
  - IRQ
---
# Definición
---
Es el producto de una [[Interrupción|interrupción]], y su configuración mínima requerida para administrar una IRC dentro de una interfaz programable es 

![[Configuración de solicitudes de interrupción mínima.png]]

Esta configuración se utiliza en la mayoría de las interfaces programables para generar una solicitud de interrupción física a un [[Procesador|procesador]]

Así, tenemos dos [[Registro|registros]] internos con un bit en cada uno
* Un evento en un registro de control, aqui llamado `Pl_Ctrl_Reg`, de la interfaz programable se activa cuando ocurre un evento de [[Hardware|hardware]]. El procesador puede leer este bit y, mediante polling, puede ver si se ha producido el evento asociado y cuándo
* El segundo registro, aquí llamado `IRQ_Ctrl_Reg`, tiene un bit (`bIRQ_Enable`) que se usa como máscara para permitir la activación física de una IRQ al procesador o a un [[Controlador de interrupción|controlador de interrupción]] intermedio si `bEvent` está activado

Este tipo de interrupción se puede enmascarar, lo que significa que el [[Controlador de interrupción#Para ARM Cortex-M|NVIC]] no tiene que responder inmediatamente a una IRQ si se ha establecido un bit de registro de IRQ de enmascaramiento correspondiente