---
dia: 2023-11-15
tags:
  - carrera/ingeniería-en-informática/sisop/Scheduling
  - nota/facultad
---
# Definición
---
El tiempo de respuesta surge con el advenimiento del [[Time sharing]] ya que los usuarios se sientan en una [[Terminal|terminal]] de una [[Computadora|computadora]] y pretenden una interacción con rapidez. Por eso nace el tiempo de respuesta como [[Métrica]] $$ T_\text{repuesta} = T_\text{first run} - T_\text{arribo} $$
Para entender la definición veamos el siguiente ejemplo. Suponiendo que A dura $100$, y B y C duran $10$, y A llegue en $t = 0$, y B y C llegan $10$ después.

* El $T_\text{respuesta}$ del [[Proceso|proceso]] A es $0$
* El $T_\text{respuesta}$ del proceso B es $0$, llega en $10$ pero tarda $10$ en ejecutarse
* El $T_\text{respuesta}$ del proceso C es $10$, llega en $10$ pero termina en $20$

En promedio el $T_\text{respuesta}$ es $3.33$.