---
dia: 2023-04-09
materia: taller
capitulo: 4
---
### Definición
---
Dado un [[Proceso|proceso]] podemos describir su estado en el siguiente [[Grafo]]:
![[Estados de ejecución de un proceso.canvas]]

#### Estados
---
En una visión simplificada (una versión más compleja sería la de [[Estados de un proceso en Linux|estados en linux]]), un [[Proceso|proceso]] puede encontrarse en los siguientes estados
#### Running
---
El [[Proceso]] se encuentra corriendo en un [[Procesador|procesador]]. Está ejecutando instrucciones

#### Ready
---
En este estado el [[Proceso]] está listo para correr pero por algún motivo el [[Sistema operativo|SO]] ha decidido no ejecutarlo por el momento

#### Blocked
---
En este estado el [[Proceso]] ha ejecutado algún tipo de operación que hace que éste no esté listo para ejecutarse hasta que algún evento suceda
