---
dia: 2024-03-14
tags:
  - carrera/ingeniería-electrónica/señales/Señales-y-sistemas
  - nota/facultad
referencias:
  - "873"
etapa: ampliar
vinculoFacultad:
  - tema: Señales y sistemas
    capitulo: 1
    materia: Señales y sistemas
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un [[Sistema|sistema]] es invariante en el tiempo si un desplazamiento temporal en la entrada provoca un desplazamiento temporal en la salida. 

En términos precisos: si la salida a un sistema con entrada $x(t)$ es $y(x)$ entonces, para cualquier valor $t_0 \in \mathbb{R}$, la salida a la entrada $x(t - t_0)$ es $y(t - t_0)$

## Ejemplo
---
Considerando el sistema $$ \dot{y}_1(t) + k(t) ~ y_1(t) = u_1(t) $$ y $$ \dot{y}_2(t) + k(t) ~ y_2(t) = u_1(t - \tau) $$ donde $\tau$ es una constante de corrimiento

Asumimos que $y_2(t) = y_1(t - \tau)$, entonces $$ \dot{y}_1(t - \tau) + k(t - \tau) ~ y_1(t - \tau) = u_1(t - \tau) $$
Ahora, haciendo el cambio de variables $t - \tau = \eta$, por lo tanto $$ \frac{y_1(\eta)}{d\eta} + k(t - \tau) ~ y_1(\eta) = u_1(\eta) $$
En el caso donde $k(t) = k(t - \tau)$, para cualquier $\tau$ es si este es constante, por lo tanto $$ \frac{y_1(\eta)}{d\eta} + k ~ y_1(\eta) = u_1(\eta) $$ y esta por lo tanto es invariante en el tiempo

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```