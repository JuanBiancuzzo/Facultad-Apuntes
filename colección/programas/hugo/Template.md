---
dia: 2024-07-20
etapa: ampliar
referencias:
  - "178"
aliases:
  - Plantilla
tags:
  - nota/investigacion
  - investigación/herramientas/hugo
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Los templates o plantillas, son archivos [[Lenguaje de marcado de hipertexto|HTML]] que pueden ser aplicados a una [[Single Page|página de contenido]] o un [[List Page|listado de contenido]], para convertirlo en HTML y como usar tanto su [[Frontmatter|metadata]] como su contenido para ser mostrado.

Estos viven dentro de la carpeta de `layouts`, si se quiere tener un default template para una página de contenido o para un listado, se puede crear una carpeta con el nombre de `default` o `_default` y dentro crear un archivo `single.html` y/o `list.html`, respectivamente.

Si se quiere hacer un layout especifico para un directorio, se puede crear una carpeta con el nombre del directorio al cual se le va a aplicar, y poner los mencionados archivos HTML debajo de esa carpeta.

[[investiga[[colección/programas/hugo/Índice|Índice]]amientas para poder obtener la información del archivo, como
* [[Partial|Partial]]



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```