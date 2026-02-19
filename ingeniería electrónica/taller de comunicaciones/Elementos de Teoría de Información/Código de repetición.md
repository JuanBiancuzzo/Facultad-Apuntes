---
dia: 2026-02-16
etapa: empezado
referencias: []
aliases: []
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Elementos-de-Teoría-de-Información
  - nota/facultad
vinculoFacultad:
  - tema: Elementos de Teoría de Información
    capitulo: 1
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Este esquema, copia cada [[ingeniería en informática/algo 1/Introducción a la programación/Información#Bit|bit]], que llamaremos lógicos, por $n$ bits totales. Para volver a un bit lógico, se determina por voto por mayoría de los $n$ bits, por lo que $n$ suele ser impar

Podemos calcular la [[investigación/matemática/Probabilidad/Probabilidad|probabilidad]] de error, dado una probabilidad $p$ de que un bit sea erróneo. Notemos que para que haya un error, se necesita al menos, $\left\lceil \frac{n}{2} \right\rceil$ por lo tanto $$ P_e = \sum_{i = \left\lceil \frac{n}{2} \right\rceil}^n \binom{n}{i} ~ p^i ~ (1 - p)^{n - i} $$
Por lo que al aumentar $n$, disminuye la probabilidad de error, pero al mismo tiempo, la tasa efectiva de transmisión $R = \frac{1}{n}$. Por lo que si buscamos un limite arbitrario de error, nuestra tasa de transmisión efectiva tiende a $0$



