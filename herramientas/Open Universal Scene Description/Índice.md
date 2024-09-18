---
dia: 2024-08-26
estado: Sin empezar
tags:
  - índice
  - herramientas/Open-Universal-Scene-Description
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar la forma de representar de forma estandarizada una escena en distintos softwares, basándonos en la documentación en [openUSD](https://openusd.org/release/index.html)


## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarArchivos", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/biblioIndice', { indice: dv.current() });
```