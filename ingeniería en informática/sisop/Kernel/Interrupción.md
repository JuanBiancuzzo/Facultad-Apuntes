---
dia: 2023-11-15
tags:
  - nota/facultad
  - carrera/ingeniería-electrónica/embebidos/Microcontroladores-de-32-bits
  - carrera/ingeniería-electrónica/embebidos/Estrategias-de-control-de-periféricos
  - carrera/ingeniería-en-informática/sisop/Kernel
aliases:
  - Excepción
---
# Definición
---
Una interrupción es una [[Señal|señal]] asincrónica enviada hacia el [[Procesador|procesador]] de que algún evento ha sucedido y pueda requerir de la atención del mismo

Las fuentes de posibles interrupciones de [[Hardware|hardware]] son todas las interfaces programables a las que sirve el procesador; por ejemplo, una interfaz serie que está lista para enviar o recibir un datos, un cambio de nivel de [[General Purpose Input Output|GPIO]], un [[Paquete|paquete]] de datos que se recibe en una [[Red|red]], un temporizador que detecta un tiempo específico, etc.

En general, el procesador necesita detectar e identificar la fuente de la interrupción para ir una pieza de [[Software|software]] adecuada para manejar la solitud y hacer algo con los datos asociados

El procesador está continuamente chequeando por si una interrupción se dispara. Si así es, este completa o detiene cualquier instrucción que se esté ejecutando y en vez de ejecutar la siguiente instrucción, el procesador guarda todo el [[Contexto del proceso|contexto]] en el que se estaba ejecutando la instrucción y comienza a ejecutar el manejador de esa interrupción en el [[Kernel|Kernel]]

El orden de prioridad de las interrupciones es
* Errores de la máquina
* [[Interrupción por temporizador|Timers]]
* Discos
* Networking devices
* Terminales
* Interrupciones de software

A las interrupciones también se les puede asignar un nivel de prioridad
* Esto significa que una interrupción de mayor prioridad puede interrumpir una interrupción de menor prioridad
* Esta acción da significado a la palabra "anidado" en el acrónimo [[Controlador de interrupción#Para ARM Cortex-M|NVIC]]
* Un [[Registro|registro]] de $8$ bits tiene niveles de prioridad de interrupción, lo que significa que puede haber un máximo de $256$ niveles de prioridad