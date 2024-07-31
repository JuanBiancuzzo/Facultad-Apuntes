---
dia: 2023-10-14
tags:
  - dispo/Transistor-bipolar-de-juntura
  - nota/facultad
aliases:
  - Ganancia de corriente en MAD
---
### Definición
---
$$ \beta_F \triangleq \frac{I_C}{I_B} = \frac{D_n^B}{D_p^E} \cdot \frac{W_E}{W_B} \cdot \frac{N_{dE}}{N_{aB}} $$

Donde la [[Ganancia]] se mantiene constante para un cierto rango de tensión de $V_{BE}$. Para valores bajos aparece la [[Diodo#Corriente eléctrica Corriente de Recombinación|recombinación  y bajo nivel de inyección]], y para valores altos aparece la [[Diodo#Aproximación de cuasi-neutralidad Cuasi neutralidad|resistencia en serie, con un alto nivel de inyección]].

Los [[Transistor bipolar de juntura|TBJS]]s integrados actualmente con $I_C \sim 0.1 \cdots 1~mA$, tienen $\beta_F \sim 50 \cdots 300$ 

Es difícil de controlar con precisión, por lo que se recurre a técnicas de diseño de circuitos para lograr insensibilidad a variaciones en $\beta_F$