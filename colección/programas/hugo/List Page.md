---
dia: 2024-07-19
etapa: ampliar
referencias:
  - "171"
tags:
  - nota/investigacion
  - investigación/herramientas/hugo
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Es la página que muestra el contenido de una carpeta en especifico, esta para el primer nivel de carpetas debajo de contenido [[investig[[colección/programas/hugo/Índice|Índice]]a automáticamente, para cualquier subcarpeta se tiene que agregar un archivo `index.md` o `_index.md` en la cual también se puede poner contenido.



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```