---
dia: 2024-04-16
capitulo: 5
tags:
  - señales/Muestreo-e-Interpolación
  - nota
---
### Definición
---
Sea $x_c(t)$ una [[Señal de banda limitada|señal de banda limitada]] a partir de un $W$, queda determinada en forma única por las [[Muestreo|muestras]] $x(n) = x(nT), ~ n \in \mathbb{Z}$ si el periodo de muestreo $T$ satisface $$ \omega_s = \frac{2\pi}{T} > 2W, ~~~ T < \frac{\pi}{W} $$ donde $\omega_s = 2W$ se denomina frecuencia de Nyquist

#### Tiempo discreto
---
Sea $x(n)$ una señal de banda limitada, queda determinada en forma única por las muestras $x(n ~ N)$, $n \in \mathbb{Z}$ si la tasa de muestreo $N$ satisface $$ \Omega_s = \frac{2\pi}{N} > 2W, ~~~ N < \frac{\pi}{W} $$
#### Aclaraciones
---
* Notar que la frecuencia de muestreo $\omega_s\big|\Omega_s$ tiene que ser estrictamente mayor a $2W$. Muchas veces el resultado del teorema es cierto con $\omega_s\big|\Omega_s = 2W$ pero otras veces no
  
* Este teorema revela una condición suficiente para reconstruir una señal de banda limitada a partir de sus muestras. Pero si uno impone más restricciones a la señal $x(t)$ el teorema puede dejar de ser condición necesaria, como la idea de [[Compressed sensing|compressed sensing]]
  
* El teorema se puede extender fácilmente a señales de varias variables

