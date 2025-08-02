---
dia: 2024-03-14
tags:
  - carrera/ingeniería-electrónica/control/Respuesta-dinámica
  - carrera/ingeniería-electrónica/señales/Señales-y-sistemas
  - nota/facultad
aliases:
  - BIBO
referencias:
  - "873"
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Se establece este criterio de estabilidad de la siguiente forma, si $\exists B_1 \in \mathbb{R}_+$ tal que $$ |x(t)| \le B_1, ~~ \forall t \in \mathbb{R} $$
Entonces $\exists B_2 \in \mathbb{R}_+$ tal que $$ |y(t)| \le B_2, ~~ \forall t \in \mathbb{R} $$ en palabras, estable si para entradas [[Conjunto acotado|acotadas]] la salida pertenece acotada

> [!demostracion]- Demostración
> Esto se puede comprobar planteando la ecuación de la [[Convolución|convolución]], dada por una entrada $x(t)$, una salida $y(t)$ y una [[Respuesta en frecuencia|respuesta al impulso]] $h$, entonces $$ y(t) = \int_{-\infty}^{\infty} h(\tau) ~ x(t - \tau) ~ d\tau $$
> 
> Si $x(t)$ es acotada, por lo tanto se puede decir $|x(t)| < M$ para todo $t \in \mathbb{R}$, y $M < \infty$ entonces la salida está acotada por $$ \begin{align}
>     |y| &= \left| \int h ~ x ~ d\tau \right| \\
>      &\le \int |h| ~ |x| ~ d\tau \\
>      &\le M \int_{-\infty}^{\infty} |h(\tau)| d\tau 
> \end{align} $$
> 
> Por lo tanto, la salida va a estar acotada para cualquier entrada acotada si $\displaystyle \int_{-\infty}^{\infty} |h(\tau)| d\tau$ está acotada

La estabilidad para [[Sistema|sistemas]] de tiempo discreto se define en forma similar


# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```