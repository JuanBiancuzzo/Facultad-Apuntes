---
dia: 2025-03-04
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-en-informática/distribuidos/Herramientas-de-Diseño
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/distribuidos/Herramientas de Diseño/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Este modelo, a diferencia de la [[Ley de Amdahl|ley de Amdahl]] y la [[Ley de Gustafson|ley de Gustafson-Barsis]], intenta acercarse más a la realidad para estimar las optimizaciones ofreciendo una [[Cota inferior|cota inferior]] y [[Cota superior|cota superior]] para el speedup

## Hipótesis
---
* Paralelismo imperfecto
    * No todo el trabajo paralelizable se puede ejecutar al mismo tiempo
* Greedy scheduling
    * Si existe un proceso disponible, entonces va a estar ejecutando una tarea
* Tiempo de acceso a memoria despreciable
* Tiempo de comunicación entre procesos despreciable
* Posibilidad de analizar la operación/[[Algoritmo|algoritmo]] en [[Caja blanca|caja blanca]]

## Definiciones
---
Tenemos $T_1(work)$ que es el tiempo en ejecutar "operación/algoritmo" con $1$ sólo proceso, y tenemos $T_{inf}(span)$ que es el tiempo en ejecutar el [[Sistema paralelo#^camino-critico|camino crítico]] de la "operación/algoritmo"

|   Cota   |                         Speedup                          | Consideraciones                                                         |
| :------: | :------------------------------------------------------: | :---------------------------------------------------------------------- |
| Superior | $\displaystyle \min\left(P, \frac{T_1}{T_{inf}} \right)$ | Se obtiene $P$ en escenarios de Speedup lineal                          |
| Inferior |    $\displaystyle \frac{T_1 - T_{inf}}{P + T_{inf}}$     | El trabajo se puede dividir en perfecta e imperfectamente paralelizable |

## Ejemplo
---
![[Ejemplo Modelo Work-Span.png]]

Veamos la dependencia de la cantidad de procesos

![[Model work-span dependiendo la cantidad de procesadores.png]]