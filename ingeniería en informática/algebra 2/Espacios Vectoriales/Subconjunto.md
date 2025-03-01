---
dia: 2024-01-13
tags:
  - carrera/ingeniería-en-informática/algebra-2/Espacios-Vectoriales
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/ingeniería-electrónica/algebra-2/Espacios-Vectoriales
  - licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
referencias:
  - "411"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $A$ un [[Conjunto|conjunto]]. Se dice que un conjunto $B$ está contenido en $A$, y se nota $B \subseteq A$ (o también $B \subset A$), si todo elemento de $B$ es un elemento de $A$. En ese caso decimos también que $B$ está incluido en $A$, o que $B$ es un subconjunto de $A$. Si $B$ no es un subconjunto de $A$ se nota $B \nsubseteq A$ (o $B \not \subset A$)

$B$ está incluido en $A$ si para todo $x$, se tiene que si $x$ pertenece a $B$ entonces $x$ pertenece a $A$ $$ B \subseteq A ~\text{si}~ \forall x, ~ x \in B \implies x \in A $$

$B$ no está incluido en $A$ si existe $x$ perteneciendo a $B$ tal que $x$ no pertenece a $A$ $$ B \nsubseteq A ~\text{si}~ \exists x \in B : x \notin A $$

## Ejemplos
---
* Sea $A = \set{ 1,~2,~3 }$: $$ \set{1} \subseteq A, ~~~~ \set{1,~3} \subseteq A, ~~~~ \emptyset \subseteq A, ~~~~ A \subseteq A, ~~~~ \set{3,~4} \nsubseteq A $$
* $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$
* $A \subseteq A$ y $\emptyset \subset A$ cualquiera sea el conjunto $A$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```