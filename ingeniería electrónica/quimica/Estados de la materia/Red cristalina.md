---
dia: 2026-05-16
etapa: empezado
referencias:
  - "1152"
  - "1153"
aliases:
  - Celda unitaria#Celda unitaria
  - Unidad elemental de una celda unitaria#^unidad-elemental
  - Número de coordinación de una celda unitaria#^numero-coordinacion
tags:
  - carrera/ingeniería-electrónica/quimica/Estados-de-la-materia
  - nota/facultad
vinculoFacultad:
  - tema: Estados de la materia
    capitulo: 7
    materia: Química y electroquímica
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
La estructura cristalina es la forma [[Sólido|sólida]] de cómo se ordenan y empaquetan las partículas. Estos son empaquetados de manera ordenada y con patrones de repetición que se extienden en las tres dimensiones del espacio. Esta estructura son celdas unitarias que se repiten 

## Celda unitaria
---
Se define como celda unitaria a la unidad estructural fundamental de la estructura cristalina, determinada por la geometría y la posición de las partículas dentro de la celda

![[ingeniería electrónica/quimica/Estados de la materia/img/Celda unitaria.png]]

Se definen magnitudes importantes dada una celda unitaria, entre ellas esta
* La unidad elemental ^unidad-elemental
	* La cual define la cantidad de partículas que existen dentro de la celda
	* Si existe en un [[ingeniería electrónica/intro/Circuitos con resistencias/Nodo|vértice]], este será $\displaystyle \frac{1}{8}$ de unidad elemental, de forma similar, en una [[Arista|arista]] es $\displaystyle \frac{1}{4}$ y en una cara es $\displaystyle \frac{1}{2}$
* El número de coordinación ^numero-coordinacion
	* Corresponde a la cantidad de unidades elementales vistas desde cualquier vértice de la celda 

### Clasificación
---
Entre ellos se encuentran las clasificaciones 
* Cúbica simple
	* $a = b = c$
	* $\alpha = \beta = \gamma = 90$
* Tetragonal
	* $a = b \ne c$
	* $\alpha = \beta = \gamma = 90$
* Ortorombico
	* $a \ne b \ne c$
	* $\alpha = \beta = \gamma = 90$
* Romboédrico
	* $a = b = c$
	* $\alpha = \beta = \gamma \ne 90$
* Monoclínico
	* $a \ne b \ne c$
	* $\gamma \ne \alpha = \beta = 90$
* Triclínico
	* $a \ne b \ne c$
	* $\alpha \ne \beta \ne \gamma \ne 90$
* Hexagonal
	* $a = b \ne c$
	* $\alpha = \beta = 90,~ \gamma = 120$

Existen alteraciones a estas como
* La cúbica centrada en el cuerpo
* La cúbica centrada en las caras
* Hexagonal compacta

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```