---
dia: 2024-04-19
materia: redes
capitulo: 2
aliases:
  - Puerto
---
### Definición
---
Cualquier [[Paquete|mensaje]] enviado de un [[Proceso|proceso]] a otro tiene que ir por medio de una [[Red|red]]. Un proceso que envía un mensaje a, o recibe un mensaje de, la interfaz de red que se llama socket. También se refiere una como una [[Aplicación Programming Interface|API]] a la interfaz entre una aplicación y la red

Se puede definir cada puerto con un número de $16$ bits, donde los primeros $1024$, es decir que desde $0$ a $1023$, son conocidos y ya utilizados. Esto se usa para implementar el [[Multiplexación y demultiplexación|servicio de multiplexing]]