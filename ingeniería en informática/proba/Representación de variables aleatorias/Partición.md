---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Repaso
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-en-informática/discreta/Grafos
  - carrera/ingeniería-en-informática/discreta/Relaciones
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - carrera/licenciatura-en-ciencias-de-datos/algebra-1/Conjuntos-relaciones-y-funciones
  - carrera/licenciatura-en-ciencias-matemáticas/algebra-1/Conjuntos-relaciones-y-funciones
  - nota/facultad
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dado un [[Conjunto|conjunto]] $A$ se define partición como los conjuntos $A_1, A_2, \cdots, A_n$ con $n \geq 2$ tal que cumplen
1. $A_i \cap A_j = \emptyset$, $\forall i \ne j$
2. $\displaystyle \bigcup_{k = 1}^{n} A_k = A$

También se lo puede resumir, donde los [[Conjuntos disjuntos 2 a 2|conjuntos mutuamente excluyentes 2 a 2]] suman el conjunto completo $A$

## Ejemplo de probabilidad
---
Por lo que los [[Evento|eventos]] $B_1, B_2, \cdots, B_k$ forman una partición de un [[Espacio muestral|espacio muestral]] $\Omega$ si 
1. $B_i \cap B_j = \emptyset$, $\forall i \ne j$
2. $\displaystyle \bigcup_{k = 1}^{n} B_k = \Omega$