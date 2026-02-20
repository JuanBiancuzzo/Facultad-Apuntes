---
dia: 2026-02-20
etapa: empezado
referencias: []
aliases:
  - Frequency Modulation
  - FM
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-Analógica
  - nota/facultad
vinculoFacultad:
  - tema: Modulación Analógica
    capitulo: 2
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Esta [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Modulación|modulación]] propone una portadora $p(t)$, donde el mensaje $m(t)$ modula el argumento de la portadora, haciendo que su frecuencia instantánea varíe linealmente con $m(t)$. Este tipo de modulación es no lineal

La portadora teniendo la forma de $p(t) = A ~ \cos(\omega_p ~ t + \theta_0(t))$ donde se define $$ \frac{d}{dt} \theta_0 = k_f ~ m(t) $$ donde $k_f$ es la constante moduladora

Por lo tanto la señal modulada resulta $$ \phi_{FM}(t) = A ~ \cos\left( \omega_p ~ t + k_f ~ \int_{0}^{t} m(\tau) ~ d\tau \right) $$ 
Tomando que el mensaje es un [[ingeniería electrónica/señales/Muestreo e Interpolación/Señal de banda limitada|señal de banda limitada]], con frecuencia máxima de $\omega_m$ y una amplitud máxima de $a$, se puede definir el índice de modulación de frecuencia $$ n_f = \frac{k_f ~ a}{\omega_m} $$
Usando como mensaje a $m(t) = a ~ cos(\omega_m ~ t)$, se puede hacer una descomposición a la señal modulada en base a las [[Función de Bessel|funciones de Bessel]] de primera clase $$ \phi_{FM} = A ~ \sum_{n = 0}^{\infty} J_n(n_f) ~ \cos\left[ (\omega_p \pm n ~ \omega_m) ~ t  \right] $$
![[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/img/Función de Bessel.png]]

Los coeficientes de Bessel cumplen $\sum_{n = 0}^{\infty} |J_n|^2 = 1$, por lo que la [[ingeniería electrónica/intro/Potencia/Potencia|potencia]] de la señal modulada es la misma para cualquier índice de modulación

Según la regla de Carson, la cual dice que el $90\%$ de la potencia se tiene en las primeras $n + 1$ términos, por lo que permite estimar el [[Ancho de banda|ancho de banda]] en función del ancho de banda del mensaje dado por $\omega_m$, como $B = (n_f + 1) ~ 2 \omega_m$ 