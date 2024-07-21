---
dia: 2023-04-29
capitulo: 7
tags:
  - estructura/Registros-y-contadores
  - nota
---
### Definición
---
Para estos casos el [[Contador]] puede ser [[Contador sincrónico|sincrónico]] o [[Contador asincrónico|asincrónico]], se puede usar un [[Flip-Flop T sincrónico|flip-flop T sincrónicos]] como también un [[Flip-Flop JK sincrónico|flip-flop jk sincrónico]], pero donde las entradas de estos dependan de las salidas de los anteriores. 

Esto lo podemos hacerlo visualizando el [[Diagrama de estado]] donde cada esta representado con un valor de $n$ bits. Estableciendo una tabla que represente los cambios de estado, y después viendo como deben ser las entradas de los flip-flop correspondientes según el estado actual.

#### Ejemplo
Para entender la situación, en este caso contaremos hasta 6, entonces tendremos 7 estados que nos interesan, y un estado que no nos interesa. Usaremos [[Flip-Flop JK sincrónico|flip-flop jk sincrónico]] que es el caso más difícil de analizar. 

Los estados del $0$ al $7$ los representaremos con sus valores en binario, por lo que en total necesitaremos $3$ flip-flops que es lo mínimo para representar los 8 estados.

Al tener 3 flip-flop jk, y 3 respuestas de los flip flops, tendremos la siguiente tabla

| $Q^n_2$ | $Q^n_1$ | $Q^n_0$ |     | $Q^{n+1}_2$ | $Q^{n+1}_1$ | $Q^{n+1}_0$ |     | $J_2$ | $K_2$ |     | $J_1$ | $K_1$ |     | $J_0$ | $K_02$ |
| ------- | ------- | ------- | --- | ----------- | ----------- | ----------- | --- | ----- | ----- | --- | ----- | ----- | --- | ----- | ------ |
| 0       | 0       | 0       |     | 0           | 0           | 1           |     | 0     | x     |     | 0     | x     |     | 1     | x      |
| 0       | 0       | 1       |     | 0           | 1           | 0           |     | 0     | x     |     | 1     | x     |     | x     | 1      |
| 0       | 1       | 0       |     | 0           | 1           | 1           |     | 0     | x     |     | x     | 0     |     | 1     | x      |
| 0       | 1       | 1       |     | 1           | 0           | 0           |     | 1     | x     |     | x     | 1     |     | x     | 1      |
| 1       | 0       | 0       |     | 1           | 0           | 1           |     | x     | 0     |     | 0     | x     |     | 1     | x      |
| 1       | 0       | 1       |     | 1           | 1           | 0           |     | x     | 0     |     | 1     | x     |     | x     | 1      |
| 1       | 1       | 0       |     | 0           | 0           | 0           |     | x     | 1     |     | x     | 1     |     | 0     | x      |
| 1       | 1       | 1       |     | x           | x           | x           |     | x     | x     |     | x     | x     |     | x     | x      |

Ahora usando el [[Mapa de Karnaugh]] o el [[Algoritmo de Quine-McCluskey]] podemos encontrar el [[Circuito lógico|circuito]] necesario para conectar los flip-flops, recordando que las x son redundancias.