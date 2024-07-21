---
dia: 2024-05-15
capitulo: 6
aliases:
  - FFT
  - Transformada Rápida de Fourier
tags:
  - señales/Transformada-discreta-de-Fourier
---
### Definición
---
La FFT es un [[Algoritmo|algoritmo]] para computar la [[Transformada Discreta de Fourier|DFT]] con una [[Complejidad computacional|complejidad computacional]] de $O(n ~ \log n)$ 

Al observar la matriz $W$ ![[Serie discreta de Fourier#^eb7ec0]] 
Podemos ver que la misma presenta mucha simetría. Esta simetría puede ser explotada para reducir sustancialmente el cálculo de la DFT. De esta forma surgen los algoritmos FFT para el cálculo rápido de la DFT