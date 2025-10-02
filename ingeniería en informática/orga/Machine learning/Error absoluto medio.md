---
dia: 2025-10-01
etapa: empezado
referencias:
  - "1097"
aliases:
  - EAM
  - Mean absolute error
  - MAE
tags:
  - carrera/ingeniería-en-informática/orga/Machine-learning
  - nota/facultad
vinculoFacultad:
  - tema: Machine learning
    capitulo: 9
    materia: Organización de datos
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Dadas dos [[Variable aleatoria|variables aleatorias]] $X$ e $Y$, definimos el error absoluto medio (EAM) entre ellas como $$ \text{EAM}(X,~ Y) = \mathbb{E}\left[ \lvert X - Y \rvert \right] $$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```