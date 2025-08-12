---
dia: 2022-09-02
tags:
  - carrera/ingeniería-electrónica/analisis-2/Topología/1
  - carrera/ingeniería-electrónica/analisis-3/Topología-del-plano-complejo-y-límites
  - carrera/ingeniería-en-informática/analisis-2/Topología/1
  - carrera/ingeniería-en-informática/analisis-3/Topología-del-plano-complejo-y-límites
  - carrera/licenciatura-en-ciencias-de-datos/analisis-1/Vectores-y-geometría-del-espacio
  - carrera/licenciatura-en-ciencias-físicas/analisis-1/Vectores-y-geometría-del-espacio
  - carrera/licenciatura-en-ciencias-matemáticas/analisis-1/Vectores-y-geometría-del-espacio
  - nota/facultad
referencias:
  - "517"
etapa: ampliar
vinculoFacultad:
  - tema: Topología del plano complejo y límites
    capitulo: 1
    materia: Análisis matemático 3
    carrera: Ingeniería electrónica
  - tema: Topología
    capitulo: 2
    materia: Análisis matemático 2 A
    carrera: Ingeniería en informática
  - tema: Vectores y geometría del espacio
    capitulo: 1
    materia: Análisis 1
    carrera: Licenciatura en Ciencias Matemáticas
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
[[Conjuntos|Conjunto]] de puntos alrededor de un valor $z_0$ a una distancia $r$ del mismo. En ese caso estamos en el conjunto de los complejos, pero no necesariamente nos tendríamos que limitar a este para esta definición. Estos conjuntos los podemos definir como
* [[Disco abierto|Disco abierto]]
* [[Disco cerrado|Disco cerrado]]
* [[Disco abierto reducida|Disco abierto reducido]]

## Datos adicionales
---
$$D(z_0, \infty) = \mathbb{C}$$
$$D(z_0, 0) = \emptyset$$
$$\overline{D}(z_0,\infty) = \mathbb{C}$$
$$\overline{D}(z_0, 0) = \{z_0\}$$
$$D_0(z_0, \infty) = \mathbb{C} - \{z_0\}$$



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```