---
dia: 2025-03-14
etapa: ampliar
referencias:
  - "871"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Open-loop control
  - Controlador de lazo abierto
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Los [[Sistema|sistemas]] en los cuales la salida no tiene efecto sobre la acción de control se denominan sistemas de control en lazo abierto. En otras palabras, si el [[Controlador|controlador]] no usa las mediciones de la salida del sistema siendo controladas, este sistema se llama controlador open-loop

La expresión open-loop refiere al hecho que no hay ningún [[Camino#Camino simple (Path)|camino]] que vuelve a la sección del controlador. Las variables controladas $u$ son independiente de las variables de salida $y$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```