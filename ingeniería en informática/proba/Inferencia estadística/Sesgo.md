---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
etapa: ampliar
referencias: []
aliases:
  - Estimador insesgado#^estimador-insesgado
  - Estimador asintóticamente insesgado#^estimador-asintoticamente-insesgado
  - Sesgo de un estimador
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Se define al sesgo de una [[Variable aleatoria|variable aleatoria]] $X$ con respecto de una constante $c$ como $$ \mathbb{B}\left(X \right) = E\left[ X \right] - c $$ donde $E[\cdot]$ es la [[Esperanza|esperanza]]

De esta forma, dado un [[Estimador|estimador]] $\hat{\theta}(n)$ de un parámetro fijo $\theta$, podemos definir el sesgo del estimador como $$ \mathbb{B}\left( \hat{\theta}(n) \right) = E\left[ \hat{\theta}(n) \right] - \theta $$

Se dice que un estimador es insesgado para $\theta$ si $$ E\left[ \hat{\theta}(n) \right] = \theta, ~\forall \theta \in \Theta $$ ^estimador-insesgado

Se dice que un estimador es asintóticamente insesgado si $$ \lim_{n \to \infty} E\left[ \hat{\theta}(n) \right] = \theta, ~~~ \forall \theta \in \Theta $$ ^estimador-asintoticamente-insesgado