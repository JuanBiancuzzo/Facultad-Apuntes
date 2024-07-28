---
dia: 2023-11-15
tags:
  - sisop/Kernel
  - nota
---
### Definición
---
Una interrupción es una señal asincrónica enviada hacia el [[Procesador|procesador]] de que algún evento externo ha sucedido y pueda requerir de la atención del mismo.

El procesador está continuamente chequeando por si una interrupción se dispara. Si así es, este completa o detiene cualquier instrucción que se esté ejecutando y en vez de ejecutar la siguiente instrucción, el procesador guarda todo el [[Contexto del proceso|contexto]] en el que se estaba ejecutando la instrucción y comienza a ejecutar el manejador de esa interrupción en el [[Kernel]].

El orden de prioridad de las interrupciones es
* Errores de la máquina
* [[Interrupción por temporizador|Timers]]
* Discos
* Networking devices
* Terminales
* Interrupciones de [[Software]]