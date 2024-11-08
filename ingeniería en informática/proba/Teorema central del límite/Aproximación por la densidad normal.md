---
dia: 2023-01-23
tags:
  - ingeniería-en-informática/proba/Teorema-central-del-límite
  - nota/facultad
  - ingeniería-electrónica/proba/Teorema-central-del-límite
---
# Definición
---
Dado una [[Variable aleatoria|variable aleatoria]] $S \sim B(n, p)$ con [[Distribución Binomial|distribución binomial]], con un $n \gg 1$ la $\mathbb{P}(S = x) \approx f_N(x)$ entonces podemos decir que $$ \mathbb{P}(S = k) \sim \frac{1}{\sqrt{Var(S)}} \cdot \varphi \bigg( \frac{k - E[S]}{\sqrt{Var(S)}} \bigg) $$
integrando entre $k - \frac{1}{2}$ y $k + \frac{1}{2}$ conseguimos el valor de esa [[Probabilidad|probabilidad]]