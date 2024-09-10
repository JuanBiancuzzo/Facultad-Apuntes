---
dia: 2023-01-23
tags:
  - proba/Variables-y-vectores-aleatorios
  - nota/facultad
---
### Definición
---
Dada una [[Variable aleatoria continua|variable aleatoria continua]] $T$, y dada una [[Función de intensidad de fallas|función de intensidad de fallas]], se define la [[Función|función]] de riesgo como $$ \mathbb{P}(T < t + \Delta t | T > t) $$ cuando $\Delta t$ tiende a $0$. De la cual sale su [[Función de distribución|función de distribución]] $$ F_T(t) = \bigg(1 - e^{-\int_0^t \lambda(s) ds} \bigg) \cdot \mathbb{1} \{0 \leq t \}$$ y su [[Función de densidad|función de densidad]], recordando que $f_X(x) = \frac{d}{dx} F_X(x)$ nos da $$ f_T(t) = \bigg(\lambda(t) \cdot e^{-\int_0^t \lambda(s) ds} \bigg) \cdot \mathbb{1} \{0 < t \} $$
