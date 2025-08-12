---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Teorema-central-del-límite
  - carrera/ingeniería-en-informática/proba/Teorema-central-del-límite
  - nota/facultad
vinculoFacultad:
  - tema: Teorema central del límite
    capitulo: 9
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
---
# Definición
---
Dado una [[Variable aleatoria|variable aleatoria]] $S \sim B(n, p)$ con [[Distribución Binomial|distribución binomial]], con un $n \gg 1$ la $\mathbb{P}(S = x) \approx f_N(x)$ entonces podemos decir que $$ \mathbb{P}(S = k) \sim \frac{1}{\sqrt{Var(S)}} \cdot \varphi \bigg( \frac{k - E[S]}{\sqrt{Var(S)}} \bigg) $$
integrando entre $k - \frac{1}{2}$ y $k + \frac{1}{2}$ conseguimos el valor de esa [[Probabilidad|probabilidad]]