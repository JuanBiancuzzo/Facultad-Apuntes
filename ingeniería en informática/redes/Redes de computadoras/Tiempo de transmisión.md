---
dia: 2024-04-18
tags:
  - carrera/ingeniería-electrónica/redes/Redes-de-computadoras
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - carrera/ingeniería-en-informática/redes/Redes-de-computadoras
  - nota/facultad
aliases:
  - Tiempo de delivery
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es el tiempo $t_D^P(m)$ que tarda un mensaje $m$ en ser recibido luego de haber sido enviado hacia $p$

![[Tiempo y timeout de delivery.png]]

Dado dos [[Host|host]] de origen y destino, que intercambian [[Paquete|paquetes]] de tamaño $L$ bits a través de un enlace cuya [[Delay in packet switches#Tiempo de propagación|velocidad de transmisión]] es $R$ bits/s, entonces el tiempo necesario para transmitir el paquete es igual a $$ \frac{L}{R} ~ \text{segundos} $$