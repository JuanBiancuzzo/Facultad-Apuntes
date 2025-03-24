---
dia: 2025-03-23
etapa: ampliar
referencias:
  - "899"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Controlador PID
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Para un [[Controlador automático|controlador]] con [[Controlador automático#^accion-control|acción de control]] [[Controlador proporcional|proporcional]], [[Controlador integral|integral]] y derivativa (PID). Esta acción combinada tiene las ventajas de cada una de las $3$ acciones de control individuales

La ecuación de un controlador con esta acción combinada está dado por $$ u(t) = K_p ~ e(t) + \frac{K_p}{T_i} \int_0^t e(t) ~ dt + K_p ~ T_d \frac{de(t)}{dt} $$ donde $T_i$ es [[Controlador proporcional-integral#^tiempo-integral|tiempo integral]], y $T_d$ es el [[Controlador proporcional-derivativo#^tiempo-derivativo|tiempo derivativo]]

La [[Transferencia del sistema|función de transferencia]] es $$ \frac{U(s)}{E(s)} = K_p ~ \left( 1 + \frac{1}{T_i ~ s} + T_d ~ s \right) $$
Veamos el [[Diagrama de bloques|diagrama de bloques]] de este controlador

![[Controlador proporcional-integral-derivativo.png]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```