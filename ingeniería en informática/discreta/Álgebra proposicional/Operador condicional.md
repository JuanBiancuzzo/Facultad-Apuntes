---
dia: 2024-08-02
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/discreta/Álgebra-proposicional
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
referencias:
  - "411"
etapa: sin-empezar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se define las implicancias utilizando los elementos del [[Álgebra de Boole|álgebra de Boole]] $$ p \to q \overset{\text{def}}{=} p' + q $$
## Álgebra de conjuntos
---
Se dice que "pertenecen" al conjunto, se denota mediante el símbolo $\in$. Si un objeto no pertenece al conjunto, se denota mediante el símbolo $\notin$ 

$A \subset B$ se lee "A incluido en B", significa que todos los elementos de $A$ pertenecen a $B$ $$ \forall a \in A : a \in B $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```