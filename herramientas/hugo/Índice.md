---
dia: 2024-07-19
tags:
  - Índice
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
Vamos a investigar como funciona HUGO un [[Static Site Generator|Static Site Generator]], y entender como es que funciona.


#### Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarArchivos", { indice: dv.current() });
```


### Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/biblioIndice', { indice: dv.current() });
```