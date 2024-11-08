---
dia: 2024-09-25
tags:
  - ingeniería-electrónica/embebidos/Estrategias-de-control-de-periféricos
  - nota/facultad
aliases:
  - ISR
  - Interrupt Service Routine
referencias:
  - "283"
---
# Definición
---
Un [[Controlador de interrupción|controlador de un dispositivo físico]] que recibe interrupciones registra una o varias rutinas de servicio de interrupción (ISR) para atender las interrupciones. El sistema llama al ISR cada vez que recibe esa interrupción<sup><a href="#ref-283" style="color: inherit; text-decoration: none;">[283]</a></sup> 

Este contiene todo el código necesario para procesar y completar cualquier acción que provocó la [[Interrupción|interrupción]] inicial

Un ISR suele ser un módulo de [[Software|software]] muy compacto diseñado para una sola tarea que respalda el dispositivo de interrupción. Hay una lista de direcciones para estos pequeños ISR almacenadas en una tabla de vectores

Sin embargo, hay una implementación en la que solo un ISR grande da servicio a muchas fuentes de interrupción, en ese caso, se emplea una técnica de sondeo para determinar la fuente exacta de la interrupción y utilizar solo esa parte del ISR grande para dar servicio al dispositivo de interrupción

Si en un [[General Purpose Input Output|GPIO]] esta conectado a varios dispositivos que pueden independientemente emitir su propia interrupción, como el GPIO solo tiene una dirección vectorial, le corresponde al software sondear todos los bits de activación del puerto para determinar qué bit está solicitando la interrución

Cualquier dato que se genere o modifique en un ISR debe almacenarse en ubicaciones de [[Memoria|memoria]] compartida globalmente, ya que de lo contrario no estará disponible para ningún otro módulo de software

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```