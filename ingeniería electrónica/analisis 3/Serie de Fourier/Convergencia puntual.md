---
dia: 2022-11-29
tags:
  - carrera/ingeniería-electrónica/analisis-3/Serie-de-Fourier
  - carrera/ingeniería-en-informática/analisis-3/Serie-de-Fourier
  - nota/facultad
etapa: ampliar
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa });
```
# Definición
---
Dada una [[Sucesión|sucesión]] de [[Función|funciones]] reales $\set{ f_n }_{n \in \mathbb{N}_0}$ diremos que $f_n$ converge puntualmente a una función $f$ si $$ \forall x \in \mathbb{R} \lim_{n \to \infty} f_n(x) = f(x) $$

En el caso especifico donde el conjunto de funciones de $f_n$ sea el [[Conjunto de funciones periódicas|conjunto de funciones periódicas]] $E_P$ se puede definir entonces que  $\set{f_n}_{n \in \mathbb{N}_0}$ de elementos de $E_P$ converge puntualmente a $f$ en $x_0 \in [0, ~P]$ sii $$ \lim_{n \to \infty} \left| f(x_0) - f_n(x_0) \right| = 0 $$