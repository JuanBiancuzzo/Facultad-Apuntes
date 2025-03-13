---
dia: 2025-03-13
etapa: ampliar
referencias: 
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - nota/facultad
  - carrera/ingeniería-en-informática/proba/Variables-aleatorias-condicionadas
  - carrera/ingeniería-electrónica/proba/Variables-aleatorias-condicionadas
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Al analizar varias [[Variable aleatoria|variables aleatorias]] en forma conjunta es interesante introducir el concepto de condicionalidad. Para ello, definimos la [[Función de distribución|CDF]] condicionada a un [[Evento#En Probabilidad|evento]] $A$ que caracteriza el comportamiento de $X$ cuando sabemos que $A$ ocurrió. Si $\mathbb{P} > 0$, tenemos $$ F_{X \mid A}(x) = \mathbb{P}(X \le x \mid A) = \frac{\mathbb{P}(X \le x, A)}{\mathbb{P}(A)} $$

