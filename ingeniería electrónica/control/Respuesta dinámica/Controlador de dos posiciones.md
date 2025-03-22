---
dia: 2025-03-21
etapa: empezado
referencias:
  - "899"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Controlador on-off
  - Controlador de encendido y apagado
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En un [[Sistema|sistema]] de control de dos posiciones es un [[Controlador automático|controlador]] donde el elemento de actuación sólo tiene dos posiciones fijas que, en muchos casos, son simplemente encendido y apagado. El control de dos posiciones o de encendido y apagado es relativamente simple y barato

Supóngase que la señal de salida del controlador es $y(t)$ y que la señal de error es $e(t)$. En el control de dos posiciones, la señal $y(t)$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```