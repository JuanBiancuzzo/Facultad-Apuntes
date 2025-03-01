---
dia: 2022-09-12
tags:
  - carrera/ingeniería-electrónica/analisis-3/Funciones-elementales
  - nota/facultad
  - licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - ingeniería-en-informática/analisis-3/Funciones-elementales
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
Sea $f : A \to B$ es una [[Función|función]]. Se dice que $f$ es sobreyectiva si para todo elemento $y \in B$ ([[Codominio|codominio]]) existe al menos un elemento $x \in A$ ([[Dominio de una función|dominio]]) para el cual $f(x) = y$. Dicho de otra manera, $f$ es sobreyectiva si $Im(f) = B$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```