---
dia: 2023-11-17
aliases:
  - Respuesta al impulso
tags:
  - señales/Sistemas-LTI
  - nota
---
### Definición
---
La respuesta en [[Función senoidal#Frecuencia|frecuencia]] de un [[Circuito eléctrico|circuito]] es la variación de su comportamiento al cambiar la frecuencia de la [[Señal|señal]], donde se define como $h(t)$

Si recordamos que una señal [[Función senoidal#Función periodica Periodo|periódica]] puede descomponerse en una suma de [[Función senoidal|senoides]] por la [[Serie de Fourier|serie de Fourier]] y la propiedad de [[Circuito lineal|linealidad de los circuitos]], entonces la respuesta en frecuencia brinda una descripción completa del circuito en estado estacionario.

#### Aplicando transformada de Fourier o de Laplace
---
Usando la [[Transformada de Fourier|transformada de Fourier]] o la [[Transformada de Laplace|Laplace]], se lo define como $H(j\omega)$ o $H(s)$ respectivamente, o en el [[Transformada de Fourier en tiempo discreto|caso discreto]] $H\left(e^{-j\omega}\right)$

* Notemos que si un [[Sistema lineal e invariante en el tiempo invertible estable|sistema LTI es estable]] siempre existe $H(s)$ $$ |H(s)| = \left| \int_{-\infty}^{\infty} h(t) \exp(-st) ~ dt \right| \le \int_{-\infty}^{\infty} |h(t) \exp(-st)| ~ dt = \exp(\mathcal{Re}(s)) \int_{-\infty}^{\infty} |h(t)| ~ dt < \infty $$