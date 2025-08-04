---
dia: 2025-03-23
etapa: ampliar
referencias:
  - "899"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/control/Respuesta dinámica/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
La tendencia moderna de los [[Sistema|sistema]] de ingeniería es hacia una mayor complejidad, debido sobre todo a que se requieren tareas más complejas y buena precisión. Los sistemas complejos pueden tener múltiples entradas y múltiples salidas y pueden ser variantes en el tiempo. Debido a la necesidad de cumplir requisitos cada vez más exigentes en el comportamiento de los sistemas de control, el aumento en la complejidad del sistema y el fácil acceso a las [[Computadora|computadoras]] a gran escala, la teoría moderna de control, que es una nueva aproximación al análisis y diseño de los sistemas de control complejos, se ha desarrollado desde $1960$. Esta nueva aproximación se basa en el concepto de [[Estado#En teoría de control|estado]]. El concepto de estado por sí mismo no es nuevo, puesto que ha existido durante bastante tiempo en el [[Sistema dinámico|campo de la dinámica]] clásica y en otros campos

## Contraste con teoría de control convencional
---
La tendencia de control moderna contrasta con la teoría de control convencional en que su formulación es aplicable a sistemas de múltiples-entradas, múltiples-salidas, que pueden ser [[Sistema lineal|lineales o no lineales]], [[Sistema invariante en el tiempo|invariables en el tiempo o variables en el tiempo]], mientras que la teoría convencional sólo es aplicable a sistemas de una entrada-una salida invariantes en el tiempo

Además, la teoría de control moderna es esencialmente una aproximación en el [[Dominio|dominio]] temporal, mientras que la teoría de control convencional es una aproximación en el dominio de la frecuencia compleja

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```