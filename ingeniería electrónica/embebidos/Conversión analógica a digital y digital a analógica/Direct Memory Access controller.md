---
dia: 2024-10-03
tags:
  - carrera/ingeniería-electrónica/embebidos/Conversión-analógica-a-digital-y-digital-a-analógica
  - nota/facultad
referencias:
  - "300"
  - "475"
aliases:
  - DMA
  - Controlador de Acceso Directo a Memoria
  - DMAC
etapa: ampliar
vinculoFacultad:
  - "[[ingeniería electrónica/embebidos/Conversión analógica a digital y digital a analógica/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El controlador de acceso directo a memoria (DMAC) permite mover información sin involucrar a la [[Microprocesadores|CPU]], dejando que esta pueda usar sus recursos para otras operaciones

Esto lo logra usando un [[Bus|bus]] y un sistema de periféricos, en los cuales pueden transferir información entre los periféricos y [[Memoria|memoria]] como también de memoria a memoria

Un problema con el uso de DMA es que sólo hay un conjunto de buses ([[Arquitectura de una computadora#^bus-datos|bus de datos]], [[Arquitectura de una computadora#^bus-direccion|bus de dirección]], [[Arquitectura de una computadora#^bus-control|bus de control]]) en una [[Computadora|computadora]] determinada y ningún bus puede dar servicio a dos maestros al mismo tiempo

Esto significa que la CPU tiene que darle el permiso a la DMAC para usar los buses

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```