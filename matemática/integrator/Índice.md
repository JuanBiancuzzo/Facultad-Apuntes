---
dia: 2024-07-08
tags:
  - índice
  - matemática/integrator
estado: Falta resumir
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/mostrarSuperTema", { indice: dv.current() });
await dv.view("_scripts/dataview/investigacion/mostrarSubTemas", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
En el mismo sentido que [[matemática/integrator/métodos de Runge-Kutta/Índice|Runge-Kutta methods]] vamos a ver como resolver el [[Lagrangian mechanics/Índice|Índice]] de forma numérica, con sistemas de corrección.


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