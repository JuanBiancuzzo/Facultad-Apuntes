---
dia: 2024-04-11
capitulo: 5
tags:
  - intro/Potencia
  - nota
---
### Definición
---
Definimos la [[Potencia|potencia]] eficaz, es su [[Valor cuadrático medio|valor cuadrático medio]], de una potencia variable en el tiempo $p(t)$ con período $T$ como $$ P_{ef}= \sqrt{\frac{1}{T} \cdot \int_{0}^{T} p^2(t) \cdot dt} $$

La potencia eficaz total a partir de $P_{DC}$ y $P_{AC}$ $$ P_{ef}= \sqrt{P_{DC}^2 + P_{AC}^2} $$

Para alterna, se utiliza la siguiente expresión $$ P_{AC}= \sqrt{\frac{1}{T} \cdot \int_{0}^{T} (p(t) - P_{DC})^2 \cdot dt} $$

En el caso de una señal [[Función senoidal|senoidal]] $p(t) = P_m ~ \sin(\omega t)$ nos queda $$ P_{ef} = \sqrt{\frac{1}{T} \cdot \int_{0}^{T} P_m^2 ~ \sin^2(\omega t) ~ dt} = \frac{P_m}{\sqrt{2}} $$
