---
dia: 2024-11-04
etapa: sin-empezar
referencias:
  - "411"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
  - licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $f,~g : A \to B$ [[Función|funciones]]. Se tiene $$ f = g \iff f(x) = g(x), ~~ \forall x \in A $$
Todos los elementos del [[Dominio de una función|dominio]] tienen que estar involucrados en una función, o sea tienen que tener al menos una [[Codominio|imagen]] $y$ con $y = f(x)$, pero puede ocurrir que haya elementos $y$ del [[Codominio|codominio]] que no estén involucrados, que no tengan [[Preimagen de una transformación lineal|preimagen]] $x$ tal que $f(x) = y$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```