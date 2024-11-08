---
dia: 2023-01-23
tags:
  - ingeniería-electrónica/intro/Multimetro
  - nota/facultad
aliases:
  - Multímetro True RMS
  - Multímetro Verdadero Valor Eficaz
---
# Definición
---
Es un tipo de [[Multímetro|multímetro]] que utiliza la medida True RMS (**Verdadero Valor Eficaz**) que consta de fórmulas matemáticas más complejas que permiten obtener un valor más aproximado a la realidad que otros multímetros.

## Modos
---
- Modo DC: 
Utiliza la función definida en el apartado de [[Tensión promedio|tensión promedio]]
$$ V_\text{DC} = \frac{1}{T} \cdot \int_{0}^{T} v(t) \cdot dt $$

- Modo AC: 
Utiliza la función definida en el apartado de [[Tensión eficaz|tensión eficaz]] para alterna
$$ V_{AC}= \sqrt{\frac{1}{T} \cdot \int_{0}^{T} (v(t) - V_{DC})^2 \cdot dt} $$

