---
dia: 2024-06-03
aliases:
  - Timeout
  - RTO
tags:
  - carrera/ingeniería-electrónica/redes/Capa-de-Transporte
  - carrera/ingeniería-en-informática/redes/Capa-de-Transporte
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/redes/Capa de Transporte/Resumen.md]]"
---
# Definición
---


## Estimación
---
El $\text{SampleRTT}$ se calcula para un [[Paquete|segmento]] como el tiempo entre su envío y su confirmación. La mayoría de las implementaciones calculan uno a la vez

El calculo del RTT es a partir de un promedio, ya que la [[Red|red]] produce fluctuaciones en el valor real, por eso usando un calculo iterativo de la siguiente forma $$ \text{EstimatedRTT}(n + 1) = (1 - \alpha) ~ \text{EstimatedRTT}(n) + \alpha ~ \text{SampleRTT} $$
Donde para $\text{EstimatedRTT}(0) = \text{SampleRTT}$, y $\alpha$ tiene un valor típico de $\frac{1}{8}$

Este promedio es llamado [[Exponential weighted moving average|exponential weighted moving average]], le da más peso a las muestras más recientes. Por otro lado, también aporta valor considerable calcular la [[Varianza|variabilidad]] del RTT, utilizando la siguiente fórmula $$ \text{DevRTT}(n + 1) = (1 - \beta) ~ \text{DevRTT}(n) + \beta ~ \lvert \text{SampleRTT} - \text{EstimatedRTT(n)} \rvert $$
Donde el valor estimado de $\beta$ es de $\frac{1}{4}$

Finalmente, calculamos el intervalo de la siguiente forma $$ \text{TimeoutInterval}(n) = \text{EstimatedRTT}(n) + 4 ~ \text{DevRTT} $$

Estamos suponiendo que la red esta regido por un [[Proceso puntual de Poisson|proceso puntual de Poisson]], aunque realmente no lo sea