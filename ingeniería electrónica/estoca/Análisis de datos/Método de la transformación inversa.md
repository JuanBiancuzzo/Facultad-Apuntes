---
dia: 2025-03-20
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
  - nota/facultad
vinculoFacultad:
  - tema: Análisis de datos
    capitulo: 3
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Queremos una [[ingeniería electrónica/señales/Señales y sistemas/Transformación|transformación]] $g: \mathbb{R} \to \mathbb{R}$ para obtener realizaciones de una [[Variable aleatoria|VA]] $X$ (de cierta [[Función de distribución|distribución]]) a partir de una VA [[Distribución uniforme|uniforme]] $U \sim U(0,~ 1)$

La función de distribución $F_X(x)$ tiene que cumplir
* $F_X(x)$ debe ser una [[Función continua|función continua]]
* $F_X(x)$ debe ser [[Función monótona|monótona]] creciente
* $F_X(x)$ debe ser [[Función inversa|invertible]]

## Procedimiento
----
1. Generar un número random $U \sim U(0,~ 1)$
2. Obtener una realización de $Z = F_X^{-1}(U)$

## Caso variable discreta
---
En el caso de las [[Variable aleatoria discreta|variables aleatorias discretas]] usamos la función inversa $$ F_X^{-1}(u) = \min\set{ x \in \mathbb{R} : u \le F_X(x) } $$ que nos permite obtener un valor para las discontinuidades de la función de distribución