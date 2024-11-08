---
dia: 2024-03-14
tags:
  - ingeniería-electrónica/señales/Señales-y-sistemas
  - nota/facultad
---
# Definición
---
Se puede clasificar un [[Sistema|sistema]] con tener memoria o no. Se dice que un sistema no tiene memoria cuando su salida en tiempo $t$ depende solamente de su entrada en el tiempo $t$. 

Por ejemplo en un [[Espacio vectorial|espacio vectorial]] $\mathcal{H}$ de señales de tiempo continuo reales un sistema sin memoria sería $$ y(t) = \alpha  x(t), ~~ \alpha \in \mathbb{C} $$
Se dice que un sistema tiene memoria cuando su salida en el tiempo $t$ depende de su entrada en otro tiempo distintos de $t$. Por ejemplo $$ y(t) = \int_{-\infty}^{t} x(\tau) ~ d\tau $$