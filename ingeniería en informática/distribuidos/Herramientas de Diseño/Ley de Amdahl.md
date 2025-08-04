---
dia: 2025-03-04
etapa: ampliar
referencias:
  - "867"
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
La ley de Amdahl es una fórmula utilizada para hallar la mejora máxima de rendimiento de un [[Sistema|sistema]] de [[Información|información]], cuando solo una parte de éste es mejorado

>[!quote] La ley establece que
>La mejora obtenida en el rendimiento de un sistema debido a la alteración de uno de sus componentes está limitada por la fracción de tiempo que se utiliza dicho componente

Esto significa que, mientras más fracción de tiempo sea utilizado el componente mejorado, mayor mejora de rendimiento, y por tanto, la mejora está limitada por esa fracción

![[Ley de Amdahl.png]]

La fórmula original de la ley es $$ T_m = T_a \cdot \left( (1 - F_m) + \frac{F_m}{A_m} \right) $$ donde 
* $F_m =$ fracción de tiempo que el sistema utiliza el subsistema mejorado
* $A_m =$ factor de mejora que se ha introducido en el subsistema mejorado
* $T_a =$ tiempo de ejecución antiguo
* $T_m =$ tiempo de ejecución mejorado


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```