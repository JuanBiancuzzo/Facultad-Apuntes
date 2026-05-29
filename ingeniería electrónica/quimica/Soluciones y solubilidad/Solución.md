---
dia: 2026-05-17
etapa: empezado
referencias: []
aliases: 
  - Solvente#^composicion
  - Soluto#^composicion
  - Solubilidad#^solubilidad
  - Solución saturada#^saturacion
  - Solución sobresaturada#^saturacion
  - Solución no saturada#^saturacion
  - Solución insaturada#^saturacion
tags:
  - carrera/ingeniería-electrónica/quimica/Soluciones-y-solubilidad
  - nota/facultad
vinculoFacultad:
  - tema: Soluciones y solubilidad
    capitulo: 8
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Es una [[Mezcla|mezcla]] homogénea de $2$ o más sustancias. Poseen la mismo composición y propiedades en cualquier punto de la misma. Esta se forma cuando una sustancia se dispersa de manera uniforme en otro

Una disolución está formada por un solvente y uno o más solutos. El solvente es el medio en que se dispersan los solutos. Donde generalmente, se denomina solvente al componente que se encuentra en mayor cantidad y solutos, a las sustancias restantes, las cuales se hallan en menor proporción ^composicion

La solubilidad de una soluciones es la máxima cantidad de soluto que puede disolver en una cantidad determinada de solvente, a una temperatura específica ^solubilidad

A partir de lo cual se establece que las soluciones saturadas alcanzan la solubilidad, las sobresaturadas la sobrepasan, mientras que las no saturadas o insaturadas no la alcanzan^saturacion

La solubilidad de una solución se la suele representar con una curva de la cantidad de [[Gramo|gramos]] de soluto disuelto por cada $100$ gramos de disolvente, en función de la [[ingeniería electrónica/seguridad/Prevención de incendios/Temperatura|temperatura]]

![[ingeniería electrónica/quimica/Soluciones y solubilidad/img/Curva de solubilidad.png|500]]

## Entalpía
---
La [[ingeniería electrónica/quimica/Soluciones y solubilidad/Entalpía|entalpía]] de las soluciones está dada por la suma de los subprocesos $$ \Delta H_{solucion} = \Delta H_{solvente} + \Delta H_{soluto} + \Delta H_{union} $$ estas son la entalpía del solvente, rompiendo las [[ingeniería electrónica/quimica/Fuerzas intermoleculares/Fuerza intermolecular|fuerzas intermoleculares]], de forma similar la entalpía de los solutos y finalmente la entalpía de la unión entre ambas

Donde si la entalpía de solución es negativa, es un [[Proceso exotérmico|proceso exotérmico]]. En cambio, si es positiva es un [[Proceso endotérmico|proceso endotérmico]]