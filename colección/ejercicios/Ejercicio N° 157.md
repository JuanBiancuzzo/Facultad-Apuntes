---
etapa: sin-empezar
dia: 2026-06-28
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 157
nombre: FM Banda Ancha
---
# Enunciado
---
Utilizando la notación [[ingeniería electrónica/adc/Circuitos en regimen senoidal permanente/Fasor|fasorial]], la misma señal [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Modulación de frecuencia|FM]] del [[colección/ejercicios/Ejercicio N° 156|ejercicio]] puede ser expresada por $$ \varphi_{FM}(t) = Re\Set{ A e^{j v(t)} } $$ siendo $\bar{\varphi}_{FM}(t) = A e^{j v(t)}$ el fasor o representación compleja de $\varphi_{FM}(t)$
Sea $f(t) = a \cos(2 \pi f_m t)$ la señal modulante

1. Demuestre que la señal modulada en FM puede ser expresada como $$ \bar{\varphi}_{FM}(t) = A e^{j \omega_p t} \cdot e^{j m_f \sin(\omega_m t)} $$ donde $m_f = \frac{a K_f}{f_m}$ es conocido como el índice de modulación
2. Al ser $e^{j m_f \sin(\omega_m t)}$ [[ingeniería electrónica/analisis 3/Serie de Fourier/Función periódica|periódica]] de período $\frac{1}{f_m}$ la señal FM se puede descomponer en [[ingeniería electrónica/analisis 3/Serie de Fourier/Serie de Fourier|serie de Fourier]], resultando $$ \bar{\varphi}_{FM}(t) = A e^{j \omega_p t} ~ \sum_{n = 0}^{\infty} J_n(m_f) ~ e^{j n \omega_m t} $$ donde $J_n(m_f)$ es la [[Función de Bessel|función de Bessel]] de primera clase de orden $n$. Por lo tanto $$ \varphi_{FM}(t) = A \sum_{n = 0}^{\infty} J_n(m_f) ~ \cos((\omega_p + n \omega_m) ~ t) $$ ¿Cómo elegiría el índice de modulación para eliminar la componente en la frecuencia portadora de la señal modulada? Calcule la potencia de la señal resultante (es decir, sólo las bandas laterales) en ese caso
3. Compare el punto anterior con el caso de [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Doble Banda Lateral - Portadora Fuerte|AM]] con índice de modulación del $100 \%$ ¿Qué sistema es más eficiente?
4. En el caso de $m_f = 1$, calcule el [[Ancho de banda|ancho de banda]] de la señal FM si sólo se consideran las bandas laterales que contribuyen al $90 \%$ de la potencia total
   Ayuda: utilice la [[ingeniería electrónica/analisis 3/Transformada de Fourier/Identidad de Perseval para la transformación de Fourier|identidad de Parseval]]
5. Compare el punto anterior con el ancho de banda calculado por la regla de Carson $$ W = 2 (\Delta f + f_m) $$ donde $\Delta f = | f(t) |_text{max} K_f = a K_f$ es el desvío de frecuencia de la señal FM

# Resolución
---


# Resultado
---

