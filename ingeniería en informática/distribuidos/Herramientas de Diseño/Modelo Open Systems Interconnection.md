---
dia: 2025-03-03
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
aliases:
  - Modelo OSI
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es un modelo de referencia para los [[Protocolo de internet|protocolos de red]], separados en $7$ capas

|     Capa     | Descripción                                             |
| :----------: | ------------------------------------------------------- |
| Application  | [[Aplicación\|Aplicaciones]] de usuario                 |
| Presentation | Representación de datos                                 |
|   Session    | Manejo de conexiones y sesión                           |
|  Transport   | Transferencia confiable, libre de errores               |
|   Network    | Establecer, mantener y terminar conexiones. Transmisión |
|  Data link   | Sincronización, control de errores y envío de frames    |
|   Physical   | Manejo del medio físico para transmitir bits            |


