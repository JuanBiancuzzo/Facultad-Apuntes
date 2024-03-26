---
dia: 2023-11-15
materia: sisop
capitulo: 1
---
### Definición
---
Para que el [[Kernel]] pueda tomar el control de la computadora debe haber algún mecanismo que periódicamente le permita al kernel desalojar el [[Proceso]] de [[User mode|usuario]] en ejecución y volver a tomar el control del [[Procesador|procesador]], y así de toda la máquina.

En la actualidad todos los procesadores poseen un mecanismo de [[Hardware]] llamada hardware counter, el cual puede ser seteado para que luego del transcurso de un determinado tiempo el procesador sea interrumpido. Cada [[Procesador|Procesador]] posee su propio timer.

Cuando una [[Interrupción|interrupción]] por tiempo ocurre, el proceso de [[User mode|modo usuario]] que se esté ejecutando le transfiere el control al [[Kernel]] ejecutándose en [[Kernel mode|modo kernel]]. De esta forma el kernel asegura el uso del procesador.

El reseteo del timer es una [[Instrucción privilegiada]] que puede ser utilizada en modo kernel.