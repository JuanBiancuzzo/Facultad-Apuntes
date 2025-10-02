---
dia: 2025-10-01
etapa: empezado
referencias:
  - "1098"
aliases:
  - F1 score
tags:
  - carrera/ingeniería-electrónica/taller-de-señales/Clasificación-en-Inteligencia-Artificial
  - nota/facultad
vinculoFacultad:
  - tema: Clasificación en Inteligencia Artificial
    capitulo: 3
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
$$ F_\beta = \frac{\beta^2 + 1}{(\beta^2 ~ \text{recall}^{-1}) + \text{precision}^{-1}} = \frac{(1 + \beta^2) ~ \text{precision} \cdot \text{recall}}{(\beta^2 ~\text{precision}) + \text{recall}} $$ donde se puede ver que se usa [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Recall|recall]] y [[ingeniería electrónica/taller de señales/Regresión en Inteligencia Artificial/Precisión|precision]]

Un caso especifico muy conocido es el caso donde $\beta = 1$ dando el resultado llamado F1-score $$ F_1 = \frac{2}{\text{recall}^{-1} + \text{precision}^{-1}} = 2 ~ \frac{\text{precision} \cdot \text{recall}}{\text{precision} + \text{recall}}$$ 



# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```