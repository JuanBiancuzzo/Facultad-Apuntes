---
dia: 2024-07-19
etapa: ampliar
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
El contenido en [[investig[[colección/programas/hugo/Índice|Índice]]separar en 2 tipos de contenidos
* [[Single Page|Single Page]]
* [[List Page|List Page]]

También hay que notar que todo el contenido tiene [[Frontmatter|frontmatter o metadata]]


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```