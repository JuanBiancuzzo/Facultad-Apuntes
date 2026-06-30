---
etapa: sin-empezar
dia: 2026-06-28
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 154
nombre: Doble Banda Lateral - Portadora Suprimida (DBL-PS)
---
# Enunciado
---
Sea una [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Doble Banda Lateral - Portadora Suprimida|señal modulada en amplitud con portadora suprimida]] $$ \varphi_{DBL-PS}(t) = f(t) ~ \cos(\omega_p t) $$ donde $f(t)$ es una señal real modulante [[ingeniería electrónica/adc/Respuesta en frecuencia/Filtro pasa-bajo|pasa-bajos]] (la [[ingeniería en informática/algo 1/Introducción a la programación/Información|información]] a transmitir) y $\omega_p$ es la velocidad angular de la portadora en $\text{rad}/\text{s}$ 
1. Si $F(\omega)$ y $\Phi_{PS}(\omega)$ son las [[ingeniería electrónica/analisis 3/Transformada de Fourier/Transformada de Fourier|transformadas de Fourier]] de $f(t)$ y $\varphi_{PS}(t)$ respectivamente, demuestre que $|F(\omega)|$ es [[ingeniería electrónica/analisis 3/Transformada de Fourier/Función par|par]] y que $$ \Phi_{DBL-PS}(\omega) = \frac{1}{2} ~ F(\omega - \omega_p) + \frac{1}{2} ~ F(\omega + \omega_p) \tag{1} $$Suponga que $f(t)$ tiene [[ingeniería electrónica/señales/Señales y sistemas/Energía de una señal|energía]] despreciable fuera de la banda $|\omega| < W$, ¿cómo debe ser $W$ para que no se solape el espectro modulado? ¿Cómo es el espectro de $\Phi_{PS}(\omega)$ alrededor de la frecuencia de portadora?
2. La recuperación de la señal original en el receptor a partir de la ecuación $(1)$ se realiza en $2$ etapas: primero se multiplica $\Phi_{PS}(\omega) \cdot \cos(\omega_p t)$ y luego se aplica un [[ingeniería electrónica/adc/Respuesta en frecuencia/Filtro pasa-bajo|filtrado pasa-bajos]]. Demuestre que $$ \varphi_{DBL-PS}(t) \cos(\omega_p t) = \frac{1}{2} f(t) \left( 1 + \cos(2 \omega_p t) \right) $$ Hallar la transformada de Fourier de la señal demodulada en términos de $F(\omega)$ y justifique la necesidad del filtro pasa-bajos
3. La demodulación de una señal DBL-PS requiere de un conocimiento preciso de la frecuencia y la fase de la portadora en el receptor (detección coherente) Asuma que hay un error $\Delta \omega$ en la frecuencia e portadora y un error de fase $\varphi_0$ y demuestre que la señal demodulada (antes del filtrado) en ese caso es $$ \varphi_{DBL-PS}(t) \cos(\omega_p t + \Delta\omega t + \theta_0) = \frac{1}{2} f(t) \left( \cos(\Delta\omega t + \theta_0) + \cos(2 \omega_p t + \Delta\omega t + \theta_0)  \right) $$ Considere que la señal demodulada ha pasado por el filtro pasa-bajos y que $\Delta\omega \ll \omega_p$. Si $\theta_0 = 0$, ¿cuál es el efecto de $\Delta \omega$ en la señal temporal? ¿Qué sucede si $\Delta\omega = 0$ y $\theta_0 \approx \frac{\pi}{2}$? 

# Resolución
---


# Resultado
---

