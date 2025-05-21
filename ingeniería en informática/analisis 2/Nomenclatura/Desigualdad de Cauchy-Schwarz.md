---
dia: 2023-01-22
tags:
  - nota/facultad
  - carrera/ingeniería-en-informática/analisis-2/Nomenclatura
  - carrera/ingeniería-electrónica/analisis-2/Nomenclatura
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
etapa: ampliar
referencias: []
aliases:
  - Teorema de Cauchy-Schwarz
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
$$(x \cdot y)^2 \le (x)^2(y)^2$$

Para ver la definición de un vector al cuadrado ver [[Potencias de un vector|potencia de vectores]]

## Para probabilidad
---
Sean $X$ e $Y$ dos [[Variable aleatoria|variables aleatorias]]. Luego, $$ E^2[X~Y] \le E\left[ X^2 \right] ~ E\left[ Y^2 \right] $$
Una formulación equivalente considera los [[Covarianza cruzada|momentos centrados]], resultando $$ Cov^2(X,~ Y) \le \sigma_X^2 ~ \sigma_Y^2 $$