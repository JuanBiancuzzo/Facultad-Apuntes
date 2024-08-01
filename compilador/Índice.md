---
dia: 2024-07-31
estado: 'Sin empezar'
tags: 
 - índice
 - compilador
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
### ¿Qué se va a investigar?
---
Vamos a explorar como funciona un compilador, y nos vamos a basar en la serie 
* [Compiler Design](https://youtube.com/playlist?list=PLBlnK6fEyqRjT3oJxFXRgjPNzeS-LFY-q&si=cC-_dVkp4bY_VGsi)


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