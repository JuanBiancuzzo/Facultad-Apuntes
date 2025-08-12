---
dia: 2023-11-16
tags:
  - carrera/ingeniería-electrónica/intro/Potencia
  - nota/facultad
vinculoFacultad:
  - tema: Potencia
    capitulo: 5
    materia: Introducción a la ingeniería electronica
    carrera: Ingeniería electrónica
---
# Definición
---
Definimos la [[Corriente eléctrica|corriente]] eficaz, es su [[Valor cuadrático medio]], de una corriente variable en el tiempo $i(t)$ con período $T$ como $$ I_{ef} = \sqrt{\frac{1}{T} \cdot \int_{0}^{T} i^2(t) ~ dt} $$

En el caso de una señal [[Función senoidal|senoidal]] $i(t) = I_m ~ \cos(\omega t)$ nos queda $$ I_{ef} = \sqrt{\frac{1}{T} \cdot \int_{0}^{T} I_m^2 ~ \cos^2(\omega t) ~ dt} = \frac{I_m}{\sqrt{2}} $$