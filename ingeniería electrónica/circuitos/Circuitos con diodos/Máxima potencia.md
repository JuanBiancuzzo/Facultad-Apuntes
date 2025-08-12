---
dia: 2024-03-24
tags:
  - carrera/ingeniería-electrónica/circuitos/Circuitos-con-diodos
  - nota/facultad
vinculoFacultad:
  - tema: Circuitos con diodos
    capitulo: 1
    materia: Circuitos microelectrónicos
    carrera: Ingeniería electrónica
---
# Definición
---
Debemos considerar, en la validez de los [[Modelo|modelos]], que todos los dispositivos tienen una [[Potencia|potencia]] máxima que pueden manejar. Si la superan el componente se degrada y deja de funcionar

Los [[Diodo|diodos]] [[Potencia disipada|disipan potencia]] tanto en [[Convención de signos para la tensión de polarización#Polarización directa|directa]] como en [[Ruptura inversa|ruptura]], por lo que debemos consultar la hoja de datos para ver cuál es ese límite

En algunas bibliografías sólo presentan un gráfico como el siguiente

![[Máxima potencia.webp]]

Donde las hipérbolas representan las curvas $I_d ~ V_d = P_{MAX}$. La zona entre las mismas se llama SOA (safe operation area) y contiene todos los puntos instantáneos en que el dispositivo no se rompe

El valor $P_{MAX}$ se saca de la hora de datos y representa la [[Potencia instantánea|potencia instantánea]] máxima. Si el [[Circuito eléctrico|circuito]] sale de la SOA aunque sea un instante, se quema

Pero hay otro valor a considerar, la [[Energía térmica|energía térmica]] se disipa mucho más lentamente que lo que se mueve la [[Señal|señal]]. Así que además de considerar la potencia instantánea máxima se debe considerar la [[Potencia media|potencia media]] máxima 

Se debe obtener dicho valor de la hoja de datos y compararla con el valor de potencia media calculado en el circuito para asegurarse que sea menor