---
dia: 2024-04-09
capitulo: 4
tags:
  - señales/Transformada-de-Fourier
  - nota
---
### Definición
---
El espacio de Schwartz o espacio de funciones de decrecimiento rápido $\mathcal{S} \left(\mathbb{R}^n\right)$ definido sobre el [[Espacio Rn|espacio euclídeo]] $\mathbb{R}^n$ es el [[Conjunto|conjunto]] de [[Función|funciones]] $$ \mathcal{S} \left(\mathbb{R}^n\right) = \Set{ f \in C^{\infty} \left( \mathbb{R}^n \right) | \forall \alpha, \beta : \lVert f \rVert_{\alpha, ~ \beta} < \infty } $$
Donde 
* $\alpha$, $\beta$ son multínidices (conjuntos ordenados de índices) $C^{\infty}\left( \mathbb{R}^n \right)$ es el conjunto de funciones reales suaves sobre $\mathbb{R}^n$
* $\lVert \cdot \rVert$ es una [[Norma|norma]] definida a partir de la norma del supremo como $$ \lVert f \rVert_{\alpha, ~\beta} := \lVert x^{\alpha} D^{\beta} f \rVert_{\infty} = \sup_{x \in \mathbb{R}^n} \left| x_{i_1}^{\alpha_1} \cdots x_{i_m}^{\alpha_m} ~ \frac{ \partial^{|\beta|} f }{\partial x_{j_1}^{\beta_1} \cdots x_{j_k}^{\beta_k} } \right| $$
	* Donde los números $\alpha_i$, $\beta_j$ son enteros positivos que satisfacen $$ \sum_{i = 1}^{m} \alpha_i = |\alpha|, ~~~ \sum_{i = 1}^{k} \beta_i = |\beta| $$