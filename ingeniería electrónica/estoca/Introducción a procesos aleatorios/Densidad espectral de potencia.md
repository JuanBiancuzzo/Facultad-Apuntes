---
dia: 2025-04-21
etapa: ampliar
referencias: []
aliases:
  - PSD
  - Power Spectral Density
  - Teormea de Wiener-Khinchin#^teo-6-1-1
tags:
  - carrera/ingeniería-electrónica/estoca/Introducción-a-procesos-aleatorios
  - nota/facultad
vinculoFacultad:
  - tema: Introducción a procesos aleatorios
    capitulo: 4
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Un modo de analizar estas variaciones es utilizando el [[Transformada de Fourier en tiempo discreto|análisis de Fourier]]. Consideremos primero la [[Potencia de una señal|potencia]] de una sola realización $x(n)$ en función de la [[Función periódica#Frecuencia|frecuencia]] $$ p(\omega) = \frac{1}{2N + 1} \left| \sum_{n = -N}^{N} x(n) ~ \exp(-j \omega n) \right|^2,~~~ -\frac{\pi}{2} \le \omega \le \frac{\pi}{2} $$

La densidad espectral de potencia (PSD) de un [[Proceso estocástico|proceso]] [[Proceso estacionario en sentido amplio|ESA]] $X(n)$ es $$ S_X(\omega) = \lim_{N \to \infty} E\left[ \frac{1}{2N + 1} \left| \sum_{n = -N}^{N} X(n) ~ \exp(-j \omega n) \right|^2 \right],~~~ -\frac{\pi}{2} \le \omega \le \frac{\pi}{2} $$

> [!teorema]+ Teorema 6.1.1 (Wiener-Khinchin) 
> La [[Densidad espectral de potencia|PSD]] de un [[Proceso estocástico|proceso]] [[Proceso estacionario en sentido amplio|ESA]] $X(n)$ coincide con la [[Transformada de Fourier|transformada de Fourier]] de su [[Correlación cruzada#^def-5-3-3|función de autocorrelación]] $$ S_X(\omega) = \mathcal{F}\set{ R_X } = \sum_{\tau = -\infty}^{\infty} R_X(\tau) ~ \exp(-j \omega \tau) $$
> 
> > [!demostracion]- Demostración
> > Empezando $$ \begin{align} 
> >     S_X(\omega) &= \lim_{N \to \infty} E\left[ \frac{1}{2N + 1} \left| \sum_{n = -N}^{N} X(n) ~ \exp(-j \omega n) \right|^2 \right] \\
> >      &= 
> > \end{align} $$
^teo-6-1-1

Este teorema provee una herramienta sensilla para computar la PSD de cualquier proceso ESA. Por otro lado, tenemos $$ R_X(\tau) = \mathcal{F}^{-1}\set{S_X} = \frac{1}{2\pi} \int_{\mathbb{R}} S_X(\omega) ~ \exp(j \omega \tau) ~ d\omega $$

## Observaciones
---
Notemos que $\sum_{n = -N}^{N} x(n) ~ \exp(-j \omega n)$ es la [[Transformada de Fourier en tiempo discreto|transformada de Fourier en tiempo discreto]] de la [[Señal|señal]] $x(n)$. El cuadrado del módulo es la [[Energía de una señal|energía de la señal]]

Se obtiene la potencia al dividir por la cantidad de [[Muestra|muestras]] $2N + 1$, y esta $p(\omega)$ es la potencia contenida en el intervalo $[\omega,~ \omega + d\omega]$. Por eso se llama densidad de potencia
