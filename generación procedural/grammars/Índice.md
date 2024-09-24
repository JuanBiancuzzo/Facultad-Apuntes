---
dia: 2024-07-08
tags:
  - índice
  - generación-procedural/grammars
estado: Falta resumir
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/investigacion/mostrarSubTemas", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Se va a explorar la generación procedural con el uso de [[Grammar|grammars]]


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