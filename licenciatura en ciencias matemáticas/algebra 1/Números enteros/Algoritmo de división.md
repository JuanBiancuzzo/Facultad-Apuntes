---
dia: 2024-11-12
etapa: empezado
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
  - algoritmos
aliases:
  - Cociente
  - Resto
  - Dividendo
  - Divisor
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dados $a,~ d \in \mathbb{Z}$ con $d \ne 0$, existen $k,~ r \in \mathbb{Z}$ que satisfacen $$ a = k \cdot d + r, ~~~ \text{con} ~ 0 \le r z < |d| $$
Además, $k$ y $r$ son únicos en tales condiciones

Se dice que $k$ es el cociente y $r$ es el resto de la división de $a$ por $d$ ($a$ es el dividendo y $d$ el divisor)

Al resto $r$ lo notaremos $r_d(a)$ para especificar que es el "resto de $a$ al dividir por $d$"

> [!quote]+ Demostración
> 


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```