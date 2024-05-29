---
dia: 2024-03-11
materia: señales
capitulo: 7
aliases:
  - ROC de la transformada de Laplace
---
### Definición
---
Se define la región de convergencia de la [[Transformada de Laplace|transformada de Laplace]] $x(t) \xleftrightarrow{~~\mathcal{L}} X(s)$ como $$ ROC\Set{X(s)} = \Set{ s = \sigma + j \omega \in \mathbb{C}: \int_{-\infty}^{\infty} \lvert x(t) ~ \exp(-\sigma t) \rvert ~ dt < \infty } $$
Notemos que la región de convergencia de una señal $x(t)$ esta definido por todos aquellos puntos $s \in \mathbb{C}$ donde $x(t) ~ \exp(-\sigma)$ es [[Absolutamente integrable|absolutamente integrable]], lo que implica que la [[Transformada de Fourier|transformada de Fourier]] de $x(t) ~ \exp(-\sigma)$ está bien definida


#### Propiedades
---
Dado que la ROC es muy importante para la especificación de la transformada de Laplace de una [[Señal|señal]] temporal, exploraremos algunas conexiones entre las características de la señal y la correspondiente ROC

