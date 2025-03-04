---
dia: 2025-03-01
etapa: ampliar
referencias:
  - "864"
tags:
  - carrera/ingeniería-en-informática/distribuidos/Introducción
  - nota/facultad
aliases:
  - Marshaling
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El marshalling o marshaling es el proceso de [[ingeniería electrónica/señales/Señales y sistemas/Transformación|transformación]] de la representación de datos a un formato adecuado, realizado según unas normas específicas y que su objetivo más primordial es la transferencia de estos a través de la [[Red|red]]

## Uso
---
El marshalling es utilizado principalmente en las [[Remote Procedure Call|llamadas procedimientos remotos (RPC)]], en las que necesitaremos mecanismos para que la comunicación entre [[Proceso|procesos]] sea exitosa


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```