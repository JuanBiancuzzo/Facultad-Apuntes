---
dia: 2025-03-02
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Introduccion
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este diagrama se suele usar para diseñar una [[Arquitectura de aplicaciones|arquitectura]], ya que permite ver los procesos generales del [[Sistema|sistema]], como también los puntos escalables del mismo. Algo que también debería aclararse es que muestra los archivos estáticos, como también lo que llaman "colas" que ejemplifican la comunicación entre procesos que posiblemente estén separados y necesitan un buffer  

## Ejemplo
---
![[Diagrama de robustez.png]]

