---
dia: 2023-04-29
materia: estructura
capitulo: 7
---
### Definición
---
Tienen la capacidad de guardar información, y su estructura se conforma por $n$ [[Flip-Flop D sincrónico|flip-flop operando sincrónicamente]] y [[Compuerta|compuertas lógicas]].

Veamos un ejemplo con [[Flip-Flop D sincrónico|flip-flop d sincrónicos]]
![[Registro con flip-flop D sincrónico.png|550]]

Este [[Circuito secuencial]] nos permite guardar 4 bits de información cada vez que se active el reloj.

A diferencia de los [[Registro de desplazamiento|registros de desplazamiento]], es decir en serie, estos registros nos permiten leer la información en paralelo, es decir que leemos todos los bits al mismo tiempo.

Este tipo de registro permite reducir el costo en tiempo para la comunicación, en intercambio por los cables adicionales que se necesitan.