---
dia: 2023-01-23
materia: intro
capitulo: 5
---
### Definición
---
Definimos la [[Tensión|tensión]] eficaz, es su [[Valor cuadrático medio]], de una tensión variable en el tiempo $v(t)$ con período $T$ como:
$$ V_{ef}= \sqrt{\frac{1}{T} \cdot \int_{0}^{T} v^2(t) \cdot dt} $$

La tensión eficaz total a partir de $V_{DC}$ y $V_{AC}$:
$$
\begin{align}
V_{ef}= \sqrt{V_{DC}^2 +V_{AC}^2}
\end{align}
$$
Para alterna, se utiliza la siguiente expresión:
$$
\begin{align}
V_{AC}= \sqrt{\frac{1}{T} \cdot \int_{0}^{T} (v(t) - V_{DC})^2 \cdot dt}
\end{align}
$$
En el caso de una señal [[Función senoidal|senoidal]] $v(t) = V_m cos(\omega t)$ nos queda $$ V_{ef} = \sqrt{\frac{1}{T} \cdot \int_{0}^{T} V_m^2 cos^2(\omega t) ~ dt} = \frac{V_m}{\sqrt{2}} $$
