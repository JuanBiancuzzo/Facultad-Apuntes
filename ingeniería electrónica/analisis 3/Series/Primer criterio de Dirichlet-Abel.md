---
dia: 2022-09-19
tags:
  - carrera/ingeniería-electrónica/analisis-3/Series
  - carrera/ingeniería-en-informática/analisis-3/Series
  - nota/facultad
---
Dados las [[Serie|series]] $\alpha : \mathbb{N} \to \mathbb{R} : \bigg(\sum_{k = 0}^n \alpha_k \bigg)_{n = 1}^\infty$ y la serie $\beta : \mathbb{N} \to \mathbb{R} : \bigg(\sum_{k = 0}^n \beta_k \bigg)_{n = 1}^\infty$

# Definición
---
Dadas las hipotesis
1) $\exists M \in \mathbb{R} : \forall n \in \mathbb{N} : \bigg| \sum_{k = 0}^n \alpha_k \bigg| \leq M$ 
2) $\forall n \in \mathbb{N} : \beta_n \geq \beta_{n + 1} \geq 0$
3) $\lim_{n \to \infty} \beta_n = 0$

Entonces $\bigg(\sum_{k = 0}^n \alpha_k \beta_k \bigg)_{n = 1}^\infty$  converge.