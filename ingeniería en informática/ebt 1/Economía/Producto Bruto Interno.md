---
dia: 2026-09-02
etapa: empezado
referencias: []
aliases:
  - PBI
  - Producto Bruto Interno a precios corrientes#^pbi-corrientes
  - PBI a precios corrientes#^pbi-corrientes
  - Producto Bruto Interno a precios constantes#^pbi-constantes
  - PBI a precios constantes#^pbi-constantes
tags:
  - carrera/ingeniería-en-informática/ebt-1/Economía
  - nota/facultad
ejercicios: []
vinculoFacultad:
  - tema: Economía
    capitulo: 2
    materia: Empresas de Bases Tecnológicas 1
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El Producto Bruto Interno (PBI) es la suma de todos los [[ingeniería electrónica/legal/Introducción al derecho/Bien|bienes y servicios]] producidos en una [[investigación/storytelling/worldbuilding/Economía|economía]] durante un período de tiempo, normalmente un año

Si esa suma se valúa a los precios del propio período, es PBI a precios corrientes, y está dado por $$ \text{Canaste}_t = \sum_i p_i^t ~ q_i^t $$ donde $p_i^t$ es al [[Precio|precio]] del producto $i$ en el periodo $t$, y $q_i^t$ es la cantidad vendida del producto $i$ en el periodo $t$ ^pbi-corrientes

Si esa suma se valúa a los precios de un propio base, es PBI a precios constantes, y está dado por $$ \text{Canasta}_t = \sum_i p_i^o ~ q_i^t $$ donde $p_i^o$ es al precio del producto $i$ en el periodo base $o$, y $q_i^t$ es la cantidad vendida del producto $i$ en el periodo $t$ ^pbi-constantes

E PBI a precios constantes hacen comparables las mediciones, ya que sacan el efecto de la [[Inflación|inflación]] del medio
