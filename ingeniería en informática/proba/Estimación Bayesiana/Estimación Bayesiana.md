---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Estimación-Bayesiana
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Estimación-Bayesiana
---
# Definición
---
Tenemos $\underline X = \left(X_1, \cdots, X_n\right)$ una [[Muestra aleatoria]], donde tenemos una [[Información|información]] previa sobre $\theta$, haciendo esta una [[Variable aleatoria]] (que nombraremos $\Theta$), con una cierta [[Función de distribución|distribución]] "a priori" $f_\Theta(\theta)$.

Al observar la [[Muestra|muestra]], encontraremos la [[Función de distribución|distribución]] "a posteriori" $\Theta|\underline X = \underline x$. Si es continua por [[Variable continua condicional|variable continua condicional]] sería
$$ \underbrace{f_{\Theta|\underline X = \underline x} (\theta)}_\text{a posteriori} = \frac{f_{\underline X | \Theta = \theta} (\underline x) \cdot \overbrace{f_\Theta(\theta)}^\text{a priori}}{\displaystyle\int\limits_{-\infty}^{\infty} f_{\underline X | \Theta = \theta} (\underline x) \cdot f_\Theta(\theta) d\theta } $$

Tambien permite encontrar [[Intervalo de confianza de nivel 1-alfa|intervalos de confianza]] de forma más simple solo encontrando [[Cuantil|cuantiles]] con la distribución "a posteriori". 

Esta idea es partiendo del [[Teorema de Bayes|teorma de Bayes]]


