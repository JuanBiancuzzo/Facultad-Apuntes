---
dia: 2022-09-12
tags:
  - ingeniería-electrónica/analisis-3/Funciones-elementales
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - ingeniería-en-informática/analisis-3/Funciones-elementales
  - licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
referencias:
  - "411"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $f : A \to B$ es una [[Función|función]]. Se dice que $f$ es biyectiva si es a la vez [[Función inyectiva|inyectiva]] y [[Función sobreyectiva|sobreyectiva]], es decir para todo elemento $y \in B$ ([[Codominio|codominio]]) existe exactamente un elemento $x \in A$ ([[Dominio de una función|dominio]]) para el cual $f(x) = y$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```