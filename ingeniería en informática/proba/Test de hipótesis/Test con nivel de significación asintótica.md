---
dia: 2023-01-23
tags:
  - carrera/ingeniería-en-informática/proba/Test-de-hipótesis
  - nota/facultad
  - carrera/ingeniería-electrónica/proba/Test-de-hipótesis
---
# Definición
---
Sea $\underline{X} = \left( X_1, \cdots, X_n \right)$ una [[Muestra aleatoria]] de una [[Población]] con distribución $F_\theta(x)$, $\theta \in \Theta$.

Se quiere testear $H_0 : \theta \in \Theta_1$ vs $H_1 : \theta \in \Theta_2$ donde $\Theta_1$ y $\Theta_2$ son una [[Partición]] de $\Theta$.

Se dirá que una sucesión de [[Test de hipótesis|test]] $\delta_n(\underline X)$ tiene [[Test con nivel de significación]] asintótico $\alpha$ si $$ \lim_{n \to \infty} \sup_{\theta \in \Theta_1} \Pi_{\delta_n}(\theta) = \alpha $$ 