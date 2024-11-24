---
dia: 2023-09-05
tags:
  - ingeniería-electrónica/adc/Circuitos-en-regimen-de-corriente-continua
  - nota/facultad
  - ingeniería-en-informática/adc/Circuitos-en-regimen-de-corriente-continua
  - ingeniería-electrónica/circuitos/Amplificadores-diferenciales
---
# Definición
---
Es un [[Amplificador operacional|amplificador]], que utilizando las condiciones de [[Amplificador operacional ideal|amplificador ideal]] podemos encontrar que 

$$ v_o = \frac{R_2 ~ (1 + R_1/R_2)}{R_1 ~ (1 + R_3/R_4)} ~ v_2 - \frac{R_2}{R_1} ~ v_1 = \frac{R_2}{R_1} ~ (v_2 - v_1)$$ ^b70835

vemos que el [[Circuito eléctrico|circuito]] amplifica la diferencia entre dos entradas pero rechaza toda señal común a las dos entradas

![[Amplificador diferencial.webp]] ^f57679