---
dia: 2025-03-26
etapa: empezado
referencias:
  - "873"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Settling time of a system
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El tiempo de asentamiento $t_s$ es el tiempo que toma el transitorio del [[Sistema|sistema]] en decaer dentro de un rango dado, donde en general se usa como margen un $1\%$ 

![[Time-Domain specifications.png]]

## Sistema de primer orden
---


## Sistema de segundo orden
---
$$ y(t) = 1 - \frac{\exp(-\sigma t)}{\sqrt{1 - \zeta^2}} ~ \left( \cos(\omega_d t) + \frac{\sigma}{\omega_d} \sin(\omega_d t) ) \right) $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```