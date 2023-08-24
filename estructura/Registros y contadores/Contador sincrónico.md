---
dia: 2023-04-29
materia: estructura
capitulo: 7
---
### Definición
---
Los [[Contador|contador]] [[Circuito sincrónico|sincrónico]] tiene todas las propiedades de un contador, encadenando $n$ [[Flip-Flop T sincrónico|flip-flop T sincrónicos]] nos permite contar hasta $2^n$ este siendo su [[Módulo de un contador|módulo]]. Como ejemplo veamos un contador de $4$ bits

![[Contador sincrónico de 4 bits.png|550]]

Recordemos que podemos usar un [[Flip-Flop JK sincrónico|flip-flop jk sincrónico]] como [[Flip-Flop T sincrónico|flip-flop T sincrónicos]] cuando $J = K$. 

Vemos que es un poco más complejo que el [[Contador asincrónico]], pero tiene la ventaja que el tiempo en contar siempre es el mismo independientemente de cuantos flip-flop se esten usando.