---
dia: 2024-12-23
tags:
  - investigación/índice
  - nota/investigacion
  - investigación/electrónica
estado: Sin empezar
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Vamos a incorporar todas las áreas de la electrónica

## Resumen
---
%% Hacer cuadro representativo de los temas %%

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/mostrarTemaInvestigacion", { indice: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/referencia/referenciasAcumuladas', { archivo: dv.current() });
```