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
  - tema: Relaciones
    capitulo: 4
    materia: Matemática discreta
    carrera: Ingeniería en informática
  - tema: Conjuntos, relaciones y funciones
    capitulo: 1
    materia: Álgebra 1
    carrera: Licenciatura en Ciencias Matemáticas
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $A$ un [[Conjunto|conjunto]] y $\mathcal{R}$ una [[Relación#Relación en un conjunto|relación]] en $A$. Se dice que $\mathcal{R}$ es simétrica si cada vez que un par $(x,~y) \in \mathcal{R}$, entonces el par "simétrico" $(y,~x) \in \mathcal{R}$ también (dicho de otra manera, $\forall x,~y \in A$, $x\mathcal{R}y \implies y\mathcal{R}x$)

En términos del [[Relación#Representación con grafos|grafo de la relación]], $\mathcal{R}$ es simétrica si por cada flecha que une dos [[Nodo|vértices]] en un sentido, hay una flecha (entre los mismos vértices) en el sentido opuesto

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```