---
dia: 2025-03-23
etapa: ampliar
referencias:
  - "899"
  - "874"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/control/Respuesta dinámica/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Para un [[Controlador automático|controlador]] con [[Controlador automático#^accion-control|acción de control]] proporcional, la relación entre la salida del controlador $u(t)$ y la señal de error $e(t)$ es $$ u(t) = K_p ~ e(t) $$ o bien, en cantidades transformadas por el [[Transformada de Laplace|método de Laplace]], $$ \frac{U(s)}{E(s)} = K
_p $$ donde $K_p$ se considera la ganancia proporcional

Cualquiera que sea el mecanismo real y la forma de la potencia de operación, el controlador proporcional es, en esencia, un [[Amplificador operacional|amplificador]] con una [[Ganancia|ganancia]] ajustable

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```