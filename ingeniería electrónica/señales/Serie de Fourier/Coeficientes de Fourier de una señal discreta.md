---
dia: 2024-03-26
tags:
  - carrera/ingeniería-electrónica/señales/Serie-de-Fourier
  - nota/facultad
vinculoFacultad:
  - "[[ingeniería electrónica/señales/Serie de Fourier/Resumen.md]]"
---
# Definición
---
Se define los coeficientes de Fourier para una [[Señal|señal]] discreta mediante el [[Producto interno|producto interno]] $$ \langle x[n], y[n] \rangle \equiv \frac{1}{N} \sum_{k = 0}^{N - 1} x[n] ~ y^*[n] $$
Podemos seguir los mismos razonamientos que hicimos con el [[Serie de Fourier|caso de tiempo continuo]] $$ a_k = \langle x[n], f_k[n] \rangle $$
## Relación de Parseval
---
Sigue cumpliéndose la [[Igualdad de Parseval|relación de Parseval]] $$ \frac{1}{N} \sum_{n = \langle N \rangle} | x[n] |^2 = \sum_{k = \langle N \rangle} | a_k |^2 $$ 