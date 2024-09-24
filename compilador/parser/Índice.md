---
dia: 2024-07-31
estado: Sin empezar
tags:
  - índice
  - parser
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/investigacion/mostrarSubTemas", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar como crear un parser y como crear uno, ya sea manual o automáticamente, siguiendo las series
* [Building a Parser from scratch](https://youtube.com/playlist?list=PLGNbPb3dQJ_5FTPfFIg28UxuMpu7k0eT4&si=N-33h-Cr6uyvjryb)
* [Parsing Algorithms](https://youtube.com/playlist?list=PLGNbPb3dQJ_6aPNnlBvXGyNMlDtNTqN5I&si=zQhvQe_9hpehq7jv)


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