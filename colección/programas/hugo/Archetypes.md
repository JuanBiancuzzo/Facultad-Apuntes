---
dia: 2024-07-19
etapa: ampliar
referencias:
  - "173"
tags:
  - nota/investigacion
  - investigación/herramientas/hugo
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Los archetypes son una plantilla que usa [[investig[[colección/programas/hugo/Índice|Índice]]ento de crear un nuevo [[Single Page|archivo]] creado por el usuario. Si se llama `default.md`, este va a ser la plantilla que se usará para cualquier archivo si ningún otro archetype aplica. Si se quiere generar un especifico a un directorio, entonces su nombre debe ser el del directorio.



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```