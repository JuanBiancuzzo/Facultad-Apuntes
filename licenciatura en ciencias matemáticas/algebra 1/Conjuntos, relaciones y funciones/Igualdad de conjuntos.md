---
dia: 2024-10-30
etapa: sin-empezar
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
referencias:
  - "411"
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se puede definir la igualdad de dos [[Conjunto|conjuntos]] $$ A = B \iff A \subseteq B ~~\text{y}~~ B \subseteq A $$
Es decir $A = B$ si tienen exactamente los mismos elementos (sin importar el orden y sin tener en cuenta repeticiones de elementos)

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```