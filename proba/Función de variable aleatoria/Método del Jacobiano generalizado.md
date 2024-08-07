---
dia: 2023-01-23
tags:
  - proba/Función-de-variable-aleatoria
  - nota/facultad
---
### Definición
---
Sea $\underline{X}$  es un [[Vector aleatorio]], $\underline{Y} = g(\underline{X})$, dado una [[Partición]] $A_1, A_2, \cdots, A_n$ del [[Soporte]] de $\underline{X}$, con $g$ tal que $g|_{A_i} = g_i$ es biyectiva, continua y con derivada continua. Entonces $$ f_{\underline{Y}}(\underline{y}) = \sum_{i = 1}^n \frac{f_{\underline{X}}(\underline{x}) \cdot \mathbb{1} \{\underline{x} \in A_i\} }{|J_{g_i}(\underline{x})|}\Bigg|_{\underline{x}=g_i^{-1}(\underline{y})} $$