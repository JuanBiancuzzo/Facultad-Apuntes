---
dia: 2023-11-26
capitulo: 6
tags:
  - dispo/Transistor-MOSFET
---
### Definición
---
En un [[Transistor de efecto de campo metal-óxido-semiconductor|MOSFET]], se calcula la $C_{gs,~i}$ $$ Q_G = - (Q_N + Q_B) $$
Dónde $$ Q_N(V_{GS}) = W \int_0^L Q'_n(y) ~ dy = W \int_0^{V_{GS} - V_T} Q'_n(V_c) ~ \frac{dy}{dV_c} ~ dV_c $$
Siendo $$ \frac{dV_c}{dy} = -E_y(y) = - \frac{I_D}{W \mu_n Q_n(V_c)} $$
Entonces $$ Q_N(V_{GS}) = - \frac{W^2 \mu_n}{I_D} \int_0^{V_{GS} - V_T} Q'^2_n(V_c) ~ dV_c $$
Recordando que $$ Q'_n(V_c) = -C'_{ox} (V_{GS} - V_c - V_T) $$
Entonces, integrando y substituimos $I_D$ para [[Saturación del transistor de efecto de campo metal-óxido-semiconductor|saturación]]  $$ Q_N(V_{GS}) = -\frac{2}{3} W L C'_{ox} (V_{GS} - V_T) $$
Entonces la [[Carga eléctrica|carga]] en el Gate es $$ Q_G(V_{GS}) = \frac{2}{3} W L C'_{ox} (V_{GS} - V_T) - Q_B $$
Siendo $Q_B$ independiente de $V_{GS}$, la capacidad Gate-Source debido a la capa de inversión es $$ C_{gs,~i} = \frac{dQ_G}{dV_{GS}} = \frac{2}{3} WL C'_{ox} $$ donde $C'_{ox}$ es la [[Capacidad de óxido|capacidad del óxido]]