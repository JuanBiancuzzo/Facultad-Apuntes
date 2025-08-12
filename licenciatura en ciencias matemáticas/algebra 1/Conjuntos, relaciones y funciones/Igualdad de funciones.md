---
dia: 2024-11-04
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
Sean $f,~g : A \to B$ [[Función|funciones]]. Se tiene $$ f = g \iff f(x) = g(x), ~~ \forall x \in A $$
Todos los elementos del [[Dominio|dominio]] tienen que estar involucrados en una función, o sea tienen que tener al menos una [[Codominio|imagen]] $y$ con $y = f(x)$, pero puede ocurrir que haya elementos $y$ del [[Codominio|codominio]] que no estén involucrados, que no tengan [[Preimagen de una transformación lineal|preimagen]] $x$ tal que $f(x) = y$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```