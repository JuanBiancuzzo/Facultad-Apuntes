---
dia: 2024-09-03
estado: 'Sin empezar'
tags: 
 - índice
 - física
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Quiero ver todos los elementos de la física que me interesan pero no llegue a ver por mi cuenta


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