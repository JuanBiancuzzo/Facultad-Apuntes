---
dia: 2024-10-01
tags:
  - embebidos/Conversión-analógica-a-digital-y-digital-a-analógica
  - nota/facultad
aliases:
  - SAR
---
# Definición
---
La arquitectura de un [[Conversor Analógico-Digital|ADC]] SAR es bastante simple, como se puede ver en el siguiente diagrama

![[Pasted image 20241001164155.png]]

Primero se introduce una [[Tensión|tensión]] analógica en un [[Circuito eléctrico|circuito]] de seguimiento/retención

Este circuito también se denomina comúnmente circuito de muestra/retención, que toma una muestra instantánea de la tensión analógica [[Variable|variable]] y utiliza esa muestra como valor que se convertirá en un número digital

El bloque `N-BIT REGISTER`, está configurado en un valor medio de escala. Este valor depende de la cantidad de bits de la conversión final

