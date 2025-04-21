---
dia: 2025-04-21
etapa: ampliar
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/señales/Señales-y-sistemas
  - nota/facultad
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El cálculo para una [[Función continua|función continua]] $$ \overline{x} = \lim_{T \to \infty} \left\{ \frac{1}{2T} \int_{-T}^{T} x(t) ~ dt \right\} $$

El cálculo para una función discreta $$ \overline{x} = \lim_{N \to \infty} \left\{ \frac{1}{2N + 1} \sum_{n = -N}^{N} x[n] \right\} $$
## Señal periódica
---
Aprovechando el hecho que $x(t)$ es una [[Función periódica|función periódica]], y el cálculo para una función continua $$ \overline{x} = \frac{1}{T_0} \int_{T_0} x(t) ~ dt $$

El cálculo para una función discreta $$ \overline{x} = \frac{1}{N_0} \sum_{n \in N_0} x[n] $$