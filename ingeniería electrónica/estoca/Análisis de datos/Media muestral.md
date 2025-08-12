---
dia: 2025-04-27
etapa: ampliar
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/estoca/Análisis-de-datos
  - nota/facultad
vinculoFacultad:
  - tema: Análisis de datos
    capitulo: 3
    materia: Procesos estocásticos
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El [[Estimador|estimador]] más habitual de la [[Esperanza|media]] $\mu$ es la media muestral, donde sea $\set{X_n}_{n \in \mathbb{N}_0}$ una [[Sucesión de variables aleatorias|sucesión de variables]] con media $\mu$ y se define este estimador como $$ \hat{\mu}(n) = \frac{1}{n} \sum_{i = 1}^{n} X_i $$
Vamos a probar que la media muestral [[Consistencia en media cuadrática#^def-5-2-9|converge en media cuadrática]] a la media

> [!demostracion]- Demostración
> Vamos a probar que $$ \hat{\mu}(n) \xrightarrow{M.S.} \mu $$
> 
> Para hacer esto, debemos hallar el ECM entre $\hat{\mu}(n)$ y $\mu$. Usamos la expresión dada por el [[Sesgo|sesgo]] y la [[Varianza|varianza]] $$ \text{ECM}(\hat{\mu}(n),~ \mu) = Var(\hat{\mu}(n)) + \left| E[\hat{\mu}(n)] - \mu \right|^2 $$
> 
> Notemos que este estimador es insesgado, lo cual se va a demostrar después, pero esto nos permite decir que $\left| E[\hat{\mu}(n)] - \mu \right|^2 = 0$
> 
> Por lo que solo nos queda verificar si $Var(\hat{\mu}(n)) = 0$, que es lo que vamos a ver a continuación $$ \begin{align} 
>     Var(\hat{\mu}(n)) &= Var\left( \frac{1}{n} \sum_{i = 1}^{n} X_i \right) \\
>     &= \frac{1}{n^2} \sum_{i = 1}^{n} Var(X_i) \\
>     &= \frac{\sigma_X^2}{n}
> \end{align} $$ notemos que estamos tomando que son [[Variables aleatorias independientes|independientes]] entre sí, sino involucraría la [[Covarianza cruzada|covarianzas]] de todas las $X_i$
> 
> Por lo tanto, como se da que $$ \lim_{n \to \infty} \text{ECM} = \lim_{n \to \infty} \frac{\sigma_X^2}{n} = 0 $$ podemos decir que $\hat{\mu}(n)$ converge en media cuadrática a la media $\mu$

Podemos ver que es un [[Sesgo#^estimador-insesgado|estimador insesgado]], y lo podemos demostrar

> [!demostracion]- Demostración
> Para demostrar que $\hat{\mu}(n)$ es un estimador insesgado, necesitamos ver probar que $$ E\left[ \hat{\mu}(n) \right] = \mu $$
> 
> Para eso, vamos a simplemente desarrollar la esperanza del estimador $$ \begin{align} 
>     E\left[ \hat{\mu}(n) \right] &= E\left[ \frac{1}{n} \sum_{i = 1}^{n} X_i \right] \\
>      &= \frac{1}{n} \sum_{i = 1}^{n} E[X_i] \\
>      &= \frac{1}{n} \sum_{i = 1}^{n} \mu \\
>      &= \mu
> \end{align} $$
> 
> De esta forma llegamos a lo que queríamos probar

