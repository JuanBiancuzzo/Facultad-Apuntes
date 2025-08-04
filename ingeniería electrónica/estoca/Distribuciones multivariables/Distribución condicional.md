---
dia: 2025-03-13
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/proba/Variables-aleatorias-condicionadas
  - carrera/ingeniería-en-informática/proba/Variables-aleatorias-condicionadas
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/estoca/Distribuciones multivariables/Resumen.md]]"
  - "[[ingeniería en informática/proba/Variables aleatorias condicionadas/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Al analizar varias [[Variable aleatoria|variables aleatorias]] en forma conjunta es interesante introducir el concepto de condicionalidad. Para ello, definimos la [[Función de distribución|CDF]] condicionada a un [[Evento#En Probabilidad|evento]] $A$ que caracteriza el comportamiento de $X$ cuando sabemos que $A$ ocurrió. Si $\mathbb{P}(A) > 0$, tenemos $$ F_{X \mid A}(x) = \mathbb{P}(X \le x \mid A) = \frac{\mathbb{P}(X \le x, A)}{\mathbb{P}(A)} $$

