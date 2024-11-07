---
dia: 2024-11-05
etapa: ampliar
referencias:
  - "412"
tags:
  - licenciatura-en-ciencias-matemáticas/algebra-1/Números-naturales-e-Inducción
  - nota/facultad
  - discreta/Inducción
aliases:
  - Inducción fuerte
  - PIC
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/mostrarEtapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Sea $p(n)$, $n \in \mathbb{N}$, una afirmación sobre los [[Números Naturales|números naturales]]. Si $p$ satisface 
* (Caso base) $p(1)$ es Verdadera
* (Paso inductivo) $\forall h \in \mathbb{N}$, $p(k)$ Verdadera para $1 \le k \le h$ $\implies p(h + 1)$ es Verdadera
entonces $p(n)$ es Verdadero, $\forall n \in \mathbb{N}$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/investigacion/referenciasView", { archivo: dv.current() });
```