---
dia: 2023-01-22
tags:
  - carrera/ingeniería-electrónica/analisis-2/Topología/1
  - carrera/ingeniería-electrónica/analisis-3/Topología-del-plano-complejo-y-límites
  - carrera/ingeniería-en-informática/analisis-2/Topología/1
  - carrera/ingeniería-en-informática/analisis-3/Topología-del-plano-complejo-y-límites
  - carrera/licenciatura-en-ciencias-de-datos/analisis-1/Vectores-y-geometría-del-espacio
  - carrera/licenciatura-en-ciencias-físicas/analisis-1/Vectores-y-geometría-del-espacio
  - carrera/licenciatura-en-ciencias-matemáticas/analisis-1/Vectores-y-geometría-del-espacio
  - nota/facultad
aliases:
  - Circulo
referencias:
  - "517"
etapa: ampliar
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Topología del plano complejo y límites/Resumen.md]]"
  - "[[ingeniería en informática/analisis 2/Topología/Resumen Parte 1.md]]"
  - "[[licenciatura en ciencias matemáticas/analisis 1/Vectores y geometría del espacio/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dados un complejo $z_0 \in \mathbb{C}$ y un numero real positivo $r$, se definen los siguientes [[Subconjunto|subconjuntos]] del plano complejo
$$ D(z_0, r) = \{ z \in \mathbb{C} : |z - z_0| < r \}$$ 
Disco abierto de centro $z_0$ y radio $r$

De ahí podemos encontrar la inecuación del circulo, sabiendo que podemos expresar la [[Distancia euclidiana|distancia]] como $$ \sqrt{(a - a_0)^2 + (b - b_0)^2} < r $$
Por simplicidad se expresa de la siguiente forma $$ (a - a_0)^2 + (b - b_0)^2 < r^2 $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```