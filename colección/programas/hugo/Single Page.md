---
dia: 2024-07-19
etapa: sin-empezar
referencias:
  - "171"
tags:
  - investigación/herramientas/hugo
  - nota/investigacion
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es el contenido que corresponde a lo que crea el usuario, y en general se muestra el contenido de estas páginas.



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```