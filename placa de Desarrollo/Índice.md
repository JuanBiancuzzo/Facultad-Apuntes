---
dia: 2024-09-15
estado: 'Sin empezar'
tags: 
 - índice
 - placa-de-Desarrollo
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/mostrarSubTemas", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a investigar sobre las posibles placas que voy a usar, y me parece útil tener información 


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