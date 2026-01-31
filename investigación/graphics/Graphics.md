---
dia: 2026-01-30
tags:
  - investigación/graphics
  - investigación/índice
  - nota/investigacion
estado: Falta resumir
---
```dataviewjs
await dv.view("_scripts/dataview/investigacion/superTema", { indice: dv.current() });
```
# ¿Qué se va a investigar?
---
Quiero entender bien la historia de como se renderizan los objetos en una computadora

Papers que me gustaría leer:
* Rasterization
    * raster - late 60'
    * phong 1975
    * zbuffer 1974
    * cube maps 1986
    * shadow maps 1978
    * PBR 2010s
    * G buffers 1990
* Ray tracing
    * ray cast 1968
    * ray trace 1979
    * bvh 1980
    * real time ray tracing 2018
    * dis ray trace 1984
    * path trace 1986
* Signed Distance Fields
    * ray march 1989
    * sphere trace 1995
    * SDF 2007
    * mesh dis fields 2014
    * DF SS 2014
    * DF AO 2014
* Screen- Space techniques & Denoising
    * SS AO 2007
    * SS bent normal 2011
    * SSR 2010
    * TAA 1011
    * temporal accumulation 2010s
    * SVGF 2018
    * spatial filtering 2010s
* Global illumination
    * irradiance cache 1988
    * light map 1996
    * probes 1998
    * importance sampling 1998
    * spherical harmonics 2001
    * octahedral mapping 2003
    * radiance cache 2005

Estos papers los menciona en los videos:
* [Cap 1](https://youtu.be/K0HG266Ai6I?si=DHqSs7kzPNAoPjGG)
* [Cap 2](https://youtu.be/cddCr95fnvI?si=ee6j0b4gMtk7ki0g)
* [Cap 3](https://youtu.be/v8_JmK906fw?si=JDOgGioQBNNNkqLw)

## Resumen
---


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