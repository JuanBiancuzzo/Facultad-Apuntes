---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/estoca/Distribuciones-multivariables
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
etapa: ampliar
referencias: []
aliases:
  - Convergencia en media cuadrática#^def-5-2-9
  - Error cuadrático medio
  - ECM
  - Mean squared error
  - MSE
vinculoFacultad:
  - tema: Distribuciones multivariables
    capitulo: 2
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
Dadas dos [[Variable aleatoria|variables aleatorias]] $X$ e $Y$ en [[Espacio de Hilbert de segundo orden|espacio L2 de variables aleatorias]] $L^2$, definimos el error cuadrático medio (ECM) entre ellas como $$ \text{ECM}(X,~ Y) = \mathbb{E}\left[ (X - Y)^2 \right] $$
donde se puede decir que es la [[Esperanza#^def-5-2-8|energía]] de la diferencia entre $X$ e $Y$

Para el caso de que una de las dos variables sea una [[Varianza##^variable-degenerada|variable degenerada]] a una constante $c$, donde podemos decir que $$ \text{ECM}(X,~ c) = \sigma_X^2 + |E[X] - c|^2 $$ donde $\sigma_X^2$ es la [[Varianza|varianza]] de $X$ y $E[X] - c$ es el [[Sesgo|sesgo]] de $X$, donde lo podemos interpretar como $X$ un [[Estimador|estimador]] de $c$

De esta última se puede extraer la relación, se puede tener la [[Inecuación|inecuación]] siguiente $$ ECM(X,~ c) \ge \sigma^2_X $$ con igualdad sii $c = E[X]$

## Convergencia
---
> [!definicion]+ Definición 5.2.9 (Convergencia en media cuadrática) 
> Dada una [[Sucesión de variables aleatorias|sucesión]] $\set{X_n}_{n \in \mathbb{N}_0}$ de [[Variable aleatoria|variables aleatorias]] en [[Espacio de Hilbert de segundo orden|espacio L2 de variables aleatorias]] $L^2$, decimos que $X_n$ tiende a $X$ en media cuadrática (MC o MS) si $$ \lim_{n \to \infty} \text{ECM}(X_n,~ X) = 0 $$
> 
> Lo denotamos como $X_n \xrightarrow{M.S.} X$
^def-5-2-9

## Consistencia
---
Dada una [[Sucesión|sucesión]] de [[Estimador|estimadores]] $\hat{\theta}_n$ de $\theta$, decimos que $T = \hat{\theta}$ es consistente en media cuadrática si $$\lim_{n \to \infty} \text{ECM}(\hat{\theta}_n) = 0, ~\forall \theta \in \Theta $$

## Relación con otros tipos de convergencia
---
Esta es una de las convergencias más fuertes, ya que esta implica la [[Convergencia en probabilidad|convergencia en probabilidad]], y sabemos que esta implica la [[Convergencia en distribución|convergencia en distribución]] $$ X_n \xrightarrow{M.S.} X \implies X_n \xrightarrow{p} X \implies X_n \xrightarrow{d} X $$
> [!demostracion]- Demostración
> Para probar que la convergencia en media cuadrática implica convergencia en probabilidad, recordemos que eligiendo un $\varepsilon > 0$ y logramos probar que $$ \lim_{n \to \infty} \mathbb{P}(|X_n - X| > \varepsilon) = 0 $$ entonces converge en probabilidad. También notemos que como sabemos que converge en media cuadrática, vamos a tener que $$ \lim_{n \to \infty} \text{ECM}(X_n,~ X) = 0 $$
> 
> Usando la [[Desigualdad de Tchevychev#Generalización|desigualdad de Tchevychev generalizada]] que dice $$ \mathbb{P}(|X_n - X| > \varepsilon) \le \frac{\text{ECM}(X_n,~ X)}{\varepsilon^2} $$ podemos tomar el limite para esta desigualdad $$ \begin{align} 
>     \lim_{n \to \infty} \mathbb{P}(|X_n - X| > \varepsilon) &\le \lim_{n \to \infty} \frac{\text{ECM}(X_n,~ X)}{\varepsilon^2} \\
>     \lim_{n \to \infty} \mathbb{P}(|X_n - X| > \varepsilon) &\le 0 \\
>     \lim_{n \to \infty} \mathbb{P}(|X_n - X| > \varepsilon) &= 0
> \end{align} $$
> 
> De esta forma probando que al converger en media cuadrática implica converger en probabilidad

Notemos que no tiene ninguna implicación con la [[Convergencia en forma casi segura|convergencia en forma casi segura]] 
