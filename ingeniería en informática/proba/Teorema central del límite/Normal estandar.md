---
dia: 2023-01-23
tags:
  - ingeniería-en-informática/proba/Teorema-central-del-límite
  - nota/facultad
  - ingeniería-electrónica/proba/Teorema-central-del-límite
---
# Definición
---
Dada la [[Distribución Normal|distribución normal]] se le llama distribución normal estándar a aquella [[Variable aleatoria|variable aleatoria]] $X \sim N(\mu = 0, \sigma^2 = 1)$. 

Se denomina proceso de normalización, a pasar una variable con distribución Normal a una normal estándar. Esto se logra con $$ \begin{matrix} 
    N_\text{estandar} \sim N(\mu = 0, \sigma^2 = 1), ~~~~~~~~~~~~~~ N_\text{no estandarizado} \sim N(\mu, \sigma^2) \\
    N_\text{estandar} = \frac{N_\text{no estandarizado} - \mu}{\sigma}
\end{matrix} $$
# Datos útiles
---
$$ \mathbb{P}(-a < X < a) = \Phi(a) - \Phi(-a) = 2 \cdot \Phi(a) - 1 $$