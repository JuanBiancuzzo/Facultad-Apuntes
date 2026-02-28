---
dia: 2026-02-28
etapa: empezado
referencias: []
aliases:
  - Cota de NNUB
tags:
  - carrera/ingeniería-electrónica/taller-de-comunicaciones/Modulación-digital
  - nota/facultad
vinculoFacultad:
  - tema: Modulación digital
    capitulo: 3
    materia: Taller de Comunicaciones Digitales
    carrera: Ingeniería electrónica
---
```dataviewjs
	await dv.view("_scripts/dataview/notas/etapa", { etapa: dv.current()?.etapa })
```
# Definición
---
Se define esta [[ingeniería en informática/discreta/Relaciones/Cota|cota]] en el contexto de la probabilidad de error de una [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Modulación digital|modulación digital]] de $M$ símbolos

Para esta cota se supone que existe la probabilidad de equivocarse con la cantidad promedio de vecinos de la modulación, dándonos la cota $$ P_e \le \langle N_e \rangle ~ Q\left( \frac{d}{2\sigma} \right) $$ donde $\langle N_e \rangle$ es la cantidad promedio de vecinos ponderado por sus probabilidades, dado por $$ \langle N_e \rangle = \sum_{i = 1}^{M} \mathbb{P}(s_i) ~ N_i $$ donde $N_i$ es la cantidad de vecinos que tiene el símbolo $i$-esimo 