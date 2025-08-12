---
dia: 2025-03-14
etapa: sin-empezar
referencias:
  - "872"
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
Para estas vamos a usar la [[Ley de Newton|ley de newton]], donde podemos dividirlas en los siguientes modelos
* Translación
* Rotación
* Combinación de translación y rotación
* Mecánica compleja
* Sistemas de parámetros distribuidas

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```