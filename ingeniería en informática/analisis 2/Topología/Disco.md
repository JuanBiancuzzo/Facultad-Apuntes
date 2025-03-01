---
dia: 2022-09-02
tags:
  - nota/facultad
  - carrera/ingeniería-electrónica/analisis-3/Topología-del-plano-complejo-y-límites
  - ingeniería-en-informática/analisis-2/Topología/1
  - carrera/ingeniería-electrónica/analisis-2/Topología/1
  - ingeniería-en-informática/analisis-3/Topología-del-plano-complejo-y-límites
  - licenciatura-en-ciencias-matemáticas/analisis-1/Vectores-y-geometría-del-espacio
  - licenciatura-en-ciencias-de-datos/analisis-1/Vectores-y-geometría-del-espacio
  - licenciatura-en-ciencias-físicas/analisis-1/Vectores-y-geometría-del-espacio
referencias:
  - "517"
etapa: ampliar
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