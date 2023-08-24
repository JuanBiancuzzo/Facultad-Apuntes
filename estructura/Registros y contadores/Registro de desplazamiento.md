---
dia: 2023-04-29
materia: estructura
capitulo: 7
---
### Definición
---
A diferencia de los [[Registro|registros]] normales, es decir en paralelo, estos registros de desplazamiento nos permiten leer la información en serie, es decir que primero leemos un bit, después otro, y así sucesivamente hasta el último bit guardado.

Este tipo de registro permite reducir el costo en cables para la comunicación, en intercambio por el tiempo.

Veamos un ejemplo con [[Flip-Flop D sincrónico|flip-flop d sincrónicos]]
![[Registro de desplazamiento con flip-flop D sincrónico.png|550]]

Podemos pensarlo como la siguiente tabla
| Salida  | Memoria |
| ------- | ------- |
| $t = 0$ | $Q_3$   |
| $t = 1$ | $Q_2$   |
| $t = 2$ | $Q_1$   |
| $t = 3$ | $Q_0$        |
