---
dia: 2024-08-02
tags:
  - nota/facultad
  - ingeniería-en-informática/discreta/Álgebra-proposicional
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
aliases:
  - Igualdad de conjuntos
referencias:
  - "411"
etapa: sin-empezar
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se define las implicancias utilizando los elementos del [[Álgebra de Boole|álgebra de Boole]] $$ p \leftrightarrow q \overset{\text{def}}{=} (p \to q)(q \to p) $$

## Álgebra de conjuntos
---
Se puede definir la igualdad de dos [[Conjunto|conjuntos]] $$ A = B \iff A \subseteq B ~~\text{y}~~ B \subseteq A $$
Es decir $A = B$ si tienen exactamente los mismos elementos (sin importar el orden y sin tener en cuenta repeticiones de elementos)

Dada por la [[Tabla de verdad|tabla de verdad]] $$ \begin{array}{|c:c|c|}
\hline
A & B & A = B\\
\hline
V & V & V \\
V & F & F \\
F & V & F \\
F & F & V \\
\hline
\end{array} $$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```