---
dia: 2023-01-23
materia: proba
capitulo: 8
---
### Definción
---
Dado una [[Variable aleatoria]] $S \sim B(n, p)$ con [[Distribución Binomial]], y definimos $N \sim N(E[S], Var(S))$ entonces con un $n \gg 1$ podemos decir $$ \begin{align} \mathbb{P}(S = x) &\sim f_N \\
\mathbb{P}(S = x) \approx \int_{k - \frac{1}{2}}^{k + \frac{1}{2}} f_N(x) \cdot dx &= F_n\bigg(k + \frac{1}{2}\bigg) - F_n\bigg(k - \frac{1}{2} \bigg) \\ &= \Phi\bigg(\frac{k + \frac{1}{2} - E[S]}{\sqrt{Var(s)}}\bigg) - \Phi\bigg(\frac{k - \frac{1}{2} - E[S]}{\sqrt{Var(s)}}\bigg) 
\end{align}$$  