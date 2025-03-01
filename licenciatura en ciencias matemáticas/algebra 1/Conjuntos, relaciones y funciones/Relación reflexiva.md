---
dia: 2024-11-02
etapa: sin-empezar
referencias:
  - "411"
tags:
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
  - carrera/ingeniería-en-informática/discreta/Relaciones
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $A$ un [[Conjunto|conjunto]] y $\mathcal{R}$ una [[Relación#Relación en un conjunto|relación]] en $A$. Se dice que $\mathcal{R}$ es reflexiva si $(x,~x) \in \mathcal{R}$, $\forall x \in A$ (dicho de otra manera, $x \mathcal{R} x$, $\forall x \in A$)

En términos del [[Relación#Representación con grafos|grafo de la relación]], $\mathcal{R}$ es reflexiva si en cada vértice hay una flecha que es un [[Camino#Ciclo (Cicle)|ciclo]]

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```