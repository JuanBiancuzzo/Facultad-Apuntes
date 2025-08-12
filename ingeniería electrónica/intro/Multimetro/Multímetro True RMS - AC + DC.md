---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/intro/Multimetro
  - nota/facultad
vinculoFacultad:
  - tema: Multimetro
    capitulo: 6
    materia: Introducción a la ingeniería electronica
    carrera: Ingeniería electrónica
---
# Definición
---
Es similar al [[Multímetro True Root Mean Square|multímetro True RMS]], cambia en que puede calcular directamente el valor de la [[Tensión eficaz|tensión eficaz]] total ($V_{eficaz}$).

## Modos
---
- Modo VC y AC son iguales al multímetro True RMS.
- Modo AC + DC:
Se utilizan las formulas de la tension eficaz total
$$
\begin{align}
V_{ef}= \sqrt{\frac{1}{T} \cdot \int_{0}^{T} v^2(t) \cdot dt} = \sqrt{V_{DC}^2 +V_{AC}^2}
\end{align}
$$
