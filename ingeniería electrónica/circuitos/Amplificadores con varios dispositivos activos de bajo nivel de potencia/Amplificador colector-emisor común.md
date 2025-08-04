---
dia: 2025-03-22
etapa: ampliar
referencias:
  - "452"
tags:
  - carrera/ingeniería-electrónica/circuitos/Amplificadores-con-varios-dispositivos-activos-de-bajo-nivel-de-potencia
  - nota/facultad
aliases:
  - CC-CE
vinculoFacultad:
  - "[[ingeniería electrónica/circuitos/Amplificadores con varios dispositivos activos de bajo nivel de potencia/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Estas configuraciones incorporan otro [[Transistor bipolar de juntura|transistor]] para aumentar la [[Corriente eléctrica|corriente]] de salida y la [[Impedancia|impedancia]] de entrada de la configuración [[Amplificador Colector Común con un transistor bipolar de juntura|colector común]] 

![[Amplificador colector-emisor común.png]]

Este segundo transistor esta en la configuración [[Amplificador Emisor Común con un transistor bipolar de juntura|emisor común]]. Donde usamos una [[Fuente de corriente|fuente de corriente]] $I_{BIAS}$ para establecer el punto de trabajo en continua

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```