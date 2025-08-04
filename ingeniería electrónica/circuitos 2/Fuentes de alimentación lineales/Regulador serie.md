---
dia: 2025-03-22
etapa: ampliar
referencias:
  - "1017"
tags:
  - carrera/ingeniería-electrónica/circuitos-2/Fuentes-de-alimentación-lineales
  - nota/facultad
aliases:
  - Series regulator
  - Fuente serie
vinculoFacultad:
  - "[[ingeniería electrónica/circuitos 2/Fuentes de alimentación lineales/Resumen.md]]"
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Un tipo común de [[Regulador de tensión|regulador de tensión]] es los reguladores serie de la forma

![[Regulador de tensión.png]]

El nombre de "serie" viene del hecho que la [[Tensión|tensión]] de salida [[Variable controlada|controlada]] por un [[Transistor|transistor]] en serie con la salida

Notemos que esta configuración es [[Realimentación de un amplificador de tensión|MVSV]], donde podemos interpretar que la tensión de referencias $V_{ref}$ es el generador y el [[Divisor de tensión|divisor de tensión]] es el bloque realimentador

Podemos ver en ese caso, que la ganancia del bloque realimentador es $$ f = \frac{R_2}{R_1 + R_2} $$

# Referencias
---
```dataviewjs
	await dv.view("_scripts/dataview/referencia/referenciasArchivo", { archivo: dv.current() });
```