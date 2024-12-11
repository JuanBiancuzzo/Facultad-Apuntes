---
dia: 2024-12-10
etapa: empezado
referencias:
  - "414"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-enteros
  - licenciatura-en-ciencias-de-datos/algebra-1/Números-enteros
  - nota/facultad
aliases:
  - Mcd
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sean $a,~ b \in \mathbb{Z}$, no ambos nulos. El máximo común divisor entre $a$ y $b$, que se nota $(a:b)$, es el mayor de los divisores comunes de $a$ y $b$. Es decir $$ (a:b) \mid a, ~ (a:b) \mid b ~~ \text{y si} ~ d \mid a ~\text{y}~ d \mid b, ~~ \text{entonces} ~ d \le (a:b) $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```