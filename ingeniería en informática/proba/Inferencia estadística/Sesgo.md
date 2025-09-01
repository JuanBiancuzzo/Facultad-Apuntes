---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
etapa: ampliar
referencias: []
aliases:
  - Estimador insesgado#^estimador-insesgado
  - Estimador asintóticamente insesgado#^estimador-asintoticamente-insesgado
  - Sesgo de un estimador
vinculoFacultad:
  - tema: Análisis de datos
    capitulo: 3
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
  - tema: Inferencia estadística
    capitulo: 10
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
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