---
dia: 2024-09-03
estado: Sin empezar
tags:
  - índice
  - generación-de-energía
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/investigacion/mostrarSubTemas", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Quiero investigar la generación de [[Energía|energía]], la cual puede ser interesante entender


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