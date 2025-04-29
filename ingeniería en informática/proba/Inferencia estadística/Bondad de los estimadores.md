---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
---
# Definición
---
Dada $X_1, \cdots, X_n \sim F_\theta(x)$, $\theta \in \Theta$ una [[Muestra aleatoria]]. [[Estimador|Estimamos]] $\theta$ por $\hat{\theta}$. El Riesgo de estimar a $\theta$ con $\hat{\theta}$ se mide con el error cuadrático medio $$ R(\theta, \hat{\theta}) = \text{ECM}(\hat{\theta}) = E\left[ (\theta - \hat{\theta})^2 \right] $$ donde $E[\cdot]$ es la [[Esperanza]].

Diremos que un estimador óptimo para $\theta$ será $\hat{\theta}^*$ tal que $$ ECM(\hat{\theta}^*) \le ECM(\hat{\theta}), ~\forall \hat{\theta} $$