---
dia: 2024-07-19
etapa: ampliar
referencias:
  - "171"
tags:
  - nota/investigacion
  - herramientas/hugo
orden: 219
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current().etapa });
```
# Definición
---
Es la página que muestra el contenido de una carpeta en especifico, esta para el primer nivel de carpetas debajo de contenido [[Herramientas/Hugo/Índice|Índice]] las genera automáticamente, para cualquier subcarpeta se tiene que agregar un archivo `index.md` o `_index.md` en la cual también se puede poner contenido.



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```