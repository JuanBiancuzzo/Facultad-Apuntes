---
dia: 2023-08-25
tags:
  - carrera/ingeniería-electrónica/dispo/Física-de-semiconductores
  - nota/facultad
  - ingeniería-en-informática/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
  - carrera/ingeniería-electrónica/fisica-2/Circuitos-de-corrientes-no-dependientes-del-tiempo
---
# Definición
---
La movilidad es una medida de la facilidad para arrastrar [[Carga eléctrica|portadores]] y se define a partir de la [[Modelo de Drude|velocidad de arrastre]] $$ v_a = \pm \mu E $$siendo $$ \mu = \frac{q \cdot \tau_c}{m^*} \equiv \text{movilidad} ~ \left[ cm^2 \cdot V^{-1} \cdot s^{-1} \right] $$ donde $\tau_c$ es el [[Movimiento térmico de portadores|tiempo entre colisiones]] y $m^*$ es la [[Masa efectiva]].

Si los [[Campo eléctrico|campos]] aplicados son bajos, es decir $E < 1000 \frac{V}{cm}$, la movilidad $\mu$ se mantiene constante como $\tau_c$.

Esta relación lineal entre la velocidad de arrastre y el campo, es válida dentro de ese rango

### Relaciones
---
* Si $\tau_c \uparrow$, mayor tiempo entre colisiones, entonces $\mu \uparrow$
* Si $m^* \downarrow$, [[Partícula|partícula]] más "liviana", entonces $\mu \uparrow$

$\tau_c$ depende de la [[Temperatura|temperatura]] y del nivel de [[Dopaje|dopaje]], $m^*$ depende del tipo de [[Carga eléctrica|portador]], y ambos dependen del [[Semiconductor|semiconductor]]

#### Dependencia al dopante
---
* Para un bajo nivel de dopaje, $\mu$ es limitada por colisiones con la [[Red cristalina|red]]
* Para medio o alto nivel de dopaje, $\mu$ es limitada por colisiones con los dopantes
* Los huecos tienen masa efectiva mayor que los electrones, por lo que para un mismo nivel de dopaje $\mu_n > \mu_p$

#### Dependencia de la temperatura
---
* Para temperaturas bajas $\mu$ es limitada por colisiones con los átomos [[Dopaje|dopantes]]. Esto se debe a que dicha interacción es más efectiva cuando la velocidad de los [[Carga eléctrica|portadores]] es baja
* Para temperaturas medias o altas $\mu$ es limitada por colisiones con átomos de la [[Red cristalina|red]]. Para mayor velocidad de los portadores disminuye la [[Probabilidad]] de colisión con las [[Dopaje|impurezas]], pero aumenta interacción con los átomos de la red debido a que estos aumentan sus vibraciones con la temperatura