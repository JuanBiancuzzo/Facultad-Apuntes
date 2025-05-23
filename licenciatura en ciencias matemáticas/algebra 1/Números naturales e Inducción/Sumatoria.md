---
dia: 2024-11-04
etapa: terminado
referencias:
  - "412"
tags:
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Números-naturales-e-Inducción
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $(a_i)_{i \in \mathbb{N}} = (a_1,~ a_2,~ \cdots)$ una [[Sucesión|sucesión]] de números $a_i \in A$ que se pueden sumar en el [[Conjunto|conjunto]] $A$

Sea $n \in \mathbb{N}$. LA notación $\displaystyle \sum_{i = 1}^n a_i$, que se lee la sumatoria para $i$ de $1$ a $n$ de $a_i$, representa la suma de los $n$ primeros términos de la sucesión $$ \sum_{i = 1}^n a_i = a_1 + \cdots + a_n $$ que se define formalmente por [[Recurrencia|recurrencia]], para evitar los puntos suspensivos  $$ \sum_{i = 1}^1 a_i = a_1 ~~~~ \text{y} ~~~~ \sum_{i = 1}^{n + 1} a_i = \sum_{i = 1}^n a_i + a_{n + 1}, ~~~ \forall n \in \mathbb{N} $$


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```