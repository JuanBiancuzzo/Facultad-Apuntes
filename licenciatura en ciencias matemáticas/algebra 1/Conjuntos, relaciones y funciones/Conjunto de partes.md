---
dia: 2024-10-30
etapa: sin-empezar
referencias:
  - "411"
tags: 
 - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
 - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $A$ un [[Conjunto|conjunto]]. El conjunto de partes de $A$, que se nota $\mathcal{P}(A)$, es el conjunto formado por todos los [[Subconjunto|subconjuntos]] de $A$, o sea el conjunto cuyos elementos son los subconjuntos de $A$. Es decir $$ \mathcal{P}(A) = \set{ B : B \subset A } $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```