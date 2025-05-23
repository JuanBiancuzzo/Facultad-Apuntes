---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Estimación-Bayesiana
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Estimación-Bayesiana
---
# Definición
---
Si tenemos $X_1, \cdots, X_n$ una [[Muestra aleatoria]] con [[Función de densidad de probabilidad|desnidad]] $f_{\underline X | \Theta = \theta} (\underline x)$ y la distribución a posteriori $f_{\Theta|\underline X = \underline x}(\theta)$ (ver[[Estimación Bayesiana]]), entonces $$ \mathbb{P}\left(X_{n + 1} > a | \underline X = \underline x \right) = \int\limits_a^\infty \int\limits_{-\infty}^\infty f_{X_{n+1}|\Theta = \theta}(x) \cdot f_{\Theta | \underline X = \underline x}(\theta) ~ d\theta ~ dx $$
Si ahora la [[Muestra aleatoria]] tiene [[Función de densidad de probabilidad]] $f_{\underline X | \Theta = \theta} (\underline x)$ pero $\Theta$ es [[Variable aleatoria discreta|discreta]], entonces $$ 
\mathbb{P}\left( X_{n + 1} > a | \underline X = \underline x \right) = \sum_\theta \mathbb{P}\left( X_{n + 1} > a | \Theta = 0 \right) \cdot p_{\Theta | \underline X = \underline x}(\theta) $$
