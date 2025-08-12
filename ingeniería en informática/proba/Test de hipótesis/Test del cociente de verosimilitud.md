---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Test-de-hipótesis
  - carrera/ingeniería-en-informática/proba/Test-de-hipótesis
  - nota/facultad
vinculoFacultad:
  - tema: Test de hipótesis
    capitulo: 11
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
---
# Definición
---
Es una [[Test de hipótesis|test]] para [[Hipótesis]] simple vs [[Hipótesis]] simple, es decir que la [[Hipótesis nula]] y la [[Hipótesis alternativa]] ambas continenen un elemento. $$ H_0 : \theta = \theta_1 ~~~ H_1 : \theta = \theta_2 $$
Donde la regla de decisión es: $$ \delta(\underline{X}) = \begin{cases}
	1 ~ \text{ si } \displaystyle\frac{f_{\theta_2}(\underline{X})}{f_{\theta_1}(\underline{X})} > k_\alpha \\
	0 ~ \text{ si no}
\end{cases} $$
Dad un $\alpha$ fijo correspondiente al [[Test con nivel de significación]].