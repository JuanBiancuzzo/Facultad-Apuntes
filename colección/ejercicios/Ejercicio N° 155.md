---
etapa: sin-empezar
dia: 2026-06-28
tags:
  - colección/ejercicios/ejercicio
  - nota/colección
numero: 155
nombre: Doble Banda Lateral Portadora Fuerte (DBL-PF o AM)
---
# Enunciado
---
Los receptores de [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Doble Banda Lateral - Portadora Suprimida|DBL-PS]] requieren circuitos de detección que estimen la frecuencia y fase de la portadora en forma precisa. En sistemas de radiodifusión, con muchos receptores y un solo transmisor, se prefirió disponer de transmisores costosos de alta [[ingeniería electrónica/intro/Potencia/Potencia|potencia]] y receptores simples y económicos. Una señal de [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Doble Banda Lateral - Portadora Fuerte|Doble Banda Lateral (BDL) con gran portadora, o "AM"]] a secas, es de la forma $$ \varphi_{DBL-PF}(t) = (A + f(t)) ~ \cos(\omega_p t) $$ donde $f(t)$ es una señal real modulante [[ingeniería electrónica/adc/Respuesta en frecuencia/Filtro pasa-bajo|pasa-bajos]] (la [[ingeniería en informática/algo 1/Introducción a la programación/Información|información]] a transmitir), $\omega_p$ es la frecuencia de la portadora en $\text{rad}/\text{s}$ y $A$ es un valor constante independiente del tiempo

1. Si $F(\omega)$ y $\Phi_{DBL-PF}(\omega)$ son las [[ingeniería electrónica/analisis 3/Transformada de Fourier/Transformada de Fourier|transformadas de Fourier]] de $f(t)$ y $\varphi_{DBL-PF}(t)$ respectivamente, demuestre que $|F(\omega)|$ es una señal [[ingeniería electrónica/analisis 3/Transformada de Fourier/Función par|par]] y que $$ \Phi_{DBL-PF}(\omega) = \Phi_{DBL-PS}(\omega) + \pi A \left( \delta(\omega + \omega_p) + \delta(\omega - \omega_p) \right)  $$ Observe gráficamente que, si bien los espectros son similares, si $A > \max f(t)$, entonces la envolvente de $\varphi_{DBL-PF}(t)$ sigue la forma de $f(t)$. De allí que el receptor implementado sea un detector de envolvente
2. Suponga ahora que $f(t) = mA \cos(\omega_m t)$, donde $m$ es una constante positiva, $f(t)$ no tiene [[ingeniería electrónica/señales/Señales y sistemas/Energía de una señal|energía]] finita pues no es de [[Función cuadrado integrable|cuadrado integrable]]. En su lugar, la potencia o el [[Valor cuadrático medio|valor cuadrático medio]] de $f(t)$ se define como $$ P_f = \lim_{T \to \infty} \frac{1}{T} \int_{-\frac{T}{2}}^{\frac{T}{2}} |f(t)|^2 ~ dt < \infty $$ Demuestre que $P_f = \frac{(mA)^2}{2}$ y que, siempre que $m \le 1$, la envolvente de la señal modulada será la de $f(t) \cdot m$ es el llamado índica de modulación
3. El porcentaje de potencia total contenida en las bandas laterales es $$ \eta = \frac{P_{\phi\text{DBL-PS}}}{P_{\phi\text{DBL-PF}}} $$ Para el caso en que $f(t)$ es una [[ingeniería electrónica/analisis 3/Funciones elementales/Función senoidal|senusoide]] como en el ejercicio anterior, demuestre que $\eta \le 0.33$ y evalúe la eficiencia de una transmisión de AM frente a una de DBL-PS

# Resolución
---


# Resultado
---

