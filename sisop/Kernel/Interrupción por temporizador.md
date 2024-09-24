---
dia: 2023-11-15
tags:
  - sisop/Kernel
  - nota/facultad
  - embebidos/Estrategias-de-control-de-periféricos
aliases:
  - Timer
---
# Definición
---
Para que el [[Kernel|Kernel]] pueda tomar el control de la [[Computadora|computadora]] debe haber algún mecanismo que periódicamente le permita al kernel desalojar el [[Proceso|proceso]] de [[User mode|usuario]] en ejecución y volver a tomar el control del [[Procesador|procesador]], y así de toda la máquina

En la actualidad todos los procesadores poseen un mecanismo de [[Hardware|hardware]] llamada hardware counter, el cual puede ser seteado para que luego del transcurso de un determinado tiempo el procesador sea interrumpido. Cada procesador posee su propio timer

Cuando una [[Interrupción|interrupción]] por tiempo ocurre, el proceso de [[User mode|modo usuario]] que se esté ejecutando le transfiere el control al Kernel ejecutándose en [[Kernel mode|modo kernel]]. De esta forma el kernel asegura el uso del procesador

El reseteo del timer es una [[Instrucción privilegiada]] que puede ser utilizada en modo kernel