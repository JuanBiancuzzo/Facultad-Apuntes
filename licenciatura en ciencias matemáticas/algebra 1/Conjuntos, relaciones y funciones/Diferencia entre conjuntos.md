---
dia: 2024-10-31
etapa: sin-empezar
referencias:
  - "411"
tags:
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
vinculoFacultad:
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
Sean $A$, $B$ [[Subconjunto|subconjuntos]] de un [[Conjunto|conjunto]] referencial $U$. Se define la diferencia $A - B \coloneqq A \cap B'$, es decir $$ A \in A - B \iff x \in A ~~ \text{y} ~~ x \in B' \iff x \in A ~~ \text{y} ~~ x \notin B $$
Es decir, $A - B$ es el conjunto de los elementos de $A$ que no son elementos de $B$ $$ A - B = \Set{ a \in A : a \notin B } $$
Dada por la [[Tabla de verdad|tabla de verdad]] $$ \begin{array}{|c:c:c|c|}
\hline
A & B & B' & A - B \\\hline
V & V & F & F \\
V & F & V & V \\
F & V & F & F \\
F & F & V & F \\\hline
\end{array} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```