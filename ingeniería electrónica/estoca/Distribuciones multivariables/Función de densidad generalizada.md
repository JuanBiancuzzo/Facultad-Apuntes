---
dia: 2025-03-13
etapa: ampliar
referencias: []
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
En general, para no tener que diferencia entre [[Vector aleatorio|vector aleatorio]] [[Variable aleatoria continua|continuo]] y [[Variable aleatoria discreta|discreto]] vamos a considerar una función de densidad generalizada
* Si $X$ está compuesto por variables aleatorias continuas, entonces $f_X$ sigue la definición origianl
* Si $X$ está compuesta por variables aleatorias discretas, que toman valores en $x = \xi_i$, $i = 1,~ 2,~ \cdots$ entonces la función de densidad generalizada toma la siguiente forma $$ f_X(x) = \sum_i p_X(\xi_i) ~ \delta(x - \xi_i) $$ donde $\delta(x)$ es la [[Delta de Dirac|delta de Dirac]]

  

