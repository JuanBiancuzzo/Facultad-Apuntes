---
dia: 2022-09-12
tags:
  - carrera/ingeniería-electrónica/analisis-3/Funciones-elementales
  - carrera/ingeniería-en-informática/analisis-3/Funciones-elementales
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
referencias:
  - "411"
etapa: ampliar
vinculoFacultad:
  - "[[ingeniería electrónica/analisis 3/Funciones elementales/Resumen.md]]"
  - "[[licenciatura en ciencias matemáticas/algebra 1/Conjuntos, relaciones y funciones/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $f : A \to B$ es una [[Función|función]]. Se dice que $f$ es inyectiva si para todo elemento $y \in B$ ([[Codominio|imagen]]) existe a lo sumo un elemento $x \in A$ ([[Dominio|dominoo]]) para el cual $f(x) = y$. Dicho de otra manera, $f$ es inyectiva si para todo $x, ~x' \in A$ tales que $f(x) = f(x')$ se tiene que $x = x'$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```