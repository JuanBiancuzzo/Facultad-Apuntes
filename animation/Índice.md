---
dia: 2024-07-08
tags:
  - índice
  - animation
estado: Falta resumir
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/investigacion/mostrarSubTemas", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a ver como producir las mejores animaciones, con el menor esfuerzo posible y la mayor expresividad posible. Esto nos va a llevar a aprender sobre muchas cosas como inverse kinematic, rigging y otras cosas

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