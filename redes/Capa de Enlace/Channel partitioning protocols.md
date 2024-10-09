---
dia: 2024-08-22
tags:
  - redes/Capa-de-Enlace
  - nota/facultad
referencias:
  - "201"
etapa: sin-empezar
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
En esta, el [[Bandwidth|bandwidth]] del [[Acceso a una red por cable|enlace]] es compartido en el tiempo, en la [[Función periódica#Frecuencia|frecuencia]] y en código, a múltiples estaciones simultáneamente

Tenemos los [[Protocolo|protocolos]]
* [[Time Division Multiplexing|Time division multiplexing (TDM)]]
* [[Frequency Division Multiplexing|Frequency division multiplexing (FDM)]]
* [[Code Division Multiple Access|Code division multiple access (CDMA)]]

# Referencias
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```