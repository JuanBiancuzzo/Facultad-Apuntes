---
dia: 2025-03-23
etapa: ampliar
referencias:
  - "899"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Controlador PI
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
Para un [[Controlador automático|controlador]] con [[Controlador automático#^accion-control|acción de control]] [[Controlador proporcional|proporcional]] e [[Controlador integral|integral]] (PI) y se define su acción de control como $$ u(t) = K_p ~ e(t) + \frac{K_p}{T_i} \int_0^t e(t) ~ dt $$ 
La [[Transferencia del sistema|función de transferencia]] del controlador es $$ \frac{U(s)}{E(s)} = K_p ~ \left( 1 + \frac{1}{T_i ~ s} \right) $$ donde $T_i$ se denomina tiempo integral ^tiempo-integral

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```