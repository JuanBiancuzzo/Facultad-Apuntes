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

También vamos a ver animación tradicional para entender ese paradigma también, y nos podemos basar en canales como 
* [Alex Grigg // Animation for Anyone](https://www.instagram.com/reel/C9iAn55gOy5/?igsh=MXR6eGpsZmMxZ2pvbw==)

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