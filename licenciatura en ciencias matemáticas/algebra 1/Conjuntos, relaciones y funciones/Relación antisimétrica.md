---
dia: 2024-11-02
etapa: sin-empezar
referencias:
  - "411"
tags:
  - carrera/ingeniería-en-informática/discreta/Relaciones
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería en informática/discreta/Relaciones/Resumen.md]]"
  - "[[licenciatura en ciencias matemáticas/algebra 1/Conjuntos, relaciones y funciones/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $A$ un [[Conjunto|conjunto]] y $\mathcal{R}$ una [[Relación#Relación en un conjunto|relación]] en $A$. Se dice que $\mathcal{R}$ es antisimétrica si cada vez que un par $(x,~y) \in \mathcal{R}$ con $x \ne y$, entonces el par $(y,~x) \notin \mathcal{R}$ (dicho de otra manera, $\forall x,~y \in A$, $x\mathcal{R}y$ e $y\mathcal{R}x \implies x = y$)

En términos del [[Relación#Representación con grafos|grafo de la relación]], $\mathcal{R}$ es antisimétrica si no hay ningún par de flechas en sentidos opuestos que unen dos vértices distintos

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```