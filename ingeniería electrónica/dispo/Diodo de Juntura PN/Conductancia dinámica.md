---
dia: 2023-09-16
tags:
  - carrera/ingeniería-electrónica/dispo/Diodo-de-Juntura-PN
  - nota/facultad
---
# Definición
---
Desde el punto de vista de la señal, el [[Diodo|diodo]] se comporta como una [[Capacitancia|capacitacnia]] de valor $$ g_d = \frac{\partial i_D(t)}{\partial v_D(t)} \biggm|_{v_D = V_D} = \frac{I_D + I_0}{V_{th}} $$ donde $i_D$ es la [[Corriente del Diodo|corriente del diodo]], $v_D$ es la [[Tensión|tensión]] que cae en el diodo, $I_D = i_d(V_D)$ donde $V_D$ es la tensión continua aplicada al diodo, y $V_{th}$ es el [[Relación de Einstein|potencial térmico]]

Usando el [[Modelo de pequeña señal para diodo|modelo de pequeña señal]] $g_d$ podemos calcularla dependiendo de la polarización
* En [[Convención de signos para la tensión de polarización#Polarización directa|polarización directa]] $g_d$ es lineal con la corriente $$ g_d \simeq \frac{I_D}{V_{th}} $$
* En [[Convención de signos para la tensión de polarización#Polarización inversa|polarización inversa]] $g_d$ es constante y prácticamente nula $$ g_d \simeq 0 $$