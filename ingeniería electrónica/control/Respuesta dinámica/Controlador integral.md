---
dia: 2025-03-23
etapa: ampliar
referencias:
  - "899"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
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
Para un [[Controlador automático|controlador]] con [[Controlador automático#^accion-control|acción de control]] integral, el valor de salida del controlador $u(t)$ se cambia a una razón proporcional a la señal de error $e(t)$. Es decir $$ \begin{array}{c}
    \displaystyle \frac{du(t)}{dt} = K_i ~ e(t) &&& 
    \displaystyle u(t) = K_i ~ \int_0^t e(t) ~ dt
\end{array} $$ donde $K_i$ es una constante ajustable. La [[Transferencia del sistema|función de transferencia]] del controlador integral es $$ \frac{U(s)}{E(s)} = \frac{K_i}{s} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```