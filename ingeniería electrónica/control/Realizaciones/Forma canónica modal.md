---
dia: 2025-05-02
etapa: empezado
referencias:
  - "877"
aliases:
  - Modal canonical form
tags:
  - carrera/ingeniería-electrónica/control/Realizaciones
  - nota/facultad
vinculoFacultad:
  - tema: Realizaciones
    capitulo: "3"
    materia: Control automático
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es una forma de representar las [[ingeniería electrónica/control/Respuesta dinámica/Sistema dinámico|ecuaciones de estados]] y de salida a partir de las [[ingeniería electrónica/señales/Sistemas LTI/Transferencia del sistema|función de transferencia]]. Partimos de la función de transferencia y la descomponemos en [[ingeniería electrónica/control/Respuesta dinámica/Descomposición en fracciones simples|fracciones simples]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```