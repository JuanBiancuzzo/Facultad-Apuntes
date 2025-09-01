---
dia: 2023-01-23
tags:
  - carrera/ingeniería-electrónica/proba/Inferencia-estadística
  - carrera/ingeniería-en-informática/proba/Inferencia-estadística
  - nota/facultad
vinculoFacultad:
  - tema: Inferencia estadística
    capitulo: 10
    materia: Probabilidad y estadística B
    carrera: Ingeniería en informática
  - tema: Repaso de probabilidad y estadística
    capitulo: 1
    materia: Taller de Procesamiento de Señales
    carrera: Ingeniería electrónica
---
# Definición
---
Dada $X_1, \cdots, X_n \sim F_\theta(x)$, $\theta \in \Theta$ una [[Muestra aleatoria|muestra aleatoria]]. [[Estimador|Estimamos]] $\theta$ por $\hat{\theta}$. El Riesgo de estimar a $\theta$ con $\hat{\theta}$ se mide con el error cuadrático medio $$ R(\theta, \hat{\theta}) = \text{ECM}(\hat{\theta}) = E\left[ (\theta - \hat{\theta})^2 \right] $$ donde $E[\cdot]$ es la [[Esperanza|esperanza]] y ECM el [[ingeniería en informática/proba/Inferencia estadística/Consistencia en media cuadrática|error cuadrático medio]]

Diremos que un estimador óptimo para $\theta$ será $\hat{\theta}^*$ tal que $$ ECM(\hat{\theta}^*) \le ECM(\hat{\theta}), ~\forall \hat{\theta} $$