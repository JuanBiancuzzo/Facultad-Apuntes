---
dia: 2023-11-12
materia: sisop
capitulo: 5
---
### Definición
---
Cada [[Thread]] debe tener una estructura que represente su estado. Esta estructura se denomina Thread Control Block. Se crea una entrada por cada thread. La TCB almacena el [[Thread#Estados de un thread|estado per-thread de un thread]]:
* El estado del Cómputo que debe ser realizado por el thread.

Para poder crear múltiples threads, pararlos y rearrancarlos. El [[Sistema operativo|sistema operativo]] debe poder almacenar en el TCB el estado actual del bloque de ejecución:
* El puntero al [[Stack]] del thread
* Una copia de sus registros en el procesador