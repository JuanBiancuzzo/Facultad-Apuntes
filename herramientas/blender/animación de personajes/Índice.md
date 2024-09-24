---
dia: 2024-07-08
tags:
  - índice
  - herramientas/blender/animación-de-personajes
estado: Falta resumir
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/investigacion/mostrarSubTemas", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Para aprender como animar personajes usando la herramienta de Blender, nos basáremos en los trabajos de:
* [SouthernShotty](https://www.youtube.com/@SouthernShotty)
* [grabbitt](https://www.youtube.com/@grabbitt)


## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarArchivos", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/investigacion/biblioIndice', { indice: dv.current() });
```