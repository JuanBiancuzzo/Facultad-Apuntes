---
dia: 2024-07-08
tags:
  - investigación/índice
  - investigación/ciencias-de-la-computación/lenguajes-de-programación/lenguaje-Rust/rayon
estado: Falta resumir
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Se busca entender la [[colección/librerias/Librerias|librería]] Rayon, para aprender a usarla y manejar [[ingeniería en informática/sisop/Concurrencia/Concurrencia|procesos concurrentes]] en [[investigación/ciencias de la computación/lenguajes de programación/lenguaje Rust/Lenguaje Rust|Rust]] sin perder las ventajas que tiene el código sincrónica, a diferencia del [[ingeniería en informática/distribuidos/Herramientas de Diseño/Sincronismo|código asincrónico]] de Rust

## Resumen
---
 #carrera/ingeniería-en-informática/concurrentes/Fork-join
Esta [[Crate|crate]] es muy popoular, creada por Niko Matsakis, la cual implementa el [[ingeniería en informática/concurrentes/Fork join/Fork-join|model fork join]], donde utiliza [[ingeniería en informática/concurrentes/Fork join/Work stealing|work stealing]] en los [[ingeniería en informática/taller/Concurrencia/Paralelo|procesos paralelos]] que maneja

## Archivos
---
```dataviewjs
await dv.view("_scripts/dataview/contenido/listaAcumulada", { archivo: dv.current() });
```


# Bibliografía
---
```dataviewjs
await dv.view('_scripts/dataview/referencia/referenciasAcumuladas', { archivo: dv.current() });
```