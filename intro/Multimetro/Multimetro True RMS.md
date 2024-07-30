---
dia: 2023-01-23
tags:
  - intro/Multimetro
  - nota/facultad
---
### Definición
---
Es un tipo de [[Multímetro]] que utiliza la medida True RMS (**Verdadero Valor Eficaz**) que consta de fórmulas matemáticas más complejas que permiten obtener un valor más aproximado a la realidad que otros multímetros.

#### Modos
---
- Modo DC: 
Utiliza la función definida en el apartado de [[Tension promedio]]:
$$
\begin{align}
V_\text{DC} = \frac{1}{T} \cdot \int_{0}^{T} v(t) \cdot dt
\end{align}
$$
- Modo AC: 
Utiliza la función definida en el apartado de [[Tensión eficaz]] para alterna:
$$
\begin{align}
V_{AC}= \sqrt{\frac{1}{T} \cdot \int_{0}^{T} (v(t) - V_{DC})^2 \cdot dt}
\end{align}
$$
