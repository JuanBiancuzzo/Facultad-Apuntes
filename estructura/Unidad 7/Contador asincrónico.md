---
dia: 2023-04-29
materia: estructura
capitulo: 7
---
### Definición
---
Los [[Contador|contador]] [[Circuito asincrónico|asincrónico]] tiene todas las propiedades de un contador, encadenando $n$ [[Flip-Flop T sincrónico|flip-flop T sincrónicos]] nos permite contar hasta $2^n$ este siendo su [[Módulo de un contador|módulo]]. Como ejemplo veamos un contador de $3$ bits

![[Contador asincrónico de 3 bits.png|550]]

Recordemos que podemos usar un [[Flip-Flop JK sincrónico|flip-flop jk sincrónico]] como [[Flip-Flop T sincrónico|flip-flop T sincrónicos]] cuando $J = K$. 

En este caso incluso $J = K = 1$ por lo que cada vez que llega la señal del reloj, entonces el flip-flop va a invertirse, y como estan encadenados, únicamente cuando se haga $0$ el flip-flop anterior el siguiente va a invertirse. Esto tiene la desventaja que los [[Contador sincrónico|contadores sincrónicos]] no tienen, que el tiempo en calcular el siguiente número aumenta con la cantidad de flip-flops que se utiliza.

También tengamos en cuenta que no necesariemente el clock tiene que ser pusos de un reloj, puede ser cualquier evento.
