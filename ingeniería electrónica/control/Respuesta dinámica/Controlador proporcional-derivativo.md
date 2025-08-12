---
dia: 2025-03-23
etapa: ampliar
referencias:
  - "899"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Controlador PD
vinculoFacultad:
  - tema: Respuesta dinámica
    capitulo: 1
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Para un [[Controlador automático|controlador]] con [[Controlador automático#^accion-control|acción de control]] [[Controlador proporcional|proporcional]] y derivativa (PD) y se define su acción de control como $$ u(t) = K_p ~ e(t) + K_p ~ T_d ~ \frac{de(t)}{dt} $$ 
La [[Transferencia del sistema|función de transferencia]] es $$ \frac{U(s)}{E(s)} = K_p ~ (1 + T_d ~ s) $$ donde $T_d$ es el tiempo derivativo ^tiempo-derivativo

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```