---
dia: 2026-02-28
etapa: empezado
referencias: []
aliases:
  - Cota UB
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

Para esta cota, se supone muy poco de la modulación en sí misma, y acota el error suponiendo que existe la misma probabilidad de equivocarse con cualquier otro símbolo, dándonos la cota $$ P_e \le (M - 1) ~ Q\left( \frac{d}{2\sigma} \right) $$
Esta permite saber muy poco de la modulación y como es su disposición, pero suele ser mucho más grande que el valor real. La excepción es la modulación [[ingeniería electrónica/taller de comunicaciones/Modulación digital/Frequency Shift Keying|M-FSK]] donde esta suposición es correcta
