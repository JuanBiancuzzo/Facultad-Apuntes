---
dia: 2023-08-10
tags:
  - orga/Machine-learning
  - nota/facultad
---
# Definición
---
Es un modelo que intenta, resolver un [[Problema de regresión|problema de regresión]], ajustar una línea a un conjunto de datos, por lo que queremos hallar el conjunto $m$ y $b$ que más acerque a nuestros datos, según la ecuación de la recta $$ y = m \cdot x + b $$
Planteamos la hipótesis de este modelo, que establece $$ h_\theta \left( \overline{x} \right) = \theta^t \cdot \overline{x} $$
donde $\overline{x}$ es una muestra y $\theta$ es el parámetro que queremos aprender.

Podemos encontrarlo de forma numérica con el [[Descenso del gradiente]]