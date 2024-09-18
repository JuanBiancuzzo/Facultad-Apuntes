---
dia: 2023-09-02
tags:
  - dispo/Física-de-semiconductores
  - nota/facultad
---
# Definición
---
La física fundamental de la [[Corriente de difusión|difusión]] y el [[Corriente de arrastre|arrastre]] es la misma, colisiones entre partículas y los átomos del medio, por lo que podemos pensar que debe existir una relación entre el [[Coeficiente de difusión|coeficiente de difusión]] ($D$) y la [[Movilidad|movilidad]] ($\mu$)

Tenemos que $$ D_{n, ~p} = \frac{\lambda_c^2}{\tau_c}$$ donde $\lambda_c$ es el [[Movimiento térmico de portadores|camino libre medio]] y $\tau_c$ es el [[Movimiento térmico de portadores|tiempo entre colisiones]], y que $$ \mu_{n, ~p} = \frac{q ~ \tau_c}{m^*_{n, ~p}} $$ donde $m^*_{n, ~p}$ es la [[Masa efectiva]] de la partícula.

Podemos ver que la relación entre $D_{n, ~p}$ y $\mu_{n, ~p}$ es $$ \frac{D_{n, ~p}}{\mu_{n, ~p}} = \frac{1}{q} ~ m^*_{n, ~p} ~ \left(\frac{\lambda_c}{\tau_c}\right)^2 $$ que si recordamos que $v_{th} = \frac{\lambda_c}{\tau_c}$, donde $v_{th}$ es la [[Movimiento térmico de portadores|velocidad térmica]], nos queda $$ \frac{D_{n, ~p}}{\mu_{n, ~p}} = \frac{1}{q} ~ m^*_{n, ~p} ~ v_{th}^2 $$
Los [[Electrón|electrones libres]] y los [[Hueco|huecos]], cuando el [[Semiconductor intrínseco|semiconductor no está degenerado]], cumplen con la [[Estadística de Boltzmann]]. En el caso unidimensional plantado $$ \frac{1}{1} ~ m^*_{n, ~p} ~ v_{th}^2 = \frac{1}{2} k ~ T $$ donde $k$ es la constante de Boltzmann,  y $T$ es la [[Temperatura|temperatura]] en Kelvin.

Queda entonces la relación de Einstein $$ \frac{D}{\mu} = \frac{k ~ T}{q} = V_{th} $$ donde $V_{th} = \frac{k ~ T}{q}$ es el [[Tensión|potencial]] térmico en $[V]$
 