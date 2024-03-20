---
dia: 2024-03-20
materia: señales
capitulo: 2
---
### Definición
---
Para [[Señal|señal]] en tiempo discreto y continuo las relaciones entrada-salida de los mismos están dadas por $$ y[n] = \sum_{k = -\infty}^{\infty} x[k] ~ h[n - k] = \sum_{k = -\infty}^{\infty} x[n - k] ~ h[k] $$ $$ y(t) = \int_{-\infty}^{\infty} x(\tau) ~ h(t - \tau) ~ d\tau = \int_{-\infty}^{\infty} x(t - \tau) ~ h(\tau) ~ d\tau $$
Es decir, con la [[Convolución|convolución]] entre $x[n]$ o $x(t)$ con la [[Representación de una señal mediante impulsos|representación mediante impulsos]] $h[n]$ o $h(t)$

Un [[Sistema|sistema]] en tiempo discreto o tiempo continuo se clasifica con memoria como ![[Memoria de un sistema#Definición]]
De esta forma podemos determinar como debe ser la [[Representación de una señal mediante impulsos|representación mediante impulsos]] debe ser $$ y[n] = K x[n], ~~ h[n] = K \delta[n] $$ $$ y(t) = K x(t), ~~ h(t) = K \delta(t) $$

Donde $K = 1$ tenemos los [[Sistema identidad|sistemas identidad]] en tiempo discreto y continuo