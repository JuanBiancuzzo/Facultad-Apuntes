---
dia: 2025-03-14
etapa: ampliar
referencias:
  - "871"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Controlador feedback
  - Closed-loop control
  - Feedback control
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En un controlador feedback, la variable controlada es medida por un [[Sensores|sensor]] y esa [[Información|información]] es introducida al controlador para influenciar la variable controlada

## Fundamentos
---
Se lo puede definir un buen controlador si proporciona
* [[Sistema estable|Estabilidad]]
    * El sistema es estable para todo tiempo, es un [[Requisito|requisito]] absoluto
    * El sistema puede ser inestable por $2$ motivos
        1. El sistema siendo controlado es inestable
        2. El mismo feedback vuelve inestable el sistema
* Seguimiento
    * La salida del sistema sigue la señal de referencia tan rápidamente como se pueda
* Rechazo de perturbaciones
    * La salida del sistema debería ser lo más insensible posible a las perturbaciones de entrada
* Robustez
    * Esto es asegurar que independientemente de imperfecciones en la exactitud del modelo o si este cambia a lo largo del tiempo, se tiene que mantener todas las otras metas mencionadas

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```