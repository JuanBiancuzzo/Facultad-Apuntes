---
dia: 2025-04-08
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/estoca/Distribuciones multivariables/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Considerando el caso donde $X_1$ es un [[Variable aleatoria continua#Para vector aleatorio|vector continuo]] y $X_2$ un [[Variable aleatoria discreta#Para vector aleatorio|vector discreto]], es decir que $X = [X_1,~ X_2]^T$ es un [[Variable aleatoria mixta#Para vector aleatorio|vector mixto]]

Al ser mixto $X$ no admite [[Función de densidad de probabilidad|PDF]] ni [[Función de masa de probabilidad|PMF]], pero podemos usar la [[Probabilidad condicional|fórmula de Bayes]] obtenemos la siguiente relación $$ f_{X_1 \mid X_2 = x_2}(x_1) ~ p_{X_2}(x_2) = p_{X_2 \mid X_1 = x_1} (x_2) ~ f_{X_1}(x_1) $$

