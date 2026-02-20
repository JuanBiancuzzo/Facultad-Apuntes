---
dia: 2026-02-19
etapa: empezado
referencias: []
aliases:
  - DBL-PS
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
Esta [[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/Modulación|modulación]] propone una portadora $p(t) = \cos(2\pi f_p ~ t)$ y por lo tanto la señal a transmitir es $$ \phi_{DBL-PS}(t) = m(t) ~ p(t) = m(t) ~ \cos(2\pi f_p ~ t) $$
Esta modulación traslada el espectro de $m(t)$ a la frecuencia de la portadora $f_p$, en el proceso termina duplicando el [[Ancho de banda|ancho de banda]] del mensaje $$ \begin{align}
    \Phi_{DBL-PS}(\omega) &= \mathcal{F}\Set{ m(t) ~ p(t) } \\
     &= M(\omega) \ast \left(\frac{\delta(\omega - \omega_p) + \delta(\omega + \omega_p)}{2} \right) \\
     &= \frac{M(\omega - \omega_p) + M(\omega + \omega_p)}{2} \\
\end{align} $$

![[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/img/Doble Banda Lateral - Portadora Suprimida.png]]

La operación de demodulación es, aplicando nuevamente $p(t)$ y un [[ingeniería electrónica/adc/Respuesta en frecuencia/Filtro pasa-bajo|filtro pasa-bajos]] $$ \begin{align}
    \Phi_{DBL-PS}(\omega) \ast \mathcal{F}\Set{p(t)} &= \mathcal{F}\Set{ m(t) ~ p(t) ~ p(t)} \\
     &= \frac{M(\omega - \omega_p) + M(\omega + \omega_p)}{2} \ast \left(\frac{\delta(\omega - \omega_p) + \delta(\omega + \omega_p)}{2} \right) \\
     &= \frac{M(\omega - 2\omega_p) + 2M(\omega) + M(\omega + 2\omega_p)}{2} \\
\end{align} $$ aplicando un el filtro pasa bajos, con la [[Señal de banda limitada|señal de banda limitada]] dado por $\omega_m$, la frecuencia de corte siendo $\omega_m$ se vuelve a tener el mensaje original $$ \begin{align}
    H(\omega) ~ \Phi_{DBL-PS}(\omega) ~ P(\omega) &= H(\omega) ~ \mathcal{F}\Set{ m(t) ~ p(t) ~ p(t)} \\
     &= H(\omega) ~ \frac{M(\omega - 2\omega_p) + 2M(\omega) + M(\omega + 2\omega_p)}{2} \\
     &= M(\omega)
\end{align} $$
![[ingeniería electrónica/taller de comunicaciones/Modulación Analógica/img/Demodulación Doble Banda Lateral - Portadora Suprimida.png]]