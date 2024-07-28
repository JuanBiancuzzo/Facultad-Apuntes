---
dia: 2024-04-09
tags:
  - señales/Transformada-de-Fourier
  - nota
---
### Definición
---
Se define la [[Función|función]] sinc de la siguiente forma $$ \text{sinc}(t) \equiv \frac{\sin(t)}{t} $$
#### Sinc normalizada
---
Se puede normalizar de la siguiente forma $$ \text{sinc}(t) \equiv \frac{\text{sinc}(\pi t)}{\pi t}, ~~~ \int_{-\infty}^{\infty} \text{sinc}(t) ~ dt = 1 $$

Donde podemos aproximar la función sinc normalizada a la [[Delta de Dirac|delta de Dirac]] de la siguiente forma $$ \lim_{\alpha \to \infty} \frac{\sin(\alpha \pi t)}{\pi t} = \delta(t) $$ ^58985d