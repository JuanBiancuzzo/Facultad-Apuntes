---
dia: 2025-02-10
etapa: empezado
referencias:
  - "415"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
aliases:
  - Ecuación linea diofántica equivalente
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dos [[Ecuación diofántica|ecuaciones diofánticas]] son equivalente si tienen las mismas soluciones. En el caso particular de unas [[Ecuación lineal diofántica|ecuaciones lineales diofánticas]] $a ~ x + b ~ y = c$ y $a' ~ x + b' ~ y = c'$ con las soluciones $(x,~ y) \in \mathbb{Z}^2$. En ese caso adoptamos la notación $$ a ~ x + b ~ y = c \leftrightsquigarrow a' ~ x + b' ~ y = c' $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```