---
dia: 2023-01-23
materia: proba
capitulo: 9
---
### Definción
---
Dado una [[Variable aleatoria]] $S \sim B(n, p)$ con [[Distribución Binomial]], con un $n \gg 1$ la $\mathbb{P}(S = x) \approx f_N(x)$ entonces podemos decir que $$ \mathbb{P}(S = k) \sim \frac{1}{\sqrt{Var(S)}} \cdot \varphi \bigg( \frac{k - E[S]}{\sqrt{Var(S)}} \bigg) $$
integrando entre $k - \frac{1}{2}$ y $k + \frac{1}{2}$ conseguimos el valor de esa probabilidad.