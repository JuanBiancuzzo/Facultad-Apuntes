---
dia: 2023-04-11
tags:
  - seguridad/Estrés-termico
  - nota/facultad
---
# Definición
---
Se define con la siguiente formula $$ M \pm R \pm C \pm c - V = E $$
Donde:
* $M$ es la producción de [[Calor|calor]] metabólico $(Kcal/h)$ 
* $C$ es el intercambio de calor entre el cuerpo y el ambiente por [[Convección de calor|convección de calor]] $(Kcal/h)$ 
* $c$ es el intercambio de calor entre el cuerpo y el ambiente por [[Conducción de calor|conducción]] $(Kcal/h)$  (se puede despreciar en el ambiente laboral)
* $R$ es el intercambio de calor entre el cuerpo y el ambiente por [[Radiación|radiación]] $(Kcal/h)$ 
* $V$ es el intercambio de calor por ventilación pulmonar $(Kcal/h)$ (se puede despreciar en el ambiente laboral)
* $E$ es el intercambio de calor entre el cuerpo y el ambiente por [[Evaporación|evaporación]] $(Kcal/h)$ 

Por lo tanto para nosotros es útil expresarlo como $$ M \pm R \pm C = E $$
## Intercambio por convección de calor
---
$$ C = K_c \cdot A \cdot (t_{bs} - t_{piel}), ~~ K_c = 6.5 \cdot V^{0.6} $$
Donde:
* $t_{piel}$ es la [[Temperatura|temperatura]] de la piel $(36 \degree C)$ 
* $t_{bs}$ es la [[Temperatura del bulbo seco|temperatura del bulbo seco]]
* $V$ es la velocidad del aire $(m/seg)$
* $A$ es la superficie corporal, de aproximadamente $1.8 m^2$, para un hombre de $1.7m$ y $70kg$


## Intercambio por radiación
---
$$ R = 8.43 \left( \left(\frac{T_{mr}}{100}\right)^4 - \left(\frac{T_p}{100}\right)^4  \right) $$ $$ \left(\frac{T_{mr}}{100}\right)^4 = 2.47 \cdot V^{0.5} \cdot (t_g - t_{bs}) + \left(\frac{T_{g}}{100}\right)^4 $$
Donde:
* $T_{mr}$ es la [[Temperatura media radiante|temperatura media radiante]] 
* $T_p$ es la temperatura de la piel $(K)$ 
* $t_g$ es la [[Temperatura de globo|temperatura de globo]] $(\degree C)$, y $T_g$ es lo mismo pero en Kelvin $(K)$
* $V$ es la velocidad del aire $(m/seg)$
* $t_{bs}$ es la temperatura del bulbo seco $(\degree C)$
