---
dia: 2024-04-23
aliases:
  - MPS del transistor de efecto de campo de unión
  - MPS del JFET
  - Transconductancia para transistor de efecto de campo de unión#Transconductancia
  - Transconductancia para JFET#transistor de efecto de campo de unión
  - Modelo de pequeña señal del JFET
  - Conductancia de entrada para transistor de efecto de campo de unión#Conductancia de entrada
  - Conductancia de entrada para JFET#Conductancia de entrada
  - Conductancia de salida para transistor de efecto de campo de unión#Conductancia de salida
  - Conductancia de salida para JFET#Conductancia de salida
tags:
  - carrera/ingeniería-electrónica/circuitos/Dispositivos-de-control-de-señal-y-en-conmutación
  - nota/facultad
---
# Definición
---
El [[Modelo|modelo]] de pequeña señal para el [[Transistor de efecto de campo de unión|JFET]] esta dado

![[Modelo de pequeña señal de JFET.png]]

Notemos la similitud con el [[Modelo de pequeña señal del transistor bipolar de juntura|modelo de pequeña señal del TBJ]] 

## Transconductancia
---
La variación de la [[Tensión|tensión]] de control que modifica la [[Corriente eléctrica|corriente]] de salida. El factor de proporcionalidad es la transconductancia (pendiente de la [[Curva característica de un componente|recta a la características]] de transferencia del transistor en los alrededores del punto de reposo) $$ g_m = 2 ~ \frac{\sqrt{I_{DQ} ~ I_{DSS}}}{V_p} $$

## Conductancia de entrada
---
Resistencia dinámica de la [[Convención de signos para la tensión de polarización#Polarización inversa|juntura en inversa]] GS $$ r_i = \frac{V_{gs}}{i_g} \biggm|_{Q} = r_{gs} $$

## Conductancia de salida
---
Modulación del largo del canal $$ r_o = \frac{V_{ds}}{i_d} \biggm|_{Q, ~ vgs = 0} = \frac{1}{\lambda I_{DQ}} $$