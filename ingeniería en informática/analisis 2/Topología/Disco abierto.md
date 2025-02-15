---
dia: 2023-01-22
tags:
  - nota/facultad
  - ingeniería-electrónica/analisis-3/Topología-del-plano-complejo-y-límites
  - ingeniería-en-informática/analisis-2/Topología/1
  - ingeniería-electrónica/analisis-2/Topología/1
  - ingeniería-en-informática/analisis-3/Topología-del-plano-complejo-y-límites
  - licenciatura-en-ciencias-matemáticas/analisis-1/Vectores-y-geometría-del-espacio
  - licenciatura-en-ciencias-de-datos/analisis-1/Vectores-y-geometría-del-espacio
  - licenciatura-en-ciencias-físicas/analisis-1/Vectores-y-geometría-del-espacio
aliases:
  - Circulo
referencias:
  - "517"
etapa: ampliar
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
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```