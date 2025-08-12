---
dia: 2025-04-15
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - nota/facultad
vinculoFacultad:
  - tema: Distribuciones multivariables
    capitulo: 2
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dado un [[Espacio de probabilidad|espacio de probabilidad]] $(\Omega,~ \mathcal{A},~ \mathbb{P})$, una [[Sucesión|sucesión]] de [[Variable aleatoria|variables aleatorias]] $X_1,~ X_2,~ \cdots$ es una sucesión de [[Función|funciones]] $$ X_n : \Omega \to \mathbb{R},~~~ n \in \mathbb{N} $$ tal que par cada $n$ se tiene que $X_n$ es una variable aleatoria

Se puede denotar de la siguiente forma $\set{X_n}_{n \in \mathbb{N}}$, indicando que se trata de un [[Conjunto|conjunto]] de variables indexadas por el conjunto $\mathbb{N}$