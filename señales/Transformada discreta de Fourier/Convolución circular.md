---
dia: 2024-05-15
capitulo: 6
tags:
  - señales/Transformada-discreta-de-Fourier
  - nota
---
### Definición
---
Cuando una [[Función|función]] $g$ es [[Función periódica|periódica]] de período $T$, entonces para aquellas funciones $f$ para las que existe $f \circledcirc g$, su convolución es también periódica e igual a $$ ( f \circledcirc g )(t) \equiv \int_{t_0}^{t_0 + T} \left[ \sum_{k = -\infty}^{\infty} f(\tau + kT) \right] g(t - \tau) ~ d\tau $$ donde $t_0$ se escoge arbitrariamente

Para funciones discretas, se define $$ x[n] ~ \underset{N}{\circledcirc} ~ y[n] \equiv \sum_{m = 0}^{N - 1} x[m] ~ y[(n - m) \mod N] = \sum_{m = 0}^{N - 1} x[(n - m) \mod N] ~ y[m] $$