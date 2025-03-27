---
dia: 2025-03-27
etapa: empezado
referencias:
  - "873"
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - nota/facultad
aliases:
  - Peak time of a system
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
El tiempo de pico máximo $t_p$ es el tiempo que toma el [[Sistema|sistema]] llega al [[Overshoot de un sistema|overshoot]]

![[Time-Domain specifications.png]]

## Sistema de primer orden
---
Notemos que para un sistema de primer orden no existe un punto máximo mayor al punto de estabilización ya que tenemos el sistema $$ y(t) = K \left( 1 - \exp \left( -\frac{t}{\tau} \right) \right) $$ donde $K$ ya esta fijo para obtener correctamente el punto de estabilización

Para los valores de posibles de $\tau$ tenemos
* $\tau > 0$ donde para cualquier valor de tiempo $t \ge 0$, entonces $\exp\left(- \frac{t}{\tau} \right) \in [0,~ 1)$ dando una salida, siempre, menor a $K$
* $\tau < 0$ donde para cualquier valor de tiempo $t \ge 0$, entonces $\exp\left(- \frac{t}{\tau} \right) \in [1,~ \infty)$ dando una salida, siempre, mayor a $K$
* $\tau = 0$ siempre da el valor $K$, por lo tanto no lo supera

Por lo tanto, para un sistema de primer orden no se puede pasar del valor deseado

## Sistema de segundo orden
---

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```