---
dia: 2025-04-21
etapa: ampliar
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/señales/Señales-y-sistemas
  - nota/facultad
vinculoFacultad:
  - tema: Señales y sistemas
    capitulo: 1
    materia: Señales y sistemas
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
El cálculo para una [[Función continua|función continua]] $$ P_x = \lim_{T \to \infty} \left\{ \frac{1}{2T} \int_{-T}^{T} |x(t)|^2 ~ dt \right\} $$

El cálculo para una función discreta $$ P_x = \lim_{N \to \infty} \left\{ \frac{1}{2N + 1} \sum_{n = -N}^{N} |x[n]|^2 \right\} $$
## Señal periódica
---
Aprovechando el hecho que $x(t)$ es una [[Función periódica|función periódica]], y el cálculo para una función continua $$ P_x = \frac{1}{T_0} \int_{T_0} |x(t)|^2 ~ dt $$

El cálculo para una función discreta $$ P_x = \frac{1}{N_0} \sum_{n \in N_0} |x[n]|^2 $$

