---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
  - carrera/ingeniería-electrónica/proba/Representación-de-variables-aleatorias
  - carrera/ingeniería-en-informática/proba/Representación-de-variables-aleatorias
  - nota/facultad
etapa: ampliar
referencias: 
aliases: 
vinculoFacultad:
  - tema: Análisis de datos
    capitulo: 3
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
  - tema: Representación de variables aleatorias
    capitulo: 3
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Sea $h : \mathbb{R} \to \mathbb{R}^+$, una [[Función de variable aleatoria|función de variable aleatoria]], tal que $h$ es [[Función par|par]], y restringida a $\mathbb{R}^+$ es creciente, y sea $X$ una [[Variable aleatoria|variable aleatoria]] tal que la [[Esperanza|esperanza]] ($E[h(X)]$) existe, entonces $$ \forall t \in \mathbb{R}, ~~~ \mathbb{P}(|X| \geq t) \leq \frac{E[h(X)]}{h(t)} $$ 